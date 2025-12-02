import { Section } from "../commum/section";

export function About() {
  return (
    <Section className="" center id="about">
      <div className="flex h-full w-1/2 flex-col justify-evenly py-5 pr-12">
        <h2 className="font-serif text-3xl text-black italic">About us</h2>
        <div>
          <h1 className="font-lily text-8xl text-shadow-2xs">Welcome</h1>
          <p className="indent-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="mt-5 indent-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <span className="text-amber w-fit rounded-full bg-white px-5 py-2 font-bold shadow-xl">
          Today's Menu
        </span>
      </div>
      <div className="relative h-full w-1/2">
        <img
          src="/src/assets/Rectangle 8.png"
          alt=""
          className="absolute right-0 bottom-1/4"
        />
        <img
          src="/src/assets/Rectangle 9.png"
          alt=""
          className="absolute bottom-1/6 left-0"
        />
      </div>
    </Section>
  );
}
