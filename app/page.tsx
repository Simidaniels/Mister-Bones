"use client";

import { useEffect, useState, FormEvent } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Contact Form State
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  // Submit Handler
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

  // AOS Animation Init
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="page-content">

        {/* HERO SECTION */}
        <section>
          <div className="hero-section">
            
            <div className="hero-text" data-aos="fade-right">
              <h1>Adopt a Pet - Find Your New Best Friend</h1>
              <p>
                Adopting a pet is one of the most rewarding decisions you can make. 
                You’re not just bringing home an animal — you’re giving a loving companion 
                a second chance at life. Every pet in our care has its own story, personality, 
                and endless love to share.
              </p>

              <Link href="#pets" className="cta-button">
                View Pets
              </Link>
            </div>

            <div className="hero-image" data-aos="fade-left">
              <Image
                src="/images/bre.png"
                alt="Happy pets"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <div className="page-about-contact">
        <section id="about" data-aos="fade-up">
          <h2>About Us</h2>
          <p>
            At Paws & Pets, we believe every pet deserves love, comfort, and a happy life. 
            Our store was built to create a space where pet lovers can find healthy pets, 
            trusted supplies, and reliable support.
          </p>
        </section>

        {/* CONTACT SECTION (Added Here!) */}
        <section id="contact" data-aos="fade-up">
          <h2>Contact Us</h2>
          <p>Have a question? Send us a message and we’ll get back to you.</p>

          <form onSubmit={handleSubmit} className="contact-form">
            <input
              required
              type="text"
              placeholder="Your Name"
              className="contact-input"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              required
              type="email"
              placeholder="Your Email"
              className="contact-input"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <textarea
              required
              placeholder="Message"
              className="contact-textarea"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button className="contact-button">Send Message</button>
          </form>

          <p className="contact-status">{status}</p>
        </section>
        </div>

        {/* SERVICES SECTION */}
        <section id="pets">
          <h2 data-aos="fade-up">Our Services</h2>

          <div className="services-grid">
            <div className="service-card" data-aos="zoom-in">
              <h3>Healthy Pets</h3>
              <p>We connect families with well-cared-for pets ready for loving homes.</p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="150">
              <h3>Pet Supplies</h3>
              <p>Food, toys, grooming essentials — everything your pet needs.</p>
            </div>

            <div className="service-card" data-aos="zoom-in" data-aos-delay="300">
              <h3>Expert Advice</h3>
              <p>Guidance on training, nutrition, and general pet care.</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
