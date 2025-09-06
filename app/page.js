import EventList from "../components/EventList";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <EventList />
    </div>
  );
}
