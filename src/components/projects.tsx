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
          <Card className="h-fit">
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
                A platform that allows users to create tickets/tasks with
                bounties attached. Users can earn money by completing tickets
                posted by others, creating an incentive-based task marketplace.
              </p>
              <p className="mt-2 text-gray-500 italic">
                Note: Some features are still in development, including
                authentication, sorting, pagination, password reset, email
                integration, and the core bounty payout feature.
              </p>
              <p className="mt-2 text-gray-600 font-medium">
                Implemented features:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>
                  Full ticket lifecycle management (create, read, update,
                  delete) with status tracking (Open, In Progress, Done)
                </li>
                <li>
                  Modern, responsive UI with dark/light theme support and clean
                  card-based interface
                </li>
                <li>
                  Multiple rendering patterns including SSR, SSG, ISR, and React
                  Server Components for optimal performance
                </li>
                <li>
                  Advanced caching strategies with request memoization and data
                  revalidation
                </li>
                <li>
                  Type safety with TypeScript and Zod validation for forms and
                  API responses
                </li>
                <li>
                  PostgreSQL database with Prisma ORM for type-safe database
                  operations
                </li>
                <li>
                  Component-based architecture with error boundaries and
                  efficient state management
                </li>
                <li>
                  Performance optimization with suspense, streaming, and loading
                  states
                </li>
                <li>
                  Accessibility-focused design with responsive layouts and
                  modern UI components from shadcn/ui
                </li>
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
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Product Finder</CardTitle>
              <CardDescription>
                Next.js 12, React 17, CSS Modules, API Integration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/placeholder.svg"
                  alt="Product Finder"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 text-gray-500">
                Product finder is an app that fetches and renders product data
                offered by the Barcode Lookup API service. It allows users to
                search for product information to render this information as a
                card. The user can either search for a product using a keywords
                search or take advantage of the advanced search modal that
                offers additional filters.
              </p>
              <p className="mt-2 text-gray-600 font-medium">
                Implemented features:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Product search using keywords or advanced filters</li>
                <li>Responsive UI that works well on mobile and desktop</li>
                <li>Product card display with key information</li>
                <li>Store availability modal showing pricing and links</li>
                <li>
                  Clean, minimalist design with attention to user experience
                </li>
                <li>Server-side API integration with error handling</li>
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
