import { ArrowDown } from "@/components/icons/ArrowDown";
import { ArrowUp } from "@/components/icons/ArrowUps";
import { SnowflakeIcon } from "@/components/icons/SnowFlakeIcon";
import { FlameIcon } from "@/components/icons/FlameIcon";

import { PulsingDot } from "@/components/effects/PulsingDot";
import { ParticlePing } from "@/components/effects/ParticlePing";

export function ExtremosSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-surface-soft via-white to-surface-soft py-20 px-4">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/4 -right-24 w-72 h-72 rounded-full bg-brand-600/5 blur-3xl motion-safe:animate-pulse motion-reduce:animate-none" />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-1/4 -left-24 w-72 h-72 rounded-full bg-accent-500/5 blur-3xl motion-safe:animate-pulse motion-reduce:animate-none"
                style={{ animationDelay: "1s" }}
            />

            <div className="relative z-10 flex flex-col items-center w-full max-w-screen-xl mx-auto gap-14">
                <div className="flex flex-col items-center gap-4">
                    <span className="font-bold text-xs tracking-widest uppercase text-accent-500 bg-gradient-to-r from-accent-500/10 to-brand-600/10 px-5 py-2 rounded-full backdrop-blur-sm border border-accent-500/20">
                        Tecnología del futuro
                    </span>

                    <h2 className="font-bold text-4xl leading-tight text-text text-center">
                        Dominamos los Extremos
                    </h2>

                    <p className="text-text-muted text-base leading-6 text-center max-w-sm">
                        Del frío invernal al calor del verano, tu confort en todas las estaciones
                    </p>
                </div>

                <div className="flex flex-col gap-7 w-full">
                    <div
                        className="group relative bg-gradient-to-br from-brand-50 via-white to-brand-100 border-2 border-brand-600/20 rounded-3xl p-10 flex flex-col gap-7 items-center overflow-hidden shadow-lg hover:shadow-2xl focus-within:shadow-2xl transition-all duration-500 hover:-translate-y-2 focus-within:-translate-y-2"
                        tabIndex={0}
                    >
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full group-focus-within:translate-x-full transition-transform duration-1000 motion-reduce:hidden" />

                        <div className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 bg-brand-600/10 rounded-full blur-3xl group-hover:scale-150 group-focus-within:scale-150 transition-transform duration-700" />
                        <div className="pointer-events-none absolute -bottom-8 -left-8 w-24 h-24 bg-brand-500/10 rounded-full blur-2xl group-hover:scale-150 group-focus-within:scale-150 transition-transform duration-700" />

                        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg opacity-0 group-focus-within:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                            <PulsingDot className="bg-brand-600" />
                            <span className="font-bold text-xs text-brand-600">30°C a 15°C</span>
                        </div>

                        <div className="relative z-10 bg-gradient-to-br from-brand-600 to-sky-500 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 group-focus-within:scale-110 group-focus-within:rotate-6 transition-all duration-500 motion-safe:animate-float motion-reduce:animate-none">
                            <SnowflakeIcon className="w-10 h-10 drop-shadow-lg" color="white" />

                            <ParticlePing position="top-right" delay="0s" />
                            <ParticlePing position="bottom-left" delay="0.5s" />
                        </div>

                        <div className="flex flex-col gap-3 items-center relative z-10">
                            <div className="relative flex justify-center w-full px-10">
                                <h3 className="font-bold text-3xl leading-tight text-brand-600 text-center group-hover:scale-105 group-focus-within:scale-105 transition-transform duration-300">
                                    Frío Refrescante
                                </h3>

                                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 md:group-hover:opacity-100 transition-opacity motion-reduce:opacity-100 motion-safe:animate-bounce motion-reduce:animate-none text-brand-600">
                                    <ArrowDown />
                                </div>
                            </div>

                            <p className="text-base leading-6 text-text-muted text-center max-w-xs">
                                Enfrenta el calor del verano con equipos de alta eficiencia energética diseñados para climas extremos en todo Chile.
                            </p>

                            <div className="flex flex-wrap gap-2 justify-center mt-2 opacity-0 group-focus-within:opacity-100 md:group-hover:opacity-100 transform translate-y-2 group-focus-within:translate-y-0 md:group-hover:translate-y-0 transition-all duration-500 motion-reduce:opacity-100 motion-reduce:translate-y-0">
                                <span className="bg-brand-600/10 text-brand-600 px-3 py-1 rounded-full text-xs font-semibold">
                                    Inverter
                                </span>
                                <span className="bg-brand-600/10 text-brand-600 px-3 py-1 rounded-full text-xs font-semibold">
                                    Eco-Friendly
                                </span>
                                <span className="bg-brand-600/10 text-brand-600 px-3 py-1 rounded-full text-xs font-semibold">
                                    Silencioso
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="group relative bg-gradient-to-br from-accent-50 via-white to-accent-100 border-2 border-accent-500/20 rounded-3xl p-10 flex flex-col gap-7 items-center overflow-hidden shadow-lg hover:shadow-2xl focus-within:shadow-2xl transition-all duration-500 hover:-translate-y-2 focus-within:-translate-y-2"
                        tabIndex={0}
                    >
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full group-focus-within:translate-x-full transition-transform duration-1000 motion-reduce:hidden" />

                        <div className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 bg-accent-500/10 rounded-full blur-3xl group-hover:scale-150 group-focus-within:scale-150 transition-transform duration-700" />
                        <div className="pointer-events-none absolute -bottom-8 -left-8 w-24 h-24 bg-orange-400/10 rounded-full blur-2xl group-hover:scale-150 group-focus-within:scale-150 transition-transform duration-700" />

                        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg opacity-0 group-focus-within:opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                            <PulsingDot className="bg-accent-500" />
                            <span className="font-bold text-xs text-accent-500">15°C a 30°C</span>
                        </div>

                        <div
                            className="relative z-10 bg-gradient-to-br from-accent-500 to-orange-400 w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 group-focus-within:scale-110 group-focus-within:rotate-6 transition-all duration-500 motion-safe:animate-float motion-reduce:animate-none"
                            style={{ animationDelay: "0.5s" }}
                        >
                            <FlameIcon className="w-10 h-10 drop-shadow-lg" color="white" />

                            <ParticlePing position="top-right" delay="0s" />
                            <ParticlePing position="bottom-left" delay="0.5s" />
                        </div>

                        <div className="flex flex-col gap-3 items-center relative z-10">
                            <div className="relative flex justify-center w-full px-10">
                                <h3 className="font-bold text-3xl leading-tight text-accent-500 text-center group-hover:scale-105 group-focus-within:scale-105 transition-transform duration-300">
                                    Calor Acogedor
                                </h3>

                                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 md:group-hover:opacity-100 transition-opacity motion-reduce:opacity-100 motion-safe:animate-bounce motion-reduce:animate-none text-accent-500">
                                    <ArrowUp />
                                </div>
                            </div>

                            <p className="text-base leading-6 text-text-muted text-center max-w-xs">
                                Mantén tu hogar cálido en invierno con tecnología Inverter avanzada que optimiza el consumo y cuida tu bolsillo.
                            </p>

                            <div className="flex flex-wrap gap-2 justify-center mt-2 opacity-0 group-focus-within:opacity-100 md:group-hover:opacity-100 transform translate-y-2 group-focus-within:translate-y-0 md:group-hover:translate-y-0 transition-all duration-500 motion-reduce:opacity-100 motion-reduce:translate-y-0">
                                <span className="bg-accent-500/10 text-accent-500 px-3 py-1 rounded-full text-xs font-semibold">
                                    Bajo Consumo
                                </span>
                                <span className="bg-accent-500/10 text-accent-500 px-3 py-1 rounded-full text-xs font-semibold">
                                    Rápido
                                </span>
                                <span className="bg-accent-500/10 text-accent-500 px-3 py-1 rounded-full text-xs font-semibold">
                                    Eficiente
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}