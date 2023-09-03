import final from '../images/final.png'

const Book = () => (
  <div className="book-container d-flex flex-lg-row justify-content-around align-items-center">
    <div>
      <img src={final} className="book-girl" alt="" />
    </div>

    <div className="form-item mt-3 bg-white p-3">
      <h3 className="title">Book now</h3>
      <p className="book-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <p className="city">City</p>
      <input
        type="text"
        className="input place  bg-secondary text-white"
        placeholder="placeholder"
      />
      <div className="form-el">
        <div>
          <p>Arrival</p>
          <input
            type="text"
            className="input2 place bg-secondary"
            placeholder="10 October"
          />
        </div>

        <div>
          <p>Departure</p>
          <input
            type="text"
            className="input2 place bg-secondary"
            placeholder="11 October"
          />
        </div>

        <div>
          <p>STAR</p>
          <input
            type="text"
            className="input3 place  bg-secondary"
            placeholder="-   4     +"
          />
        </div>

        <div>
          <p>ROOM</p>
          <input
            type="text"
            className="input3 place"
            placeholder="-   1     +"
          />
        </div>

        <button className="btn btn-secondary mt-3" type="button">
          BOOK NOW
        </button>
      </div>
    </div>
  </div>
)

export default Book
