import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function BookSlot() {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedSlot = location.state?.slot || "";

  const [form, setForm] = useState({
    name: "",
    contact: "",
    purpose: "",
    time: selectedSlot,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(form);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    navigate("/confirm", { state: { booking: form } });
  };

  return (
    <main className="flex justify-center items-center min-h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-indigo-600 mb-6 text-center">
          Book Your Slot
        </h2>

        <div className="space-y-4">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <input
            name="contact"
            placeholder="Contact Info"
            value={form.contact}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <input
            name="purpose"
            placeholder="Purpose"
            value={form.purpose}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
          <input
            name="time"
            placeholder="Time Slot"
            value={form.time}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition"
        >
          Confirm Booking
        </button>
      </form>
    </main>
  );
}
