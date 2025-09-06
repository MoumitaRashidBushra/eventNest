// /app/api/events/route.js
import { NextResponse } from "next/server";
import EVENTS from "../../../data/events";

export async function GET() {
  // simple API returning the hard-coded list
  return NextResponse.json(EVENTS);
}
