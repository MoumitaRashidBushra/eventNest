import EventsProvider from "../components/EventsProvider";
import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Event Manager",
  description: "Mini Event Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="butterbloom">
      <body>
        <EventsProvider>
          <Header />
          <main className="container px-4 py-6">{children}</main>
        </EventsProvider>
      </body>
    </html>
  );
}
