export default function Home() {
    // Datos simulados (En un futuro vendrán de props o una API)
    const user = { name: "Carlos" };
    const stats = { petsCount: 3, nextAppt: "15 Oct, 10:30 AM" };

    return (
        <section className="max-w-4xl mx-auto p-6">
            {/* Bienvenida personalizada */}
            <div className="text-center mt-10 mb-12">
                <h1 className="text-4xl font-extrabold text-gray-800">
                    Bienvenido a Nova Pet
                </h1>
                <p className="text-xl text-gray-500 mt-2">¡Hola, {user.name}! Qué alegría verte.</p>
            </div>

            {/* Grid de Resumen General */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Card: Mascotas */}
                <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Mascotas registradas</p>
                            <p className="text-3xl font-bold text-gray-900">{stats.petsCount}</p>
                        </div>
                    </div>
                </div>

                {/* Card: Próxima Cita */}
                <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                        <div className="bg-green-100 p-3 rounded-full text-green-600">
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">Próxima Cita</p>
                            <p className="text-xl font-bold text-gray-900">{stats.nextAppt}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recordatorio Simulado */}
            <div className="mt-8 flex items-center p-4 mb-4 text-amber-800 border-t-4 border-amber-300 bg-amber-50 rounded-lg shadow-sm">
                <div className="text-sm font-medium">
                    <span className="font-bold">Recordatorio:</span> Tu perrito "Bobby" tiene pendiente su desparasitación este mes.
                </div>
            </div>
        </section>
    );
}
