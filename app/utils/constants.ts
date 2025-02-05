// app/utils/constants.ts

export const SERVICES = ["flight", "hotel", "car"] as const;

// You can customize the colors based on your CSS framework or styles.
// For example, using Tailwind CSS classes:
export const SERVICE_COLORS: { [key in typeof SERVICES[number]]: string } = {
  flight: "bg-blue-500",
  hotel: "bg-green-500",
  car: "bg-red-500",
};


export const SKYSCANNER_BASE_URL = "https://www.skyscanner.co.in/transport/flights"

