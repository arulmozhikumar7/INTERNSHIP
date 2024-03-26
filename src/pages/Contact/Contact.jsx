import React from "react";

const Contact = () => {
  return (
    <section className="relative text-gray-600 body-font">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5528.547010363802!2d80.19080402214725!3d13.087051687766536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1711442139058!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{
            border: 0,
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="container flex px-5 py-5 mx-auto">
        <div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/2 md:w-1/2 md:ml-auto md:mt-0">
          <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
            Contact Us
          </h2>
          <p className="mb-5 leading-relaxed text-gray-600">
            Send Your Queries
          </p>
          <div className="relative mb-4">
            <label for="email" className="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
          </div>
          <div className="relative mb-4">
            <label for="message" className="text-sm leading-7 text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            ></textarea>
          </div>
          <button className="px-6 py-2 text-lg text-white border-0 rounded bg-emerald-500 focus:outline-none hover:bg-emerald-600">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
