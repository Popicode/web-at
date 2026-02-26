import { ServiceCard } from "./ServiciosCard"
import { IconFix } from "./icons/IconFix"
import { IconGear } from "./icons/IconGear"
import { IconInstall } from "./icons/IconInstall"


export function ServiciosSection() {
    return (
        <section id="servicios" className="bg-linear-to-b from-surface-soft via-white to-surface-soft  py-20 px-4">
            <div className="flex flex-col gap-4 item-center w-full mx-auto max-w-300 ">
                <div className="flex flex-col gap-3 items-center text-center ">
                    <span className="font-bold text-xs uppercase  tracking-widest text-brand-600 bg-brand-600/10  w-fit px-4 py-1.5 rounded-full">
                        Lo que hacemos
                    </span>
                    <h2 className="font-inter-semi-bold font-bold text-3xl leading-tight text-text text-center">
                        Nuestros servicios
                    </h2>
                    <p className="  text-text-muted text-base leading-6 text-center px-3">
                        Soluciones integrales en climatización con la más alta calidad y profesionalismo
                    </p>
                </div>
                <div className="flex flex-col gap-6 w-full">
                    <ServiceCard icon={<IconInstall className="w-10 h-10 text-white" />} title={'Instalación'} description={"Montaje profesional de equipos Split, Multi-Split para hogares y oficinas con terminaciones de exelencia."} />
                    <ServiceCard icon={<IconGear className="w-10 h-10 text-white" />} title={'Mantención'} description={"Asegura la vida útil de tu equipo con limpieza profundas, sanitización y recargas de gas refrigerante"} />
                    <ServiceCard icon={<IconFix className="w-10 h-10 text-white" />} title={'Reparación'} description={"Diagnóstico preciso y reparación de fallas técnicas en todas las marcas del mercado."} />
                </div>
            </div>

        </section>
    )
}