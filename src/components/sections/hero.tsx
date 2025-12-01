import { Section } from "../commum/section";

export function Hero() {
  return (
    <Section id="hero" center className="bg-black min-h-[calc(100vh-4rem)] ">
      <div className="text-center z-10">
        <h1 className="font-lily text-9xl text-amber-400">Quibeez</h1>
        <h2 className="font-poppins text-6xl font-light uppercase">
          Restaurant
        </h2>

        <div className="mt-24 flex items-center justify-center gap-3">
          <div className="h-1 w-24 bg-white" />
          <p className="font-poppins text-lg text-italic">Free Home Delivery</p>
          <div className="h-1 w-24 bg-white" />
        </div>
      </div>
      <div className="bg-[url('/src/assets/hero.png')]  bg-cover bg-center bg-no-repeat absolute inset-10 z-0 rounded-4xl"></div>
    </Section>
  );
}
