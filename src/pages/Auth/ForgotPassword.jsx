import React from "react";
import { Link } from "react-router-dom";
import { ResetPass } from "@assets";
const ForgotPassword = () => {
  return (
    <section class="bg-gray-50  grid md:grid-cols-2">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full p-6 bg-white rounded-lg shadow  md:mt-0 sm:max-w-md  sm:p-8">
          <h1 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Forgot your password?
          </h1>
          <p class="font-light text-gray-500 ">
            Don't fret! Just type in your email and we will send you a code to
            reset your password!
          </p>
          <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-emerald-600 focus:border-emerald-600 block w-full p-2.5 "
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-emerald-300 "
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="terms" class="font-light text-gray-500 ">
                  I accept the{" "}
                  <a
                    class="font-medium text-emerald-600 hover:underline "
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Reset password
            </button>
          </form>
        </div>
      </div>
      <div class="flex flex-col items-center  px-4 py-4 mx-auto md:h-1/2 lg:py-0">
        <img src={ResetPass} alt="CNG Logo" />
      </div>
    </section>
  );
};

export default ForgotPassword;
