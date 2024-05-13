import cards from "../assets/cards.svg"
import cloud from "../assets/cloud.svg"
import goals from "../assets/goals.svg"
import invoices from "../assets/invoices.svg"
import overview from "../assets/overview.svg"
import premium from "../assets/premium.svg"
import settings from "../assets/settings.svg"
import transactions from "../assets/transactions.svg"


const Navbar = () => {

  const listClass = "flex items-center pl-2";
  return (
    <>
      <div className="nav__container flex flex-col justify-between ml-12 mt-4 h-full">
        <div className="navbar">
          <ul className=" text-[#C7C7C7] text-sm font-bold w-40 rounded">
            <li className={`${listClass} flex items-center text-[#197BBD] bg-[#F0F7FF] pl-2`}>
              <img src={overview} alt="overview-icon" />
              <span>Overview</span>
            </li>
            <li className={listClass}>
              <img src={transactions} alt="transaction-icon" />
              <span>Transactions</span>
            </li>
            <li className={listClass}>
              <img src={cards} alt="card-icon" />
              <span>Cards</span>
            </li>
            <li className={listClass}>
              <img src={invoices} alt="invoice-icon" />
              <span>Invoices</span>
            </li>
            <li className={listClass}>
              <img src={goals} alt="goal-icon" />
              <span>Goals</span>
            </li>
            <li className={listClass}>
              <img src={settings} alt="settings-icon" />
              <span>Settings</span>
            </li>
          </ul>
        </div>
        <div className="upgrade__section mb-8">
          <div className="upgrade__img mx-6">
            <img src={cloud} alt="cloud" />
          </div>
          <button className="bg-[#FFC145] text-[#404040] font-bold p-4 rounded-3xl mt-4"><img src={premium} alt="arrow-icon" /></button>
        </div>
      </div >
    </>
  )
}

export default Navbar