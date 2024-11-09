"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Video, Settings } from "lucide-react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Video className="h-6 w-6" />
          <h1 className="text-xl font-bold">Video Creator Studio</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Settings className="h-5 w-5 cursor-pointer hover:text-primary" />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}