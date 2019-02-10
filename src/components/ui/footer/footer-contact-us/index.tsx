import * as React from 'react'
import i18n from '../../../../common/translate'
import { configuration } from '../../../../configs'
import Clearfix from '../../common/clearfix'

interface Props {
}

const FooterContactUs = (props: Props) => (
  <div className="col-md-12 sign-gd-two">
    <h4>{i18n.t('contacts')}</h4>
    <div className="address">
      <div className="address-grid">
        <div className="address-left">
          <i className="fa fa-phone" aria-hidden="true"/>
        </div>
        <div className="address-right">
          <h6>{i18n.t('ourPhones')}</h6>
          {phones}
        </div>
        <Clearfix/>
      </div>
      <div className="address-grid">
        <div className="address-left">
          <i className="fa fa-envelope" aria-hidden="true"/>
        </div>
        <div className="address-right">
          <h6>{i18n.t('writeToUs')}</h6>
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
          <h6>{i18n.t('ourAddress')}</h6>
          <p>{configuration.contacts.officeAddress}</p>
        </div>
        <Clearfix/>
      </div>
    </div>
  </div>
)

const phones = configuration.contacts.phones.map((it, i) => <p key={i}>{it.phoneNumber}</p>)

export default FooterContactUs
