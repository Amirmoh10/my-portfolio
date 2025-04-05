import { ArrowRight, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
      <section className="container px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-12 lg:py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <Avatar className="h-20 w-20 md:h-24 md:w-24">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback>AG</AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
            Amir Ghezala
          </h1>
          <p className="max-w-[700px] text-gray-500 text-sm md:text-base lg:text-xl">
            Web Developer specializing in modern JavaScript frameworks and
            responsive design
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

      <section
        id="experience"
        className="container px-4 sm:px-6 md:px-8 lg:px-10 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-5xl gap-6 md:gap-8">
          <div className="flex flex-col items-start gap-2 md:gap-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
              Experience
            </h2>
            <p className="max-w-[700px] text-gray-500 text-sm md:text-base lg:text-xl">
              My professional journey in web development
            </p>
          </div>
          <div className="grid gap-6 md:gap-8">
            <div className="flex flex-col gap-2 border-l pl-4 md:pl-6 relative">
              <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full -left-[4.5px] md:-left-[6.5px] top-2"></div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Senior Frontend Developer</h3>
                <p className="text-xs md:text-sm text-gray-500">
                  Tech Company • 2021 - Present
                </p>
              </div>
              <p className="text-sm md:text-base text-gray-500">
                Led the development of responsive web applications using React
                and Next.js. Implemented modern UI/UX designs and improved
                performance metrics by 40%.
              </p>
            </div>
            <div className="flex flex-col gap-2 border-l pl-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Frontend Developer</h3>
                <p className="text-sm text-gray-500">
                  Digital Agency • 2018 - 2021
                </p>
              </div>
              <p className="text-gray-500">
                Developed and maintained client websites using JavaScript, HTML,
                and CSS. Collaborated with designers to implement pixel-perfect
                interfaces.
              </p>
            </div>
            <div className="flex flex-col gap-2 border-l pl-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-2"></div>
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold">Junior Web Developer</h3>
                <p className="text-sm text-gray-500">Startup • 2016 - 2018</p>
              </div>
              <p className="text-gray-500">
                Built and maintained company website and internal tools. Gained
                experience with JavaScript frameworks and responsive design
                principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="articles"
        className="container px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-24 lg:py-32 bg-gray-50"
      >
        <div className="mx-auto grid max-w-5xl gap-8">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Articles
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sharing my knowledge and insights about web development
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Modern React Patterns</CardTitle>
                <CardDescription>Published on May 15, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  An exploration of modern React patterns and best practices for
                  building scalable applications.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="#">Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>CSS Grid Mastery</CardTitle>
                <CardDescription>Published on March 22, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  A comprehensive guide to mastering CSS Grid for complex
                  layouts and responsive designs.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="#">Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>JavaScript Performance</CardTitle>
                <CardDescription>Published on January 10, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Tips and techniques for optimizing JavaScript performance in
                  modern web applications.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="#">Read Article</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="container px-4 sm:px-6 md:px-8 lg:px-10 py-12 md:py-24 lg:py-32"
      >
        <div className="mx-auto grid max-w-5xl gap-8">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Skills
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Technologies and tools I specialize in
            </p>
          </div>
          <div className="grid gap-4">
            <div>
              <h3 className="font-semibold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">HTML5</Badge>
                <Badge variant="secondary">CSS3</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">SASS</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Express</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">REST API</Badge>
                <Badge variant="secondary">GraphQL</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Git</Badge>
                <Badge variant="secondary">GitHub</Badge>
                <Badge variant="secondary">VS Code</Badge>
                <Badge variant="secondary">Webpack</Badge>
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">CI/CD</Badge>
                <Badge variant="secondary">Jest</Badge>
                <Badge variant="secondary">Figma</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

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
