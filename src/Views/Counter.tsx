import { useMemo, useState } from "react";
import reactLogo from "./../assets/react.svg";
import viteLogo from "/vite.svg";
import CardHorizontal from "../components/CardHorizontal";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const hoursBlocks = useMemo(() => {
    const listHours = [];
    for (let i = 0; i < 6; i++) {
      listHours.push(`${i}:00 -${i + 1}:00 `);
    }
    return listHours;
  }, []);

  return (
    <div className="flex items-start gap-2 p-4">
      <div className="flex flex-1/12 flex-col gap-2">
        <CardHorizontal
          src={viteLogo}
          title="Vite"
          description="Compilador del proyecto Test React"
        />
        <CardHorizontal
          src={reactLogo}
          title="React"
          description="Framework a utilizar en el proyecto"
        />
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
          {hoursBlocks.map((hours, index) => {
            return (
              <button
                key={index}
                className="flex-1 cursor-pointer rounded-md border px-4 py-1 transition-all"
              >
                {hours}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col items-start gap-2">
          {hoursBlocks.slice(0, 4).map((hours, index) => {
            return (
              <button
                key={index}
                className="flex-1 cursor-pointer rounded-md border px-4 py-1 transition-all"
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
  );
};

export default CounterPage;
