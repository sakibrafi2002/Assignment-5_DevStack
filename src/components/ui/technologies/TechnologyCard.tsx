
import type { ITechnology } from "../../../utils/types"


const TechnologyCard = ({data} : {data : ITechnology}) => {
    const {badge, category, difficulty, icon,name, description, id, rating} = data
  return (
    <div>
      <div className="flex justify-between items-center">
        <img src={icon} alt="icon" className="w-8"></img>
        <span className="text-xs py-1 px-3 rounded-full bg-yellow-500/50 border border-yellow-500">{badge}</span>
      </div>
      <p>{name}</p>
      <p>{description}</p>
      <button className="w-full bg-black text-white rounded-md py-2 cursor-pointer">Add To Stack</button>
    </div>
  )
}

export default TechnologyCard