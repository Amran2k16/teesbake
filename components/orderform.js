const Orderform = props => {
  return (
    <div className="pt-5" style={{ height: "100vh ", background: "#f6f6f6" }}>
      <div className="container py-4" style={{ background: "white" }}>
        <form className="">
          <fieldset>
            <legend>Make an order</legend>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1"> Contact number </label>
              <input
                type="tel"
                className="form-control"
                id="exampleContactHelp"
                placeholder="Enter contact number"
              />
              <small id="contactHelp" className="form-text text-muted">
                We'll never share your contact number with anyone else.
              </small>
            </div>

            <div className="form-group">
              <label for="exampleSelect1">Select type</label>
              <select className="form-control" id="exampleSelect1">
                <option>Cake</option>
                <option>CupCake</option>
                <option>Cookies </option>
                <option>Brownies</option>
              </select>
            </div>

            <div className="form-group">
              <label for="exampleTextarea">Customise your choice</label>
              <textarea
                className="form-control"
                id="exampleTextarea"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label for="exampleInputFile">
                Do you have a picture we can use?
              </label>
              <input
                type="file"
                className="form-control-file"
                id="exampleInputFile"
                aria-describedby="fileHelp"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Make order
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Orderform;
