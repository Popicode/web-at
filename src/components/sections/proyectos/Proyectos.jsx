"use client"

import Image from "next/image"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import { ChevronLeft } from "./icons/ChevronLeft"
import { ChevronRight } from "./icons/ChevronRight"
import proyecto1Img from "./img/proyecto-1.webp.jpg"
import proyecto2Img from "./img/proyecto-2.webp.jpg"
import proyecto3Img from "./img/proyecto-3,webp.jpg"
import proyecto4Img from "./img/proyecto-4.webp.jpg"

const PROJECTS = [
    {
        image: proyecto1Img,
        title: "Cafeteria YEPPO",
        category: "Comercial",
        description:
            "Instalación de sistema Multi-Split inverter para cafeteria de 180 m², logrando eficiencia energética clase A+.",
    },
    {
        image: proyecto2Img,
        title: "Departamento Santiago Centro",
        category: "Residencial",
        description:
            "Instalación Split muro para departamento",
    },
    {
        image: proyecto3Img,
        title: "Departamento Vitacura",
        category: "Residencial",
        description:
            "Diseño e instalación de sistema de extracción y aire acondicionado para restaurante privado en departamentos",
    },
    {
        image: proyecto4Img,
        title: "Departamento Providencia",
        category: "Residencial",
        description:
            "Instalación Split muro con canalización oculta y terminaciones premium en departamento de lujo.",
    },
]

const PROJECT_FEATURES = [
    { icon: "M5 13l4 4L19 7", label: "Instalación completa", color: "text-brand-600" },
    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "24h instalación", color: "text-brand-600" },
    { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Garantía 12 meses", color: "text-green-500" },
]

const AUTOPLAY_INTERVAL = 5000
const SWIPE_THRESHOLD = 50

