import dollar from "../assets/dollarIcon.svg";
import logo from "../assets/logo.svg";

const SidebarHeader = () => {
  return (
    <>
      <div className="nav__header my-14 mx-12">
        <img className="absolute" src={logo} alt="logo" />
        <img className="relative top-[-5px] left-[25px]" src={dollar} alt="dollar" />
      </div>
    </>
  )
}

export default SidebarHeader