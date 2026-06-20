import Image from "next/image";

const skills = [
  "Python",
  "React",
  "Node.js",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "FastAPI",
  "Git",
  "GitHub",
  "Generative AI",
  "LLMs",
  "Prompt Engineering",
  "RAG",
  "REST APIs",
  "Postman",
];

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">

      {/* HERO */}

      <section className="mx-auto flex min-h-screen max-w-[1400px] items-center justify-between px-20">

        <div className="max-w-4xl">

          <p className="mb-6 text-lg text-zinc-500">
            Hello, I’m
          </p>

          <h1 className="text-8xl font-bold">
            Kshitij
          </h1>

          <h2 className="text-8xl font-bold text-zinc-600">
            Bhagat
          </h2>

          <p className="mt-10 text-2xl text-zinc-300">
            Software Developer • AI Engineer
          </p>

          <p className="mt-8 max-w-3xl text-2xl leading-10 text-zinc-500">
            Building AI-powered products, scalable backend systems,
            and interactive digital experiences.
          </p>

          <div className="mt-14 flex gap-6">

            <a
              href="#projects"
              className="
              rounded-2xl
              bg-white
              px-10
              py-4
              text-black
              hover:scale-105
              transition
              "
            >
              View Projects
            </a>

            <a
              href="/resume/Kshitij_Bhagat_Resume.pdf"
              target="_blank"
              className="
              rounded-2xl
              border
              border-zinc-700
              px-10
              py-4
              hover:bg-white
              hover:text-black
              transition
              "
            >
              Resume
            </a>

          </div>

        </div>

        <div className="relative">

          <div className="absolute -inset-10 rounded-full bg-zinc-700 blur-3xl opacity-20"/>

          <Image
            src="/images/profile.jpg"
            width={450}
            height={450}
            alt="Profile"
            className="
            h-[450px]
            w-[450px]
            rounded-full
            object-cover
            object-[55%_35%]
            "
          />

        </div>

      </section>

      <div className="mx-auto h-px max-w-7xl bg-zinc-900"/>

      {/* ABOUT */}

      <section className="mx-auto max-w-7xl px-12 py-32">

        <h2 className="text-5xl font-bold">
          About Me
        </h2>

        <p className="mt-12 max-w-5xl text-xl leading-10 text-zinc-400">

          I’m a B.Tech Computer Science graduate passionate about
          software development, Artificial Intelligence, and
          building products that solve real-world problems.

          <br/><br/>

          I enjoy creating intelligent experiences through
          backend systems, AI workflows, and interactive applications.

        </p>

      </section>

      {/* EXPERIENCE */}

      <section className="mx-auto max-w-7xl px-12 pb-32">

        <h2 className="mb-14 text-5xl font-bold">
          Experience
        </h2>

        <div className="space-y-8">

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 hover:border-white">

            <h3 className="text-3xl font-semibold">
              Research Intern
            </h3>

            <p className="mt-3 text-zinc-400">
              DRDO (SSPL)
            </p>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              Developed a task management dashboard,
              optimized workflows, and supported testing.
            </p>

          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10 hover:border-white">

            <h3 className="text-3xl font-semibold">
              Technical Solutions Associate
            </h3>

            <p className="mt-3 text-zinc-400">
              MyAnatomy
            </p>

            <p className="mt-8 text-lg leading-9 text-zinc-400">
              Supporting technical workflows,
              troubleshooting and solution delivery.
            </p>

          </div>

        </div>

      </section>

      {/* SKILLS */}

      <section className="mx-auto max-w-7xl px-12 pb-32">

        <h2 className="mb-14 text-5xl font-bold">
          Skills
        </h2>

        <div className="flex flex-wrap gap-5">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-950
              px-8
              py-4
              hover:border-white
              transition
              "
            >
              {skill}
            </div>
          ))}

        </div>

      </section>

        {/* PROJECTS */}

<section
  id="projects"
  className="mx-auto max-w-7xl px-12 pb-40"
>

  <h2 className="mb-14 text-5xl font-bold">
    Featured Projects
  </h2>

  <div className="grid gap-10">

    {/* AI NEXUS */}

    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">

      <Image
        src="/images/projects/ai-nexus.png"
        width={1600}
        height={900}
        alt="AI Nexus"
      />

      <div className="p-10">

        <h3 className="text-4xl font-semibold">
          AI Nexus
        </h3>

        <a
          href="https://ai-task-nexus.vercel.app"
          target="_blank"
          className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 text-black"
        >
          Live Demo
        </a>

      </div>

    </div>


    {/* SALESPILOT */}

    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">

      <Image
        src="/images/projects/salespilot.png"
        width={1600}
        height={900}
        alt="SalesPilot AI"
      />

      <div className="p-10">

        <h3 className="text-4xl font-semibold">
          SalesPilot AI
        </h3>

        <p className="mt-5 text-lg leading-8 text-zinc-400">
          AI-powered CRM dashboard for lead tracking,
          pipeline management and sales workflow organization.
          Built with Next.js and deployed on Vercel.
        </p>

        <div className="mt-8 flex gap-4">

          <a
            href="https://salespilot-ai-ruddy.vercel.app"
            target="_blank"
            className="
            rounded-2xl
            bg-white
            px-8
            py-4
            text-black
            "
          >
            Live Demo
          </a>

          <a
            href="https://github.com/Kshitij1102/salespilot-ai"
            target="_blank"
            className="
            rounded-2xl
            border
            border-zinc-700
            px-8
            py-4
            hover:bg-white
            hover:text-black
            transition
            "
          >
            GitHub
          </a>

        </div>

      </div>

    </div>


    {/* SNOWY */}

    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">

      <Image
        src="/images/projects/snowy.png"
        width={1600}
        height={900}
        alt="SNOWY"
      />

      <div className="p-10">

        <h3 className="text-4xl font-semibold">
          SNOWY AI
        </h3>

        <a
          href="https://snowyai11.netlify.app"
          target="_blank"
          className="mt-8 inline-block rounded-2xl bg-white px-8 py-4 text-black"
        >
          Demo
        </a>

      </div>

    </div>

  </div>

</section>


      {/* CONTACT */}

      <section className="mx-auto max-w-7xl px-12 pb-40">

        <h2 className="mb-10 text-5xl font-bold">
          Contact
        </h2>

        <div className="space-y-6 text-xl">

          <p className="text-zinc-400">
            Email: Kshitij.delhi11@gmail.com
          </p>

          <a
            href="https://github.com/Kshitij1102"
            target="_blank"
            className="block text-zinc-400 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/kshitij-delhi11/"
            target="_blank"
            className="block text-zinc-400 hover:text-white"
          >
            LinkedIn
          </a>

        </div>

      </section>

    </main>
  );
}