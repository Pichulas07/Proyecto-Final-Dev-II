import type { Pet } from "../../models/Pet";
import PetCard from "./PetCard";

export default function PetsList(){
    const pets: Pet[] = [
        {
            name: "Chevy",
            age: "3",
            race: "dog",
            specie: "Canino",
            weigth: "5kg"
        },
        {
            name: "Fausto",
            age: "3",
            race: "whale",
            specie: "Canino",
            weigth: "1000 TONELADAS"
        },
    ];

    return (
        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
            {pets.map(pet =>(
                <PetCard key={pet.name} {...pet} />
            ))}
        </div>
    );
}
