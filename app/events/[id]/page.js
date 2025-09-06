"use client";
import { useParams, useRouter } from "next/navigation";
import { useEvents } from "../../../components/EventsProvider";

export default function EventDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { events, rsvpEvent } = useEvents();

  const event = events.find((e) => e.id === id);
  if (!event)
    return <div className="p-8 bg-white rounded-2xl">Event not found.</div>;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">{event.title}</h2>
          <p className="text-sm opacity-70">
            {event.category} • {event.location}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm">{new Date(event.date).toLocaleString()}</p>
          <p className="text-sm opacity-70">{event.attendees ?? 0} going</p>
        </div>
      </div>

      <p className="mt-4">{event.description}</p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => {
            rsvpEvent(event.id);
          }}
          className="btn btn-primary"
        >
          RSVP
        </button>
        <button onClick={() => router.back()} className="btn btn-ghost">
          Back
        </button>
      </div>
    </div>
  );
}
