import test1 from '../images/test1.png'

import test2 from '../images/test2.png'

import test3 from '../images/test3.png'

import './index.css'

const Testimonals = () => (
  <div className="last">
    <div className="textimonal-container">
      <h1 className=" text-center pt-5">Testimonials</h1>
      <div className="test-mon">
        <div className="in-container">
          <div className="box">
            <img src={test1} alt="" />
            <p className="core-para">Corey Korsgaard</p>

            <p className="core-para2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className="in-container">
          <div className="box">
            <img src={test2} alt="" />
            <p className="core-para">Corey Korsgaard</p>

            <p className="core-para2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className="in-container">
          <div className="box">
            <img src={test3} alt="" />
            <p className="core-para">Corey Korsgaard</p>

            <p className="core-para2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Testimonals