export function CarruselProyectos() {
    const totalSlides = PROJECTS.length

    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, [totalSlides])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }, [totalSlides])

    useEffect(() => {
        if (isPaused) return
        const timer = setInterval(nextSlide, AUTOPLAY_INTERVAL)
        return () => clearInterval(timer)
    }, [isPaused, nextSlide])

    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === "ArrowLeft") prevSlide()
            if (e.key === "ArrowRight") nextSlide()
        },
        [nextSlide, prevSlide],
    )

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
        touchEndX.current = e.touches[0].clientX
        setIsPaused(true)
    }

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current
        if (Math.abs(diff) > SWIPE_THRESHOLD) {
            diff > 0 ? nextSlide() : prevSlide()
        }
        setIsPaused(false)
    }

    const handleGoToSlide = useCallback((index) => {
        setCurrentSlide(index)
    }, [])

    const handleContactScroll = useCallback(() => {
        const el = document.getElementById("contacto")
        if (el) el.scrollIntoView({ behavior: "smooth" })
    }, [])

    const trackStyle = useMemo(
        () => ({ transform: `translateX(-${currentSlide * 100}%)` }),
        [currentSlide],
    )

    const progressStyle = useMemo(
        () => ({ width: `${((currentSlide + 1) / totalSlides) * 100}%` }),
        [currentSlide, totalSlides],
    )

    return (
        <section
            id="proyectos"
            className="relative bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 py-24 px-4 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-roledescription="carousel"
            aria-label="Carrusel de proyectos"
        >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/4 -left-25 w-100 h-100 bg-brand-600 rounded-full blur-3xl animate-pulse" />
                <div
                    className="absolute bottom-1/4 -right-25 w-100 h-100 bg-accent-500 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                />
            </div>

            <div className="flex flex-col gap-12 items-center w-full max-w-7xl mx-auto relative z-10 ">
                <div className="flex flex-col items-center gap-4">
                    <span className="font-bold text-xs tracking-widest uppercase text-accent-500 bg-accent-500/10 px-5 py-2 rounded-full backdrop-blur-sm border border-accent-500/20">
                        PROYECTOS
                    </span>
                    <h2 className="font-inter-semi-bold font-bold text-3xl leading-tight text-white text-center">
                        Nuestros Proyectos
                    </h2>
                    <p className="text-base leading-6 text-slate-400 text-center max-w-none ">
                        Explora algunos de nuestros trabajos más recientes en instalaciones residenciales y comerciales.
                    </p>
                </div>

                <div
                    className="project-carousel-frame relative w-full mt-6"
                    aria-live="polite"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="overflow-hidden rounded-3xl">
                        <div
                            className="flex transition-transform duration-700 ease-out"
                            style={trackStyle}
                        >
                            {PROJECTS.map((project, index) => (
                                <div
                                    key={project.title}
                                    className="min-w-full relative group"
                                    role="group"
                                    aria-roledescription="slide"
                                    aria-label={`Slide ${index + 1} de ${totalSlides}: ${project.title}`}
                                >
                                    <div className="project-carousel-media relative h-125 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 1280px"
                                            priority={index === 0}
                                            className="project-image-focus object-cover transition-transform duration-700 group-hover:scale-110"
                                            draggable={false}
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    </div>

                                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="backdrop-blur-md bg-linear-to-r from-accent-500 to-accent-400 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg shadow-accent-500/40 transform group-hover:scale-105 transition-transform duration-300">
                                                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                                <span className="font-bold text-xs text-white tracking-wider uppercase">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <div className="backdrop-blur-md bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                                                <span className="font-bold text-xs text-white/80">
                                                    {index + 1} / {totalSlides}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="font-inter-semi-bold font-bold text-3xl leading-10 text-white mb-3 transform group-hover:translate-x-2 transition-transform duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-base leading-6.5 text-slate-300 mb-6 max-w-125">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            {PROJECT_FEATURES.map((feat) => (
                                                <div
                                                    key={feat.label}
                                                    className="backdrop-blur-md bg-white/10 px-3.5 py-2 rounded-xl border border-white/20 flex items-center gap-2"
                                                >
                                                    <svg className={`w-4 h-4 ${feat.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feat.icon} />
                                                    </svg>
                                                    <span className="text-xs text-white font-semibold">{feat.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute -left-5 top-1/2 -translate-y-1/2 bg-linear-to-br from-white to-slate-100 hover:from-brand-600 hover:to-sky-500 rounded-full p-3.5 shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-brand-600/40 transition-all duration-300 hover:scale-110 group/btn border-2 border-white/50"
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft className="size-7 text-brand-600 group-hover/btn:text-white transition-colors" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute -right-5 top-1/2 -translate-y-1/2 bg-linear-to-br from-white to-slate-100 hover:from-brand-600 hover:to-sky-500 rounded-full p-3.5 shadow-xl shadow-black/30 hover:shadow-2xl hover:shadow-brand-600/40 transition-all duration-300 hover:scale-110 group/btn border-2 border-white/50"
                        aria-label="Slide siguiente"
                    >
                        <ChevronRight className="size-7 text-brand-600 group-hover/btn:text-white transition-colors" />
                    </button>

                    <div className="flex gap-4 items-center justify-center mt-10">
                        {PROJECTS.map((project, index) => (
                            <button
                                key={project.title}
                                onClick={() => handleGoToSlide(index)}
                                className="group/dot relative"
                                aria-label={`Ir a slide ${index + 1}`}
                                aria-current={index === currentSlide ? "true" : undefined}
                            >
                                <div
                                    className={`h-2 rounded-full transition-all duration-500 ${index === currentSlide
                                        ? "bg-linear-to-r from-brand-600 to-sky-500 w-14 shadow-md shadow-brand-600/50"
                                        : "bg-white/30 w-2 group-hover/dot:w-6 group-hover/dot:bg-white/50"
                                        }`}
                                />
                                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover/dot:opacity-100 transition-opacity pointer-events-none">
                                    <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                                        <span className="text-xs font-bold text-text">{project.category}</span>
                                    </div>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45" />
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="w-full bg-white/10 h-0.75 rounded-full mt-6 overflow-hidden">
                        <div
                            className="h-full bg-linear-to-r from-brand-600 via-sky-500 to-brand-600 rounded-full transition-all duration-700 ease-out"
                            style={progressStyle}
                        />
                    </div>
                </div>

                <button
                    onClick={handleContactScroll}
                    className="group/cta bg-linear-to-r from-accent-500 to-accent-400 hover:from-accent-400 hover:to-accent-500 px-8 py-4 rounded-2xl shadow-xl shadow-accent-500/40 hover:shadow-2xl hover:shadow-accent-500/60 transition-all duration-300 hover:scale-105 flex items-center gap-3 mt-4"
                >
                    <span className="font-inter-semi-bold font-bold text-base text-white">
                        Solicita tu Proyecto Personalizado
                    </span>
                    <svg
                        className="w-5 h-5 text-white group-hover/cta:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
            </div>
        </section>
    )
}   