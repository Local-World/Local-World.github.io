import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
} from "../components/ui/drawer";

const navItems = [
  { to: "/", label: "INICIO" },
  { to: "/noticias", label: "NOTICIAS" },
  { to: "/reportajes", label: "REPORTAJES" },
  { to: "/portfolio", label: "PORTFOLIO" },
];

export function Layout() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-[#fff7f1] overflow-x-hidden">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50 bg-[#fff7f1] md:sticky md:border-b md:border-b-[#D9C3B3] md:backdrop-blur-none">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="hidden text-2xl font-semibold tracking-tight text-[#2E201D] transition-colors md:inline-flex md:text-3xl"
          >
            LOCALWORLD
          </Link>

          <nav className="hidden md:flex flex-wrap justify-center gap-6 text-sm md:text-base">
            {navItems.map((item) => {
              const activeStyles = {
                "/": "border-b-2 border-[#6E1F2A] text-[#6E1F2A]",
                "/noticias": "border-b-2 border-[#6E1F2A] text-[#6E1F2A]",
                "/reportajes": "border-b-2 border-[#6E1F2A] text-[#6E1F2A]",
                "/portfolio": "border-b-2 border-[#6E1F2A] text-[#6E1F2A]",
              };

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`tracking-wide transition-colors whitespace-nowrap px-2 py-1 ${
                    isActive(item.to)
                      ? activeStyles[item.to as keyof typeof activeStyles]
                      : "text-[#2E201D]/65 hover:text-[#6E1F2A]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Drawer direction="top" open={drawerOpen} onOpenChange={setDrawerOpen}>
              <DrawerTrigger asChild>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D9C3B3] bg-[#FFF4EA] text-[#2E201D] shadow-sm transition hover:bg-[#F3E6D8]"
                  aria-label="Abrir menú"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <path
                      d="M4 7h16M4 12h16M4 17h16"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </DrawerTrigger>

              <DrawerContent className="rounded-b-3xl border border-[#D9C3B3] bg-[#FFF4EA] shadow-xl">
                <DrawerHeader className="border-b border-[#D9C3B3] px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-[#2E201D]">Navegación</span>
                    <DrawerClose asChild>
                      <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#D9C3B3] text-[#2E201D] transition hover:bg-[#F3E6D8]"
                        aria-label="Cerrar menú"
                      >
                        <span className="text-xl">×</span>
                      </button>
                    </DrawerClose>
                  </div>
                </DrawerHeader>

                <div className="flex flex-col gap-3 px-5 py-5">
                  {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setDrawerOpen(false)}
                      className={`rounded-2xl px-4 py-4 text-base font-medium transition-colors ${
                        isActive(item.to)
                          ? "bg-[#6E1F2A]/10 text-[#6E1F2A] border-l-4 border-[#6E1F2A]"
                          : "text-[#2E201D] hover:bg-[#F3E6D8]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
       <footer className="border-t border-t-[#D9C3B3]/60 mt-24 bg-[#fff7f1] shadow-[inset_0_10px_18px_rgba(110,31,42,0.03)]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="tracking-tight text-[#2E201D] mb-4">DOCUMENTALES</h3>
              <p className="text-[#2E201D]/75 text-sm">
                Reportajes y documentales de investigación.
              </p>
            </div>

            <div>
              <h4 className="tracking-tight text-[#2E201D] mb-4">SECCIONES</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-[#2E201D]/75 hover:text-[#6E1F2A]">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/noticias" className="text-[#2E201D]/75 hover:text-[#6E1F2A]">
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link to="/reportajes" className="text-[#2E201D]/75 hover:text-[#6E1F2A]">
                    Reportajes
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-[#2E201D]/75 hover:text-[#6E1F2A]">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="tracking-tight text-[#2E201D] mb-4">CONTACTO</h4>
              <p className="text-[#2E201D]/75 text-sm">localworld42@gmail.com</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#D9C3B3] text-center text-sm text-[#2E201D]/60">
            © 2026 LocalWorld. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}