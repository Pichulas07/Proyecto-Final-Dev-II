import type { Pet } from "../../models/Pet";

export default function PetCard(props: Pet) {
  return (
    <a
      href={`/pets/${props.name}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200/70 bg-white/75 backdrop-blur-xl shadow-lg
                 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
    >
      {/* IMAGEN */}
      <div className="relative">
        <img
          src={props.image}
          alt={props.name}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-90" />
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-xs font-semibold text-sky-900 shadow">
          <span className="h-2 w-2 rounded-full bg-teal-400" />
          {props.specie}
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-800 transition">
            {props.name}
          </h2>
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-800 to-teal-400 shadow-sm opacity-90 group-hover:opacity-100 transition" />
        </div>

        <div className="mt-4 space-y-2 text-slate-700">
          <p className="flex items-center justify-between gap-3">
            <span className="text-slate-500 font-semibold">Race</span>
            <span className="font-bold text-sky-900">{props.race}</span>
          </p>

          <div className="h-px w-full bg-slate-100" />

          <p className="flex items-center justify-between gap-3">
            <span className="text-slate-500 font-semibold">Age</span>
            <span className="font-bold text-sky-900">{props.age}</span>
          </p>

          <div className="h-px w-full bg-slate-100" />

          <p className="flex items-center justify-between gap-3">
            <span className="text-slate-500 font-semibold">Date</span>
            <span className="font-bold text-sky-900">{props.date}</span>
          </p>
        </div>

        <div className="mt-5 inline-flex items-center gap-2 text-sky-800 font-semibold">
          <span className="group-hover:underline">View details</span>
          <span className="transition group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </a>
  );
}
