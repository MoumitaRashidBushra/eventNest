// components/EventsProvider.jsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const EventsContext = createContext();

export function useEvents() {
  return useContext(EventsContext);
}

export default function EventsProvider({ children }) {
  const [events, setEvents] = useState([]);
  const LOCAL_KEY = "my_events";
  const OVERRIDES_KEY = "event_overrides";

  useEffect(() => {
    // load API events + local events + overrides
    async function load() {
      try {
        const res = await fetch("/api/events");
        const apiEvents = await res.json();
        const local = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
        const overrides = JSON.parse(
          localStorage.getItem(OVERRIDES_KEY) || "{}"
        );

        // apply overrides onto API events (e.g., changed 'attendees')
        const mergedApi = apiEvents.map((e) => ({
          ...e,
          ...(overrides[e.id] || {}),
        }));
        // local events were created by the user; mark them with isLocal
        const localMarked = local.map((e) => ({ ...e, isLocal: true }));

        setEvents(
          [...localMarked, ...mergedApi].sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          )
        );
      } catch (err) {
        console.error("Failed to load events", err);
      }
    }
    load();
  }, []);

  // helper to persist local events
  const persistLocal = (arr) =>
    localStorage.setItem(LOCAL_KEY, JSON.stringify(arr));
  const persistOverrides = (obj) =>
    localStorage.setItem(OVERRIDES_KEY, JSON.stringify(obj));

  const addEvent = (payload) => {
    const newEvent = {
      ...payload,
      id: "local-" + Date.now(),
      attendees: payload.attendees || 0,
      isLocal: true,
    };
    const local = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
    local.unshift(newEvent);
    persistLocal(local);
    setEvents((prev) => [newEvent, ...prev]);
  };

  const deleteEvent = (id) => {
    // delete only from local events
    let local = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
    local = local.filter((e) => e.id !== id);
    persistLocal(local);
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  const rsvpEvent = (id) => {
    setEvents((prev) => {
      const next = prev.map((e) =>
        e.id === id ? { ...e, attendees: (e.attendees || 0) + 1 } : e
      );
      // store override for any event (API or local)
      const overrides = JSON.parse(localStorage.getItem(OVERRIDES_KEY) || "{}");
      const updated = next.find((x) => x.id === id);
      overrides[id] = { attendees: updated.attendees };
      persistOverrides(overrides);
      return next;
    });
  };

  const updateEvent = (id, updates) => {
    setEvents((prev) => {
      const next = prev.map((e) => (e.id === id ? { ...e, ...updates } : e));
      // if it's a local event persist in local
      const local = JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]").map(
        (e) => (e.id === id ? { ...e, ...updates } : e)
      );
      persistLocal(local);
      return next;
    });
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
        addEvent,
        deleteEvent,
        rsvpEvent,
        updateEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}
