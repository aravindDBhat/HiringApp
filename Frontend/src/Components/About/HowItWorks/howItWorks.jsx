function HowItWorks() {
  return (
    <div
      className="howitworksContents"
      data-aos-duration="2000"
      data-aos="fade-up"
    >
      <div className="howitworksContentsHeading">
        <h1>How It Works</h1>
        <p>
          Follow these four easy steps to get started and enhance your research
          capabilities.
        </p>
      </div>
      <div className="howitworksContentsBody">
        <div className="howitworksPointsContainer">
          <div
            className="howitworksPoints"
            data-aos-duration="1500"
            data-aos="fade-up"
          >
            {" "}
            <div className="logo S">
              {" "}
              <i class="bi bi-1-circle-fill fs-1"></i>
            </div>
            <div className="howitworksInfo">
              {" "}
              <h6>Sign Up </h6>
              <p>
                Create an account and tell us about your research project and
                what you’re looking for in a PhD assistant.
              </p>
            </div>
          </div>
          <div
            className="howitworksPoints"
            data-aos-duration="1500"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {" "}
            <div className="logo S">
              {" "}
              <i class="bi bi-2-circle-fill fs-1"></i>{" "}
            </div>
            <div className="howitworksInfo">
              {" "}
              <h6>Post Your Job</h6>
              <p>
                Provide detailed information about your job, including the
                skills and qualifications you require, to attract the most
                suitable candidates.
              </p>
            </div>
          </div>
        </div>
        <div className="howitworksPointsContainer">
          <div
            className="howitworksPoints"
            data-aos-duration="1500"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            {" "}
            <div className="logo S">
              {" "}
              <i class="bi bi-3-circle-fill fs-1"></i>{" "}
            </div>
            <div className="howitworksInfo">
              {" "}
              <h6>Browse Profiles</h6>
              <p>
                Explore detailed profiles of available PhD assistants, including
                their expertise, experience, and availability.
              </p>
            </div>
          </div>
          <div
            className="howitworksPoints"
            data-aos-duration="1500"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {" "}
            <div className="logo S">
              {" "}
              <i class="bi bi-4-circle-fill fs-1"></i>{" "}
            </div>
            <div className="howitworksInfo">
              {" "}
              <h6>Connect and Hire</h6>
              <p>
                Message candidates directly through our platform to discuss your
                project and hire the best fit for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HowItWorks;
