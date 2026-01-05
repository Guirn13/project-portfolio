import DotGrid from "../DotGrid";
import Typewriter from "../Typewriter";

export default function Homes() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center bg-gradient-to-b from-gray-900 via-gray-900 to-black justify-center pt-20"
    >
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={6}
          gap={15}
          baseColor="#00A6F4"
          activeColor="#ffffff"
          proximity={120}
          speedTrigger={100}
          shockRadius={250}
          shockStrength={5}
          maxSpeed={5000}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="absolute inset-0 z-5 bg-black/40"></div>

      <div className="relative z-10 text-center text-gray-100 px-6 animate-fade-in">
        <Typewriter
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent"
          text="Bem-vindo ao meu portfólio"
          speed={150}
        />
        <p className="text-xl md:text-2xl text-gray-100 font-light tracking-wide">
          I am developer 🧑🏻‍💻
        </p>
      </div>
    </section>
  );
}
