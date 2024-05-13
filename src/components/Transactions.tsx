import add from "../assets/add.svg";
import user1 from "../assets/user1.svg";
import user2 from "../assets/user2.svg";
import user3 from "../assets/user3.svg";
import user4 from "../assets/user4.svg";
import user5 from "../assets/user5.svg";

const Transactions = () => {
  const users: string[] = [user1, user2, user3, user4, user5];
  return (
    <>
      <div className="transaction__container shadow-card3 w-[400px] mt-4 rounded-2xl pl-4">
        <h2 className="text-xl font-semibold pt-4 ml-4 mb-4">New Transaction</h2>
        <div className="users__container flex">
          <div className="user__container flex gap-4 ml-4">
            {
              users.map((user, index) => <img className="w-[43px] h-[60px]" key={index} src={user} alt={user} />)
            }
          </div>
          <div className="new ml-2 mt-2 flex flex-col">
            <img className="ml-2 w-[24px] h-[24px]" src={add} alt="add-icon" />
            <span className="text-xs mt-[0.75rem]">Add New</span>
          </div>
        </div>
        <div className="add__transaction flex items-center justify-between mt-4">
          <div className="transaction__input flex items-center gap-8 mb-4">
            <input className="text-[#C7C7C7] w-[175px] h-[37px] px-2 border-[#197BBD] border rounded-md" type="number" placeholder="0" />
            <button className="bg-[#FFC145] text-[#404040] font-bold p-4 text-xs rounded-2xl">Send the Transaction</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transactions