import Dashboard from "./components/Dashboard"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <div className="flex">
        <Sidebar />
        <hr className="w-[0.25rem] h-screen bg-[#F8F8F8]" />
        <Dashboard />
      </div>
    </>
  )
}

export default App
