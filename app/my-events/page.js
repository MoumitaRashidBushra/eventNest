"use client";
import EventCard from "../../components/EventCard";
import { useEvents } from "../../components/EventsProvider";

export default function MyEventsPage() {
  const { events, deleteEvent } = useEvents();
  const my = events.filter((e) => e.isLocal);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Events</h2>
      {my.length === 0 ? (
        <div className="p-6 bg-white rounded-2xl shadow-sm">
          You havent created any events yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {my.map((ev) => (
            <div key={ev.id} className="relative">
              <EventCard event={ev} />
              <div className="absolute top-3 right-3 flex gap-2">
                <button
                  onClick={() => deleteEvent(ev.id)}
                  className="btn btn-sm btn-error"
                >
                  Delete
                </button>
                {/* Edit button could open a modal or navigate to edit page (bonus) */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
