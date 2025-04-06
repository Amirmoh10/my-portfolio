import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <nav className="flex flex-col gap-4">
          <Link href="#experience" className="block px-2 py-1 text-lg">
            Experience
          </Link>
          <Link href="#articles" className="block px-2 py-1 text-lg">
            Articles
          </Link>
          <Link href="#skills" className="block px-2 py-1 text-lg">
            Skills
          </Link>
          <Link href="#projects" className="block px-2 py-1 text-lg">
            Projects
          </Link>
          <Link href="#contact" className="block px-2 py-1 text-lg">
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background flex justify-center">
      <div className="container flex h-16 items-center justify-between px-4 md:px-4 lg:px-0">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#experience" className="text-sm font-medium">
            Experience
          </Link>
          <Link href="#articles" className="text-sm font-medium">
            Articles
          </Link>
          <Link href="#skills" className="text-sm font-medium">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium">
            Contact
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
