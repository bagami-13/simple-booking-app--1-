import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">Bagami Booking App</h1>
      <nav>
        <Link to="/" className="text-gray-700 hover:text-indigo-600 mx-3">Home</Link>
        <Link to="/book" className="text-gray-700 hover:text-indigo-600 mx-3">Book Slot</Link>
      </nav>
    </header>
  );
}
