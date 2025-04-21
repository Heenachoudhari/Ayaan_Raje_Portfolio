import About from "@/Component/About/about";
import Education from "@/Component/About/education";
import Experience from "@/Component/About/experience";
import Navbar from "@/Component/Home/navbar";

export default function Home() {
    return (
        <div>
        <Navbar/>
        <About/>
        <Education/>
        <Experience/>
        </div>
    );
}