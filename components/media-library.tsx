"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export function MediaLibrary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Media Library</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
            <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-2">
              Drag and drop video files or
            </p>
            <Button>Browse Files</Button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {/* Media items will be displayed here */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}