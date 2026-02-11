import { useParams } from "react-router-dom";

export default function PetDetails(){
    const { name } = useParams<{ name: string }>();

    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white flex justify-center items-start pt-24 px-4">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-xl w-full">
                <h1 className="text-3xl font-bold text-sky-800 mb-4">
                    🐾 Pet Details
                </h1>

                <p className="text-lg text-sky-700">
                    Pet name: <span className="font-semibold">{name}</span>
                    
                </p>
            </div>
        </div>
    );
}
