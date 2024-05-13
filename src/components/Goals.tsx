import add from "../assets/add.svg";
import brush from "../assets/brush.svg";
import game from "../assets/game.svg";
import left from "../assets/left.svg";
import mountain from "../assets/mountain.svg";
import right from "../assets/right.svg";

const Goals = () => {
  return (
    <>
      <div className="goal__container w-[600px] mt-4 ml-6">
        <div className="goal__heading flex items-center">
          <h2 className="text-2xl font-semibold mr-1">Goals</h2>
          <img className="w-[24px] h-[24px]" src={add} alt="add-icon" />
        </div>
        <div className="goal__targets flex gap-3">
          <button className="left w-2 cursor-pointer">
            <img src={left} alt="left-button" />
          </button>
          <div className="goal__card shadow-card3 w-[160px] h-[170px] flex flex-col justify-between rounded-3xl">
            <div className="top flex flex-col justify-between ml-6 mt-4">
              <div className="amount text-[#696969] text-2xl font-semibold">$550</div>
              <div className="date text-[#AEAEAE]">12/20/20</div>
            </div>
            <div className="bottom ml-6 mb-2">
              <img src={mountain} alt="category-icon" />
              <div className="goal font-semibold text-[#404040]">Holidays</div>
            </div>
          </div>
          <div className="goal__card shadow-card3 w-[160px] h-[170px] flex flex-col justify-between rounded-3xl">
            <div className="top flex flex-col justify-between ml-6 mt-4">
              <div className="amount text-[#696969] text-2xl font-semibold">$550</div>
              <div className="date text-[#AEAEAE]">12/20/20</div>
            </div>
            <div className="bottom ml-6 mb-2">
              <img src={brush} alt="category-icon" />
              <div className="goal font-semibold text-[#404040]">Renovation</div>
            </div>
          </div>
          <div className="goal__card shadow-card3 w-[160px] h-[170px] flex flex-col justify-between rounded-3xl">
            <div className="top flex flex-col justify-between ml-6 mt-4">
              <div className="amount text-[#696969] text-2xl font-semibold">$550</div>
              <div className="date text-[#AEAEAE]">12/20/20</div>
            </div>
            <div className="bottom ml-6 mb-2">
              <img src={game} alt="category-icon" />
              <div className="goal font-semibold text-[#404040]">Xbox</div>
            </div>
          </div>
          <button className="right w-2 cursor-pointer">
            <img src={right} alt="right-button" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Goals