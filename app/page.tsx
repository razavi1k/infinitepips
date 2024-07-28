"use client";

import { mainColor } from "@/Colors";
import { Button } from "@/components/ui/button"
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  
  return (
    
    <div className="poppins">
      <Navbar />
      <CTASection />
    </div>
  );
}

function Navbar() {
  
  return(
    <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
      <Logo />
      <Navbarbuttons />

    </div>
  );
}

function Logo() {
  return(
    <div className="flex gap-2 items-center">
      <div className={`bg-[${mainColor}] p-[6px] rounded-md`}>
       
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className={`font-bold text-[${mainColor}]`}>Infinite</span>
        <span className=" text-slate-600">pips</span>
      </div>
    </div>
  );
}

function CTASection() {
  return(
    <div className="flex flex-col mx-16 items-center mt-[120px] gap-6">
      <h2 className="font-bold text-2xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, pariatur.
        <span className={`text-[${mainColor}]`}> Lorem ipsum dolor sit amet. </span>
      </h2>
      <p className="text-center text-sm w-[450px] max-sm:w-full text-slate-500">
        Lorem ipsum dd vero.m nemo unde fugit enim ipsam eos minus totam veritatis cumque corrupti iusto aliquam, similique animi velit aliquid rerum nulla, quos inventore illo soluta aperiam. Doloremque, sint aperiam ex iste beatae, repudiandae laborum, eum impedit delectus vero eaque?
      </p>

      <Button className={`block  text-sm font-medium text-white transition focus:outline-none `}>
        {`Let's get started`}
      </Button>
    </div>
  )
}

function Navbarbuttons() {

  const { userId } = useAuth();
  
  return (
    
    <div className="max-sm:w-full">
      { userId ? (
        <Link href="/my-notes">
          <Button className={`max-sm:w-full p-[8px] px-6 test-sm text-white rounded-md`}>
            Access To The App
          </Button>
        </Link>
      ) : (
        <div className="flex gap-2 max-sm:flex-col max-sm:w-[60%] max-sm:mt-8">
        <Button variant="outline" className={`max-sm:w-full p-[8px] px-6 text-sm rounded-md`}>
           <Link href="/sign-in"> Sign In </Link>
       </Button>
        <Button className={`text-sm border`}>
           <Link href="/sign-in">Sign Up</Link> 
       </Button>
        </div>
      )
      }
    </div>
  );
}