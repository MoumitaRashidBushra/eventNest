import EventList from "../components/EventList";

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Upcoming Events</h2>
      <EventList />
    </div>
  );
}
