import blue from "../assets/blue.svg";
import cart1 from "../assets/cart1.svg";
import game from "../assets/game.svg";
import green from "../assets/green.svg";
import orange from "../assets/orange.svg";
import plane from "../assets/plane.svg";

const Statistics = () => {
  const shoppingValue: number = 52;
  const electronicsValue: number = 21;
  const travelsValue: number = 74;
  return (
    <>
      <div className="statistic__container w-[575px] shadow-card3 rounded-2xl">
        <h2 className="text-xl font-semibold mb-6 ml-6 mt-4">Outcome Statistics</h2>
        <div className="stat__container flex items-start justify-between w-[550px] h-16 mt-4 mx-auto">
          <div className="icon__container">
            <img className="relative top-[-10px] rounded-md" src={orange} alt="blue-bg" />
            <img className="relative top-[-83px] left-[33px]" src={cart1} alt="category-icon" />
          </div>
          <div className="stat__progress flex flex-col ml-2">
            <input className="w-[370px] mr-2 mb-2 appearance-none h-2 rounded-md" type="range" readOnly max={100} value={shoppingValue} style={{
              background: `linear-gradient(to right, #F8964C 0%, #F8964C ${shoppingValue}%, #E5E7EB ${shoppingValue}%, #E5E7EB 100%)`,
              color: "#F8964C",
            }} />
            <span className="text-[#AEAEAE]">Shopping</span>
          </div>
          <span className="text-[#696969] font-semibold text-2xl ml-2">{shoppingValue}%</span>
        </div>
        <div className="stat__container flex items-start justify-between w-[550px] h-16 mt-4 mx-auto">
          <div className="icon__container">
            <img className="relative top-[-10px] rounded-md" src={green} alt="blue-bg" />
            <img className="relative top-[-91px] left-[28px]" src={game} alt="category-icon" />
          </div>
          <div className="stat__progress flex flex-col ml-2">
            <input className="w-[370px] mr-2 mb-2 appearance-none h-2 rounded-md" type="range" readOnly max={100} value={electronicsValue} style={{
              background: `linear-gradient(to right, #0F9D58 0%, #0F9D58 ${electronicsValue}%, #E5E7EB ${electronicsValue}%, #E5E7EB 100%)`,
              color: "#0F9D58",
            }} />
            <span className="text-[#AEAEAE]">Electronics</span>
          </div>
          <span className="text-[#696969] font-semibold text-2xl ml-2">{electronicsValue}%</span>
        </div>
        <div className="stat__container flex items-start justify-between w-[550px] mt-4 mb-[-3rem] mx-auto">
          <div className="icon__container">
            <img className="relative top-[-10px] rounded-md" src={blue} alt="blue-bg" />
            <img className="relative top-[-83px] left-[33px]" src={plane} alt="category-icon" />
          </div>
          <div className="stat__progress flex flex-col ml-2">
            <input className="w-[370px] h-2 mr-2 mb-2 appearance-none rounded-md" type="range" readOnly max={100} value={travelsValue} style={{
              background: `linear-gradient(to right, #70A6E8 0%, #70A6E8 ${travelsValue}%, #E5E7EB ${travelsValue}%, #E5E7EB 100%)`,
              color: "#70A6E8",
            }} />
            <span className="text-[#AEAEAE]">Travels</span>
          </div>
          <span className="text-[#696969] font-semibold text-2xl ml-2">{travelsValue}%</span>
        </div>
      </div>
    </>
  )
}

export default Statistics