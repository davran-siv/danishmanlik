import * as React from 'react'
import './index.scss'
import i18n from '../../common/translate'
import Card from '../../components/ui/card'
import CardTitle from '../../components/ui/card/card-title'
import CardContent from '../../components/ui/card/card-content'
import Flex from '../../components/ui/common/flex'
import FlexBox from '../../components/ui/common/flex/flex-box'
import DefaultInput from '../../components/functional/inputs/default-input'
import {observer} from 'mobx-react'
import {action, observable} from 'mobx'
import MedicalInsuranceValidation from '../../validator/medical-insurance-validation'

interface Props {
  history?: History
  location?: any
  match?: any
  calculateMedicalInsuranceCost: (age: number) => number
}

@observer
class MedicalInsuranceScene extends React.Component<Props, {}> {
  
  @observable
  private selectedAge: number
  
  @observable
  medicalInsuranceForm = MedicalInsuranceValidation()
  
  private submitHandler(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault()
    this.medicalInsuranceForm.onSubmit(event, () => {
      console.log('awdawd')
    })
    this.medicalInsuranceForm.forEach((form: any) => {
      form.onSubmit(event)
    })
  
  }
  
  render() {
    return (
      <div>
        <Card paddingTop='6em' paddingBottom='6em'>
          <CardTitle>Узнайте стоимость мединской карты</CardTitle>
          <CardContent verticalPadding='0.5em' horizontalPadding='1em'>
            <Flex justifyContent='space-evenly'>
              <FlexBox>
                <h3>Введите Ваш возраст</h3>
              </FlexBox>
              <FlexBox>
                <form onSubmit={action((e: any) => this.submitHandler(e))}>
                  <div className="form-group-inline">
                    <DefaultInput form={this.medicalInsuranceForm} field='age' />
                    <input type="submit" value="OK" className='btn btn-primary btn-sm'/>
                  </div>
                </form>
              </FlexBox>
            </Flex>
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
  
  private calculateMedicalInsuranceCost = (age: number) => {
    return age
  }
  
  
  render() {
    return (
      <MedicalInsuranceScene calculateMedicalInsuranceCost={this.calculateMedicalInsuranceCost}/>
    )
  }
}
