
import Link from "next/link";
import { Items } from "./navitems";
const Navbar  = () =>  {
    return (
        <div className="relative flex left-[10%]  top-[30px] "> 


        <div className="relative flex item-center text-white font-bold gap-[40px]">
            <h1 className="font-bold text-white text-2xl"> Chintoo's Website </h1>
            {Items.map((item)=> (
                <Link href={item.Link} key={item.id} className="hover:text-slate-400">
                    {item.title}
                </Link>
                      ))}
                     </div>
                     <div className="relative left-[30%] flex gap-[20px]">
                        <button className="text-white font-bold p-2 rounded-sm hover:text-blue-500
                        transition duration-200 hover:underline hover:border-blue-500"> log in </button>
                        <button className="bg-blue-500 text-white font-extrabold p-2 rounded-sm 
                        hover:bg-blue-200"> join us </button>

                     </div>

              </div>
    )


}
export default Navbar
