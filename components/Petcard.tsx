import Image from "next/image";

interface PetCardProps {
  name: string;
  breed: string;
  image: string; // Path to image in /public folder or external URL
}

export default function PetCard({ name, breed, image }: PetCardProps) {
  return (
    <div className="border rounded-lg shadow p-4 hover:shadow-xl hover:scale-105 transition-all duration-300">
      <Image
        src={image}          // image path
        alt={`${name} the ${breed}`} // meaningful alt text for accessibility
        width={400}          // desired width
        height={300}         // desired height
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-xl font-bold mt-3">{name}</h3>
      <p className="text-gray-600">{breed}</p>
    </div>
  );
}
