import type { ITechnology } from "../../../utils/types";
import { FaStar } from "react-icons/fa";

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
    <div className="bg-gray-50 p-05 rounded-r-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-2">
      <div className="flex justify-between items-center">
        <img src={icon} alt="icon" className="w-8"></img>
        <span className="text-xs py-1 px-3 rounded-full bg-blue-200 border border-white-600">
          {badge}
        </span>
      </div>
      <p className="font-bold">{name}</p>
      <p className="text-sm text-gray-500 mt-2 mb-2">{description}</p>
      <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
        <p className="bg-gray-100 text-gray-600">{category}</p>
        <p className="bg-gray-100 text-gray-600">{difficulty}</p>
        <p className="flex items-center gap-1">
          <FaStar className="text-yellow-400" aria-hidden="true" />
          {rating}
        </p>
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
