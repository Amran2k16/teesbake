import GalleryPicture from "./gallery-picture";

const Gallery = () => {
  return (
    <div className="container py-3" style={{ height: "100vh" }}>
      <div className="d-flex flex-column align-items-between">
        <h3 className="pb-3">Gallery</h3>

        <div className="row ">
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
        </div>
        <h5>Pagination</h5>
      </div>
    </div>
  );
};

export default Gallery;
