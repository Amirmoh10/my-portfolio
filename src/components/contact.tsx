import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-5xl gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Get in Touch
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Interested in working together? Feel free to reach out.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild>
              <Link href="mailto:hello@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
