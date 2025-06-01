"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

export default function AppointmentForm() {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    time: "",
  });
  const [errors, setErrors] = useState<
    Partial<typeof formData & { date: string }>
  >({});
  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.contact.trim())
      newErrors.contact = "Contact number is required";
    else if (!/^\d{10}$/.test(formData.contact.trim()))
      newErrors.contact = "Enter a valid 10-digit contact number";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      newErrors.email = "Enter a valid email address";
    if (!date) newErrors.date = "Appointment date is required";
    if (!formData.time) newErrors.time = "Appointment time is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("Appointment Data:", {
      ...formData,
      date: date ? format(date, "PPP") : null,
    });
    // Handle form submission here
  };

  return (
    <div className="">
      <div className="">
        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-sm font-medium text-gray-700"
            >
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              error={errors.name}
              className="w-full text-sm"
            />
          </div>

          {/* Contact Number Field */}
          <div className="space-y-2">
            <Label
              htmlFor="contact"
              className="text-sm font-medium text-gray-700"
            >
              Contact Number *
            </Label>
            <Input
              id="contact"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.contact}
              onChange={(e) => handleInputChange("contact", e.target.value)}
              error={errors.contact}
              className="w-full text-sm"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address *
            </Label>
            <Input
              id="email"
              type="text"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              error={errors.email}
              className="w-full text-sm"
            />
          </div>

          {/* Date and Time Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date Field */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Appointment Date *
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal text-sm",
                      !date && "text-muted-foreground",
                      errors.date && !date && "border-red-400"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) =>
                      date < new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Field */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Appointment Time *
              </Label>
              <Select
                value={formData.time}
                onValueChange={(value) => handleInputChange("time", value)}
              >
                <SelectTrigger
                  className={twMerge(
                    "w-full",
                    errors?.time && "border-red-400"
                  )}
                >
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <SelectValue placeholder="Select time" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Comments Field */}
          {/* <div className="space-y-2">
            <Label
              htmlFor="comments"
              className="text-sm font-medium text-gray-700"
            >
              Additional Comments
              <span className="text-gray-400 text-xs ml-1">(Optional)</span>
            </Label>
            <Textarea
              id="comments"
              placeholder="Any specific concerns or additional information..."
              value={formData.comments}
              onChange={(e) => handleInputChange("comments", e.target.value)}
              className="w-full min-h-[100px] resize-none"
            />
          </div> */}

          {/* Submit Button */}
          <div className="">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium !py-5.5 px-4 rounded-md transition-colors"
            >
              Book Appointment
            </Button>
          </div>
        </form>
        {/* Form Note */}
        <div className="flex flex-col text-center text-xs md:text-sm text-gray-500 pt-4 pb-4">
          <p>* Required fields</p>
          <p>
            You will receive a confirmation email once your appointment is
            scheduled.
          </p>
        </div>
      </div>
    </div>
  );
}
