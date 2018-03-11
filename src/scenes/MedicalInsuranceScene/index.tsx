import * as React from 'react'
import './index.scss'
import i18n from '../../common/translate'
import Card from '../../components/ui/card'
import CardTitle from '../../components/ui/card/card-title'
import CardContent from '../../components/ui/card/card-content'
import Flex from '../../components/ui/common/flex'
import FlexBox from '../../components/ui/common/flex/flex-box'
import MedicalInsuranceValidation from '../../validator/medical-insurance-validation'
import {observer} from 'mobx-react'
import {action, observable} from 'mobx'
import DefaultInput from '../../components/functional/inputs/default-input'
import DefaultSelect from '../../components/functional/inputs/default-select'
import MedicalInsurancePrice from '../../components/functional/medical-insurance-price'
import VerticalIndentation from '../../components/ui/common/vertical-indentation'

interface Props {
  history?: History
  location?: any
  match?: any
  form: any
  gender?: 'male' | 'female' | undefined,
  age?: number | undefined
}

@observer
class MedicalInsuranceScene extends React.Component<Props, {}> {
  
  @observable
  private selectedAge: number
  
  render() {
    const {props} = this
    const medicalInsuranceResult = (props.gender && props.age) ?
      <MedicalInsurancePrice age={props.age} gender={props.gender}/> : null
    return (
      <div>
        <Card paddingTop='6em' paddingBottom='6em'>
          <CardTitle>Узнайте стоимость медицинской страховки</CardTitle>
          <CardContent horizontalPadding='1em'>
            <Flex justifyContent='space-evenly' flexWrap='wrap'>
              <FlexBox>
                <VerticalIndentation verticalIndentation='1em'>
                  <h3>Введите Ваш пол и возраст</h3>
                </VerticalIndentation>
              </FlexBox>
              <FlexBox>
                <VerticalIndentation verticalIndentation='1em'>
                  <form onSubmit={props.form.onSubmit}>
                    <div className="form-group-inline">
                      <DefaultSelect form={props.form} field='gender' options={genderOptions}/>
                      <DefaultInput form={props.form} field='age' type='number'/>
                      <input type="submit" value="OK" className='btn btn-primary btn-sm'/>
                    </div>
                  </form>
                </VerticalIndentation>
              </FlexBox>
            </Flex>
            {medicalInsuranceResult}
          </CardContent>
        </Card>
      </div>
    )
  }
}

interface ContainerProps {
}

@observer
export default class MedicalInsuranceSceneContainer extends React.Component<ContainerProps, {}> {
  
  @observable
  private gender: 'male' | 'female'
  
  @observable
  private age: number
  
  @action
  public calculateMedicalInsuranceCost = (form: any) => {
    this.gender = form.$('gender').value
    console.log(form.$('gender').value)
    this.age = form.$('age').value
    
  }
  
  private medicalInsuranceForm = MedicalInsuranceValidation(this.calculateMedicalInsuranceCost)
  
  
  render() {
    return (
      <MedicalInsuranceScene form={this.medicalInsuranceForm} gender={this.gender} age={this.age}/>
    )
  }
}

const genderOptions = [
  {
    value: 'male',
    label: 'Мужской'
  },
  {
    value: 'female',
    label: 'Женский'
  }
]
