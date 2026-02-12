import { useEffect, useState } from "react";
import type { Pet } from "../../models/Pet";
import { getPets } from "../../services/pets.service";
import { Link } from "react-router-dom";
import PetsList from "./PetsList";

export default function Pets() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPets()
      .then(setPets)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50 to-white flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl shadow-xl p-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-600 to-teal-400 shadow-md animate-pulse" />
            <div className="flex-1">
              <p className="text-slate-900 font-semibold">Cargando...</p>
              <p className="text-slate-500 text-sm">Trayendo las mascotas de NovaPet</p>
            </div>
          </div>
          <div className="mt-6 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
            <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-sky-700 via-sky-500 to-teal-400 animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur px-4 py-2 text-sky-800 shadow-sm hover:bg-white hover:shadow-md transition"
        >
          <span className="text-lg leading-none">←</span>
          <span className="font-semibold">Back to home</span>
        </Link>

        <header className="mt-6 mb-8">
          <div className="inline-flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-800 to-teal-400 shadow-md" />
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                Pets
              </h1>
              <p className="text-slate-600">
                Explore the list of available pets in <span className="font-semibold text-sky-800">NovaPet</span>
              </p>
            </div>
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
        </header>

        <PetsList pets={pets} />
      </div>
    </section>
  );
}
