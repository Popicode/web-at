import "../styles/global.css";
import { Nabvar } from "../components/layout/Nabvar";


export const metadata = {
    title: "AT Climatización",
    description: "Sitio de aire acondicionado",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Nabvar />
                {children}
            </body>
        </html>
    );
}
