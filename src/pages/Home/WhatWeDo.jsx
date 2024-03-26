import React from "react";
import { fuel, userinterface, hours } from "@assets";
import { LazyLoadImage } from "react-lazy-load-image-component";
const WhatWeDo = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            What We Do
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            We provide a location-based service to help users find the nearest
            CNG pump station to their location, with accurate data on direction,
            speed, and distance. Our goal is to make refueling a hassle-free
            experience for drivers.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <LazyLoadImage
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={fuel}
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h1 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  CNG pump station finding
                </h1>

                <p class="leading-relaxed">
                  Our advanced GPS technology helps users quickly and easily
                  find the nearest CNG pump station to their location.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <LazyLoadImage
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={userinterface}
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h1 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  User-friendly interface
                </h1>

                <p class="leading-relaxed">
                  Our website has a user-friendly interface that is easy to
                  navigate, making it simple for users to find the information
                  they need.
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/2 p-4">
            <div class="flex relative">
              <LazyLoadImage
                alt="gallery"
                class="absolute inset-0 w-full h-full object-cover object-center"
                src={hours}
              />
              <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 class="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  24/7 availability
                </h2>

                <p class="leading-relaxed">
                  Our services are available 24/7, so users can find the fuel
                  they need at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
