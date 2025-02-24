"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay"; // Import autoplay styles
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay
import Image from "next/image";
import { useTranslations } from "next-intl";
interface Service {
  id: number;
  title: string;
  description: string;
  detail: string;
  image: string;
}
export default function ServicesSlider() {
  const t = useTranslations("Services");
    const c = useTranslations();

  const services: Service[] = t.raw("list"); // Get services dynamically

  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold text-primary mb-8">{c("services")}</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 20, // Reduce rotation for a smoother effect
          stretch: 0,
          depth: 200, // Increase depth for a better 3D look
          modifier: 1,
          slideShadows: false, // Disable shadows for a cleaner look
        }}
        autoplay={{
          delay: 1500, // Change slide every 2.5 seconds
          disableOnInteraction: false,
        }}
        speed={1000} // Smooth transition speed (1 second)
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="max-w-5xl mx-auto"
      >
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 max-w-md flex flex-col"
          >
            <div className="w-full h-50 md:h64 overflow-hidden">
              <Image
                src={service.image}
                width={600}
                height={400}
                alt={service.title}
                className="overflow-hidden rounded-md object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 h-12 overflow-hidden">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-2 flex-grow">
              {service.description}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
