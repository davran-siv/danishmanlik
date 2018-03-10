import * as React from 'react'
import CardContent from '../../ui/card/card-content'
import './index.scss'
import LinkTo from '../../ui/common/link-to'

interface Props {
}

const OurService = (props: Props) => (
  <div className='our-service'>
    <LinkTo to='/'>
      <img src="../../../vendor/images/g1.jpg" alt=""/>
      <CardContent verticalPadding='0.5em' horizontalPadding='1em' className='service-desc'>
        <h5>Оформелине ВНЖ, <br/> Рабочая виза</h5>
        <p>Какое то описание</p>
      </CardContent>
    </LinkTo>
  </div>
)

export default OurService
