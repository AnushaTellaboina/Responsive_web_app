import avatar from '../images/avatar.png'
import avatar2 from '../images/avatar2.png'
import avatar3 from '../images/avatar3.png'
import eclipse from '../images/eclipse.png'
import './index.css'

const Explore = () => (
  <div className="above">
    <div className="above-container">
      {/* First card */}
      <div className="card-container">
        <div className="card-header">
          <div className="media">
            <img src={avatar} className="avatar" alt="Jenny Wilson's profile" />
            <div className="text-part">
              <p className="content">Jenny Wilson</p>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second card */}
      <div className="card-container">
        <div className="card-header">
          <div className="media">
            <img
              src={avatar2}
              className="avatar"
              alt="Jenny Wilson's profile"
            />
            <div className="text-part">
              <p className="content">Jenny Wilson</p>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Third card */}
      <div className="card-container">
        <div className="card-header">
          <div className="media">
            <img
              src={avatar3}
              className="avatar"
              alt="Jenny Wilson's profile"
            />
            <div className="text-part">
              <p className="content">Jenny Wilson</p>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="description">
      <img src={eclipse} className="ec" alt="Tropical adventure" />
      {/* Description content */}
      <h1 className="head">
        Relax and Recharge with a Student Tropical Vacation
      </h1>
      <p className="para">Student Tropical Vacation: Discover and Unwind</p>
      <ul className="ul">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Massa quis natoque sit quam</li>
        <li>Eros non pellentesque elit</li>
        <li>Tortor id euismod habitant</li>
        <li>Sed suspendisse id in ultrices</li>
      </ul>

      <button className="button" type="button">
        Explore More
      </button>
    </div>
  </div>
)

export default Explore
