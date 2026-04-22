import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "Fake News Detection Engine",
    category: "NLP / Machine Learning",
    date: "Jan 2024 – Apr 2024",
    tools: "Python, Scikit-learn, XGBoost, TF-IDF, Streamlit",
    description:
      "Engineered an NLP pipeline using TF-IDF vectorization. Benchmarked 5 ML models to optimize F1-scores. Deployed as an interactive Streamlit web app.",
    image: "/images/project_fakenews.png",
  },
  {
    title: "Air Sync: Contactless Gesture Control",
    category: "Computer Vision",
    date: "Aug 2024 – Present",
    tools: "Python, MediaPipe, OpenCV",
    description:
      "Developed a real-time computer vision interface using MediaPipe and OpenCV. Mapped spatial coordinates to game controls for a driving simulator.",
    image: "/images/project_airsync.png",
  },
  {
    title: "Clinical Eye Redness Classifier",
    category: "Deep Learning / Medical AI",
    date: "Feb 2025 – Present",
    tools: "Python, TensorFlow, EfficientNet-B3, MobileNet",
    description:
      "Curated a 2 GB image dataset across 4 clinical severity classes. Achieved 95% accuracy with EfficientNet-B3 using data augmentation.",
    image: "/images/project_eyeredness.png",
  },
  {
    title: "Multi-Agent LLM Research Pipeline",
    category: "LLM / Generative AI",
    date: "Feb 2026 – Present",
    tools: "Python, Groq API, Gemini API, Streamlit",
    description:
      "Engineered a deterministic AI research pipeline using Groq and Gemini APIs. Built a Streamlit frontend for real-time query-to-PDF report generation.",
    image: "/images/project_llmpipeline.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX =
        rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools & Tech</h4>
                <p>{project.tools}</p>
                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "0.85em",
                    opacity: 0.8,
                  }}
                >
                  {project.date}
                </p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
