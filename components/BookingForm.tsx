import { useBookingForm } from "../hooks/useBookingForm"
import locations from "../data/locations.json"

export const BookingForm = () => {
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
  } = useBookingForm()

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between mb-6">
        <button
          className={`px-4 py-2 rounded-md ${service === "flight" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setService("flight")}
        >
          Flight
        </button>
        <button
          className={`px-4 py-2 rounded-md ${service === "car" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setService("car")}
        >
          Car
        </button>
        <button
          className={`px-4 py-2 rounded-md ${service === "hotel" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setService("hotel")}
        >
          Hotel
        </button>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSearch()
        }}
        className="space-y-4"
      >
        {service === "flight" && (
          <div>
            <label htmlFor="origin" className="block mb-1">
              Origin
            </label>
            <select
              id="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            >
              <option value="">Select origin</option>
              {locations.locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="destination" className="block mb-1">
            Destination
          </label>
          <select
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select destination</option>
            {locations.locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="startDate" className="block mb-1">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="endDate" className="block mb-1">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  )
}

