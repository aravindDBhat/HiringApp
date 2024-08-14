import Navbar from "./LandingPage/Navbar/Navbar";
import LandingPageContents from "./LandingPage/Landingpagecontents/Landingpagecontents";
import Features from "./Features/Features";
import HowItWorks from "./HowItWorks/howItWorks";
import Testimonials from "./Testimonials/testimonials";
function About() {
  return (
    <div className="about">
      <div className="landingpage">
        <Navbar></Navbar>
        <LandingPageContents />
      </div>
      <div className="feature">
        <Features />
      </div>
      <div className="howitworks">
        <HowItWorks />
      </div>
      <div className="testimonial">
        <Testimonials />
      </div>
    </div>
  );
}
export default About;
