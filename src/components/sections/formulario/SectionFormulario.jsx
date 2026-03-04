export function SectionFormulario() {
    return (
        <section id="contacto" className="py-24 px-4 relative bg-linear-to-b from-white via-zinc-50 to-white">
            <div className="relative max-w-lg mx-auto">
                <div className="flex flex-col gap-4 items-center mb-12">
                    <h2 className="font-inter-semi-bold font-bold text-4xl leading-11 text-text text-center">
                        ¿Necesitas una cotización?
                    </h2>
                    <p className="  text-text-muted text-base leading-6 text-center px-3">
                        Completa el formulario y uno de nuestros expertos te contactará para asesorarte personalmente
                    </p>
                </div>
                {/* card form */}
                <div className="bg-white rounded-3xl shadow-[0px_20px_60px_rgba(0,0,0,0.08)] border border-slate-200 p-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#1173d4] to-transparent" />

                </div>
            </div>

        </section>
    )
}