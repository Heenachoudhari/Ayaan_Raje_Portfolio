export default function Hero2() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#5356FF] mt-6 sm:mt-10 mb-6 text-center">
                SKILLS
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-6 w-full max-w-5xl justify-center">
                {[
                    { img: "uiux.png", alt: "UI/UX Designing", text: "UI/UX Designing" },
                    { img: "branding.jpg", alt: "Branding", text: "Branding" },
                    { img: "digital.jpg", alt: "Digital Marketing", text: "Digital Marketing" },
                    { img: "photoshop.jpg", alt: "Photoshop", text: "Photoshop" },
                    { img: "videography.jpg", alt: "Video Shooting", text: "Video Shooting" },
                    { img: "figma.png", alt: "Figma", text: "Figma" },
                    { img: "canva.jpeg", alt: "Canva", text: "Canva" },
                    { img: "priempro.jpeg", alt: "premiere pro", text: "premiere pro" },
                    { img: "coreldraw.png", alt: "Corel draw", text: "Corel draw" },
                    { img: "graphic.jpg", alt: "Graphic Design", text: "Graphic Design" },
                    { img: "mailchimp.jpg", alt: "Mailchimp", text: "Mailchimp" },
                    { img: "wordpress.png", alt: "Wordpress", text: "Wordpress" },
                ].map((skill, index) => (
                    <div 
                        key={index} 
                        className="bg-gradient-to-b from-[#4A90E2] to-[#67C6E3] p-8 sm:p-10 rounded-2xl shadow-xl transform hover:scale-105 transition-all text-center relative w-full max-w-[250px] mx-auto"
                    >
                        <img 
                            src={skill.img} 
                            alt={skill.alt} 
                            className="w-28 sm:w-32 md:w-36 mx-auto mb-4 rounded-lg"
                        />
                        <p className="font-semibold text-lg text-white">{skill.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
