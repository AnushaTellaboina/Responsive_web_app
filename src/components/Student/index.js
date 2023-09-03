import './index.css'
import girl from '../images/girl.png'

const Student = () => (
  <div className="st-flex">
    <div className="ellipse">{/* ellpise */}</div>
    <div className="st-container">
      <p className="st-para">Get 20% off for student</p>
      <h1 className="st-head">Student discounts available.</h1>
      <p>Get ready for some fun in the sun!</p>

      <ul className="st-ul">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Massa quis natoque sit quam</li>
        <li>Eros non pellentesque elit</li>
        <li>Sed suspendisse id in ultrices</li>
        <li>tortor id euismod habitant</li>
      </ul>
      <button type="button" className="courses-button">
        Explore More
      </button>
    </div>

    <div className="image-part">
      <div className="background-image">{/* hell0 */}</div>
      <div className="background-image2">{/* hell0 */}</div>
      <img src={girl} className="girl" alt="" />
    </div>
  </div>
)

export default Student
