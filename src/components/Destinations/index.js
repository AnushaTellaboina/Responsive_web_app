import './index.css'
import cardImage from '../images/card-image.png'
import cardImage2 from '../images/card-image2.png'
import cardImage3 from '../images/card-image3.png'
import cardImage4 from '../images/card-image4.png'
import icon from '../images/Icons.png'
import leftArrow from '../images/left-arrow.png'
import leftArrow2 from '../images/left-arrow2.png'

const destinationsData = [
  {
    id: 'harvard',
    image: cardImage,
    name: 'Harvard University',
    location: 'Cambridge, Massachusetts, USA',
  },
  {
    id: 'oxford',
    image: cardImage2,
    name: 'Oxford University',
    location: 'Oxford, England',
  },
  {
    id: 'stanford',
    image: cardImage3,
    name: 'Stanford University',
    location: 'Stanford, California, USA',
  },
  {
    id: 'nanyang',
    image: cardImage4,
    name: 'Nanyang Technological University',
    location: 'Nanyang Ave, Singapore',
  },
]

const Destinations = () => (
  <>
    <div className="destination">
      <p className="dest">Our Destinations</p>
      <div className="card-1">
        {destinationsData.map(destination => (
          <div className="item1" key={destination.id}>
            <img src={destination.image} className="har-ward" alt="" />
            <div className="second">
              <div className="pt">
                <h4 className="text">{destination.name}</h4>
                <p className="cam">{destination.location}</p>
              </div>
              <img src={icon} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="arrow">
        <img src={leftArrow} alt="" />
        <p className="num">
          <span className="special">2</span> / 140
        </p>
        <img src={leftArrow2} alt="" />
      </div>
    </div>
  </>
)

export default Destinations
