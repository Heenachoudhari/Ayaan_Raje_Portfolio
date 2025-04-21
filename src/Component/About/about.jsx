"use client";
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 md:bg-cover h-[105vh] bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/baground1.jpg')" }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row-reverse items-center text-center lg:text-left px-6 lg:px-24 gap-6 lg:gap-16">
        {/* Image Section */}
        <div className="w-72 sm:w-80 md:w-96 lg:w-[400px] xl:w-[450px] rounded-full border-4 border-white shadow-lg overflow-hidden animate-slide-up">
          <img
            src="/ayaansir.jpg"
            alt="Ayaan Raje"
            className="w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-lg animate-fade-in lg:-mt-10">
          <h1 className="text-5xl lg:text-6xl font-bold">
            Meet <span className="text-blue-500">Ayaan Raje</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-[#000957] font-semibold">
            <TypeAnimation
              sequence={[
                'UI/UX designer',
                1000,
                'Digital Marketing Expert',
                2000,
                'Leading MarketIQ Junction',
                3000,
                'Crafting innovative, user-centric solutions.',
                () => {
                  console.log('Sequence completed');
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1.5em', display: 'inline-block' }}
            />
          </p>

          {/* LinkedIn Button */}
          <div className="mt-6">
            <a
              href="https://www.linkedin.com/in/raje-ayaan-327593229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }
          .animate-slide-up {
            animation: slideUp 1s ease-in-out;
          }
        `}
      </style>
    </div>
  );
}
