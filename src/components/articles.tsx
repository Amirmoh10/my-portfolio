import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Articles() {
  return (
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
            I occasionally write articles that could help others pick up
            technologies I&apos;m passionate about.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Why is JSX HTML on steroids?</CardTitle>
              <CardDescription>Published on May 15, 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                An exploration of JSX and how it enhances HTML with powerful
                JavaScript capabilities.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full cursor-pointer" asChild>
                <a
                  href="https://medium.com/@b00051220/why-is-jsx-html-on-steroids-f64807fb582"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Understanding the React build workflow and the folder structure
              </CardTitle>
              <CardDescription>Published on March 22, 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                A comprehensive guide to React&apos;s build process and
                organizing your project files effectively.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full cursor-pointer" asChild>
                <a
                  href="https://dev.to/amirmoh10/understanding-the-react-build-workflow-and-the-folder-structure-3hlc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cool kids handle state with Hooks</CardTitle>
              <CardDescription>Published on January 10, 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                Learn how to leverage React Hooks for elegant and efficient
                state management in your applications.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full cursor-pointer" asChild>
                <a
                  href="https://dev.to/amirmoh10/cool-kids-handle-state-with-hooks-52p3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Level-up your JavaScript and React by building a Todo app
              </CardTitle>
              <CardDescription>Published on November 5, 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                A step-by-step tutorial to strengthen your JavaScript and React
                skills by creating a practical Todo application.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full cursor-pointer" asChild>
                <a
                  href="https://dev.to/amirmoh10/how-to-build-a-todo-app-using-some-of-the-best-coding-practices-in-javascript-and-react-4oem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article
                </a>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                Docs are boring, let&apos;s build a movie finder app to learn
                React hooks
              </CardTitle>
              <CardDescription>Published on September 18, 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500">
                A hands-on approach to mastering React hooks by developing an
                interactive movie finder application.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full cursor-pointer" asChild>
                <a
                  href="https://dev.to/amirmoh10/docs-are-boring-let-s-build-a-movie-finder-app-to-learn-react-hooks-usereducer-useeffect-and-usecontext-2nkc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Articles;
