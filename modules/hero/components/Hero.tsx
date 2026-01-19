import { TAGS } from "@/constants/tags";
import { ArrowUpRight, Dot } from "lucide-react"
import Image from "next/image";
import { HeroRadarChart } from "./HeroRadarChart";


export default function Hero() {
  
  return (
    <div className="bg-card/75 rounded-lg border border-border flex justify-between shadow-xl shadow-muted/30">
      <div className="flex items-center p-8">
        <div className="flex items-start gap-4 w-2/3">
          <Image
            src="/hero/perfil-bw.png"
            alt="Perfil en blanco y negro"
            width={150}
            height={150}
            priority
            className="rounded-lg shadow-xl shadow-secondary"
          />
          <div>
            <h1 className="font-sans font-semibold text-2xl mb-1">
              Samuel Bustos Puntis
            </h1>
            {TAGS.map((tag,i)=>(
              <span key={i} className="py-1 px-2 mr-2 bg-secondary text-primary/85 text-xs font-sans rounded-xl">
                {tag.label}
              </span>
            ))}
            
            <p className="font-sans mt-2">
              Estudiante avanzado de Ingeniería en Sistemas de Información, orientado al diseño, análisis y construcción de soluciones de software.
            </p>
          </div>
          
        </div>
        <div>
          <HeroRadarChart/>
        </div>
      </div>
      

      <div className="flex justify-end p-2 text-primary">
        <ArrowUpRight/>
      </div>
    </div>
  );
}