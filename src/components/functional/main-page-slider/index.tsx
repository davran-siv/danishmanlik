import * as React from 'react'
import i18n from '../../../common/translate'
import { configuration } from '../../../configs'
import Slider from '../slick-carousel'
import './index.scss'

interface Props {
}

const MainPageSlider = (props: Props) => (
  <Slider>
    <div className='item-block'>
      <img src="../../../vendor/images/banner1.jpg"/>
      <div className="carousel-caption">
        <h3>{configuration.companyName}</h3>
        <p>Foreign consulting company</p>
        <div className="top-buttons">
          <div className="bnr-button">
            <a className="act" href="single.html">{i18n.t('aboutCompany')}</a>
          </div>
          <div className="bnr-button">
            <a href="#contacts" className="two scroll">{i18n.t('contacts')}</a>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  </Slider>
)

export default MainPageSlider
