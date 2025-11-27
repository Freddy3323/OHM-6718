# Defect Knowledge Base CMS - Implementation Guide

## ✅ COMPLETED

### 1. Environment Variables
- Added `TWILIO_NUMBER` and `MATT_NUMBER` to `.env.example`
- Updated `worker-configuration.d.ts` with new environment variables

### 2. Database Schema
- Created comprehensive `defects` table with all required fields:
  - Core fields: id, code, title, element, system, locationType
  - Reference fields: nccReference, standardReference, stateApplicability, sourceDocument
  - Description fields: summaryForBuyer, technicalDescription, possibleConsequences, recommendedRectification
  - Classification: urgency, riskCategory
  - AI fields: aiTags, exampleImageUrls, aiConfidenceThreshold
  - Audit fields: createdBy, updatedBy, createdAt, updatedAt, version
- Created `defectImages` table for managing defect images
- Updated `inspectionDefects` table to reference new `defects` table
- Generated and applied migrations (0003_loose_titania.sql)

### 3. Backend API Routes  
Created `/worker/routes/defect-routes.ts` with:
- **Public Endpoints:**
  - `GET /api/defects` - List defects with filtering (element, risk_category, state, ai_tag, search)
  - `GET /api/defects/:id` - Get single defect with images
  - `GET /api/defects/search/ai` - AI-specific search by tags
  
- **Admin Endpoints:**
  - `GET /api/admin/defects` - Admin list with advanced filtering and sorting
  - `POST /api/admin/defects` - Create new defect
  - `PUT /api/admin/defects/:id` - Update defect (with version increment)
  - `DELETE /api/admin/defects/:id` - Delete single defect
  - `POST /api/admin/defects/bulk-delete` - Delete multiple defects
  - `GET /api/admin/defects/export/json` - Export all as JSON
  - `GET /api/admin/defects/export/csv` - Export all as CSV
  - `POST /api/admin/defects/import/csv` - Import/update from CSV

All admin routes are protected with `requireAdmin` middleware.

## 🔨 REMAINING TASKS

### 4. Frontend - Admin CMS Pages

#### A. Defect List Page (`src/pages/admin/defects.tsx`)
Create data table with:
- Columns: code, title, element, urgency, risk_category, created_at
- Filters: element dropdown, urgency dropdown, risk_category dropdown, state multi-select, search input
- Sort by any column
- Actions: Edit, Delete, Bulk Delete
- "Add New Defect" button
- "Export CSV", "Export JSON", "Import CSV" buttons
- Pagination (50 per page)

