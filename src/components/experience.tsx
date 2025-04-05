const Experience = () => {
  return (
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
            My professional journey in software development
          </p>
        </div>
        <div className="grid gap-6 md:gap-8">
          <div className="flex flex-col gap-2 border-l pl-4 md:pl-6 relative">
            <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full -left-[4.5px] md:-left-[6.5px] top-2"></div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">Hybrid Heroes</h3>
              <p className="text-xs md:text-sm text-gray-500">
                Germany (Remote) • Feb 2023 - Present
              </p>
            </div>
            <ul className="text-sm md:text-base text-gray-600 list-disc pl-5 space-y-2">
              <li>
                Develop mobile and web apps using technologies such as React,
                React Native, TypeScript, and Redux.
              </li>
              <li>
                Develop and maintain features for the company&apos;s website,
                leveraging Next.js and Directus headless CMS.
              </li>
              <li>
                Contribute to projects from idea to launch and beyond within
                cross-functional teams, including designers and backend
                developers.
              </li>
              <li>
                Conduct code reviews to ensure adherence to best practices and
                code quality.
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 border-l pl-4 md:pl-6 relative">
            <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full -left-[4.5px] md:-left-[6.5px] top-2"></div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">Cognigy</h3>
              <p className="text-xs md:text-sm text-gray-500">
                Germany (Remote) • May 2022 - Feb 2023
              </p>
            </div>
            <ul className="text-sm md:text-base text-gray-600 list-disc pl-5 space-y-2">
              <li>Work on the frontend of Cognigy AI application.</li>
              <li>
                Use technologies such as React, TypeScript, Redux, and Cypress
                to write type-safe and tested code.
              </li>
              <li>
                Collaborate closely with designers and product managers to
                deliver features.
              </li>
              <li>Present features I build every sprint.</li>
              <li>Conduct code reviews daily.</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 border-l pl-4 md:pl-6 relative">
            <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full -left-[4.5px] md:-left-[6.5px] top-2"></div>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold">Ahrefs</h3>
              <p className="text-xs md:text-sm text-gray-500">
                Germany (Remote) • Mar 2021 - May 2022
              </p>
            </div>
            <ul className="text-sm md:text-base text-gray-600 list-disc pl-5 space-y-2">
              <li>
                Independently translated Figma design mock-ups into live user
                interfaces using React and CSS.
              </li>
              <li>Interacted with Backend APIs to fetch data.</li>
              <li>
                Worked in an environment of keen code reviews and testing.
              </li>
              <li>
                Collaborated with designers to implement and maintain accessible
                components in a design system used across the company&apos;s
                teams.
              </li>
              <li>
                Implemented
                <a
                  href="https://ahrefs.com/vs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:underline"
                >
                  pages
                </a>{" "}
                on a Gatsby static site.
              </li>
              <li>Contributed to open source projects.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
