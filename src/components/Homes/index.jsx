import Typewriter from "../Typewriter"

export default function Homes() {
    return (
        <section id="home" className="h-180 flex items-center justify-center bg-gradient-to-r from-sky-600 to-sky-900 text-white text-center">
            <div>
                
                <Typewriter className="text-5xl font-bold mb-4" text="Bem-vindo ao meu portfólio" speed={150} />
                <p className="text-2xl">I am developer🧑🏻‍💻</p>
            </div>
        </section>
    )
}