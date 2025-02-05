// app/components/BookingForm/index.tsx
"use client";
import React from "react";
import { useBookingForm } from "@/hooks/useBookingForm"; // Using absolute import based on tsconfig paths
import locations from "../../../data/locations.json";
import { SERVICES, SERVICE_COLORS } from "../../utils/constants"; // Updated import for constants
import styles from "./styles.module.css";

export const BookingForm: React.FC = () => {
  const {
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
  } = useBookingForm();

  // Compute a flag for when flight origin and destination are the same (and not empty)
  const isOriginSameAsDestination =
    service === "flight" && origin !== "" && origin === destination;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isOriginSameAsDestination) {
      alert("Origin and destination cannot be the same");
      return;
    }
    handleSearch();
  };

  return (
    <div className={styles.bookingForm}>
      <div className={styles.serviceButtons}>
        {SERVICES.map((s) => (
          <button
            key={s}
            className={`${styles.serviceButton} ${
              service === s ? SERVICE_COLORS[s] : "bg-gray-200"
            }`}
            onClick={() => setService(s)}
          >
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className={styles.form}>
        {service === "flight" && (
          <div className={styles.formGroup}>
            <label htmlFor="origin">Origin</label>
            <select
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            >
              <option value="">Select origin</option>
              {locations.locations.map((location: string) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className={styles.formGroup}>
          <label htmlFor="destination">Destination</label>
          <select
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          >
            <option value="">Select destination</option>
            {locations.locations.map((location: string) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.dateInputs}>
          <div className={styles.formGroup}>
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
