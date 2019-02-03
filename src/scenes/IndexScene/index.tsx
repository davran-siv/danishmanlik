import * as React from 'react'
import i18n from '../../common/translate'
import FlyTicketsTableContainer from '../../components/functional/fly-tickets-table'
import MainPageSlider from '../../components/functional/main-page-slider'
import OurService from '../../components/functional/our-service'
import TestimonialContainer from '../../components/functional/testimonial/testimonial'
import Card from '../../components/ui/card'
import CardContent from '../../components/ui/card/card-content'
import CardTitle from '../../components/ui/card/card-title'
import Flex from '../../components/ui/common/flex'
import FlexBox from '../../components/ui/common/flex/flex-box'

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
          <CardTitle className='top-padding'>{i18n.t('services')}</CardTitle>
          <CardContent className='padding'>
            <Flex justifyContent='space-around' flexWrap='wrap'>
              {ourServiceBlockList}
            </Flex>
          </CardContent>
          <TestimonialContainer/>
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
    description: i18n.t('serviceItems.residencePermit'),
    image: 'https://cdn-images-1.medium.com/max/2000/1*CqQTKb0N2o0suacfiluO8w.jpeg'
  },
  {
    description: i18n.t('serviceItems.medicalInsurance'),
    image: 'https://cdn-images-1.medium.com/max/2000/1*CqQTKb0N2o0suacfiluO8w.jpeg'
  },
  {
    description: i18n.t('serviceItems.workInTurkey'),
    image: 'https://cdn-images-1.medium.com/max/2000/1*CqQTKb0N2o0suacfiluO8w.jpeg'
  },
  {
    description: i18n.t('serviceItems.lawConsultation'),
    image: 'https://cdn-images-1.medium.com/max/2000/1*CqQTKb0N2o0suacfiluO8w.jpeg'
  }
]


