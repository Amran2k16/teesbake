const GalleryPicture = props => {
  return (
    <div className=" col-12 col-sm-6 col-lg-4 col-xl-3">
      <div className="card border-light mb-3">
        <div
          className={`card-header text-white ${props.headerbg}`}
          style={{ background: "" }}
        >
          {props.type}
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title} </h5>
          <img
            src="https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/cupcakes_93722_16x9.jpg"
            style={{ display: "block", maxWidth: "100%", height: "200px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPicture;
