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
                  src="/ticket-bounty.png"
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
              <div className="text-sm text-muted-foreground mt-2 italic">
                Note: Some features are still in development, including
                authentication, sorting, pagination, password reset, email
                integration, and the core bounty payout feature.
              </div>
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
                <Link
                  href="https://ticket-bounty-jet.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://github.com/Amirmoh10/ticket-bounty"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Products Finder</CardTitle>
              <CardDescription>
                React 19, TypeScript, PostgreSQL with Drizzle ORM, Honojs, Vite
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/products-finder.png"
                  alt="Products Finder"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 text-gray-500">
                Products finder is an app that fetches and renders product data
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
                <li>
                  Full product search functionality with advanced filtering by
                  brand, barcode, name, and manufacturer
                </li>
                <li>
                  Real-time product querying with responsive loading states
                </li>
                <li>Modern, responsive UI with clean card-based interface</li>
                <li>Type-safe database schema and queries using Drizzle ORM</li>
                <li>
                  REST API built with Hono for efficient server-side processing
                </li>
                <li>
                  Optimized database structure with foreign key relationships
                </li>
                <li>Type safety with TypeScript for reliable code quality</li>
                <li>
                  Efficient state management with useReducer and context
                  patterns
                </li>
                <li>
                  Environment-aware configuration for development and production
                </li>
                <li>Database migration system for schema version control</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://products-finder.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://github.com/Amirmoh10/products-finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cognigy Chat Bot</CardTitle>
              <CardDescription>
                React 17, TypeScript, Redux Toolkit, Material UI, Emotion,
                Cognigy Socket Client, Jest, React Testing Library
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/cognigy-chat-bot.png"
                  alt="Cognigy Chat Bot"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 text-gray-500">
                A real-time chat interface that connects users with a Cognigy
                AI-powered chatbot. The application leverages WebSocket
                technology to enable communication between users and the bot,
                with support for both text and image-based responses.
              </p>
              <p className="mt-2 text-gray-600 font-medium">
                Implemented features:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>
                  Real-time chat interface with Cognigy AI-powered bot using
                  WebSocket communication
                </li>
                <li>State management with Redux Toolkit</li>
                <li>Loading states and error handling</li>
                <li>Test suite with Jest and React Testing Library</li>
                <li>Responsive UI</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://cognigy-chat-bot.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://github.com/Amirmoh10/cognigy-chat-bot"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Portfolio Website</CardTitle>
              <CardDescription>
                Next.js 15.2, React 19, TypeScript, Tailwind CSS, Shadcn/ui,
                Radix UI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/portfolio.png"
                  alt="Portfolio Website"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 text-gray-500">
                A minimalist portfolio website showcasing my work, skills, and
                professional experience in software development.
              </p>
              <p className="mt-2 text-gray-600 font-medium">
                Implemented features:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Responsive layout</li>
                <li>
                  Reusable components from Shadcn/ui and Radix UI for
                  accessibility
                </li>
                <li>Mobile navigation with slide-out menu</li>
                <li>React Server Components for improved performance</li>
                <li>Static Site Generation (SSG) for fast page loads</li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://portfolio-r88ul0ep0-amirmoh10s-projects.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://github.com/Amirmoh10/my-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
