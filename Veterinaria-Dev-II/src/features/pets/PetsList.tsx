import type { Pet } from "../../models/Pet";
import PetCard from "./PetCard";

export default function PetsList({ pets }: { pets: Pet[] }) {
  return (
    <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pets.map((pet) => (
        <PetCard key={pet.name} {...pet} />
      ))}
    </div>
  );
}
