import { memo } from "react";
import { FaGithub } from "react-icons/fa";
import { twJoin } from "tailwind-merge";

export const GithubButton = () => {
  return (
    <a href="https://github.com/haikelz/vite-starter" rel="noreferrer noopener">
      <button
        className={twJoin(
          "flex items-center justify-center gap-2 rounded-md",
          "bg-blue-500 px-4 py-2",
          "text-white transition-all duration-200 ease-in-out hover:bg-blue-600"
        )}
      >
        Github <FaGithub size="20" />
      </button>
    </a>
  );
};

memo(GithubButton);
