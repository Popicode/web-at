import { Children } from "react"
import { CTAButton } from "../../shared/ui/CTAButton"


export function Hero() {
    return (
        <section id="inicio" className="bg-linear-to-b from-brand-600 to-surface-soft pt-24 pb-12 px-4">
            <div className="flex flex-col gap-12 items-center w-full">
                <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.3)] px-3.25 py-1.25 rounded-[9999px]">
                    <p className="font-inter-semi-bold font-semibold text-xs text-white tracking-[1.2px] uppercase  leading-4">
                        Servicio profesional en chile
                    </p>
                </div>
                <h1 className="font-inter-semi-bold  font-bold text-4xl text-center text-white leading-11 max-h-80">
                    Confort perfecto para cualquier estación
                </h1>
                <p className="font-inter-semi-bold font-light  text-lg leading-7 text-slate-100 text-center max-h-80 ">
                    Instalación y mantenimiento de climatización residencial y comercial con expertos certificados.
                </p>
                <CTAButton sectionId={"contacto"}>
                    {'COTIZAR AHORA  >'}
                </CTAButton>
            </div>
        </section>
    )
}