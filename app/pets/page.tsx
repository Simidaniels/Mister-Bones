import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PetCard from "@/components/Petcard";

const pets = [
  { name: "Buddy", breed: "Golden Retriever", image: "/pets/dog1.jpg" },
  { name: "Milo", breed: "Siamese Cat", image: "/pets/cat1.jpg" },
  { name: "Coco", breed: "Parrot", image: "/pets/parrot1.jpg" },
];

export default function Pets() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="page-content p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <PetCard key={pet.name} {...pet} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
