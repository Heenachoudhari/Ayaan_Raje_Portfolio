export default function Hero() {
    return (
      <div className="relative w-full h-screen flex items-center justify-center px-6 md:px-20">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-100"
        >
          <source src="video2.mp4" type="video/mp4" />
        </video>

        {/* Content Section */}
        <div className="relative text-center max-w-3xl z-10">
          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Hi, <br />
            I'm <span className="text-purple-500">Ayaan Raje</span>
          </h2>
          <p className="text-white text-lg md:text-xl mt-2">
            UI/UX Designer | Marketing Head | Director & Co-founder at Nexcore Alliance.
          </p>
          <div className="mt-6">
            <a
              href="/Contact"
              className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg 
                        hover:bg-white hover:text-blue-600 transition transform 
                        hover:scale-110 hover:shadow-xl"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    );
}
