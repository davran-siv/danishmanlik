import * as React from 'react'
import FlexBox from '../../../ui/common/flex/flex-box'
import VerticalIndentation from '../../../ui/common/vertical-indentation'
import './index.scss'

interface Props {
  imageUrl?: string
  companyName?: string
  price?: string
}

const MedicalInsuranceResult = (props: Props) => {
  const price = props.price || 'не найдена'
  return(
    <VerticalIndentation verticalIndentation='20px'>
      <FlexBox className='medical-insurance-price-result'>
        <img src={props.imageUrl} alt=""/>
        <VerticalIndentation verticalIndentation='10px'>
          <h3>{props.companyName}</h3>
        </VerticalIndentation>
        <b>Цена: {props.price}</b>
      </FlexBox>
    </VerticalIndentation>
  )
}

export default MedicalInsuranceResult
