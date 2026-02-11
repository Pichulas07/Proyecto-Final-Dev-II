import type { Pet } from "../../models/Pet";

export default function PetCard(props: Pet) {
  return (
    <a href={`/pets/${props.name}`}
      className="block bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6
                    hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-xl font-bold text-sky-800 mb-3">{props.name}</h2>

      <div className="text-sky-700 space-y-1">
        <p>
          <span className="font-semibold">Race:</span> {props.race}
        </p>
        <p>
          <span className="font-semibold">Specie:</span> {props.specie}
        </p>
        <p>
          <span className="font-semibold">Race:</span> {props.race}
        </p>
      </div>
    </a>
  );
}
