import * as React from 'react'
import './index.scss'
import i18n from '../../common/translate'
import Card from '../../components/ui/card'
import CardTitle from '../../components/ui/card/card-title'
import CardContent from '../../components/ui/card/card-content'
import Accordion from '../../components/functional/accordion'

interface Props {
  history?: History
  location?: any
  match?: any
}

class ResidenceScene extends React.Component<Props, {}> {
  render() {
    const accordionItems = faq.map(it => (
      {
        title: it.question,
        body: it.answer
      }
    ))
    return (
      <Card className='residence'>
        <CardTitle>Оформление ВНЖ</CardTitle>
        <CardContent>
          <Accordion items={accordionItems}>
          </Accordion>
        </CardContent>
      </Card>
    )
  }
}


interface ContainerProps {
}

export default class ResidenceSceneContainer extends React.Component<ContainerProps, {}> {
  render() {
    return (
      <ResidenceScene/>
    )
  }
}

const faq = [
  {
    question: 'question 1',
    answer: 'answer 1'
  },
  {
    question: 'question 2',
    answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    question: 'question 3',
    answer: 'answer 3'
  },
  {
    question: 'question 1',
    answer: 'answer 1'
  },
  {
    question: 'question 2',
    answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    question: 'question 3',
    answer: 'answer 3'
  },
  {
    question: 'question 1',
    answer: 'answer 1'
  },
  {
    question: 'question 2',
    answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    question: 'question 3',
    answer: 'answer 3'
  },
  {
    question: 'question 1',
    answer: 'answer 1'
  },
  {
    question: 'question 2',
    answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    question: 'question 3',
    answer: 'answer 3'
  },
  {
    question: 'question 1',
    answer: 'answer 1'
  },
  {
    question: 'question 2',
    answer: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    question: 'question 3',
    answer: 'answer 3'
  },
]
