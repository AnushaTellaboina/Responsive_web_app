import './index.css'
import man from '../images/man.png'
import eclipse from '../images/eclipse.png' // Adjust the path to go up one level to the 'src' directory and then into 'images'

const Home = () => (
  <>
    <div className="main">
      <img src={eclipse} className="ec" alt="Eclipse in a tropical setting" />
      <div className="div-container">
        <div>
          <p className="paragraph">Discover the beauty of the tropics</p>
          <h1 className="heading">Tropical Destinations For Students</h1>
          <p className="last-para">
            Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
            integer rutrum nisi. A nec nisl vitae SIGN UP
          </p>
          <button type="button" className="button">
            SIGN UP
          </button>
        </div>
        <div>
          <img
            src={man}
            className="man"
            alt="Student enjoying a tropical destination"
          />
        </div>
      </div>
    </div>
  </>
)

export default Home
