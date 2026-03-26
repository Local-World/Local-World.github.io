import { Link, Outlet, useLocation } from "react-router";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-neutral-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors">
              DOCUMENTALES
            </Link>
            <nav className="flex gap-8">
              <Link
                to="/"
                className={`tracking-wide transition-colors ${
                  isActive("/") && location.pathname === "/"
                    ? "text-neutral-900 border-b-2 border-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                INICIO
              </Link>
              <Link
                to="/noticias"
                className={`tracking-wide transition-colors ${
                  isActive("/noticias")
                    ? "text-neutral-900 border-b-2 border-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                NOTICIAS
              </Link>
              <Link
                to="/reportajes"
                className={`tracking-wide transition-colors ${
                  isActive("/reportajes")
                    ? "text-neutral-900 border-b-2 border-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                REPORTAJES
              </Link>
              <Link
                to="/portfolio"
                className={`tracking-wide transition-colors ${
                  isActive("/portfolio")
                    ? "text-neutral-900 border-b-2 border-neutral-900"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                PORTFOLIO
              </Link>
            </nav>
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
                Reportajes y documentales de investigación sobre historias que importan.
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
                contacto@documentales.com
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-neutral-200 text-center text-sm text-neutral-500">
            © 2026 Documentales. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
