import { useEffect, useRef, useState } from "react";

function Navbar() {
  const navRef = useRef(null);
  const [lastScroll, setLastScroll] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        if (lastScroll < window.scrollY) {
          navRef.current.classList.add("hiddenNav");
        } else {
          navRef.current.classList.remove("hiddenNav");
        }
        setLastScroll(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className="navbar" data-aos="fade-down" data-aos-duration="1500">
      <nav className="navbar-contents navbar navbar-expand-lg" ref={navRef}>
        <div className="container-fluid">
          <a className="navbar-brand me-5" href="#">
            PhD Assistant
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>{" "}
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Find Job
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Applications
                </a>
              </li>
            </ul>
            <span className="navbar-text d-flex">
              <a className="nav-link me-3" href="#">
                Login
              </a>
              /
              <a className="nav-link ms-3" href="#">
                Sign-Up
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
