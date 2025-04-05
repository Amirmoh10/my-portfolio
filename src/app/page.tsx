import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Articles from "@/components/articles";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Articles />
      <Skills />
      <section
        id="projects"
        className="container px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-24 lg:py-32 bg-gray-50"
      >
        <div className="mx-auto grid max-w-5xl gap-8">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Projects
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Side projects and personal work I&apos;ve built
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>E-commerce Dashboard</CardTitle>
                <CardDescription>
                  React, TypeScript, Tailwind CSS
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/placeholder.svg"
                    alt="E-commerce Dashboard"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-4 text-gray-500">
                  A comprehensive dashboard for e-commerce stores with
                  analytics, inventory management, and order processing.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Demo</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Code</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Weather App</CardTitle>
                <CardDescription>Next.js, API Integration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/placeholder.svg"
                    alt="Weather App"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-4 text-gray-500">
                  A weather application that provides real-time forecasts,
                  historical data, and location-based weather information.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Demo</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Code</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Task Management App</CardTitle>
                <CardDescription>React, Redux, Node.js</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/placeholder.svg"
                    alt="Task Management App"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-4 text-gray-500">
                  A full-stack task management application with user
                  authentication, task categorization, and progress tracking.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Demo</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Code</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Website</CardTitle>
                <CardDescription>Next.js, Tailwind CSS</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/placeholder.svg"
                    alt="Portfolio Website"
                    width={400}
                    height={200}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-4 text-gray-500">
                  A minimalist portfolio website showcasing my work, skills, and
                  professional experience in web development.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Demo</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Code</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

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
    </>
  );
}
