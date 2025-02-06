import { BookingForm } from "./components/BookingForm"
import { LiveWallpaper } from "./components/LiveWallpaper"

export default function Home() {
  return (
    <div className="min-h-screen py-12 relative">
      <LiveWallpaper />
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">Travel Booking</h1>
        <BookingForm />
      </div>
    </div>
  )
}

