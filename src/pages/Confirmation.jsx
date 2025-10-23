import { useLocation, useNavigate } from "react-router-dom";

export default function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">
          🎉 Booking Confirmed!
        </h2>
        {booking ? (
          <div className="text-gray-700 space-y-2">
            <p><strong>Name:</strong> {booking.name}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <p><strong>Purpose:</strong> {booking.purpose}</p>
            <p><strong>Contact:</strong> {booking.contact}</p>
          </div>
        ) : (
          <p>No booking found.</p>
        )}

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Back to Home
        </button>
      </div>
    </main>
  );
}

