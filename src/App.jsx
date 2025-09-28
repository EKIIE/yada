import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (images) => {
    setActiveImages(images);
    setCurrentIndex(0);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setActiveImages([]);
  };
  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? activeImages.length - 1 : prev - 1
    );
  };
  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === activeImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Yada Boonying</div>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <img src="/profile.png" alt="yada" />
        <h1>Hi, I’m Yada Boonying</h1>
        <p>4th-year BIS Student | Software Development</p>
        <a href="#projects" className="btn">
          View My Projects
        </a>
      </header>

      {/* About Section */}
      <section id="about" className="section about">
        <h2>About Me</h2>

        <div className="about-content">
          {/* <img src="/images/profile.jpg" alt="Yada" className="profile-pic" /> */}

          <div>
            <p>
              I’m a fourth-year student majoring in Business Information Systems
              , specializing in Software Development. I have experience in both
              front-end and back-end development, with some familiarity in AI.
              I’m especially passionate about front-end development and eager to
              further enhance my skills in this area. I’m seeking an internship
              opportunity that allows me to gain hands-on experience, grow
              professionally, and collaborate effectively in a real-world
              working environment.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <img src="/icons/figma.svg" alt="figma" />
            <p>Figma</p>
          </div>
          <div className="skill-card">
            <img src="/icons/html5.svg" alt="html5" />
            <p>HTML5</p>
          </div>
          <div className="skill-card">
            <img src="/icons/css.svg" alt="css" />
            <p>CSS</p>
          </div>
          <div className="skill-card">
            <img src="/icons/javascript.svg" alt="javascript" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <img src="/icons/php.svg" alt="php" />
            <p>PHP</p>
          </div>
          <div className="skill-card">
            <img src="/icons/react.svg" alt="react" />
            <p>React</p>
          </div>
          <div className="skill-card">
            <img src="/icons/git.svg" alt="git" />
            <p>git</p>
          </div>
          <div className="skill-card">
            <img src="/icons/github.svg" alt="github" />
            <p>GitHub</p>
          </div>
          <div className="skill-card">
            <img src="/icons/mysql.svg" alt="mysql" />
            <p>MySQL</p>
          </div>
          <div className="skill-card">
            <img src="/icons/flutter.svg" alt="flutter" />
            <p>Flutter</p>
          </div>
          <div className="skill-card">
            <img src="/icons/python.svg" alt="python" />
            <p>Python</p>
          </div>
          <div className="skill-card">
            <img src="/icons/lua.svg" alt="lua" />
            <p>Lua</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects">
          <div className="card">
            <img
              src="/jrcar.png"
              alt="JR Car Rental"
              className="card-img"
            />
            <h3>JR Car Rental System</h3>
            <p>
              Web application for car rental management with booking, payment,
              and staff dashboard.
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Project
            </a>
          </div>
          <div className="card">
            <img
              src="/bis.png"
              alt="Bis Online Store"
              className="card-img"
            />
            <h3>BIS Online Store</h3>
            <p>
              E-commerce website template with product listing, login, and admin
              management.
            </p>
            <a
              href="http://ekiie.cis-training.com/webpro_sec2/assign12/modules/home/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Project
            </a>
          </div>
          <div className="card">
            <img
              src="/lstN4nd.png"
              alt="Lost and Found"
              className="card-img"
            />
            <h3>Lost & Found Website</h3>
            <p>
              Platform for reporting and finding lost items with user
              authentication.
            </p>
            <a
              href="http://ekiie.cis-training.com/chxrpxn/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section">
        <h2>Certificates</h2>
        <div className="certificates">
          {/* Card 1 */}
          <div
            className="certificate-card"
            onClick={() =>
              openModal([
                "/images/cert-yolo-1.jpg",
                "/images/cert-yolo-2.jpg",
                "/images/cert-yolo-3.jpg",
                "/images/cert-yolo-4.jpg",
              ])
            }
          >
            <img src="/images/cert-yolo-thumb.jpg" alt="YOLO Certificate" />
            <h3>Deep Learning with YOLO</h3>
            <p>AI BigData and Chinese Workshop, 2023</p>
          </div>

          {/* Card 2 */}
          <div
            className="certificate-card"
            onClick={() =>
              openModal([
                "/images/cert-webdev-1.jpg",
                "/images/cert-webdev-2.jpg",
              ])
            }
          >
            <img src="/images/cert-webdev-thumb.jpg" alt="WebDev Certificate" />
            <h3>Web Development Bootcamp</h3>
            <p>Full-stack Training, 2022</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              ✖
            </button>
            <img src={activeImages[currentIndex]} alt="Certificate" />
            <div className="modal-controls">
              <button onClick={prevImage}>◀</button>
              <button onClick={nextImage}>▶</button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:milkyada@gmail.com">milkyada@gmail.com</a>
        </p>
        <p>
          Email:{" "}
          <a href="mailto:yada_bo65@live.rmutl.ac.th">
            yada_bo65@live.rmutl.ac.th
          </a>
        </p>
        <p>
          GitHub: <a href="https://github.com/EKIIE">github.com/EKIIE</a>
        </p>
        {/* <p>LinkedIn: <a href="#">linkedin.com/in/yada</a></p> */}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Yada Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
