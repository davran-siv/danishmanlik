import * as React from 'react'
import './index.scss'
import Slider from '../slick-carousel'
import TestimonialItem from './testimonail-item'

interface Props {
  history?: History
  location?: any
  match?: any
  testimonials: any[]
}

class Testimonial extends React.Component<Props, {}> {
  render() {
    const testimonialItems = this.props.testimonials.map((it, i) => (
      <TestimonialItem {...it} key={i}/>
    ))
    
    return (
      <div>
        <div className="testimonials">
          <div className="container">
            <h3 className="tittle-w3ls cen">Testimonials</h3>
            <Slider showArrows={false}>
              {testimonialItems}
            </Slider>
          </div>
        </div>
      </div>
    )
  }
}

interface ContainerProps {
}

export default class TestimonialContainer extends React.Component<ContainerProps, {}> {
  render() {
    return (
      <div>
        <Testimonial testimonials={testimonials}/>
      </div>
    
    )
  }
}

const testimonials = [
  {
    image: 'http://efekt-dieta.info/cdn/images/smile-pictures/smile-pictures-20.jpg',
    fullName: 'Alice Williams',
    message: 'Очень хорошо работают! Продолжайте в том же духе!'
  }
]
