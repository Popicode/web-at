import "../styles/global.css";

export const metadata = {
    title: "Web AT",
    description: "Sitio de aire acondicionado",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
