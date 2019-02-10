import * as React from 'react'
import i18n from '../../common/translate'
// import './index.scss'
import Card from '../../components/ui/card'
import CardContent from '../../components/ui/card/card-content'
import CardTitle from '../../components/ui/card/card-title'

interface Props {
  match?: any
  history?: History
  location?: any
}

class VisasToOtherCountriesScene extends React.Component<Props, {}> {
  render() {
    const { props } = this
    return (
      <Card paddingRight='6em' paddingLeft='6em' paddingTop='6em' paddingBottom='6em'>
        <CardTitle>{i18n.t('menuItems.visasToOtherCountries')}</CardTitle>
        <CardContent className='padding'>
          Content
        </CardContent>
      </Card>
    )
  }
}

interface ContainerProps {
}

export default class VisasToOtherCountriesSceneContainer extends React.Component<ContainerProps, {}> {

  render() {
    return (
      <VisasToOtherCountriesScene/>
    )
  }
}
