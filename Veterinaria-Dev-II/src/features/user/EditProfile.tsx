import { useEffect, useState } from "react";
import type { User } from "../../models/user";
import { getUser } from "../../services/user.service";
import { Link, useNavigate } from "react-router-dom";

export default function EditProfile() {
  const [formData, setFormData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getUser()
      .then(setFormData)
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) return;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setMessage("Cambios guardados correctamente (simulado)");

    setTimeout(() => {
      navigate("/profile"); // vuelve al perfil
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Cargando...
      </div>
    );
  }

  if (!formData) return <p>No se encontró usuario.</p>;

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-sky-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <Link to="/profile" className="text-sky-700 font-semibold">
          ← Volver al perfil
        </Link>

        <div className="mt-8 bg-white p-8 rounded-3xl shadow-xl border">
          <h1 className="text-3xl font-bold mb-6 text-slate-900">
            Editar Perfil
          </h1>

          <div className="space-y-5">
            <div>
              <label className="text-sm text-slate-500">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-slate-500">Correo</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-slate-500">Teléfono</label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-sky-500 outline-none"
              />
            </div>
          </div>

          <button
            onClick={handleSave}
            className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Guardar cambios
          </button>

          {message && (
            <p className="mt-4 text-green-600 font-semibold text-center">
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
