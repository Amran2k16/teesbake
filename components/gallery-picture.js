const GalleryPicture = props => {
  return (
    <div className="row justify-content-center">
      {/* <div className=" col-12 col-sm-6 col-lg-4 col-xl-3"> */}
      <div className="">
        <div className="card border-light">
          <div className="card-header">
            <h5 className="text-black">{props.title}</h5>
          </div>
          <div className="card-body">
            {/* <h5 className="card-title">{props.type} </h5> */}
            <img
              src={props.image_url}
              style={{ display: "block", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPicture;
