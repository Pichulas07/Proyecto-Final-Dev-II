import type { Pet } from "../models/Pet";

const PETS_URL = "../../data/pets.json";
export async function getPets(): Promise<Pet[]> {
    const response = await fetch(PETS_URL);
    if (!response.ok) {
        throw new Error(
            `No se pudo cargar movies.json (status ${response.status})`,
        );
    }

    const data = await response.json();
    console.log("Mascotas cargadas", data);
    return data as Pet[];
}

export async function getPetsByName(name: string): Promise<Pet | null>{
    const pets = await getPets();
    const found = pets.find((p) => String(p.name) === String(name));
    return found ?? null;
}