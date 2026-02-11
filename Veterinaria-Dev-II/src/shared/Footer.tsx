import NovaFace from "../assets/NovaFace.png";
import NovaInsta from "../assets/NovaInsta.png";
export default function Footer() {
  return (
    <footer className="bg-[#0b1b3a] text-gray-300 py-2 px-2">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 items-center">
        
        <p className="text-sm leading-relaxed text-gray-400">
          © 2026 <span className="font-semibold text-white">NovaPet</span>. Todos los derechos reservados. 
        </p>


        <div className="flex flex-col md:items-end gap-2">
            
          
          <div className="flex gap-4">
            <a
              href=""
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <img src={NovaFace} 
              alt="" 
              className="h-5"/>
            </a>

            <a
              href=""
              className="hover:text-pink-500 transition-colors duration-200"
            >
              <img src={NovaInsta} 
              alt="" 
              className="h-5"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
