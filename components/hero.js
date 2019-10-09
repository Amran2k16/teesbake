const Hero = props => {
  return (
    <div className="container-fluid " style={{ height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          left: "0",
          top: "0",
          backgroundSize: "auto",
          height: "100vh",
          zIndex: -1,
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('photographer.jpg'), url('/static/hero-img.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      ></div>
      <div className="row h-100 justify-content-center">
        <div className="d-flex flex-column align-items-center justify-content-around ">
          <div
            style={{ paddingTop: "80px" }}
            className="d-flex flex-column align-items-center"
          >
            <h1 className="text-white">TeesBake</h1>
            <h5 className="font-weight-light text-center pt-4 text-white">
              Bespoke, handmade, homemade desserts for you and your loved ones
            </h5>
          </div>
          <div className="">
            <button
              type="button"
              className=" btn btn-secondary btn-md btn-block "
            >
              Continue
            </button>
            {/* <img src="/static/hero-img.jpg" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
