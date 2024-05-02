"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/utils/hero-highlight";
import SearchBar from "./SearchBar";

function Hero() {
  return (
    <HeroHighlight className=" flex flex-col">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 mb-12 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        With PreferShop let us help you choose a product that best fits your{" "}
        <Highlight className="text-black dark:text-white">
          Needs, Wallet and Style
        </Highlight>
      </motion.h1>
      <SearchBar />
    </HeroHighlight>
  );
}

export default Hero;