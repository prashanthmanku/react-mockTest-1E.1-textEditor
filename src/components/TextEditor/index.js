import {useState} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  AppCard,
  AppWidthCard,
  Card1,
  Card2,
  Heading,
  Img,
  ButtonsCard,
  Button,
  Icon,
  Line,
  TextArea,
} from './styled'

const TextEditor = () => {
  const [isBoldActive, setisBoldActive] = useState(false)
  const [isItalicActive, setisItalicActive] = useState(false)
  const [isUnderlineActive, setisUnderlineActive] = useState(false)

  const onClickBold = () => {
    setisBoldActive(prev => !prev)
  }

  const onClickItalic = () => {
    setisItalicActive(prev => !prev)
  }
  const onClickUnderLine = () => {
    setisUnderlineActive(prev => !prev)
  }

  return (
    <AppCard>
      <AppWidthCard>
        <Card1>
          <Heading>Text Editor</Heading>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </Card1>
        <Card2>
          <ButtonsCard>
            <li>
              <Button type="button" onClick={onClickBold} data-testid="bold">
                <Icon as={VscBold} data-active={isBoldActive} />
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={onClickItalic}
                data-testid="italic"
              >
                <Icon as={GoItalic} data-active={isItalicActive} />
              </Button>
            </li>
            <li>
              <Button
                type="button"
                onClick={onClickUnderLine}
                data-testid="underline"
              >
                <Icon as={AiOutlineUnderline} data-active={isUnderlineActive} />
              </Button>
            </li>
          </ButtonsCard>
          <Line />
          <TextArea
            data-bold={isBoldActive}
            data-italic={isItalicActive}
            data-underline={isUnderlineActive}
          />
        </Card2>
      </AppWidthCard>
    </AppCard>
  )
}
export default TextEditor
