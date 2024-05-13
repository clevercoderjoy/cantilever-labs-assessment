import { useState } from "react";
import activationSwitch from "../assets/activationSwitch.svg";
import card from "../assets/card.svg";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import switchButton from "../assets/switchButton.svg";


interface CardState {
  limit: number;
  cardStatus: boolean;
}

const Cards = () => {
  const [state, setState] = useState<CardState>({
    limit: 0,
    cardStatus: false,
  });
  const { limit, cardStatus } = state;
  const balanceClass = "flex flex-col text-end mb-4";
  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, limit: parseInt(e.target.value) });
  }
  const handleCardActivation = () => {
    setState({ ...state, cardStatus: !cardStatus });
  }
  return (
    <>
      <div className="card__container w-[600px] shadow-card3 rounded-3xl">
        <h2 className="card__heading mt-4 ml-6 font-semibold text-xl">Cards</h2>
        <div className="card__details m-2 mb-0 flex justify-around">
          <div className="card__info flex flex-col">
            <div className="card flex">
              <button className="left w-2 cursor-pointer">
                <img src={left} alt="left-icon" />
              </button>
              <div className="card__img w-80">
                <img src={card} alt="card-img" />
              </div>
              <button className="right w-2 cursor-pointer">
                <img src={right} alt="right-icon" />
              </button>
            </div>
          </div>
          <hr className="h-44 bg-[#E8E8E8] w-[2px] border-[0.5px] mx-auto mt-2 mb-8 rounded-full" />
          <div className="balance mr-4">
            <div className={`${balanceClass} current__balance`}>
              <span className="current__balance__amount text-[#197BBD] font-bold text-lg mb-[0.25px]">$ 2850.75</span>
              <span className="current__balance__caption text-[#AEAEAE] text-sm">Current balance</span>
            </div>
            <div className={`${balanceClass} income__balance`}>
              <span className="income__balance__amount font-semibold text-[#439A86] text-base">$ 1500.50</span>
              <span className="income__balance__caption text-[#AEAEAE] text-sm">Income</span>
            </div>
            <div className={`${balanceClass} outcome__balance`} >
              <span className="outcome__balance__amount text-[#BB4430] font-semibold">$ 350.60</span>
              <span className="outcome__balance__caption text-[#AEAEAE] text-sm">Outcome</span>
            </div>
          </div>
        </div>
        <div className="card__controls flex justify-between mb-6">
          <div className="payment__details ml-11">
            <input className="text-[#197BBD] bg-[#F1F1F1] w-[270px]" type="range" max={4000} value={limit} onChange={handleLimitChange} />
            <div className="payment__limit flex justify-between">
              <span className="payment__limit__caption text-[#AEAEAE] text-sm">Weekly payment limit</span>
              <span className="payment__limit__amount text-sm font-semibold">${limit} / $4000</span>
            </div>
          </div>
          <div className="deactivate__button__container flex flex-col justify-end">
            <span className="deactivate__button" onClick={handleCardActivation}>
              <img className="relative right-[-70px] top-[-10px]" src={activationSwitch} alt="activation-switch" />
              <img className={`${cardStatus ? "right-[-70px]" : "right-[-95px]"} relative top-[-35px]`} src={switchButton} alt="switch-button" />
            </span>
            <span className="deactivate__button__caption text-[#AEAEAE] mr-4 mt-[-1.5rem]">Deactivate card</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards;