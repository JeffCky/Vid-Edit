"use client";

import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Preview() {
  return (
    <Card className="mb-6">
      <AspectRatio ratio={16 / 9}>
        <div className="w-full h-full bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Video Preview</p>
        </div>
      </AspectRatio>
    </Card>
  );
}