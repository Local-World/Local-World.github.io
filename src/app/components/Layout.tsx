import { useState } from "react";
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

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50 md:sticky md:border-b md:border-neutral-200 md:bg-white md:backdrop-blur-none">
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
          <Link
            to="/"
            className="hidden text-2xl font-semibold tracking-tight text-neutral-900 transition-colors md:inline-flex md:text-3xl"
          >
            LOCALWORLD
          </Link>

          <nav className="hidden md:flex flex-wrap justify-center gap-6 text-sm md:text-base">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`tracking-wide transition-colors whitespace-nowrap px-2 py-1 ${
                  isActive(item.to)
                    ? "text-neutral-900 border-b-2 border-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Drawer direction="top" open={drawerOpen} onOpenChange={setDrawerOpen}>
              <DrawerTrigger asChild>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/20 bg-black/50 text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm transition hover:bg-black/70"
                  aria-label="Abrir menú"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </DrawerTrigger>

              <DrawerContent className="rounded-b-3xl border border-neutral-200 bg-white shadow-xl">
                <DrawerHeader className="border-b border-neutral-200 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-neutral-900">Navegación</span>
                    <DrawerClose asChild>
                      <button
                        type="button"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-neutral-200 text-neutral-700 transition hover:bg-neutral-100"
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
                          ? "bg-neutral-900 text-white"
                          : "text-neutral-900 hover:bg-neutral-100"
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
      <footer className="border-t border-neutral-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="tracking-tight text-neutral-900 mb-4">DOCUMENTALES</h3>
              <p className="text-neutral-600 text-sm">
                Reportajes y documentales de investigación.
              </p>
            </div>
            <div>
              <h4 className="tracking-tight text-neutral-900 mb-4">SECCIONES</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="text-neutral-600 hover:text-neutral-900">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/noticias" className="text-neutral-600 hover:text-neutral-900">
                    Noticias
                  </Link>
                </li>
                <li>
                  <Link to="/reportajes" className="text-neutral-600 hover:text-neutral-900">
                    Reportajes
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-neutral-600 hover:text-neutral-900">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="tracking-tight text-neutral-900 mb-4">CONTACTO</h4>
              <p className="text-neutral-600 text-sm">
                localworld42@gmail.com
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-500">
            © 2026 LocalWorld. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
