import { useState } from "react";
import type { ITechnology } from "../../../utils/types";
import TechnologyCard from "./TechnologyCard";
import { ToastContainer, toast } from "react-toastify";

const Technologies = ({ data }: { data: ITechnology[] }) => {
  const [stack, setStack] = useState<ITechnology[]>([]);

  const addToStack = (ele: ITechnology) => {
    setStack([ele, ...stack]);
    toast("Added to stack");
  };

  const deleteFromStack = (id: string) => {
    const stackList = stack.filter((ele) => ele.id !== id);
    setStack(stackList);
    toast("deleted from stack");
  };

  return (
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* text */}
      <div>
        <h1 className="text-4xl font-semibold ">
          Explore the
          <span className="ml-2 bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent font-bold text-4xl">
            Technologies
          </span>
        </h1>
        <p className="text-1xl text-gray-500 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      {/* card */}
      <div className="grid grid-cols-4 gap-4 mt-12">
        {/* technologies */}
        <div className="col-span-3 grid grid-cols-3 gap-8">
          {data.map((ele) => {
            return (
              <div key={ele.id}>
                <TechnologyCard
                  data={ele}
                  handleAdd={addToStack}
                  stackList={stack}
                ></TechnologyCard>
              </div>
            );
          })}
        </div>
        {/* panel */}
        <div className="col-span-1 space-y-3">
          <div>
            <p className="text-xl font-bold">Your Stack</p>
            <p className="text-sm text-gray-400">
              {stack.length} Technology selected
            </p>
          </div>
          {stack.length ? (
            <div className="space-y-2">
              {stack.map((ele) => {
                return (
                  <div
                    key={ele.id}
                    className="border border-gray-200 rounded-md p-2 flex justify-between items-center"
                  >
                    <div className="flex gap-2 shrink-0 flex-1">
                      <img src={ele.icon} className="w-6" alt="category" />
                      <div>
                        <p>{ele.name}</p>
                        <p className="text-xs text-gray-500">{ele.category}</p>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => deleteFromStack(ele.id)}
                        className="text-gray-400 cursor-pointer hover:text-red-400"
                      >
                        X
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className=" w-full px-3 py-6 border border-gray-300 text-center text-gray-400 rounded-md">
              No stack selected
            </div>
          )}
          {Boolean(stack.length) && (
            <button
              className="w-full py-3 rounded-md cursor-pointer text-red-400 border border-red-500 font-bold"
              onClick={() => setStack([]) }
            >
              Remove all
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
