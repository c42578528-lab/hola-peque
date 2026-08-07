import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hola Peque · Aprende jugando",
  description: "Juegos, cuentos y canciones para aprender jugando.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
