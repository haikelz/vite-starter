import Layout from "@/components/templates/layout";
import DarkModeButton from "@/components/atoms/darkModeButton";
import GithubButton from "@/components/atoms/githubButton";

const App = () => {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center px-3 text-center">
        <div className="mb-2 flex gap-2">
          <h1 className="bg-gradient-to-br from-cyan-600 to-blue-700 bg-clip-text text-3xl font-bold text-transparent dark:from-cyan-300 dark:to-blue-500">
            Vite Starter
          </h1>
          <img src="/vite.svg" alt="Vite logo" />
        </div>
        <p className="text-lg">
          Another Vite Starter with <u>ReactJS</u>, <u>Typescript</u>, <u>TailwindCSS</u>, and{" "}
          <u>Jotai</u>.
        </p>
        <div className="mt-3 flex gap-4">
          <DarkModeButton />
          <GithubButton />
        </div>
      </section>
    </Layout>
  );
};

export default App;
