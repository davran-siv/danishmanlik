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

interface Props {
  history?: History
  location?: any
  match?: any
}

class IndexScene extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <MainPageSlider/>
        <FlyTicketsTableContainer/>
        <Card>
          <CardTitle className='with-top-padding'>Наши услуги</CardTitle>
          <CardContent className='with-padding'>
            <Flex justifyContent='space-around' flexWrap='wrap'>
              <FlexBox>
                <OurService/>
              </FlexBox>
              <FlexBox>
                <OurService/>
              </FlexBox>
              <FlexBox>
                <OurService/>
              </FlexBox>
              <FlexBox>
                <OurService/>
              </FlexBox>
            </Flex>
          </CardContent>
        </Card>
        <Card>
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
      <IndexScene/>
    )
  }
  
}


