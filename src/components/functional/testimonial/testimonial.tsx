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
    const testimonialItems = this.props.testimonials.map(it => (
      <TestimonialItem {...it}/>
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
    image: 'http://adminnews24.info/wp-content/uploads/2017/05/small-photos-21-how-to-innovate-and-create-new-business-opportunities-when-you-are.jpg',
    fullName: 'Alice Williams',
    message: 'Очень хорошо работают! Продолжайте в том же духе!'
  }
]
