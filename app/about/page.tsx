import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content p-8">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-700">
          At Paws & Pets, we care about connecting families with lovable pets.
          All our pets are healthy, vaccinated, and well cared for.
        </p>
      </main>
      <Footer />
    </div>
  );
}
