const Header = () => {
  return (
    <div className=" bg-light" style={{ position: "absolute", width: "100%" }}>
      <nav className="container navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">
          TeesBake
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link " href="#">
                Gallery
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Make an order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
