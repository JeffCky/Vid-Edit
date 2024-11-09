"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Loader2, Play, Square } from "lucide-react";
import { VOICE_OPTIONS } from "@/lib/openai";
import { useVoiceContext } from "@/context/voice-context";

export function VoiceOver() {
  const {
    isGenerating,
    isPlaying,
    voice,
    speed,
    setVoice,
    setSpeed,
    currentAudio,
    togglePlayback,
  } = useVoiceContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Voice Over Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Voice</Label>
          <Select value={voice} onValueChange={setVoice}>
            <SelectTrigger>
              <SelectValue placeholder="Select voice" />
            </SelectTrigger>
            <SelectContent>
              {VOICE_OPTIONS.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.name} ({option.gender})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Speed ({speed}x)</Label>
          <Slider
            value={[speed]}
            onValueChange={([value]) => setSpeed(value)}
            max={2}
            min={0.5}
            step={0.1}
            className="w-full"
          />
        </div>

        <div className="flex items-center justify-between">
          {isGenerating && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating voice...
            </div>
          )}
          
          {currentAudio && (
            <Button
              variant="outline"
              size="icon"
              onClick={togglePlayback}
              disabled={isGenerating}
            >
              {isPlaying ? (
                <Square className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}