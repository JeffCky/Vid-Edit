export type VoiceId = "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";

interface VoiceOption {
  id: VoiceId;
  name: string;
  gender: string;
  description: string;
}

export const VOICE_OPTIONS: VoiceOption[] = [
  {
    id: "alloy",
    name: "Alloy",
    gender: "Neutral",
    description: "Versatile, general-purpose voice",
  },
  {
    id: "echo",
    name: "Echo",
    gender: "Male",
    description: "Deep and well-rounded male voice",
  },
  {
    id: "fable",
    name: "Fable",
    gender: "Male",
    description: "British-accented male voice",
  },
  {
    id: "onyx",
    name: "Onyx",
    gender: "Male",
    description: "Deep and authoritative male voice",
  },
  {
    id: "nova",
    name: "Nova",
    gender: "Female",
    description: "Refined and professional female voice",
  },
  {
    id: "shimmer",
    name: "Shimmer",
    gender: "Female",
    description: "Clear and expressive female voice",
  },
];