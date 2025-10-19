import React from "react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="w-full flex items-center md:flex-row flex-col sm:mt-16 mt-8 gap-7">
      <p className="text-black-500 font-extrabold flex-1 text-3xl max-md:text-center">
        Have a project in mind? <br className="sm:block hidden" />
        Let's talk.
      </p>
      <Link to="/contact" className="btn">
        Get in Touch
      </Link>
    </section>
  );
}

export default CTA;
