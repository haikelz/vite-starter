import { memo } from "react";
import { FaGithub } from "react-icons/fa";
import { twJoin } from "tailwind-merge";

export function GithubButton() {
  return (
    <a href="https://github.com/haikelz/vite-starter" rel="noopener noreferrer" target="_blank">
      <button
        type="button"
        aria-label="github"
        className={twJoin(
          "flex items-center justify-center space-x-2 rounded-md",
          "bg-blue-500 px-4 py-2 text-white",
          "transition-all duration-200 ease-in-out",
          "hover:bg-blue-600"
        )}
      >
        <span>Github</span>
        <FaGithub size="20" />
      </button>
    </a>
  );
}

memo(GithubButton);
