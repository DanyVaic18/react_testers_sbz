import { useState } from "react";
import reactLogo from "./assets/react.svg";
import HomePage from "./Views/home";
import CounterPage from "./Views/Counter";

const TABS = [
  { id: 0, name: "Home", text: "Inicio" },
  { id: 1, name: "initProyect", text: "Contador" },
];

function App() {
  const [controlTabs, setControlTab] = useState(1);

  return (
    <div className="flex h-[100vh] flex-col bg-neutral-100">
      <header className="h-14 bg-slate-700 text-neutral-50">
        <nav className="flex justify-between p-3">
          <div className="flex items-center gap-2">
            <img src={reactLogo} className="logo react" alt="React logo" />
            <h2>Tester React</h2>
          </div>
          <ul className="flex justify-between gap-4 px-4">
            {TABS.map((tab) => {
              return (
                <li key={tab.id}>
                  <button
                    className={`cursor-pointer rounded-md border px-4 py-1 transition-all ${controlTabs === tab.id ? "text-amber-400" : ""}`}
                    onClick={() => setControlTab(tab.id)}
                  >
                    {tab.text}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {controlTabs === 1 ? <CounterPage /> : <HomePage />}
    </div>
  );
}

export default App;
