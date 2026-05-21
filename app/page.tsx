"use client";

import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("All");

  const logo =
    "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF7HCuEyUp4bJL56GzTF7X-wm5-YZkZe-wJBOWVvN_OjonlYET2scydstUEs3oAjmErnpJCmc4vNiemkAI0z6mNYr4Uz8tjGYQYmz-3NolTaTKhHJxbVOrLV_YR5NUYo10nSnb01G69BRQ4=s680-w680-h510-rw";

  const menu = [
    { name: "Veg Jhol Momo", category: "Veg", image: "https://junifoods.com/wp-content/uploads/2024/06/Jhol-Momo-in-spicy-tomato-sauce-nepali-recipe.jpg" },
    { name: "Chicken Jhol Momo", category: "Non Veg", image: "https://thebuzznepal.com/wp-content/uploads/2023/07/Untitled-design-6-10.png" },
    { name: "Veg Fried Momo", category: "Veg", image: "https://www.brahminsfoods.com/wp-content/uploads/2020/11/Fried-veg-Momo.jpg" },
    { name: "Chicken Fried Momo", category: "Non Veg", image: "https://bakaasur.com/wp-content/uploads/2022/12/fried-momo-recipe.jpg" },
    { name: "Chicken Steam Momo", category: "Non Veg", image: "https://delishglobe.com/wp-content/uploads/2025/05/Nepalese-Momo.png" },
    { name: "Veg Steam Momo", category: "Veg", image: "https://junifoods.com/wp-content/uploads/2023/11/Easy-Chicken-Momo-Dumplings-Sajilo-Kukhura-ko-Momo-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%95%E0%A5%81%E0%A4%96%E0%A5%81%E0%A4%B0%E0%A4%BE%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%AE-500x375.jpg" },
    { name: "Chicken Kothey Momo", category: "Non Veg", image: "https://media.licdn.com/dms/image/v2/D4E12AQGT7B3MzARcHA/article-cover_image-shrink_720_1280/B4EZnIA8ksKkAM-/0/1759997316370?e=2147483647&v=beta&t=72Ea8EZtxDHCBN0JT-Lq-nMTn3dgqQGyGArzsGj7jeM" },
    { name: "Veg Kothey Momo", category: "Veg", image: "https://c.ndtvimg.com/2023-06/i0vbgkio_pan-fried-momos_625x300_08_June_23.jpg" },
    { name: "Veg Zenkai Noodles", category: "Noodles", image: "https://static.vecteezy.com/system/resources/thumbnails/068/033/112/small/close-up-of-ramen-noodles-held-with-chopsticks-photo.jpg" },
    { name: "Chicken Zenkai Noodles", category: "Noodles", image: "https://i2.wp.com/eatmovemake.com/wp-content/uploads/2022/08/turkey-ramen-noodle-casserole.jpg" },
  ];

  const filteredMenu =
    filter === "All" ? menu : menu.filter((item) => item.category === filter);

  const filters = ["All", "Veg", "Non Veg", "Noodles"];

  return (
    <main className="bg-[#070707] text-white min-h-screen overflow-x-hidden scroll-smooth">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-orange-500/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <img src={logo} alt="Zenkai Logo" className="w-14 h-14 rounded-full object-cover" />

          <nav className="hidden md:flex gap-8 font-semibold">
            <a href="#">Home</a>
            <a href="#menu">Menu</a>
            <a href="#delivery">Zomato / Swiggy</a>
          </nav>

          <a
            href="#visit"
            className="bg-gradient-to-r from-red-600 to-orange-500 px-5 py-3 rounded-xl font-black"
          >
            Visit Shop
          </a>
        </div>
      </header>

      <section className="relative text-center px-4 pt-14 pb-10 bg-[radial-gradient(circle_at_top,#ff5e0025,transparent_35%),radial-gradient(circle_at_bottom,#ff880015,transparent_25%)]">
        <img src={logo} alt="Zenkai" className="w-24 h-24 mx-auto rounded-full object-cover mb-5" />

        <h1 className="text-6xl md:text-9xl font-black">ZENKAI</h1>

        <p className="mt-4 text-2xl md:text-5xl font-bold text-orange-300">
          Premium Momos & Noodles
        </p>

        <div className="mt-8 inline-block bg-[#111] border border-orange-500/30 px-10 py-6 rounded-[35px]">
          <p className="text-orange-400 text-xl font-black">SPECIAL OFFER</p>
          <h2 className="text-7xl font-black mt-2">₹99</h2>
          <p className="text-zinc-400 mt-2 font-semibold">All Items</p>
        </div>

        <div className="mt-8">
          <a
            href="#menu"
            className="inline-block bg-gradient-to-r from-red-600 to-orange-500 px-10 py-4 rounded-full font-black active:scale-95 hover:scale-105 transition"
          >
            View Menu
          </a>
        </div>
      </section>

      <section id="menu" className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-orange-400 font-black tracking-[5px] uppercase">
            Zenkai Kitchen
          </p>
          <h2 className="text-5xl md:text-7xl font-black mt-4">Our Premium Menu</h2>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {filters.map((btn) => (
              <button
                key={btn}
                onClick={() => setFilter(btn)}
                className={`px-8 py-3 rounded-full font-black active:scale-95 transition ${
                  filter === btn
                    ? "bg-gradient-to-r from-orange-600 to-orange-400 text-white"
                    : btn === "Veg"
                    ? "border border-green-500 text-green-400"
                    : btn === "Non Veg"
                    ? "border border-red-500 text-red-400"
                    : "border border-orange-500 text-orange-300"
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {filteredMenu.map((item) => {
            const isVeg = item.category === "Veg";

            return (
              <div
                key={item.name}
                className="group bg-[#111] border border-orange-500/10 rounded-[28px] overflow-hidden hover:-translate-y-2 hover:border-orange-500/40 active:scale-95 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                  />

                  <span
                    className={`absolute top-4 left-4 px-4 py-2 rounded-full text-xs font-black text-white ${
                      isVeg ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {isVeg ? "VEG" : item.category === "Noodles" ? "NOODLES" : "NON VEG"}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold">{item.name}</h3>

                  <div className="flex items-center justify-between mt-5">
                    <p className="text-3xl font-black text-orange-400">₹99</p>
                    <span className="text-sm text-zinc-400">Visit shop</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="delivery" className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <a className="bg-red-500/10 border border-red-500/30 rounded-[28px] p-8 font-black text-3xl">
            Order on Zomato
          </a>
          <a className="bg-orange-500/10 border border-orange-500/30 rounded-[28px] p-8 font-black text-3xl">
            Order on Swiggy
          </a>
        </div>
      </section>

      <section id="visit" className="max-w-7xl mx-auto px-4 pb-12">
        <div className="bg-white/5 border border-white/10 rounded-[35px] p-8 text-center">
          <h2 className="text-4xl font-black">Visit Our Shop</h2>
          <p className="mt-4 text-zinc-300">
            Address: Gate No, C, Unitech Gate 1, 
            1, New Town Rd, opposite Unitch, DJ Block(Newtown), 
            Action Area I, Nkda Marekt, N
            ewtown, Chakpachuria, West Bengal 700107.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#" className="px-6 py-3 rounded-full border border-pink-500 text-pink-400 font-bold">Instagram</a>
            <a href="#" className="px-6 py-3 rounded-full border border-blue-500 text-blue-400 font-bold">Facebook</a>
            <a href="#" className="px-6 py-3 rounded-full border border-red-500 text-red-400 font-bold">YouTube</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-orange-500/10 py-8 text-center text-zinc-500">
        © 2026 Zenkai Kitchen. All Rights Reserved.
      </footer>
    </main>
  );
}