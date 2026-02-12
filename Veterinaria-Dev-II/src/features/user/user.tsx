import { useEffect, useState } from "react";
import type { User } from "../../models/user";
import { getUser } from "../../services/user.service";
import { Link } from "react-router-dom";

export default function UserPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser()
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50 to-white flex items-center justify-center">
        <p className="text-slate-600 text-lg font-semibold animate-pulse">
          Cargando perfil...
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No se encontró el usuario.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50 to-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
        
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sky-800 shadow-sm hover:shadow-md transition"
        >
          ← Back
        </Link>

        <div className="mt-8 bg-white rounded-3xl shadow-xl border border-slate-200 p-8">

          {/* Avatar */}
          <div className="flex flex-col items-center text-center">
            <img
              src={user.img}
              alt={user.name}
              className="w-36 h-36 rounded-full object-cover border-4 border-sky-500 shadow-lg"
            />

            <h1 className="mt-4 text-3xl font-extrabold text-slate-900">
              {user.name}
            </h1>

            {user.numberOfPets && (
              <span className="mt-2 inline-block bg-sky-100 text-sky-800 text-sm font-semibold px-4 py-1 rounded-full">
                {user.numberOfPets} mascotas registradas
              </span>
            )}
          </div>

          {/* Info */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {user.email && (
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <p className="text-sm text-slate-500">Correo electrónico</p>
                <p className="text-lg font-semibold text-slate-900">
                  {user.email}
                </p>
              </div>
            )}
            {user.number && (
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
                <p className="text-sm text-slate-500">Teléfono</p>
                <p className="text-lg font-semibold text-slate-900">
                  {user.number}
                </p>
              </div>
            )}

            <Link
              to="/editProfile"
              className="inline-block mt-6 bg-sky-600 text-white px-5 py-2 rounded-xl shadow hover:bg-sky-700 transition font-semibold"
              >
              Editar perfil
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

