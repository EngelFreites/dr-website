import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { OURSERVICES } from "../../data/ourservices";

const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto py-12 ">
      <div className="section-container">
        <div className="section-title py-12">
          <h2 className="text-6xl font-bold text-center p-4 text-[#bba98c]">
            Contactanos
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-beige-700">
            Reserva tu cita o contáctanos si tienes alguna pregunta. Estamos
            aquí para ayudarte.
          </p>
        </div>

        <div className="flex justify-between">
          <div className=" bg-amber-100 rounded-md w-[600px] ">
            <div className="bg-beige-100 p-8 rounded-xl">
              <h3 className="text-2xl font-medium mb-6">Ponte en contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium text-beige-900">Direccion</h4>
                    <p className="text-beige-700">
                      123 Tranquility Lane, Serenity City, SC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium text-beige-900">Telefono</h4>
                    <p className="text-beige-700">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium text-beige-900">Email</h4>
                    <p className="text-beige-700">info@serenityspa.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-rose-500 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h4 className="font-medium text-beige-900">Horarios</h4>
                    <p className="text-beige-700">
                      Lunes - Viernes: 9:00 AM - 8:00 PM
                      <br />
                      Sabado: 9:00 AM - 6:00 PM
                      <br />
                      Domingo: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[600px]">
            <form className="bg-white p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-medium mb-6">Reserva tu cita</h3>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-beige-800 mb-1"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-100 focus:border-rose-300 transition-colors"
                    placeholder="Ingresa tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-beige-800 mb-1"
                  >
                    Direccion de Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-100 focus:border-rose-300 transition-colors"
                    placeholder="Ingresa tu email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-beige-800 mb-1"
                  >
                    Numero de Telefono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-100 focus:border-rose-300 transition-colors"
                    placeholder="Ingresa tu Telefono"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-beige-800 mb-1"
                  >
                    Servicos
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-2 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-100 focus:border-rose-300 transition-colors"
                  >
                    <option value="">Seleciona Servicio</option>
                    {OURSERVICES.map((service) => (
                      <option value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-beige-800 mb-1"
                  >
                    Informacion Adicional
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-beige-200 rounded-lg focus:ring-2 focus:ring-rose-100 focus:border-rose-300 transition-colors"
                    placeholder="Cuéntanos si tienes alguna solicitud específica"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full btn btn-primary  bg-[#bba98c] p-4 rounded-2xl text-white text-xl font-bold "
                  >
                    Reserva Cita
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
