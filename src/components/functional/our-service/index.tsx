import * as React from 'react'
import CardContent from '../../ui/card/card-content'
import './index.scss'
import LinkTo from '../../ui/common/link-to'

interface Props {
  description: string
  image: string
}

const OurService = (props: Props) => (
  <div className='our-service'>
    <LinkTo to='/'>
      <img src={props.image} alt={props.description}/>
      <CardContent verticalPadding='0.5em' horizontalPadding='1em' className='service-desc'>
        <h5 dangerouslySetInnerHTML={{__html: props.description}}/>
      </CardContent>
    </LinkTo>
  </div>
)

export default OurService
