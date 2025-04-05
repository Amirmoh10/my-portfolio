import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="container px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-12 lg:py-24">
      <div className="flex flex-col items-center gap-4 text-center">
        <Avatar className="h-20 w-20 md:h-24 md:w-24">
          <AvatarImage src="/avatar.png" alt="Profile" />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
          Amir Ghezala
        </h1>
        <p className="max-w-[700px] text-gray-500 text-sm md:text-base lg:text-xl">
          Fullstack Software Engineer crafting performant web applications with
          modern technologies and clean architecture
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <Button asChild>
            <Link href="#contact">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
