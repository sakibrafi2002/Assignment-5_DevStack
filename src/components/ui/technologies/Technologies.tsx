import type { ITechnology } from "../../../utils/types";
import TechnologyCard from "./TechnologyCard";


const Technologies = ({ data }: { data: ITechnology[] }) => {
    
  return (
    <div>
      {/* text */}
      <div>
        <h1 className="text-2xl font-semibold ">Explore the ,<span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent font-bold text-4xl">Technologies</span></h1>
        <p className="text-sm text-gray-500">Pick one technology per category to build your ideal stack.</p>
      </div>
      {/* card */}
      <div className="grid grid-cols-4 gap-4">
        {/* technologies */}
        <div className="col-span-3 grid grid-cols-3 gap-4">
          {data.map((ele) => {
            return (
              <div key={ele.id}>
                <TechnologyCard data={ele}></TechnologyCard>
              </div>
            );
          })}
        </div>
        {/* panel */}
        <div className="col-span-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptate.</div>
      </div>
    </div>
  );
};

export default Technologies;
