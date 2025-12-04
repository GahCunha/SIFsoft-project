import { Section } from "../commum/section";
// Lembre de importar a imagem aqui em cima
import bgContact from "../../assets/Rectangle 20.png";

export function Contact() {
  return (
    <Section
      id="contact"
      center
      className="relative min-h-[calc(100vh-4rem)] bg-black text-white overflow-hidden"
    >
      <div
        style={{ backgroundImage: `url(${bgContact})` }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
      />


      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div>
          <h1 className="font-lily text-5xl text-white-400">Quibeez</h1>
          <h2 className="font-poppins text-xl text-amber font-light uppercase tracking-widest">Restaurant</h2>
          <p className="mt-6 text-sm leading-relaxed text-gray-300">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <div className="mt-6 flex gap-4">
            <i className="fab fa-facebook text-2xl text-white hover:text-amber-400 cursor-pointer transition-colors"></i>
            <i className="fab fa-twitter text-2xl text-white hover:text-amber-400 cursor-pointer transition-colors"></i>
            <i className="fab fa-instagram text-2xl text-white hover:text-amber-400 cursor-pointer transition-colors"></i>
            <i className="fab fa-youtube text-2xl text-white hover:text-amber-400 cursor-pointer transition-colors"></i>
            <i className="fab fa-pinterest text-2xl text-white hover:text-amber-400 cursor-pointer transition-colors"></i>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-amber-400">Location</h3>
          <p className="text-gray-300">
            Lorem <br />
            Lorem ipsum
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-amber-400">Contact Us</h3>
          <p className="text-gray-300">
            +91 2222 333 444 <br />
            quibeez@example.com
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 z-10 w-full border-t border-white/20 py-4 text-center text-sm text-gray-300">
        Copyright © 2023 Quibeez
      </div>
    </Section>
  );
}