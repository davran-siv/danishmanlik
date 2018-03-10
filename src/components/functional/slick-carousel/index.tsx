import * as React from 'react'
import {Carousel} from 'react-responsive-carousel'
import './index.scss'

interface Props {

}

const Slider = (props: Props) => (
  <div>
    <Carousel {...sliderSettings}>
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
    </Carousel>
  </div>
)


const sliderSettings = {
  showArrows: true,
  showStatus: false,
  showIndicators: true,
  showThumbs: false,
  infiniteLoop: false,
  useKeyboardArrows: true,
  autoPlay: false,
  stopOnHover: true,
  dynamicHeight: false,
  emulateTouch: false,
  centerMode: false,
  thumbWidth: undefined,
  centerSlidePercentage: 80,
  selectedItem: 0,
  interval: 5000,
  transitionTime: 350,
  swipeScrollTolerance: 5,
  className: '',
  // verticalSwipe: 'standard',
  // width: '',
  onChange: () => void(0),
  onClickItem: () => void(0),
  onClickThumb: () => void(0),
  statusFormatter: (current: number, total: number) => `${current} of ${total}`
}
export default Slider
