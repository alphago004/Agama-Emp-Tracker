import Link from "next/link";
import { RiDashboardFill } from "react-icons/ri"
import { BsFillBarChartFill, BsPersonFillLock } from "react-icons/bs"
import {  MdCategory } from "react-icons/md"
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUserCheck } from "react-icons/fa6";
import { LogOut } from "@/utils";
import { useRouter } from "next/navigation";

export default function SideNav() { 
     const router = useRouter()
    return (
         <div className='w-[15%] md:block hidden'>
            <nav className='w-[15%] fixed flex flex-col left-0 h-[100vh] bg-[#160F3F] p-4 space-y-8'>
            <div className="text-center">
               <Link href="/" className="hover:text-white block font-bold text-xl text-gray-300">
                    Agama Consulting Group
               </Link>
               </div>
                <div className="w-full flex items-cen ter">
                      <RiDashboardFill className="text-[#9AA8BD] hover:text-white mr-2"/>
                     <Link href="/dashboard" className="text-[#9AA8BD] hover:text-white">Dashboard</Link>
                </div>
               
                <div className="w-full flex items-center">
                      <FaUserCheck className="text-[#9AA8BD] hover:text-white mr-2"/>
                     <Link href="/sales" className="text-[#9AA8BD] hover:text-white">Boarded Employee</Link>
                </div>
                
                  <div className="w-full flex items-center">
                      <BsFillPeopleFill className="text-[#9AA8BD] hover:text-white mr-2"/>
                     <Link href="/employee" className="text-[#9AA8BD] hover:text-white">Employee</Link>
                </div>

                 <div className="w-full flex items-center">
                      <MdCategory className="text-[#9AA8BD] hover:text-white mr-2"/>
                     <Link href="/categories" className="text-[#9AA8BD] hover:text-white">Categories</Link>
                </div>

                  <div className="w-full flex items-center">
                      <BsPersonFillLock className="text-[#9AA8BD] hover:text-white mr-2"/>
                     <Link href="/" className="text-[#9AA8BD] hover:text-white" onClick={() => LogOut(router)}>Log out</Link>
                </div>
                
            </nav>
            </div>
    )
}