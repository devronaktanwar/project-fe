import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function combineDateAndTime(date: Date, time: string): Date | null {
  if (!date || !time) return null;

  const [timeStr, modifier] = time.split(" "); // e.g., ["02:30", "PM"]
  let [hours, minutes] = timeStr.split(":").map(Number);

  if (modifier === "PM" && hours < 12) hours += 12;
  if (modifier === "AM" && hours === 12) hours = 0;

  const combined = new Date(date);
  combined.setHours(hours, minutes, 0, 0);
  return combined;
}
