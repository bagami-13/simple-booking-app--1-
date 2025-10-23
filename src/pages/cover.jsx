import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CalendarDays } from "lucide-react"; // animated icon

export default function Cover() {
  const navigate = useNavigate();

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center overflow-hidden">
      {/* Animated Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-6 bg-white/20 p-6 rounded-full shadow-xl"
      >
        <CalendarDays size={64} className="text-white" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4 drop-shadow-lg"
      >
        Bagami Booking App
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-lg mb-10 max-w-md text-white/90"
      >
        Effortlessly book your time slots with a clean and simple interface.
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/home")}
        className="bg-white text-indigo-600 font-semibold px-10 py-3 rounded-full shadow-lg hover:bg-indigo-100 transition"
      >
        Get Started
      </motion.button>

      {/* Floating Background Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4, y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-64 h-64 bg-white/10 rounded-full blur-3xl top-20 left-10"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute w-72 h-72 bg-purple-300/20 rounded-full blur-3xl bottom-10 right-10"
      ></motion.div>
    </main>
  );
}
