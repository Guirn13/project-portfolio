import DotGrid from "../DotGrid";
import Typewriter from "../Typewriter";

export default function Homes() {
  return (
    <section
      id="home"
      className="h-180 relative overflow-hidden flex items-center bg-gray-900 justify-center"
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

      <div className="relative z-10 text-center text-gray-100">
        <Typewriter
          className="text-5xl font-bold mb-4 "
          text="Bem-vindo ao meu portfólio"
          speed={150}
        />
        <p className="text-2xl">I am developer 🧑🏻‍💻</p>
      </div>
    </section>
  );
}
