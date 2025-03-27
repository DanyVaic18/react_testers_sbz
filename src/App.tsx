import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const TABS = [
  { id: 0, name: "Home", text: "Inicio" },
  { id: 1, name: "initProyect", text: "Contador" },
];

function App() {
  const [controlTabs, setControlTab] = useState(1);
  const [count, setCount] = useState(0);

  const hoursBlocks = useMemo(() => {
    const listHours = [];
    for (let i = 0; i < 6; i++) {
      listHours.push(`${i}:00 -${i + 1}:00 `);
    }
    return listHours;
  }, []);

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

      {controlTabs === 1 ? (
        <div className="flex items-start gap-2 p-4">
          <div className="flex flex-1/12 flex-col gap-2">
            <div className="inline-flex rounded-md border-2 border-sky-500">
              <img src={viteLogo} className="m-auto h-18 p-2" alt="Vite logo" />
              <div className="border-l-2 border-sky-500 p-2">
                <h3>Vite</h3>
                <p>Compilador del proyecto Test React</p>
              </div>
            </div>
            <div className="inline-flex rounded-md border-2 border-sky-500">
              <img
                src={reactLogo}
                className="m-auto h-18 p-2"
                alt="React logo"
              />
              <div className="border-l-2 border-sky-500 p-2">
                <h3>React</h3>
                <p>Framework a utilizar en el proyecto</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1/4 flex-col items-center gap-2 rounded-lg border-2 border-slate-700 bg-gradient-to-tl from-slate-200 to-slate-100 py-4">
            <h3>Contador Feliz</h3>
            <div className="inline-flex">
              <h3>Total</h3>
              <button className="mt-1 ml-4 h-10 w-10 rounded-full bg-slate-700 text-xl font-bold text-amber-400">
                {count}
              </button>
            </div>
            <div className="flex justify-center gap-4">
              <button
                className="mt-1 h-10 w-10 cursor-pointer rounded-full bg-slate-700 text-xl font-bold text-amber-400"
                onClick={() => setCount((count) => count + 1)}
              >
                +1
              </button>
              <button
                className="mt-1 h-10 w-10 cursor-pointer rounded-full bg-slate-700 text-xl font-bold text-amber-400"
                onClick={() => setCount(0)}
              >
                0
              </button>
              <button
                className="mt-1 h-10 w-10 cursor-pointer rounded-full bg-slate-700 text-xl font-bold text-amber-400"
                onClick={() => setCount((count) => count - 1)}
              >
                -1
              </button>
            </div>
          </div>
          <div className="flex h-[280px] flex-1/4 gap-4">
            <div className="flex flex-col items-start gap-2">
              {hoursBlocks.map((hours) => {
                return (
                  <button
                    className={`flex-1 cursor-pointer rounded-md border px-4 py-1 transition-all`}
                  >
                    {hours}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col items-start gap-2">
              {hoursBlocks.slice(0, 4).map((hours) => {
                return (
                  <button
                    className={`flex-1 cursor-pointer rounded-md border px-4 py-1 transition-all`}
                  >
                    {hours}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col items-start gap-2">
              <button className="flex-1 cursor-pointer rounded-md border px-4 py-1 transition-all">
                0:00 -1:00{" "}
              </button>
              <button className="flex-1 cursor-pointer rounded-md border px-4 py-1 transition-all">
                1:00 -2:00{" "}
              </button>
              <button className="flex-1 cursor-pointer rounded-md border px-4 py-1 transition-all">
                2:00 -3:00{" "}
              </button>
              <button className="flex-1 cursor-pointer rounded-md border px-4 py-1 transition-all">
                3:00 -4:00{" "}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
