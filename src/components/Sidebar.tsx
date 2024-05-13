import Navbar from './Navbar'
import SidebarHeader from './SidebarHeader'

const Sidebar = () => {
  return (
    <>
      <div className="w-[250px] flex flex-col justify-between h-screen">
        <SidebarHeader />
        <Navbar />
      </div>
    </>
  )
}

export default Sidebar