import SideBarFixed from "../components/Sidebar/SidebarFixed"
import SideBarMenu from "../components/Sidebar/SidebarMenu"

export default function SidebarLayout() {
  return (
    <div className="flex">
      <SideBarFixed />
      <SideBarMenu />
    </div>
  )
}