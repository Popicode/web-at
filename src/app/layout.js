import "../styles/global.css";
import { Nabvar } from "../components/layout/Nabvar";
import { Container } from "@/components/layout/Container";


export const metadata = {
    title: "AT Climatización",
    description: "Sitio de aire acondicionado",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Nabvar />
                <main className="page-content">
                    {children}
                </main>

            </body>
        </html>
    );
}
