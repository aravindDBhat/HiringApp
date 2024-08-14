function Features() {
  return (
    <div
      className="featureContents"
      data-aos-duration="2000"
      data-aos="fade-up"
    >
      <div className="featureContentsHeading">
        <h1>Our Features</h1>
        <p>Discover How Our Platform Transforms the Hiring Process</p>
      </div>
      {/* <hr></hr> */}
      <div className="featureContentsBody">
        <div
          className="featurePoints"
          data-aos-duration="1500"
          data-aos="fade-up"
        >
          <div className="logo H">
            {" "}
            <i class="bi bi-signpost-2-fill fs-2"></i>
          </div>
          <div className="featureInfo">
            <h6>Streamlined Hiring Process</h6>
            <p>
              Save time with our easy-to-use platform that matches you with the
              most suitable PhD assistants based on your specific needs and
              criteria.
            </p>
          </div>
        </div>
        <div
          className="featurePoints middle "
          data-aos-duration="1500"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {" "}
          <div className="logo V">
            {" "}
            <i class="bi bi-person-check-fill fs-2"></i>{" "}
          </div>
          <div className="featureInfo">
            {" "}
            <h6>Verified Candidates</h6>
            <p>
              Each candidate undergoes a rigorous verification process to ensure
              they possess the required skills, qualifications, and experience.
            </p>
          </div>
        </div>
        <div
          className="featurePoints"
          data-aos-duration="1500"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {" "}
          <div className="logo S">
            {" "}
            <i class="bi bi-award-fill fs-2"></i>
          </div>
          <div className="featureInfo">
            {" "}
            <h6>Diverse Skill Sets</h6>
            <p>
              Whether you need help with data analysis, literature reviews,
              fieldwork, or writing, our platform offers a wide range of skills
              to meet your requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
