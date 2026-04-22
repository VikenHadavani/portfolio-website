import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Intern</h4>
                <h5>AWS Internship / Bootcamp</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed scalable cloud infrastructure using AWS (EC2, S3,
              DynamoDB, Lambda, CloudFront). Engineered serverless applications
              with API Gateway and prototyped generative AI solutions using AWS
              Bedrock.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Information Technology</h4>
                <h5>Charotar University of Science and Technology</h5>
              </div>
              <h3>2023–2026</h3>
            </div>
            <p>
              Pursuing a Bachelor of Technology in Information Technology with a
              focus on artificial intelligence, machine learning, and cloud
              computing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Engineering</h4>
                <h5>Noble University</h5>
              </div>
              <h3>2020–2023</h3>
            </div>
            <p>
              Completed a Diploma in Computer Engineering, building a solid
              foundation in programming, data structures, and software
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
