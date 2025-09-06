"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEvents } from "./EventsProvider";

export default function CreateEventForm() {
  const { addEvent } = useEvents();
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    category: "",
  });
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.title) e.title = "Title is required";
    if (!form.date) e.date = "Date is required";
    if (!form.category) e.category = "Category is required";
    if (!form.location) e.location = "Location required";
    return e;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function onSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    addEvent(form);
    router.push("/my-events");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white p-6 rounded-2xl shadow-sm space-y-4"
    >
      <div>
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="input input-bordered w-full"
        />
        {errors.title && (
          <p className="text-sm text-error mt-1">{errors.title}</p>
        )}
      </div>

      <div>
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <label className="label">
            <span className="label-text">Date & time</span>
          </label>
          <input
            type="datetime-local"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          {errors.date && (
            <p className="text-sm text-error mt-1">{errors.date}</p>
          )}
        </div>
        <div>
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
          {errors.location && (
            <p className="text-sm text-error mt-1">{errors.location}</p>
          )}
        </div>
        <div>
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Select</option>
            <option>Conference</option>
            <option>Workshop</option>
            <option>Meetup</option>
            <option>Webinar</option>
          </select>
          {errors.category && (
            <p className="text-sm text-error mt-1">{errors.category}</p>
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button type="submit" className="btn btn-primary">
          Create Event
        </button>
      </div>
    </form>
  );
}
