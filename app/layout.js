import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Portfolio | Saikat",
  description: "Saikat Das · EE Undergrad & Web Dev Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      >
        <Navbar />
        <div className="fixed inset-0 z-0 w-screen h-screen pointer-events-none block">
          <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,10,0.9)_100%)]" />
          <div className="absolute inset-0" style={{ filter: "blur(5px)" }}>
            <Particles
              particleCount={200}
              speed={0.3}
              particleSpread={9}
              cameraDistance={10}
              particleBaseSize={120}
              sizeRandomness={1.5}
              alphaParticles={false}
              moveParticlesOnHover={false}
              particleHoverFactor={0.025}
              disableRotation={true}
              particleColors={["#EF9F27", "#FF6B6B", "#FFD580", "#C9881A"]}
            />
          </div>

          <div className="grain-overlay" />
        </div>
        {children}
      </body>
    </html>
  );
}
