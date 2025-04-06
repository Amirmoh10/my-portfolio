import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-0 flex justify-center">
      <div className="container flex flex-col items-center justify-between lg:px-0 gap-4 md:px-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
          © 2025 Amir Ghezala. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/Amirmoh10"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://www.linkedin.com/in/amir-ghezala-14643b179/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:amirmghezala@gmail.com">
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
