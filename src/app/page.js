import { Container } from "../components/layout/Container";
import { Hero } from "@/components/sections/hero/Hero";
import { ExtremosSection } from "../components/sections/extremos/Extremos";

export default function Home() {
    return (
        <main>
            <Container />
            <Hero />
            <ExtremosSection />
        </main>
    );
}

