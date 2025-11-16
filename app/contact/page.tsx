"use client";

import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <>
      <Navbar />
      <main className="p-8 max-w-lg mx-auto">
        <h1 className="text-3xl font-bold">Contact Us</h1>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <input
            required
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            required
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            required
            placeholder="Message"
            className="border p-3 rounded"
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />

          <button className="bg-green-600 text-white py-3 rounded">
            Send Message
          </button>
        </form>

        <p className="mt-4 text-green-700">{status}</p>
      </main>
      {/* <Footer /> */}
    </>
  );
}
