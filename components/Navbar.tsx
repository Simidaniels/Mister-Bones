"use client";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Mister Bones</h1>

      {/* Desktop Links */}
      <div className="navbar-links-desktop">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/pets">Pets</Link>
        <Link href="/contact">Contact</Link>

        {/* Social Icons */}
        <div className="navbar-socials">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="navbar-hamburger">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-links-mobile">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/pets" onClick={() => setIsOpen(false)}>Pets</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          {/* Mobile Social Icons */}
          <div className="navbar-socials-mobile">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
