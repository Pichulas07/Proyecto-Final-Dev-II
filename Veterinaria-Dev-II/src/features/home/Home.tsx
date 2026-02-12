import { useEffect, useState } from "react";
import type { User } from "../../models/user";
import { getUser } from "../../services/user.service";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser()
      .then(setUser)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 font-semibold animate-pulse">
          Cargando datos...
        </p>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <p>No se pudo cargar el usuario.</p>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="text-center mt-10 mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Bienvenido a Nova Pet
        </h1>
        <p className="text-xl text-gray-500 mt-2">
          ¡Hola, {user.name}! Qué alegría verte.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600"></div>
            <div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                Mascotas registradas
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {user.numberOfPets ?? "0"}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-full text-green-600"></div>
            <div>
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                Próxima cita:
              </p>
              <p className="text-xl font-bold text-gray-900">
                15/03/2026
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center p-4 mb-4 text-amber-800 border-t-4 border-amber-300 bg-amber-50 rounded-lg shadow-sm">
        <div className="text-sm font-medium">
          <span className="font-bold">Recordatorio:</span> Revisa las citas de
          tus mascotas este mes.
        </div>
      </div>
    </section>
  );
}
