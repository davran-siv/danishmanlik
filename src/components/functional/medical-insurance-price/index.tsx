import * as React from 'react'
import Flex from '../../ui/common/flex'
import VerticalIndentation from '../../ui/common/vertical-indentation'
import MedicalInsuranceResult from './medical-insurance-result'

interface Props {
  gender: 'male' | 'female',
  age: number
}

const MedicalInsurancePrice = (props: Props) => {
  const priceResult = companies.map((it, i) => {
    const priceRange = it.priceList.find(it => (it.min <= props.age && it.max >= props.age));
    if(!priceRange) return
    const priceToShow = `${priceRange.price[props.gender]}$`
    return <MedicalInsuranceResult key={i} imageUrl={it.image} companyName={it.companyName} price={priceToShow}/>
  });
  
  return (
      <Flex justifyContent='space-around' flexWrap='wrap'>
        {priceResult}
      </Flex>
  )
}

const companies = [
  {
    companyName: 'AKSigorta',
    image: '../../../vendor/images/g1.jpg',
    priceList: [
      {min: 0, max: 18, price: {male: 161, female: 161}},
      {min: 19, max: 25, price: {male: 145, female: 145}},
      {min: 26, max: 30, price: {male: 195, female: 195}},
      {min: 31, max: 35, price: {male: 209, female: 209}},
      {min: 36, max: 40, price: {male: 235, female: 235}},
      {min: 41, max: 45, price: {male: 309, female: 309}},
      {min: 46, max: 50, price: {male: 310, female: 310}},
      {min: 51, max: 55, price: {male: 410, female: 410}},
      {min: 56, max: 60, price: {male: 460, female: 460}},
      {min: 61, max: 64, price: {male: 740, female: 740}},
      {min: 65, max: 70, price: {male: 1100, female: 1100}}
    ]
  },
  {
    companyName: 'DOGASigorta',
    image: '../../../vendor/images/g1.jpg',
    priceList: [
      {min: 0, max: 18, price: {male: 200, female: 200}},
      {min: 19, max: 25, price: {male: 150, female: 150}},
      {min: 26, max: 30, price: {male: 200, female: 200}},
      {min: 31, max: 35, price: {male: 215, female: 215}},
      {min: 36, max: 40, price: {male: 240, female: 240}},
      {min: 41, max: 45, price: {male: 320, female: 320}},
      {min: 46, max: 50, price: {male: 320, female: 320}},
      {min: 51, max: 55, price: {male: 420, female: 420}},
      {min: 56, max: 60, price: {male: 480, female: 480}},
      {min: 61, max: 64, price: {male: 750, female: 750}}
    ]
  },
  {
    companyName: 'Turk NIPPON Sigorta',
    image: '../../../vendor/images/g1.jpg',
    priceList: [
      {min: 0, max: 18, price: {male: 166.25, female: 161}},
      {min: 19, max: 25, price: {male: 166.25, female: 169.75}},
      {min: 26, max: 30, price: {male: 231.5, female: 215.25}},
      {min: 31, max: 35, price: {male: 231, female: 220.5}},
      {min: 36, max: 40, price: {male: 234.5, female: 238}},
      {min: 41, max: 50, price: {male: 306.25, female: 311.5}},
      {min: 51, max: 60, price: {male: 444.5, female: 444.5}},
      {min: 61, max: 70, price: {male: 752.5, female: 787.5}}
    ]
  }
]

export default MedicalInsurancePrice
