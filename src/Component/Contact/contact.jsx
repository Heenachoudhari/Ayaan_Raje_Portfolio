import Image from "next/image";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFigma } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-[#EEF5FF] min-h-screen flex items-center justify-center px-6 md:px-12 py-12">
      <div className="max-w-5xl bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-gray-900 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-700">
            Have questions, opportunities, or feedback? I’d love to hear from you.
          </p>

          {/* Contact Details */}
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-lg">
              <FaEnvelope className="text-blue-500" />
              <a href="mailto:marketinghead@studentallience.in" className="text-blue-500 hover:underline">
                marketinghead@studentallience.in
              </a>
            </p>
            
            <p className="flex items-center gap-3 text-lg">
              <FaPhoneAlt className="text-green-500" /> +91 9920892689
            </p>
            <p className="flex items-center gap-3 text-lg">
              <FaMapMarkerAlt className="text-red-500" /> Mumbai, Maharashtra
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold">Follow me on social media</h3>
            <div className="flex space-x-4 mt-2 text-2xl">
              <a href="#" className="text-gray-900 hover:text-green-500">
                <FaWhatsapp />
              </a>
              <a href="https://www.linkedin.com/in/raje-ayaan-327593229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-900 hover:text-blue-600">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/raje_ayaan?igsh=MTh2Y3YwMzlkZzc1NQ==" className="text-gray-900 hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="https://www.figma.com/" className="text-gray-900 hover:text-purple-500">
                <FaFigma />
              </a>
            </div>
          </div>
        </div>

        {/* Animated GIF */}
        <img 
          alt="Contact Illustration" 
          className="w-60 sm:w-80 md:w-[70vh] h-auto mx-auto" 
          src="/contact.jpg"
        />
      </div>
    </section>
  );
}
