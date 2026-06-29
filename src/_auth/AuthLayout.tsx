import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";
import ThemeToggle from "@/components/shared/ThemeToggle";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10 relative">
            <div className="absolute top-4 right-4">
              <ThemeToggle />
            </div>
            <Outlet />
          </section>

          <img
            src="/assets/images/collage.avif"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
}
