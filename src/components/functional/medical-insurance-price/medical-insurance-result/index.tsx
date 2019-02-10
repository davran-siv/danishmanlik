import * as React from 'react'
import i18n from '../../../../common/translate'
import FlexBox from '../../../ui/common/flex/flex-box'
import VerticalIndentation from '../../../ui/common/vertical-indentation'
import './index.scss'

interface Props {
  imageUrl?: string
  companyName?: string
  price?: string
}

const MedicalInsuranceResult = (props: Props) => {
  const price = props.price || i18n.t('notFound')
  return(
    <VerticalIndentation verticalIndentation='20px'>
      <FlexBox className='medical-insurance-price-result'>
        <img src={props.imageUrl} alt=""/>
        <VerticalIndentation verticalIndentation='10px'>
          <h3>{props.companyName}</h3>
        </VerticalIndentation>
        <b>{i18n.t('price')}: {price}</b>
      </FlexBox>
    </VerticalIndentation>
  )
}

export default MedicalInsuranceResult
