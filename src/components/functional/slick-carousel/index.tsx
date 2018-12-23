import * as React from 'react'
import {Carousel, CarouselProps} from 'react-responsive-carousel'
import './index.scss'

const Slider = (props: CarouselProps) => {
  const sliderSettings = Object.assign(defaultSliderSettings, props)
  return (
    <div>
      <Carousel {...sliderSettings}>
        {props.children}
      </Carousel>
    </div>
  )
}


const defaultSliderSettings = {
  showArrows: true,
  showStatus: false,
  showIndicators: false,
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
  interval: 2000,
  transitionTime: 600,
  swipeScrollTolerance: 5,
  className: '',
  onChange: () => void(0),
  onClickItem: () => void(0),
  onClickThumb: () => void(0),
  statusFormatter: (current: number, total: number) => `${current} of ${total}`
}
export default Slider
