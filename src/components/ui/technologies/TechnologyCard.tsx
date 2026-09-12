import type { ITechnology } from "../../../utils/types";

interface TechnologyProps {
  data: ITechnology;
  handleAdd: (technology: ITechnology) => void;
  stackList: ITechnology[];
}

const TechnologyCard = ({ data, handleAdd, stackList }: TechnologyProps) => {
  const { badge, category, difficulty, icon, name, description, rating, id } =
    data;
  const ids = stackList.map((ele) => ele.id);
  return (
    <div>
      <div className="flex justify-between items-center">
        <img src={icon} alt="icon" className="w-8"></img>
        <span className="text-xs py-1 px-3 rounded-full bg-yellow-500/50 border border-yellow-500">
          {badge}
        </span>
      </div>
      <p>{name}</p>
      <p>{description}</p>
      <div>
        <p>{category}</p>
        <p>{difficulty}</p>
        <p>{rating}</p>
      </div>
      <button
        onClick={() => handleAdd(data)}
        disabled={ids.includes(id)}
        className={`w-full ${ids.includes(id) ? "bg-green-600 cursor-not-allowed" : "bg-black cursor-pointer"}  rounded-md py-2 text-white`}
      >
        {ids.includes(id) ? "Added to stack" : "Add to stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
