import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Pet } from "../../models/Pet";
import { getPetsByName } from "../../services/pets.service";

export default function PetDetails() {
  const { name } = useParams<{ name: string }>();
  const [pet, setPet] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!name) return;
    getPetsByName(name)
      .then((pet) => setPet(pet))
      .finally(() => setLoading(false));
  }, [name]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50 to-white flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl p-8">
          <p className="text-slate-900 font-semibold">Cargando mascota...</p>
          <p className="text-slate-500 text-sm mt-1">Un toque ya casi ✨</p>
          <div className="mt-6 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-sky-700 to-teal-400 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!pet) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50 to-white flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-extrabold text-rose-600 mb-2">
            Mascota no encontrada
          </h2>
          <p className="text-slate-600 mb-6">
            Revisá el nombre o volvé al listado.
          </p>
          <Link
            to="/pets"
            className="inline-flex items-center gap-2 rounded-full bg-sky-800 px-5 py-2.5 text-white font-semibold shadow-md hover:shadow-lg hover:bg-sky-900 transition"
          >
            ← Volver al listado
          </Link>
        </div>
      </div>
    );
  }

   return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50 to-white flex justify-center items-start pt-24 px-4">
      <div className="w-full max-w-xl rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-2xl p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              🐾 Pet Details
            </h1>
            <p className="text-slate-600 mt-1">
              Información detallada en estilo{" "}
              <span className="font-semibold text-sky-800">NovaPet</span>
            </p>
          </div>

          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-800 to-teal-400 shadow-md" />
        </div>

        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

        {/* IMAGEN */}
        <div className="mt-6">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <img
              src={pet.image}
              alt={pet.name}
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/60 to-transparent p-4">
              <p className="text-white font-extrabold text-xl tracking-tight">
                {pet.name}
              </p>
              <p className="text-white/90 text-sm">
                {pet.specie} • {pet.race}
              </p>
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="mt-6 space-y-3 text-slate-700">
          <p className="text-lg">
            Pet name:{" "}
            <span className="font-extrabold text-sky-900">{name}</span>
          </p>
          <p className="text-lg">
            Pet race:{" "}
            <span className="font-extrabold text-sky-900">{pet.race}</span>
          </p>
          <p className="text-lg">
            Pet age:{" "}
            <span className="font-extrabold text-sky-900">{pet.age}</span>
          </p>
          <p className="text-lg">
            Pet specie:{" "}
            <span className="font-extrabold text-sky-900">{pet.specie}</span>
          </p>
          <p className="text-lg">
            Pet weigth:{" "}
            <span className="font-extrabold text-sky-900">{pet.weigth}</span>
          </p>
          <p className="text-lg">
            Pet date:{" "}
            <span className="font-extrabold text-sky-900">{pet.date}</span>
          </p>
        </div>

        <div className="mt-8">
          <Link
            to="/pets"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sky-900 font-semibold shadow-sm hover:shadow-md hover:bg-slate-50 transition"
          >
            ← Back to list
          </Link>
        </div>
      </div>
    </div>
  );
}
