"use client";
import Link from "next/link";

export default function EventCard({ event }) {
  const dateStr = new Date(event.date).toLocaleString();
  return (
    <div className="card card-compact bg-white border border-blue-400 shadow-sm rounded-2xl p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-cyan-600">{event.title}</h3>
          <p className="text-sm opacity-70">
            {event.location} • {event.category}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm line-clamp-3 pb-3 pt-2">{event.description}</p>
      <div className="mt-4 flex gap-2 justify-between">
        <Link href={`/events/${event.id}`} className="btn btn-outline  btn-sm">
          View details
        </Link>
        <div className="text-right">
          <p className="text-sm">{dateStr}</p>
          <p className="text-xs opacity-60">{event.attendees ?? 0} going</p>
        </div>
      </div>
    </div>
  );
}
