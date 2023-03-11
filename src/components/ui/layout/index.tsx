import { twJoin } from "tailwind-merge";
import { ChildrenProps } from "~/types";

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className={twJoin("container max-w-full", "bg-white", "dark:bg-gray-900 dark:text-white")}>
      <main className="flex min-h-screen items-center justify-center">{children}</main>
    </div>
  );
};

export default Layout;
