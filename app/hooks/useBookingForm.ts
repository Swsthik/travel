"use client";

import { useState } from "react";
import { generateSearchUrl } from "@/utils/helpers"; // Import the helper from your utils folder

// Make sure you have a type definition for BookingService (e.g., "flight", "hotel", etc.)
export type BookingService = "flight" | "hotel"; // Adjust as needed

export const useBookingForm = () => {
  const [service, setService] = useState<BookingService>("flight");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = () => {
    // Check if origin and destination are the same when service is flight
    if (service === "flight" && origin === destination) {
      alert("Origin and destination cannot be the same");
      return;
    }

    const url = generateSearchUrl(service, origin, destination, startDate, endDate);
    window.open(url, "_blank");
  };

  return {
    service,
    setService,
    origin,
    setOrigin,
    destination,
    setDestination,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    handleSearch,
  };
};
