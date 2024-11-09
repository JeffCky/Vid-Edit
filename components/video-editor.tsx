"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScriptEditor } from "@/components/script-editor";
import { MediaLibrary } from "@/components/media-library";
import { Timeline } from "@/components/timeline";
import { VoiceOver } from "@/components/voice-over";
import { Preview } from "@/components/preview";

export function VideoEditor() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Preview />
        <Timeline />
      </div>
      <div className="space-y-6">
        <Tabs defaultValue="script" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="script">Script</TabsTrigger>
            <TabsTrigger value="media">Media</TabsTrigger>
            <TabsTrigger value="voice">Voice</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
          </TabsList>
          <TabsContent value="script">
            <ScriptEditor />
          </TabsContent>
          <TabsContent value="media">
            <MediaLibrary />
          </TabsContent>
          <TabsContent value="voice">
            <VoiceOver />
          </TabsContent>
          <TabsContent value="music">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-semibold mb-4">Background Music</h3>
              {/* Music selection component will be implemented here */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}