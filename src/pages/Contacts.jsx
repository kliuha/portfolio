import { useRef } from "react";
import { useState, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Fox } from "../models/Fox";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contacts = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (e) => {
    e.target.classList.add("input-focused");
    setCurrentAnimation("walk");
  };
  const handleBlur = (e) => {
    e.target.classList.remove("input-focused");
    setCurrentAnimation("idle");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Illia",
          from_email: formData.email,
          to_email: "kliuha.illia@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          setIsLoading(false);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          showAlert("Message sent successfully!", "success");
          setTimeout(() => {
            hideAlert();
            setCurrentAnimation("idle");
          }, 2000);
        },
        (error) => {
          showAlert("Something went wrong. Please try again.", "danger");
          setIsLoading(false);
          setCurrentAnimation("idle");
        }
      );
  };

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="John"
            required
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <label className="text-black-500 font-semibold">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          <label className="text-black-500 font-semibold">Message</label>
          <textarea
            className="border border-gray-300 p-2 rounded"
            rows="4"
            required
            name="message"
            placeholder="Let me know how I can help you!"
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></textarea>

          <button
            type="submit"
            className="btn"
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[500px] h-[300px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contacts;
