import * as React from 'react'
import Card from '../../components/ui/card'
import CardTitle from '../../components/ui/card/card-title'
import Flex from '../../components/ui/common/flex'
import FlexBox from '../../components/ui/common/flex/flex-box'
import OurService from '../../components/functional/our-service'
import CardContent from '../../components/ui/card/card-content'
import FlyTicketsTableContainer from '../../components/functional/fly-tickets-table'
import TestimonialContainer from '../../components/functional/testimonial/testimonial'
import MainPageSlider from '../../components/functional/main-page-slider'

interface serviceDescriptionDTO {
  description: string
  image: string
}

interface Props {
  history?: History
  location?: any
  match?: any
  servicesList: serviceDescriptionDTO[]
}

class IndexScene extends React.Component<Props, {}> {
  render() {
    const ourServiceBlockList = this.props.servicesList.map((it, i) =>
                                                              <FlexBox key={i}>
                                                                <OurService description={it.description}
                                                                            image={it.image}/>
                                                              </FlexBox>)
    return (
      <div>
        <MainPageSlider/>
        <FlyTicketsTableContainer/>
        <Card>
          <CardTitle className='top-padding'>Наши услуги</CardTitle>
          <CardContent className='padding'>
            <Flex justifyContent='space-around' flexWrap='wrap'>
              {ourServiceBlockList}
            </Flex>
          </CardContent>
        </Card>
      </div>
    )
  }
}

interface ContainerProps {

}

export default class IndexSceneContainer extends React.Component<ContainerProps, {}> {
  render() {
    return (
      <IndexScene servicesList={servicesList}/>
    )
  }

}

const servicesList = [
  {
    description: `Оформление ВНЖ в Турции,<br/> Рабочая Виза в Турции,<br/> Визы в другие страны`,
    image: 'https://cdn-images-1.medium.com/max/2000/1*CqQTKb0N2o0suacfiluO8w.jpeg'
  },
  {
    description: 'Медицинская страковка',
    image: 'https://cdn-images-1.medium.com/max/2000/1*CqQTKb0N2o0suacfiluO8w.jpeg'
  },
  {
    description: 'Работа в Турции',
    image: 'https://cdn-images-1.medium.com/max/2000/1*CqQTKb0N2o0suacfiluO8w.jpeg'
  },
  {
    description: 'Юридическая Консультация,<br/> Перевод Документов',
    image: 'https://cdn-images-1.medium.com/max/2000/1*CqQTKb0N2o0suacfiluO8w.jpeg'
  }
]


