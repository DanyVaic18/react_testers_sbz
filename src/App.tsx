import { Link, useLocation } from "wouter";
import AppWRoutes from "./router/AppWRoutes";
import reactLogo from "./assets/react.svg";

const TABS = [
  { id: 0, name: "Home", text: "Inicio", href: "/" },
  { id: 1, name: "initProyect", text: "Contador", href: "/init-react-vite" },
];

function App() {
  const [pathName] = useLocation();
  return (
    <div className="flex h-[100vh] flex-col bg-neutral-100">
      <header className="bg-slate-700 text-neutral-50">
        <nav className="flex justify-between p-3">
          <div className="flex items-center gap-2">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <h3>Tester React</h3>
          </div>
          <ul className="flex justify-between gap-4 px-4">
            {TABS.map((tab) => {
              return (
                <li key={tab.id} className="flex items-center">
                  <Link
                    href={tab.href}
                    className={`cursor-pointer rounded-md border px-4 py-1 transition-all ${pathName === tab.href ? "text-amber-400" : ""}`}
                  >
                    {tab.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <AppWRoutes />
    </div>
  );
}

export default App;
