import * as React from 'react'
import { configuration } from '../../../../configs'
import Clearfix from '../../common/clearfix'

interface Props {
}

const FooterContactUs = (props: Props) => (
  <div className="col-md-12 sign-gd-two">
    <h4>Контакты</h4>
    <div className="address">
      <div className="address-grid">
        <div className="address-left">
          <i className="fa fa-phone" aria-hidden="true"/>
        </div>
        <div className="address-right">
          <h6>Наши Телефоны</h6>
          {phones}
        </div>
        <Clearfix/>
      </div>
      <div className="address-grid">
        <div className="address-left">
          <i className="fa fa-envelope" aria-hidden="true"/>
        </div>
        <div className="address-right">
          <h6>Пишите Нам</h6>
          <p>Email : <a href={`mailto:${configuration.contacts.emailAddress}`}>{configuration.contacts.emailAddress}</a>
          </p>
        </div>
        <Clearfix/>
      </div>
      <div className="address-grid">
        <div className="address-left">
          <i className="fa fa-map-marker" aria-hidden="true"/>
        </div>
        <div className="address-right">
          <h6>Наш Адрес</h6>
          <p>{configuration.contacts.officeAddress}</p>
        </div>
        <Clearfix/>
      </div>
    </div>
  </div>
)

const phones = configuration.contacts.phones.map((it, i) => <p key={i}>{it.phoneNumber}</p>)

export default FooterContactUs