```tsx
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableRow, 
  TableHead, 
  TableCell 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import { Plus, Download, Upload, Trash } from "lucide-react";

export default function DefectsPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [element, setElement] = useState<string>("");
  const [urgency, setUrgency] = useState<string>("");
  const [riskCategory, setRiskCategory] = useState<string>("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["admin-defects", search, element, urgency, riskCategory],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (element) params.append("element", element);
      if (urgency) params.append("urgency", urgency);
      if (riskCategory) params.append("risk_category", riskCategory);
      
      const res = await apiClient.api.admin.defects.$get({ query: params });
      return await res.json();
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      await apiClient.api.admin.defects[":id"].$delete({ param: { id } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-defects"] });
    },
  });

  const bulkDeleteMutation = useMutation({
    mutationFn: async (ids: string[]) => {
      await apiClient.api.admin.defects["bulk-delete"].$post({ json: { ids } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-defects"] });
      setSelectedIds([]);
    },
  });

  // Export handlers
  const handleExportJSON = () => {
    window.location.href = "/api/admin/defects/export/json";
  };

  const handleExportCSV = () => {
    window.location.href = "/api/admin/defects/export/csv";
  };

  // Import handler
  const handleImportCSV = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/admin/defects/import/csv", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    alert(`Imported: ${result.imported}, Errors: ${result.errors}`);
    queryClient.invalidateQueries({ queryKey: ["admin-defects"] });
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Defect Knowledge Base</h1>
        <div className="flex gap-2">
          <Button onClick={() => navigate("/admin/defects/new")}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Defect
          </Button>
          <Button variant="outline" onClick={handleExportJSON}>
            <Download className="mr-2 h-4 w-4" />
            Export JSON
          </Button>
          <Button variant="outline" onClick={handleExportCSV}>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="outline" asChild>
            <label>
              <Upload className="mr-2 h-4 w-4" />
              Import CSV
              <input
                type="file"
                accept=".csv"
                className="hidden"
                onChange={handleImportCSV}
              />
            </label>
          </Button>
          {selectedIds.length > 0 && (
            <Button
              variant="destructive"
              onClick={() => bulkDeleteMutation.mutate(selectedIds)}
            >
              <Trash className="mr-2 h-4 w-4" />
              Delete Selected ({selectedIds.length})
            </Button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Search by title, code, or tags..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
        <Select value={element} onValueChange={setElement}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Element" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Elements</SelectItem>
            <SelectItem value="waterproofing">Waterproofing</SelectItem>
            <SelectItem value="fire_safety">Fire Safety</SelectItem>
            <SelectItem value="structure">Structure</SelectItem>
            <SelectItem value="building_enclosure">Building Enclosure</SelectItem>
            <SelectItem value="services">Services</SelectItem>
          </SelectContent>
        </Select>
        <Select value={urgency} onValueChange={setUrgency}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Urgency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="immediate">Immediate</SelectItem>
            <SelectItem value="urgent">Urgent</SelectItem>
            <SelectItem value="moderate">Moderate</SelectItem>
            <SelectItem value="low">Low</SelectItem>
            <SelectItem value="cosmetic">Cosmetic</SelectItem>
          </SelectContent>
        </Select>
        <Select value={riskCategory} onValueChange={setRiskCategory}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Risk Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="safety">Safety</SelectItem>
            <SelectItem value="major">Major</SelectItem>
            <SelectItem value="minor">Minor</SelectItem>
            <SelectItem value="compliance">Compliance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={selectedIds.length === data?.defects?.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedIds(data?.defects?.map((d) => d.id) || []);
                    } else {
                      setSelectedIds([]);
                    }
                  }}
                />
              </TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Element</TableHead>
              <TableHead>Urgency</TableHead>
              <TableHead>Risk</TableHead>
              <TableHead>Version</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={8} className="text-center">
                  Loading...
                </TableCell>
              </TableRow>
            )}
            {data?.defects?.map((defect: any) => (
              <TableRow key={defect.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedIds.includes(defect.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedIds([...selectedIds, defect.id]);
                      } else {
                        setSelectedIds(selectedIds.filter((id) => id !== defect.id));
                      }
                    }}
                  />
                </TableCell>
                <TableCell className="font-mono text-sm">{defect.code}</TableCell>
                <TableCell>{defect.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{defect.element}</Badge>
                </TableCell>
                <TableCell>
                  <Badge>{defect.urgency || "N/A"}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">{defect.riskCategory || "N/A"}</Badge>
                </TableCell>
                <TableCell>v{defect.version}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate(`/admin/defects/${defect.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      if (confirm("Delete this defect?")) {
                        deleteMutation.mutate(defect.id);
                      }
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
```

#### B. Defect Form Page (`src/pages/admin/defect-form.tsx`)
Create/Edit form with:
- All fields from schema
- Rich text editors for description fields (use @tiptap/react)
- Tag input for aiTags and stateApplicability
- Image upload section
- Auto-generate code if empty
- Save/Cancel buttons
- Version display

```tsx
// Install: bun add @tiptap/react @tiptap/starter-kit @tiptap/extension-placeholder
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { apiClient } from "@/lib/api-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

// Rich text editor component
function RichTextEditor({ value, onChange, placeholder }: any) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border rounded-md p-2 min-h-[150px]">
      <EditorContent editor={editor} />
    </div>
  );
}

