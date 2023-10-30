import "./Projects.scss";
import { imageData } from "../../helper/imageData.js";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div className="projects-container">
      <div className="title-container">
        <h1 className="title">My Projects</h1>
      </div>
      {/* <div className="projects-items">
        {imageData.map((item, i) => (
          <Link key={i + 1} to={item.link} target="_blank" className="project-navigator">
            <div className="projects-item">
              <img
                className="project-image"
                src={item.image}
                alt="My Project"
              />
            </div>
          </Link>
        ))}
      </div> */}
    </div>
  );
};export default Projects;