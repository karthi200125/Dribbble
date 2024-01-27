import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"
import LBanner from "./LBanner"
import LExplore from "./LExplore"
import LHome from "./LHome"
import LImageSlide from "./LImageSlide"

const LandingPage = () => {
    return (
        <div className="landingpage w-full flex flex-col gap-10 justify-start items-center">
            <Navbar />
            <LHome />
            {/* <LImageSlide /> */}
            <LExplore />
            <LBanner />
            <Footer />
        </div>
    )
}

export default LandingPage