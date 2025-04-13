import { Badge } from "./ui/badge";

const Skills = () => {
  return (
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
            Technologies and tools I specialize in.
          </p>
        </div>
        <div className="grid gap-4">
          <div>
            <h3 className="font-semibold mb-4">PROGRAMMING LANGUAGES</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">HTML5</Badge>
              <Badge variant="secondary">CSS3</Badge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">
              FRONTEND LIBRARIES / FRAMEWORKS
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">React Native</Badge>
              <Badge variant="secondary">Redux</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TailwindCSS</Badge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">BACKEND TECHNOLOGIES</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">SQL</Badge>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">TESTING LIBRARIES / TOOLS</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Cypress</Badge>
              <Badge variant="secondary">Jest</Badge>
              <Badge variant="secondary">React Testing Library</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
