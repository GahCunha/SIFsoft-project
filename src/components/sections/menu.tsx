import { Section } from "../commum/section";

export function Menu() {

   const items = [
    { name: "ALFAHAM", price: "460/-", img: "/src/assets/Ellipse 1.png" },
    { name: "KUZHI MANDHI", price: "800/-", img: "/src/assets/Ellipse 2.png" },
    { name: "CHICKEN BIRIYANI", price: "140/-", img: "/src/assets/Ellipse 3.png" },
    { name: "SHAWARMA", price: "110/-", img: "/src/assets/Ellipse 1.png" },
    { name: "BEEF POLLICHATHU", price: "180/-", img: "/src/assets/Ellipse 5.png" },
    { name: "FISH POLLICHATHU", price: "Seasonal", img: "/src/assets/Ellipse 6.png" }
  ];

  return (
    <Section className="center" id="menu">
      <h1 className="font-lily text-6xl text-shadow-2xs">- Our Menu -</h1>
      <div className="bg-black rounded-3xl p-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-5 text-white">
            <img src={item.img} alt={item.name} className="w-20 h-20 rounded-full object-cover"/>
            <div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm opacity-80">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-10 bg-white text-black px-6 py-2 rounded-full font-medium hover:scale-105 transition">Discover entire Menu</button>
    </Section>
  );
}
