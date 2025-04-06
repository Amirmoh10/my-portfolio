import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Projects = () => {
  return (
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
              <CardTitle>Ticket Bounty</CardTitle>
              <CardDescription>
                Next.js 15.2, React 19, TypeScript, PostgreSQL with Prisma ORM,
                Zod, Shadcn/ui
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/placeholder.svg"
                  alt="Ticket Bounty"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 text-gray-500">
                The application serves as an excellent example of a modern web
                application that follows industry best practices while
                maintaining clean code and a great user experience. It
                demonstrates proficiency in:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Modern React patterns and best practices</li>
                <li>Full-stack development with Next.js</li>
                <li>Database design and ORM usage</li>
                <li>Multiple rendering strategies (SSR, SSG, ISR, CSR)</li>
                <li>Advanced caching and data revalidation techniques</li>
                <li>
                  Type-safe programming with TypeScript and Zod validation
                </li>
                <li>UI/UX design principles</li>
                <li>State management and data flow</li>
                <li>Component architecture and reusability</li>
                <li>Performance optimization techniques</li>
              </ul>
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
  );
};

export default Projects;