export default function DefectFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isEdit = !!id;

  const { data: defect } = useQuery({
    queryKey: ["defect", id],
    queryFn: async () => {
      if (!id) return null;
      const res = await apiClient.api.admin.defects[":id"].$get({ param: { id } });
      return await res.json();
    },
    enabled: isEdit,
  });

  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: defect || {},
  });

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      if (isEdit) {
        return await apiClient.api.admin.defects[":id"].$put({
          param: { id: id! },
          json: data,
        });
      } else {
        // Auto-generate code if empty
        if (!data.code) {
          const timestamp = Date.now();
          data.code = `DEF-${timestamp}`;
        }
        return await apiClient.api.admin.defects.$post({ json: data });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-defects"] });
      navigate("/admin/defects");
    },
  });

  const onSubmit = (data: any) => {
    saveMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{isEdit ? "Edit Defect" : "New Defect"}</h1>
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={() => navigate("/admin/defects")}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Code</Label>
                <Input {...register("code")} placeholder="DEF-2025-0001" />
                <p className="text-sm text-muted-foreground">Leave empty to auto-generate</p>
              </div>
              <div>
                <Label>Title *</Label>
                <Input {...register("title")} required />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Element *</Label>
                <Select onValueChange={(val) => setValue("element", val)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="waterproofing">Waterproofing</SelectItem>
                    <SelectItem value="fire_safety">Fire Safety</SelectItem>
                    <SelectItem value="structure">Structure</SelectItem>
                    <SelectItem value="building_enclosure">Building Enclosure</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>System</Label>
                <Input {...register("system")} placeholder="e.g., External wall cladding" />
              </div>
              <div>
                <Label>Location Type</Label>
                <Input {...register("locationType")} placeholder="e.g., Balcony, Bathroom" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label>Urgency</Label>
                <Select onValueChange={(val) => setValue("urgency", val)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Immediate</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="cosmetic">Cosmetic</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Risk Category</Label>
                <Select onValueChange={(val) => setValue("riskCategory", val)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="safety">Safety</SelectItem>
                    <SelectItem value="major">Major</SelectItem>
                    <SelectItem value="minor">Minor</SelectItem>
                    <SelectItem value="compliance">Compliance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>References</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>NCC Reference</Label>
              <Input {...register("nccReference")} placeholder="NCC 2022 Volume 2 Part 3.8.1" />
            </div>
            <div>
              <Label>Standard Reference</Label>
              <Input {...register("standardReference")} placeholder="AS 3740:2021" />
            </div>
            <div>
              <Label>Source Document</Label>
              <Input {...register("sourceDocument")} placeholder="NSW Building Defects Library v1.1" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Descriptions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Summary for Buyer</Label>
              <RichTextEditor
                value={watch("summaryForBuyer")}
                onChange={(val: string) => setValue("summaryForBuyer", val)}
                placeholder="Plain language explanation for property buyers"
              />
            </div>
            <div>
              <Label>Technical Description</Label>
              <RichTextEditor
                value={watch("technicalDescription")}
                onChange={(val: string) => setValue("technicalDescription", val)}
                placeholder="Detailed technical description for professionals"
              />
            </div>
            <div>
              <Label>Possible Consequences</Label>
              <RichTextEditor
                value={watch("possibleConsequences")}
                onChange={(val: string) => setValue("possibleConsequences", val)}
                placeholder="What could happen if not fixed"
              />
            </div>
            <div>
              <Label>Recommended Rectification</Label>
              <RichTextEditor
                value={watch("recommendedRectification")}
                onChange={(val: string) => setValue("recommendedRectification", val)}
                placeholder="How to fix it properly"
              />
            </div>
          </CardContent>
        </Card>

        {/* Add AI Tags, State Applicability, and Image Upload sections here */}
      </div>
    </form>
  );
}
```

### 5. Image Upload with Cloudflare R2

Add R2 bucket binding to `wrangler.jsonc`:
```json
{
  "r2_buckets": [
    {
      "binding": "DEFECT_IMAGES",
      "bucket_name": "openhomemate-defect-images"
    }
  ]
}
```

Create image upload route in `worker/routes/upload-routes.ts`:
```typescript
import { Hono } from "hono";
import { requireAdmin } from "../middleware/auth";
import type { HonoContext } from "../types";

export const uploadRoutes = new Hono<HonoContext>()
  .use("*", requireAdmin)
  .post("/api/admin/upload/defect-image", async (c) => {
    const bucket = c.env.DEFECT_IMAGES;
    const formData = await c.req.parseBody();
    const file = formData.file as File;

    if (!file) {
      return c.json({ error: "No file provided" }, 400);
    }

    const filename = `${crypto.randomUUID()}-${file.name}`;
    const arrayBuffer = await file.arrayBuffer();
    
    await bucket.put(filename, arrayBuffer, {
      httpMetadata: {
        contentType: file.type,
      },
    });

    const url = `/defect-images/${filename}`;
    return c.json({ url });
  });
```

### 6. Twilio SMS Forwarding

Update SMS routes in `worker/routes/sms-routes.ts`:
```typescript
// Add to existing sms-routes.ts
.post("/api/sms/forward-to-matt", async (c) => {
  const twilioAccountSid = c.env.TWILIO_ACCOUNT_SID;
  const twilioAuthToken = c.env.TWILIO_AUTH_TOKEN;
  const twilioNumber = c.env.TWILIO_NUMBER;
  const mattNumber = c.env.MATT_NUMBER;

  const { from, body } = await c.req.json();

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(`${twilioAccountSid}:${twilioAuthToken}`)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        From: twilioNumber,
        To: mattNumber,
        Body: `[FORWARDED from ${from}]: ${body}`,
      }),
    }
  );

  return c.json({ success: response.ok });
})
.post("/api/sms/send-booking-notification", async (c) => {
  const { clientName, propertyAddress, date, propertyType } = await c.req.json();
  const mattNumber = c.env.MATT_NUMBER;
  
  const message = `New booking: ${clientName} for ${propertyAddress} on ${date}. Property type: ${propertyType}`;
  
  // Send SMS to Matt
  // ... implement Twilio send logic
  
  return c.json({ success: true });
});
```

### 7. Seed Database with Defect Data

Create seeder script `worker/routes/seed-defects.ts`:
```typescript
// Based on /home/user/research/defects-knowledge-base.md
// Extract top 50 defects and insert them
```

### 8. Register Routes in Frontend

Add to `src/app.tsx`:
```tsx
<Route path="/admin/defects" element={<DefectsPage />} />
<Route path="/admin/defects/new" element={<DefectFormPage />} />
<Route path="/admin/defects/:id" element={<DefectFormPage />} />
```

### 9. Install Missing Dependencies

```bash
bun add @tiptap/react @tiptap/starter-kit @tiptap/extension-placeholder
```

### 10. Run Diagnostics

```bash
bun run website_diagnostic /home/user/websites/openhomemate
```

## TESTING CHECKLIST

1. ✅ Database migrations applied
2. ⏳ Admin can access /admin/defects
3. ⏳ Can create new defect with all fields
4. ⏳ Can edit existing defect
5. ⏳ Can delete defect
6. ⏳ Can bulk delete defects
7. ⏳ Can filter and search defects
8. ⏳ Can export as CSV/JSON
9. ⏳ Can import from CSV
10. ⏳ Public API returns defects correctly
11. ⏳ AI search endpoint works
12. ⏳ Image upload works
13. ⏳ SMS forwarding works
14. ⏳ Permissions block non-admin users

## DEPLOYMENT NOTES

1. Set environment variables in Cloudflare dashboard
2. Create R2 bucket: `wrangler r2 bucket create openhomemate-defect-images`
3. Run migrations on production: `bun wrangler d1 migrations apply testing --remote`
4. Deploy: `bun run deploy`
