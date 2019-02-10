import * as React from 'react'
import './index.scss'
import { languageKeyInLocalStorage } from '../../../const/local-storage'
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
            <h3 className="tittle-w3ls cen">Отзывы</h3>
            <Slider showArrows={false} autoPlay={true}>
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
    const currentLanguage = localStorage.getItem(languageKeyInLocalStorage)
    const testimonialsByLanguage = testimonials.filter(it => it.language === currentLanguage)
    return (
      <div>
        <Testimonial testimonials={testimonialsByLanguage}/>
      </div>

    )
  }
}

const testimonials = [
  {
    image: '../../../vendor/uploads/elenaSkrebatun.png',
    fullName: 'Елена Скребатун',
    message: 'Очень хорошо знают свою работу, приятно иметь дело. Желаю вам больших успехов во всех начинаниях!!! Спасибо вам за помощь.',
    language: 'RU'
  },
  {
    image: '../../../vendor/uploads/dilaUzakova.jpg',
    fullName: 'Диля Узакова',
    message: 'Быстро, качественно и доступно. Самое главное, что не за кем бегать не нужно. Сами звонят и напоминают о дальнейших действиях. Работу выполняют честно и консультируют очень доступно для мозгов.',
    language: 'RU'
  },
  {
    image: '../../../vendor/uploads/İnnaYildirim.jpg',
    fullName: 'Инна Йылдырым',
    message: 'Спасибо вам большое за помощь. Делала сыну туристическую визу и понятия не имела с чего начать. Благодаря вам у нас все получилось и сегодня мы получили на руки карту. Спасибо вам большое.',
    language: 'RU'
  },
  {
    fullName: 'Bülent YILMAZ',
    message: 'Rusya vize için bana yardım oldular. Hizmet baya güzeldi, her şey zamanında. Teşekkür ederim.',
    language: 'TR'
  },
  {
    fullName: 'Alex Ten',
    message: 'They help in all matters, workers do the work honestly. Thank you.',
    language: 'EN'
  },
]
