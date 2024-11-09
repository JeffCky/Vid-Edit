"use client";

import React, { createContext, useContext, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { VoiceId } from "@/lib/openai";

interface VoiceContextType {
  isGenerating: boolean;
  isPlaying: boolean;
  voice: VoiceId;
  speed: number;
  setVoice: (voice: VoiceId) => void;
  setSpeed: (speed: number) => void;
  generateVoiceOver: (text: string) => Promise<void>;
  togglePlayback: () => void;
  currentAudio: HTMLAudioElement | null;
}

const VoiceContext = createContext<VoiceContextType | undefined>(undefined);

export function VoiceProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [voice, setVoice] = useState<VoiceId>("nova");
  const [speed, setSpeed] = useState(1);

  const generateVoiceOver = async (text: string) => {
    try {
      setIsGenerating(true);
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          voice,
          speed,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate voice");
      }

      const data = await response.json();
      const audioSrc = `data:audio/mp3;base64,${data.audio}`;
      
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.src = "";
      }
      
      const newAudio = new Audio(audioSrc);
      setCurrentAudio(newAudio);
      
      toast({
        title: "Voice generated successfully",
        description: "You can now play the audio",
      });
    } catch (error) {
      toast({
        title: "Error generating voice",
        description: "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const togglePlayback = () => {
    if (!currentAudio) return;
    
    if (isPlaying) {
      currentAudio.pause();
      setIsPlaying(false);
    } else {
      currentAudio.play();
      setIsPlaying(true);
      currentAudio.onended = () => setIsPlaying(false);
    }
  };

  return (
    <VoiceContext.Provider
      value={{
        isGenerating,
        isPlaying,
        voice,
        speed,
        setVoice,
        setSpeed,
        generateVoiceOver,
        togglePlayback,
        currentAudio,
      }}
    >
      {children}
    </VoiceContext.Provider>
  );
}

export function useVoiceContext() {
  const context = useContext(VoiceContext);
  if (context === undefined) {
    throw new Error("useVoiceContext must be used within a VoiceProvider");
  }
  return context;
}