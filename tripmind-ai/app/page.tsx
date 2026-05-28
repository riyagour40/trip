"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Wallet,
  Users,
  Plane,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [people, setPeople] = useState("");
  const [tripStyle, setTripStyle] = useState("Budget Friendly");
  const [tripGenerated, setTripGenerated] = useState(false);

  const generateTrip = () => {
    setTripGenerated(true);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 px-6 py-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Plane className="text-blue-400 w-10 h-10" />
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              TripMind AI
            </h1>
          </div>

          <p className="text-gray-400 text-lg">
            Smart AI Powered Travel Planner ✨
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="text-yellow-400" />
              <h2 className="text-3xl font-bold">Plan Your Dream Trip</h2>
            </div>

            <div className="space-y-6">
              {/* Destination */}
              <div>
                <label className="block mb-2 text-gray-400">
                  Destination
                </label>

                <div className="flex items-center bg-zinc-900 rounded-2xl px-4 py-4 border border-zinc-800">
                  <MapPin className="text-blue-400 mr-3" />

                  <input
                    type="text"
                    placeholder="Goa, Paris, Bali..."
                    className="bg-transparent outline-none w-full"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>

              {/* Days */}
              <div>
                <label className="block mb-2 text-gray-400">
                  Number of Days
                </label>

                <div className="flex items-center bg-zinc-900 rounded-2xl px-4 py-4 border border-zinc-800">
                  <Calendar className="text-purple-400 mr-3" />

                  <input
                    type="number"
                    placeholder="5"
                    className="bg-transparent outline-none w-full"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                  />
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block mb-2 text-gray-400">
                  Budget (₹)
                </label>

                <div className="flex items-center bg-zinc-900 rounded-2xl px-4 py-4 border border-zinc-800">
                  <Wallet className="text-green-400 mr-3" />

                  <input
                    type="number"
                    placeholder="50000"
                    className="bg-transparent outline-none w-full"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
              </div>

              {/* People */}
              <div>
                <label className="block mb-2 text-gray-400">
                  Number of People
                </label>

                <div className="flex items-center bg-zinc-900 rounded-2xl px-4 py-4 border border-zinc-800">
                  <Users className="text-yellow-400 mr-3" />

                  <input
                    type="number"
                    placeholder="2"
                    className="bg-transparent outline-none w-full"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                  />
                </div>
              </div>

              {/* Trip Style */}
              <div>
                <label className="block mb-2 text-gray-400">
                  Trip Style
                </label>

                <select
                  value={tripStyle}
                  onChange={(e) => setTripStyle(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-4 outline-none"
                >
                  <option>Budget Friendly</option>
                  <option>Average</option>
                  <option>Luxury</option>
                </select>
              </div>

              {/* Button */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={generateTrip}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-2xl font-bold text-lg shadow-lg hover:opacity-90 transition"
              >
                Generate AI Trip
              </motion.button>
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Plane className="text-blue-400" />

              <h2 className="text-3xl font-bold">
                AI Generated Trip
              </h2>
            </div>

            {!tripGenerated ? (
              <div className="h-[500px] flex items-center justify-center text-center text-gray-500 text-lg">
                Enter trip details and generate your smart travel itinerary ✨
              </div>
            ) : (
              <div className="space-y-6">
                {/* Destination */}
                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                  <h3 className="text-2xl font-bold mb-3">
                    📍 Destination
                  </h3>

                  <p className="text-gray-300 text-lg">{destination}</p>
                </div>

                {/* Hotel Suggestions */}
                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                  <h3 className="text-2xl font-bold mb-3">
                    🏨 Hotel Suggestions
                  </h3>

                  <ul className="space-y-3 text-gray-300">
                    <li>• Grand Palace Resort</li>
                    <li>• Ocean View Hotel</li>
                    <li>• Budget Comfort Inn</li>
                  </ul>
                </div>

                {/* Attraction Points */}
                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                  <h3 className="text-2xl font-bold mb-3">
                    🎯 Attraction Points
                  </h3>

                  <ul className="space-y-3 text-gray-300">
                    <li>• Beach Visit</li>
                    <li>• Historical Fort</li>
                    <li>• Mountain Sunset Point</li>
                    <li>• Local Street Food Market</li>
                    <li>• Adventure Sports</li>
                  </ul>
                </div>

                {/* Trip Details */}
                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                  <h3 className="text-2xl font-bold mb-3">
                    💰 Trip Details
                  </h3>

                  <div className="space-y-2 text-gray-300">
                    <p>
                      <span className="font-semibold text-white">
                        Budget:
                      </span>{" "}
                      ₹{budget}
                    </p>

                    <p>
                      <span className="font-semibold text-white">
                        Days:
                      </span>{" "}
                      {days}
                    </p>

                    <p>
                      <span className="font-semibold text-white">
                        Travelers:
                      </span>{" "}
                      {people}
                    </p>

                    <p>
                      <span className="font-semibold text-white">
                        Trip Style:
                      </span>{" "}
                      {tripStyle}
                    </p>
                  </div>
                </div>

                {/* Day Wise Plan */}
                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
                  <h3 className="text-2xl font-bold mb-3">
                    🗓️ Suggested Itinerary
                  </h3>

                  <div className="space-y-4 text-gray-300">
                    <div>
                      <p className="font-semibold text-white">
                        Day 1
                      </p>

                      <p>
                        Arrival, hotel check-in, local sightseeing
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        Day 2
                      </p>

                      <p>
                        Explore attractions and food markets
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        Day 3
                      </p>

                      <p>
                        Adventure activities and shopping
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
       