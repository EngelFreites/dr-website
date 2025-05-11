import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="h-screen w-full  relative">
      <img src="hero.jpg" alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40">
        <div>
          <h1 className=" text-8xl text-shadow font-bold p-4">
            Discover Your Natural Beauty
          </h1>
          <p className=" text-4xl text-shadow  p-4">
            {" "}
            Indulge in our premium beauty treatments designed to <br />
            rejuvenate your body and soul in a tranquil, luxurious <br />
            environment.
          </p>
        </div>
        <div className="w-full sm:w-auto  flex-col flex sm:flex-row justify-center items-center gap-12">
          <a className=" w-full sm:w-auto  flex items-center justify-center p-4 rounded-2xl text-xl font-bold  text-white bg-[#bba98c]">
            Nuestros Servicios
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
          <a className="w-full sm:w-auto  flex items-center justify-center p-4 rounded-2xl text-xl font-bold  text-white border-3 border-white">
            Book Appoinment
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="" className="flex flex-col items-center text-white">
            <span className="text-2xl mb-2">Discover More</span>
            <ChevronRight className="h-6 w-6 transform rotate-90" />
          </a>
        </div>
      </div>
    </div>
  );
}
