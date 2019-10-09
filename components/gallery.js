import GalleryPicture from "./gallery-picture";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black"
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Gallery = props => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="container py-3" style={{ height: "100vh" }}>
      <div className="d-flex flex-column justify-content-between h-100">
        <div className="pt-4">
          <h3 className="">Showcase</h3>
          {/* <div className="row">
            <span class="badge badge-pill badge-success p-2">Cupcakes</span>
            <span class="badge badge-pill badge-warning p-2">Cakes</span>
          </div> */}
        </div>
        <div className="container" style={{ paddingBottom: "150px" }}>
          <Slider {...settings}>
            {props.data.length > 0
              ? props.data.map(p => (
                  <GalleryPicture
                    title={p.fields.title}
                    type={p.fields.type}
                    image_url={p.fields.image_url}
                  />
                ))
              : null}
          </Slider>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="row ">
          <GalleryPicture
            headerbg="bg-info"
            title="Lotus Biscoff cupcake"
            type="CupCake"
          />
          <GalleryPicture
            headerbg="bg-info"
            title="Lotus Biscoff cupcake"
            type="CupCake"
          />
          <GalleryPicture
            headerbg="bg-info"
            title="Lotus Biscoff cupcake"
            type="CupCake"
          />{" "}
          <GalleryPicture
            headerbg="bg-info"
            title="Lotus Biscoff cupcake"
            type="CupCake"
          />{" "}
          <GalleryPicture
            headerbg="bg-info"
            title="Lotus Biscoff cupcake"
            type="CupCake"
          />{" "}
          <GalleryPicture
            headerbg="bg-info"
            title="Lotus Biscoff cupcake"
            type="CupCake"
          />
          <GalleryPicture
            headerbg="bg-info"
            title="Lotus Biscoff cupcake"
            type="CupCake"
          />{" "}
          <GalleryPicture
            headerbg="bg-info"
            title="Lotus Biscoff cupcake"
            type="CupCake"
          />
  </div> */
}

export default Gallery;
