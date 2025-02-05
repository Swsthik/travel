export const formatDate = (date: Date): string => {
  return date.toISOString().split("T")[0]
}

export const generateSearchUrl = (
  service: string,
  origin: string,
  destination: string,
  startDate: string,
  endDate: string,
): string => {
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

