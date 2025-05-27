import { OURSERVICES } from "../../data/ourservices";

export default function OurServices() {
  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-6xl font-bold text-center p-4 text-[#bba98c]">
        Our Services
      </h2>

      <div className="flex flex-wrap items-stretch gap-4 justify-center">
        {OURSERVICES.map((el) => {
          return (
            <div className="Card pt-12  flex flex-col">
              <div className="relative">
                <img
                  src={el.img}
                  alt=""
                  className="img-card w-98 object-cover h-50 rounded-t-xl"
                />
              </div>
              <div className="info-card w-98 bg-amber-100 p-4 h-full flex   flex-col  justify-between gap-2 rounded-b-xl">
                <p className="text-[#e9ad4c] text-2xl font-bold">{el.title}</p>
                <p className="text-lg line-clamp-3 ">{el.aboutServices}</p>
                <div className="flex  justify-between  ">
                  <p className="text-xl font-medium text-gray-400">{el.time}</p>
                  <p className="text-xl font-medium text-gray-400">
                    {el.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
