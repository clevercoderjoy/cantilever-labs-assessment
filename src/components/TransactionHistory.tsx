import cart from "../assets/cart.svg";
import leaf from "../assets/leaf.svg";
import userIcon from "../assets/userIcon.svg";

interface HistoryItem {
  id: number;
  icon: string;
  receiver: string;
  type: string;
  date: string;
  amount: string;
}

const TransactionHistory = () => {

  const historyHeaders: string[] = ["Receiver", "Type", "Date", "Amount"]
  const historyItems: HistoryItem[] = [
    {
      id: 1,
      icon: cart,
      receiver: "Tesco Market",
      type: "Shopping",
      date: "13 Dec 2020",
      amount: "$75.67"
    },
    {
      id: 2,
      icon: cart,
      receiver: "ElectroMen Market",
      type: "Shopping",
      date: "14 Dec 2020",
      amount: "$250.00"
    },
    {
      id: 3,
      icon: leaf,
      receiver: "Fiorgio Restaurant",
      type: "Food",
      date: "07 Dec 2020",
      amount: "$19.50"
    },
    {
      id: 4,
      icon: userIcon,
      receiver: "John Mathew Kayne",
      type: "Sport",
      date: "06 Dec 2020",
      amount: "$350"
    },
    {
      id: 5,
      icon: userIcon,
      receiver: "Ann Marlin",
      type: "Shopping",
      date: "31 Nov 2020",
      amount: "$430"
    },
  ]
  return (
    <>
      <div className="history__container shadow-card3 w-[600px] mt-8">
        <h2 className="history__heading font-semibold text-xl ml-6 mt-6">Transaction History</h2>
        <table className="text-[#AEAEAE] text-sm mx-6 my-6">
          <thead>
            <tr>
              {
                historyHeaders.map((header, index) => (
                  <th className={`${index === 0 ? 'pr-[9rem]' : 'pr-[6.5rem]'} mt-2 font-normal text-left`} key={index}>{header}</th>
                ))
              }
            </tr>
          </thead>
          <tbody>
            {
              historyItems.map((item) => (
                <tr className="text-left" key={item.id}>
                  <td className="flex items-center py-4 text-black">
                    <img className="mr-1" src={item.icon} alt="category-icon" />
                    {item.receiver}
                  </td>
                  <td className="">{item.type}</td>
                  <td>{item.date}</td>
                  <td className="text-right font-bold text-black pr-[10rem]">{item.amount}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TransactionHistory