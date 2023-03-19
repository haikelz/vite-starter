import { twJoin } from "tailwind-merge";
import { DarkModeButton, GithubButton } from "~/components/ui/buttons";
import { ViteIcon } from "~/components/ui/svg/ViteIcon";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center px-3 py-2">
      <div className="mb-2 flex w-fit items-center justify-center space-x-2">
        <h1
          className={twJoin(
            "bg-gradient-to-br from-cyan-600 to-blue-700 bg-clip-text",
            "text-3xl font-bold text-transparent",
            "dark:from-cyan-300 dark:to-blue-500"
          )}
        >
          Vite Starter
        </h1>
        <ViteIcon />
      </div>
      <div className="flex w-fit flex-col items-center justify-center text-center">
        <p className="text-lg">
          Another Vite Starter with{" "}
          <a href="https://react.dev" rel="noopener noreferrer" target="_blank">
            <u>React JS</u>
          </a>
          ,{" "}
          <a href="https://typescriptlang.org/" rel="noopener noreferrer" target="_blank">
            <u>Typescript</u>
          </a>
          ,{" "}
          <a href="https://tailwindcss.com/" rel="noopener noreferrer" target="_blank">
            <u>TailwindCSS</u>
          </a>
          ,{" "}
          <a href="https://jotai.org/" rel="noopener noreferrer" target="_blank">
            and <u>Jotai</u>
          </a>
          .
        </p>
        <div className="mt-3 flex space-x-4">
          <DarkModeButton />
          <GithubButton />
        </div>
      </div>
    </section>
  );
}
