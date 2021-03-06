import * as React from 'react'
import './index.scss'
import i18n from '../../common/translate'
import Card from '../../components/ui/card'
import CardTitle from '../../components/ui/card/card-title'
import CardContent from '../../components/ui/card/card-content'
import Accordion from '../../components/functional/accordion'
import AccordionItem from '../../components/functional/accordion/accordion-item'
import AccordionItemTitle from '../../components/functional/accordion/accordion-item/accordion-item-title'
import AccordionItemBody from '../../components/functional/accordion/accordion-item/accordion-item-body'
import AccordionItemFooter from '../../components/functional/accordion/accordion-item/accordion-item-footer'
import { FaqDTO } from '../../dtos/faq'

interface Props {
  history?: History
  location?: any
  match?: any
  faqs: FaqDTO[]
}

class ResidenceScene extends React.Component<Props, {}> {
  render() {
    const accordionItems = this.props.faqs.map((it, i) => {
      return (
        <AccordionItem key={i}>
          <AccordionItemTitle>
            {it.question}
          </AccordionItemTitle>
          <AccordionItemBody>
            {it.answer}
          </AccordionItemBody>
          <AccordionItemFooter>
            <button className='btn btn-primary btn-sm pull-right'>{i18n.t('call')}</button>
          </AccordionItemFooter>
        </AccordionItem>
      )
    })
    return (
      <Card className='padding'>
        <CardTitle className='top-padding'>{i18n.t('questionAndAnswer')}</CardTitle>
        <CardContent className='top-padding'>
          <Accordion>
            {accordionItems}
          </Accordion>
        </CardContent>
      </Card>
    )
  }
}


interface ContainerProps {
}

export default class ResidenceSceneContainer extends React.Component<ContainerProps, {}> {
  render() {
    return (
      <ResidenceScene faqs={faq}/>
    )
  }
}

const faq = [
  {
    id: '1',
    language: 'RU',
    question: 'Вид на жительство ( ikamet) в Турции',
    answer: 'Если вы приехали в Турцию и намеренны остаться здесь больше безвизового режима то вам необходимо подавать на Вид на жительство (ikamet).Просим вас заметить что подача на ВНЖ происходит до окончания без визового режима, после окончания безвизового режима вы не можете подать на ВНЖ, в таком случаи вам необходимо вылететь и оплатить штраф на паспортном контроле.',
  },
  {
    id: '2',
    language: 'RU',
    question: 'Виды вид на жительство в Турции',
    answer: `
      -Туристический внж

      -Семейный ВНЖ
      
      -Студенчиский ВНЖ
      
      -Внж для беженцов
      
      -Внж для турков Ахыска
      
      Для подробной информации просим обратить по
    `
  },
  {
    id: '3',
    language: 'RU',
    question: 'Рабочая виза/Разрешение на работу в Турции.',
    answer: 'Для официального трудоустройства вам необходимо иметь Рабочую визу/Разрешение на работу. Вы можете оформить рабочую визу/Разрешение на работу как на территории Турции, так и через Турецкое посольство/консульство. Для подробной информации просим вас обратиться.'
  },
  {
    id: '4',
    language: 'RU',
    question: 'Медицинская Страховка для Иностранцев',
    answer: 'Для оформления ВНЖ в Турции вы обязаны сделать медицинскую страховку. Медицинские страховки покрывает до 60% в экстренных случаях происшедшие с вами на территории Турции.  Цены на страховки зависят от вашего возраста. Для уточнения цен на Медицинскую страховку просим ас воспользоваться …..'
  },
]
