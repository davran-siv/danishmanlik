import * as React from 'react'
import SlickCarousel from '../../components/functional/slick-carousel'
import Card from '../../components/ui/card'
import CardTitle from '../../components/ui/card/card-title'
import Flex from '../../components/ui/common/flex'
import FlexBox from '../../components/ui/common/flex/flex-box'
import OurService from '../../components/functional/our-service'
import CardContent from '../../components/ui/card/card-content'

interface Props {
  history?: History
  location?: any
  match?: any
}

class IndexScene extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <SlickCarousel/>
        <Card paddingTop='6em' paddingBottom='6em'>
          <CardTitle>Наши услуги</CardTitle>
          <CardContent horizontalPadding='3em'>
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


