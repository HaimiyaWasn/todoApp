import { FaCheckSquare } from "react-icons/fa"

export default function SideBar() {
  return (
    <aside className="fixed left-0 top-0 items-center h-screen w-16 bg-white/5 border-r border-white/10 backdrop-blur-lg hidden md:flex flex-col items py-7">
      <div className="flex flex-col gap-8">
        <button className="text-zinc-500 hover:text-zinc-400 active:text-zinc-400 transition-all">
          <FaCheckSquare size={24} />
        </button>
      </div>
    </aside>
  )
}