export default function SlotCard({ time, booked, onBook }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md text-center transition hover:shadow-lg">
      <p className="text-lg font-medium">{time}</p>
      <p className={`mt-1 ${booked ? "text-red-500" : "text-green-600"}`}>
        {booked ? "Booked" : "Available"}
      </p>
      <button
        onClick={onBook}
        disabled={booked}
        className={`mt-3 px-4 py-2 rounded-lg text-white ${
          booked
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
        }`}
      >
        {booked ? "Unavailable" : "Book Now"}
      </button>
    </div>
  );
}

