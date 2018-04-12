import * as React from 'react'
import Slider from '../slick-carousel'
import './index.scss'

interface Props {
}

const MainPageSlider = (props: Props) => (
  <Slider>
    <div className='item-block'>
      <img src="../../../vendor/images/banner1.jpg"/>
      <div className="carousel-caption">
        <h3>Build Effective Designs</h3>
        <p>Solutions made easy</p>
        <div className="top-buttons">
          <div className="bnr-button">
            <a className="act" href="single.html">Read More</a>
          </div>
          <div className="bnr-button">
            <a href="portfolio.html" className="two scroll ">Portfolio</a>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
    <div className='item-block'>
      <img src="../../../vendor/images/banner1.jpg"/>
      <div className="carousel-caption">
        <h3>Build Effective Designs</h3>
        <p>Solutions made easy</p>
        <div className="top-buttons">
          <div className="bnr-button">
            <a className="act" href="single.html">Read More</a>
          </div>
          <div className="bnr-button">
            <a href="portfolio.html" className="two scroll ">Portfolio</a>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </Slider>
)

export default MainPageSlider
