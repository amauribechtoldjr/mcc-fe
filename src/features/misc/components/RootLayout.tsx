import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Navbar } from "@components/Navbar";

export const RootLayout = () => {
  return (
    <div className="bg-mwhite min-h-screen">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  );
};
