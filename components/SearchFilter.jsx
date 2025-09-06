"use client";
import { useState } from "react";

export default function SearchFilter({ onSearch, onCategory, categories }) {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("");

  function handleSearch(e) {
    setQ(e.target.value);
    onSearch(e.target.value);
  }
  function handleCat(e) {
    setCat(e.target.value);
    onCategory(e.target.value);
  }

  return (
    <div className="flex flex-col md:flex-row gap-3 items-start md:items-center justify-between mb-10">
      <input
        value={q}
        onChange={handleSearch}
        placeholder="Search by title..."
        className="input input-bordered w-full md:w-1/2"
      />
      <select
        value={cat}
        onChange={handleCat}
        className="select select-bordered w-full md:w-1/3"
      >
        <option value="">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}
