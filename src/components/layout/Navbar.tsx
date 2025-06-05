import Link from "next/link";
import { Search } from "lucide-react";

const Navbar = () => {

    return(
        <nav className="PX-4 md:px-12 py-4 md:py-6 bg-white text-black">
            <div className="flex justify-between items-center">
            <Link href={"/"} className="hidden md:inline-block text-lg font-semibold">
                M-Acessorios
            </Link>
            <div className="relative flex max-w-[300px] md:max-w-[400px]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search className="w-4 h-4 "/>
                </div>
                <input 
                    type="text" 
                    name="" id="" 
                    placeholder="search"
                    className="h-9 relative pl-10 border-1 border-black/10 text-sm rounded-md w-full py-2 px-3 focus:outline-none bg-transparent"
                     />
            </div>
            <Link href={"/add-product"}>
                <button
                className="bg-neutral-950 text-white rounded-md px-3 py-2 cursor-pointer"
                >Add product</button>
            </Link>
            </div>
        </nav>
    )
}

export default Navbar;