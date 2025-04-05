"use client";

import { Github, Linkedin, Mail, Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]">
        <div className="flex flex-col gap-6 px-2 py-6">
          <Link
            href="#experience"
            className="text-lg font-medium transition-colors hover:text-foreground/80"
          >
            Experience
          </Link>
          <Link
            href="#articles"
            className="text-lg font-medium transition-colors hover:text-foreground/80"
          >
            Articles
          </Link>
          <Link
            href="#skills"
            className="text-lg font-medium transition-colors hover:text-foreground/80"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium transition-colors hover:text-foreground/80"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium transition-colors hover:text-foreground/80"
          >
            Contact
          </Link>

          <div className="flex items-center gap-4 mt-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:hello@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
