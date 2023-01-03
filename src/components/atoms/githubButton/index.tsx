import { FaGithub } from "react-icons/fa";

const GithubButton = () => {
  return (
    <a href="https://github.com/haikelz/vite-template" rel="github link">
      <button className="flex items-center justify-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white transition-all duration-200 ease-in-out hover:bg-blue-600">
        Github <FaGithub size="20" />
      </button>
    </a>
  );
};

export default GithubButton;
