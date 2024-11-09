"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useVoiceContext } from "@/context/voice-context";

export function ScriptEditor() {
  const [script, setScript] = useState("");
  const { generateVoiceOver } = useVoiceContext();

  const handleGenerateVoice = async () => {
    if (!script.trim()) return;
    await generateVoiceOver(script);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Script Editor</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Enter your video script here..."
          className="min-h-[200px] mb-4"
          value={script}
          onChange={(e) => setScript(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <Button 
            variant="outline"
            onClick={() => setScript("")}
          >
            Clear
          </Button>
          <Button
            onClick={handleGenerateVoice}
            disabled={!script.trim()}
          >
            Generate Voice
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}