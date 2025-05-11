export default function AboutUs() {
  return (
    <section className="max-w-7xl mx-auto py-24 ">
      <h2 className="text-6xl font-bold text-center p-4 text-[#bba98c]">
        About Us
      </h2>
      <div className="flex gap-52">
        <div className="relative ">
          <img
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-xl"
          />
          <div className="p-2 bg-white absolute  z-50 -bottom-8 rounded-xl -right-40">
            <img
              src="https://images.unsplash.com/photo-1620733723572-11c53f73a416?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-[450px] rounded-xl"
            />
          </div>
        </div>
        <div className="max-w-2xl flex flex-col gap-20 p-4">
          <p className=" text-xl  ">
            Welcome to Serenity, where beauty meets tranquility. Founded in
            2015, our spa was born from a passion to create a sanctuary where
            clients can escape the hustle of everyday life and reconnect with
            their inner selves. We believe that true beauty comes from balance –
            the harmony between body, mind, and spirit. <br />
            <br /> Our approach combines time-honored techniques with
            cutting-edge treatments to deliver results that are both immediately
            visible and long-lasting. Every aspect of our spa has been
            thoughtfully designed to create a sense of calm and luxury. <br />
            <br /> From our soothing color palette to our carefully selected
            natural materials, we've created an environment that feels both
            indulgent and restorative.
          </p>

          <div className="flex justify-center gap-4 ">
            <p className="text-center text-2xl text-[#8c795e] w-full ">
              8 <br /> Años de Experiencia
            </p>
            <p className="text-center text-2xl text-[#8c795e] w-full ">
              +5 <br /> Especialista{" "}
            </p>
            <p className="text-center text-2xl text-[#8c795e] w-full">
              +100 <br /> Clientes Felices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
