"use client";
import Link from "next/link";
import { FiCalendar, FiList, FiPlus } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-white shadow-md mb-6">
      <div className="container flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg  flex items-center justify-center text-white bg-cyan-500">
            <FiCalendar />
          </div>
          <div>
            <h1 className="text-lg font-semibold">EventNest</h1>
            <p className="text-sm opacity-70">cozy events for curious devs</p>
          </div>
        </Link>

        <nav className="flex gap-3 items-center">
          <Link href="/" className="btn btn-ghost">
            Home
          </Link>
          <Link href="/create-event" className="btn  bg-cyan-500 gap-2">
            <FiPlus />
            Create Event
          </Link>
          <Link href="/my-events" className="btn btn-ghost">
            <FiList /> My Events
          </Link>
        </nav>
      </div>
    </header>
  );
}
