import { Section } from "../commum/section";

export function Contact() {
  return (
    <Section
      id="contact" center className="relative min-h-[calc(100vh-4rem)] bg-black text-white">
      <div className="z-10 grid w-full max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-3">
        <div>
          <h1 className="font-lily text-5xl text-white-400">Quibeez</h1>
          <h2 className="font-poppins text-xl text-amber font-light uppercase tracking-widest">Restaurant</h2>
          <p className="mt-6 text-sm leading-relaxed text-gray-300">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.</p>
          <div className="mt-6 flex gap-4 text-xl">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-amber-400">
            Location</h3>
          <p className="text-gray-300">
            Lorem <br />
            Lorem ipsum</p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-amber-400">Contact Us</h3>
          <p className="text-gray-300">
            +91 2222 333 444 <br />
            quibeez@example.com
          </p>
        </div>
      </div>
      <div className="absolute inset-10 z-0 rounded-4xl bg-[url('/src/assets/Rectangle 20.png')] bg-cover bg-center bg-no-repeat opacity-30"></div>
      <div className="absolute bottom-0 z-10 w-full border-t border-white/20 py-4 text-center text-sm text-gray-300">Copyright © 2023 Quibeez</div>
    </Section>
  );
}
