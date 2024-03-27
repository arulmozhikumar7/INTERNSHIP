import React, { useState, useEffect, useMemo } from "react";
import { heroData, serviceData } from "@Data/About/aboutData";
import { motion } from "framer-motion";

const animateElement = (scrollY, threshold, initialX, initialOpacity) => {
  return {
    initial: { x: initialX, opacity: initialOpacity },
    animate: scrollY >= threshold ? { x: 0, opacity: 1 } : {},
    transition: { duration: 2 },
  };
};

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const memorizedServiceData = useMemo(() => serviceData, []);
  return (
    <>
      <section className="text-gray-600 body-font">
        <motion.div
          className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row"
          {...animateElement(scrollY, 0, -100, 0)}
        >
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
              {heroData[0].title}
            </h1>
            <p className="mb-8 leading-relaxed">{heroData[0].description}</p>
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={heroData[0].icon}
            />
          </div>
        </motion.div>
      </section>
      {memorizedServiceData.map((data, index) => (
        <section key={index} className="text-gray-600 body-font">
          <div className="container px-5 py-0 mx-auto">
            <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 rounded-full text-emerald-500 bg-emerald-100 sm:w-32 sm:h-32 sm:mr-10"
                    {...animateElement(scrollY, 80, 200, 0)}
                  >
                    <img
                      src={data.icon}
                      className="w-10 h-10 sm:w-16 sm:h-16"
                    />
                  </motion.div>
                  <motion.div
                    className="flex-grow mt-6 text-center sm:text-left sm:mt-0"
                    {...animateElement(scrollY, 80, 200, 0)}
                  >
                    <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                      {data.title}
                    </h2>
                    <p className="text-base leading-relaxed">{data.content}</p>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className="flex-grow mt-6 text-center sm:text-left sm:mt-0"
                    {...animateElement(scrollY, 90, -200, 0)}
                  >
                    <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">
                      {data.title}
                    </h2>
                    <p className="text-base leading-relaxed">{data.content}</p>
                  </motion.div>
                  <motion.div
                    className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 rounded-full text-emerald-500 bg-emerald-100 sm:w-32 sm:order-none sm:h-32 sm:ml-10"
                    {...animateElement(scrollY, 130, -200, 0)}
                  >
                    <img
                      src={data.icon}
                      className="w-10 h-10 sm:w-16 sm:h-16"
                    />
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default About;
