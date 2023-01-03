import { Children } from "@/interfaces";

const Layout = ({ children }: Children) => {
  return (
    <div className="container max-w-full bg-white dark:bg-gray-900 dark:text-white">
      <main className="flex min-h-screen items-center justify-center">{children}</main>
    </div>
  );
};

export default Layout;
