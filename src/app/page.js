import { Container } from "../components/layout/Container";
import { Hero } from "@/components/sections/hero/Hero";
import { ExtremosSection } from "../components/sections/extremos/Extremos";
import { ServiciosSection } from "@/components/sections/servicios/Servicios";
import { CarruselProyectos } from "@/components/sections/proyectos/Proyectos";

export default function Home() {
    return (
        <main>
            <Container />
            <Hero />
            <ExtremosSection />
            <ServiciosSection />
            <CarruselProyectos />
        </main>
    );
}

