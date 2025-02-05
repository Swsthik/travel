import { useState } from "react"
import { generateSearchUrl } from "../utils/helpers"

type BookingService = "flight" | "car" | "hotel"

export const useBookingForm = () => {
  const [service, setService] = useState<BookingService>("flight")
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handleSearch = () => {
    const url = generateSearchUrl(service, origin, destination, startDate, endDate)
    window.location.href = url
  }

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
  }
}

