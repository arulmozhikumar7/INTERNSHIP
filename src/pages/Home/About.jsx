import React from "react";
import { CNGSTATION, service, mission } from "@assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
const About = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Find Fuel
              <br class="hidden lg:inline-block" />
              Fast and Easy
            </h1>
            <p class="mb-8 leading-relaxed">
              Welcome to our website, where we provide location-based services
              to help you navigate and find the nearest CNG pump station. Our
              goal is to make it easier for you to find the closest fueling
              station to your location, ensuring that you never run out of fuel
              on the road.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <LazyLoadImage
              class="object-cover object-center rounded"
              alt="hero"
              src={CNGSTATION}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-0 mx-auto">
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <LazyLoadImage src={service} class="sm:w-16 sm:h-16 w-10 h-10" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                Our Services
              </h2>
              <p class="leading-relaxed text-base">
                Our location-based service is designed to provide users with
                accurate and convenient assistance in finding the nearest CNG
                pump station. We use advanced GPS technology to provide users
                with real-time data on the direction, speed, and distance to the
                nearest fueling station. Our user-friendly interface makes it
                easy to navigate and find the information you need, and our 24/7
                availability means you can find the fuel you need at any time.
              </p>
            </div>
          </div>
          <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                Our Mission
              </h2>
              <p class="leading-relaxed text-base">
                Our mission is to provide drivers with a hassle-free refueling
                experience, by providing accurate and reliable information on
                the nearest CNG pump station. We are committed to delivering the
                best possible location-based service, with ongoing improvements
                and expansions to our technology and coverage area.
              </p>
            </div>
            <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
              <LazyLoadImage src={mission} class="sm:w-16 sm:h-16 w-10 h-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
