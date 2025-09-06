"use client";
import { useMemo, useState } from "react";
import EventCard from "./EventCard";
import { useEvents } from "./EventsProvider";
import SearchFilter from "./SearchFilter";

export default function EventList() {
  const { events } = useEvents();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");

  const categories = useMemo(
    () => Array.from(new Set(events.map((e) => e.category))).filter(Boolean),
    [events]
  );

  const filtered = useMemo(() => {
    return events.filter((e) => {
      if (query && !e.title.toLowerCase().includes(query.toLowerCase()))
        return false;
      if (category && e.category !== category) return false;
      return true;
    });
  }, [events, query, category]);

  return (
    <section>
      <SearchFilter
        onSearch={setQuery}
        onCategory={setCategory}
        categories={categories}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {filtered.length ? (
          filtered.map((ev) => <EventCard key={ev.id} event={ev} />)
        ) : (
          <div className="text-center p-8 opacity-70">No events found.</div>
        )}
      </div>
    </section>
  );
}
