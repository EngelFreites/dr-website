import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="h-screen w-full  relative">
      <img src="hero.jpg" alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
        <div>
          <h1 className=" text-5xl text-shadow font-bold p-4">
            Discover Your Natural Beauty
          </h1>
          <p className=" text-xl text-shadow  p-4">
            {" "}
            Indulge in our premium beauty treatments designed to <br />
            rejuvenate your body and soul in a tranquil, luxurious <br />
            environment.
          </p>
        </div>
        <div className="w-full sm:w-auto  flex-col flex sm:flex-row justify-center items-center gap-12">
          <a className=" w-full sm:w-auto  flex items-center justify-center px-6 py-3 rounded-full font-normal   text-white bg-[#bba98c]">
            Our Services
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
          <a className="w-full sm:w-auto flex justify-center border-1 border-white px-6 py-3 rounded-full">
            Book Appoinment
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="" className="flex flex-col items-center text-white">
            <span className="text-sm mb-2">Discover More</span>
            <ChevronRight className="h-6 w-6 transform rotate-90" />
          </a>
        </div>
      </div>
    </div>
  );
}
