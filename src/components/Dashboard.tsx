import loan from "../assets/loans.svg"
import Cards from './Cards'
import DashboardHeader from './DashboardHeader'
import Goals from './Goals'
import Statistics from './Statistics'
import TransactionHistory from './TransactionHistory'
import Transactions from './Transactions'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard__main w-full">
        <DashboardHeader />
        <div className="dashboard__container flex justify-around">
          <div className="left flex flex-col gap-3">
            <Cards />
            <TransactionHistory />
          </div>
          <div className="right flex flex-col gap-3">
            <Goals />
            <Statistics />
            <div className="transaction__loan flex items-start justify-between">
              <div className="transactions">
                <Transactions />
              </div>
              <div className="loan">
                <img src={loan} alt="get-loan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard