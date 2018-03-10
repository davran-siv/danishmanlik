import * as React from 'react'
import Clearfix from '../../common/clearfix'

interface Props {
}

const FooterContactUs = (props: Props) => (
  <div className="col-md-5 sign-gd-two">
    <h4>Contact <span>Information</span></h4>
    <div className="address">
      <div className="address-grid">
        <div className="address-left">
          <i className="fa fa-phone" aria-hidden="true"/>
        </div>
        <div className="address-right">
          <h6>Phone Number</h6>
          <p>+1 234 567 8901</p>
        </div>
        <Clearfix/>
      </div>
      <div className="address-grid">
        <div className="address-left">
          <i className="fa fa-envelope" aria-hidden="true"/>
        </div>
        <div className="address-right">
          <h6>Email Address</h6>
          <p>Email :<a href="mailto:example@email.com"> mail@example.com</a></p>
        </div>
        <Clearfix/>
      </div>
      <div className="address-grid">
        <div className="address-left">
          <i className="fa fa-map-marker" aria-hidden="true"/>
        </div>
        <div className="address-right">
          <h6>Location</h6>
          <p>Broome St, NY 10002,California, USA.</p>
        </div>
        <Clearfix/>
      </div>
    </div>
  </div>

)

export default FooterContactUs
