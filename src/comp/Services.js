import s1 from '../assets/deep.jpg';
import s2 from '../assets/full.jpg';
import s3 from '../assets/main.jpg';
import s4 from '../assets/pull.jpg';
import s5 from '../assets/comm.jpg';
import s6 from '../assets/resi.jpg';
import s7 from '../assets/hour.jpg';


export default function Services() {
  const services = [
    {
      title: "Deep Cleaning",
      description: "Thorough cleaning that reaches every corner, ensuring hygiene.",
      image: s1,
    },
    {
      title: "Full House Maid",
      description: "Professional maids for household assistance,service.",
      image: s2,
    },
    {
      title: "Maintenance",
      description: "Expert solutions for plumbing, furniture, and more.",
      image: s3,
    },
    {
      title: "Pull Cleaning",
      description: "Specialized cleaning for hard-to-reach, areas.",
      image: s4,
    },
    {
      title: "Commercial Cleaning",
      description: "cleaning for offices, retail spaces, and businesses.",
      image: s5,
    },
    {
      title: "Residential Cleaning",
      description: "Reliable cleaning for your home, fitting your lifestyle.",
      image: s6,
    },
    {
      title: "Hourly Basis Cleaning",
      description: "Flexible cleaning by the hour, perfect for touch-ups.",
      image: s7,
    },
  ];

  return (
    <section id="services" className="py-16">      
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Our Services</h2>
      <div className="max-w-7xl mx-auto">
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 aspect-square flex flex-col"
            >
              <div className="relative w-full h-full group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-all duration-300 ease-in-out">
                  <h3 className="text-lg font-semibold text-white mb-2 text-center transition-all duration-300 ease-in-out transform group-hover:-translate-y-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200 text-center opacity-0 transition-all duration-300 ease-in-out transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
