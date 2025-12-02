import { Section } from "../commum/section";

export function Hero() {
  return (
    <Section id="home" center className="min-h-[calc(100vh-4rem)] bg-black">
      <div className="z-10 text-center">
        <h1 className="font-lily text-9xl text-amber-400">Quibeez</h1>
        <h2 className="font-poppins text-6xl font-light uppercase">
          Restaurant
        </h2>

        <div className="mt-24 flex items-center justify-center gap-3">
          <div className="h-1 w-24 bg-white" />
          <p className="font-poppins text-italic text-lg">Free Home Delivery</p>
          <div className="h-1 w-24 bg-white" />
        </div>
      </div>
      <div className="absolute inset-10 z-0 rounded-4xl bg-[url('/src/assets/hero.png')] bg-cover bg-center bg-no-repeat"></div>
    </Section>
  );
}
