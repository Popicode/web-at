import "../styles/global.css";

export const metadata = {
    title: "AT Climatización",
    description: "Sitio de aire acondicionado",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
