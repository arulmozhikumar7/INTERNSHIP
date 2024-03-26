// TermsAndConditions.jsx
import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="w-full px-2 mx-auto md:px-16">
      <h1 className="mb-4 text-lg font-bold text-center md:text-3xl">
        Terms and Conditions
      </h1>
      <div className="prose text-gray-800">
        <p className="mb-4">
          By using our website, you agree to these terms and conditions in full.
          If you do not agree with these terms and conditions, do not use our
          website.
        </p>
        <p>
          Our location-based service is provided to assist users in finding the
          nearest CNG pump station. The information provided is accurate to the
          best of our knowledge and ability, but we make no guarantees or
          warranties as to the accuracy or reliability of the information
          provided.
        </p>
        <p>
          Users are responsible for ensuring that they have the necessary
          permissions and authorizations to use our website, including
          compliance with any applicable laws or regulations.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
