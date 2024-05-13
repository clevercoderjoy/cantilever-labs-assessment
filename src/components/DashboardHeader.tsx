import bell from "../assets/bell.svg";
import mail from "../assets/mail.svg";
import user from "../assets/user.svg";

const DashboardHeader = () => {
  return (
    <>
      <div className="header__container flex justify-between items-center my-8 mx-11">
        <div className="heading__container">
          <h1 className="text-4xl font-bold text-[#404040]">Weekly Sum Up</h1>
          <p className="text-[#AEAEAE] mt-2">Get summary of your weekly online transactions here.</p>
        </div>
        <div className="user__interactions flex">
          <div className="interaction__icons">
            <ul className="flex">
              <li className="mx-5 h-[24px] w-[24px]">
                <img src={mail} alt="bell-icon" />
              </li>
              <li className="mx-5 h-[24px] w-[24px]">
                <img src={bell} alt="mail-icon" />
              </li>
            </ul>
          </div>
          <div className="user__info flex">
            <div className="user__icon mx-6 h-[35px] w-[35px]">
              <img className="bg-[#FFC145] rounded-full" src={user} alt="user-icon" />
            </div>
            <div className="user__account flex flex-col mr-2">
              <span className="font-bold">Andrew</span>
              <span className="text-[#AEAEAE]">Admin account</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHeader