import { type BookingService, SKYSCANNER_BASE_URL } from "./constants"

export const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0]
}

export const generateSearchUrl = (
  service: BookingService,
  origin: string,
  destination: string,
  startDate: string,
  endDate: string,
): string => {
  if (service === "flight") {
    const formattedStartDate = startDate.replace(/-/g, "")
    const formattedEndDate = endDate.replace(/-/g, "")
    return `${SKYSCANNER_BASE_URL}/${origin}/${destination}/${formattedStartDate}/${formattedEndDate}/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false`
  }

  const params = new URLSearchParams({
    service,
    destination,
    startDate,
    endDate,
  })

  if (service === "flight") {
    params.append("origin", origin)
  }

  return `https://example.com?${params.toString()}`
}

