import { useNavigate } from "react-router-dom";
import SlotCard from "../components/SlotCard";
import { useState, useEffect } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    const defaultSlots = [
      { time: "10:00 AM - 11:00 AM", booked: false },
      { time: "11:00 AM - 12:00 PM", booked: false },
      { time: "1:00 PM - 2:00 PM", booked: false },
      { time: "3:00 PM - 4:00 PM", booked: false },
    ];
    const saved = JSON.parse(localStorage.getItem("bookings")) || [];
    const updated = defaultSlots.map((slot) => ({
      ...slot,
      booked: saved.some((b) => b.time === slot.time),
    }));
    setSlots(updated);
  }, []);

  const handleBook = (slot) => {
    navigate("/book", { state: { slot } });
  };

  return (
    <main className="p-8">
      <section className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Welcome to Bagami Booking
        </h2>
        <p className="text-gray-600">
          Choose an available slot and book your time in seconds.
        </p>
      </section>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
        {slots.map((slot, index) => (
          <SlotCard
            key={index}
            time={slot.time}
            booked={slot.booked}
            onBook={() => handleBook(slot.time)}
          />
        ))}
      </div>
    </main>
  );
}
