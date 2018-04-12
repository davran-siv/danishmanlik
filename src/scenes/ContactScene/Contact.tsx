import * as React from 'react'
// import './index.scss'
import i18n from '../../common/translate'
import Flex from '../../components/ui/common/flex'
import FlexBox from '../../components/ui/common/flex/flex-box'
import {action} from 'mobx'
import ContactValidation from '../../validator/contact'
import DefaultInput from '../../components/functional/inputs/default-input'
import DefaultTextarea from '../../components/functional/inputs/default-textarea'
import Card from '../../components/ui/card'
import CardTitle from '../../components/ui/card/card-title'

interface Props {
  contactForm: any
  match?: any
  history?: History
  location?: any
}

class ContactScene extends React.Component<Props, {}> {
  render() {
    const {props} = this
    return (
      <Card paddingRight='6em' paddingLeft='6em' paddingTop='6em' paddingBottom='6em'>
        <CardTitle>Отправьте нам сообщение</CardTitle>
        <form onSubmit={props.contactForm.onSubmit}>
          <Flex justifyContent='space-between' flexWrap='wrap'>
            <FlexBox>
              <DefaultInput form={props.contactForm} field='name'/>
            </FlexBox>
            <FlexBox>
              <DefaultInput form={props.contactForm} field='email'/>
            </FlexBox>
            <FlexBox>
              <DefaultInput form={props.contactForm} field='telephone'/>
            </FlexBox>
          </Flex>
          <DefaultTextarea rows={5} form={props.contactForm} field='message'/>
          <input type="submit" value="Отправить" className='btn btn-primary pull-right'/>
        </form>
      </Card>
    )
  }
}

interface ContainerProps {
}

export default class ContactSceneContainer extends React.Component<ContainerProps, {}> {
  @action
  public sendMessage = (form: any) => {
    alert('message sent')
  }
  private contactForm = ContactValidation(this.sendMessage)
  
  render() {
    return (
      <ContactScene contactForm={this.contactForm}/>
    )
  }
}
