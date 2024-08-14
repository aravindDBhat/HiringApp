import Testimonial_1 from "./Testimonial-1.jpg";
import Testimonial_2 from "./Testimonial-2.jpg";
import Testimonial_3 from "./Testimonial-3.png";

function Testimonials() {
  return (
    <div
      className="testimonialsContent"
      data-aos-duration="2000"
      data-aos="fade-up"
    >
      <div className="testimonialsContentHeading">
        <h1>What Our Customers Think</h1>
        <p>
          Discover how our platform has transformed the hiring process for
          researchers across various fields. <br></br>Hear from satisfied
          academics who have successfully connected with top PhD assistants to
          enhance their research efforts.
        </p>
      </div>
      <div className="testimonialsContentsBody">
        <div className="pointsContainer">
          <div
            className="testimonialsPoints"
            data-aos-duration="1500"
            data-aos="fade-up"
          >
            <div className="name">
              <img src={Testimonial_1} alt="image" />
              <p>
                <b>Dr. Emily Roberts</b>
                <br />
                Senior Researcher
              </p>
            </div>
            <div className="description">
              <p>
                Using this platform, I found an assistant who perfectly matched
                my project’s needs. The process was incredibly smooth and saved
                me so much time. My research has progressed significantly thanks
                to their support. I highly recommend this service!
              </p>
            </div>
          </div>
          <div
            className="testimonialsPoints testimonialsPoints2"
            data-aos-duration="1500"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="name">
              <img src={Testimonial_3} alt="image" />
              <p>
                <b>Dr.Michael Thompson </b>
                <br />
                Research Fellow
              </p>
            </div>
            <div className="description">
              <p>
                As a first-time user, I was impressed by the quality and variety
                of candidates available. The assistant I hired has been
                instrumental in advancing my data analysis work. It’s been a
                game-changer for my research productivity. I couldn’t be
                happier!
              </p>
            </div>
          </div>
          <div
            className="testimonialsPoints "
            data-aos-duration="1500"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="name">
              <img src={Testimonial_2} alt="image" />
              <p>
                <b>Dr. Sarah Nguyen</b>
                <br />
                Associate Professor
              </p>
            </div>
            <div className="description">
              <p>
                This platform made it easy to connect with skilled PhD
                candidates who fit my project’s exact requirements. The
                assistant I selected has been a valuable asset, helping me
                manage both administrative tasks and complex research work. I’ll
                definitely use this service again!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
