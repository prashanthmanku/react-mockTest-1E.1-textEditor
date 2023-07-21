import styled from 'styled-components'

export const AppCard = styled.div`
  background-color: #25262c;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
`

export const AppWidthCard = styled.div`
  background-color: #1b1c22;
  width: 90%;
  max-width: 1110px;
  flex: 1;
  display: flex;
  padding: 30px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 20px 20px 20px 0px;
  }
`

export const Card1 = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-right: 10px;
  }
`

export const Card2 = styled.div`
  background-color: #25262c;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
    width: 58%;
  }
  display: flex;
  flex-direction: column;
  flex: 1;
  //   align-items: center;
  border: 1px solid #334155;
  border-radius: 10px;
`

export const Heading = styled.h1`
  color: #f8fafc;
  font-size: 24px;
  margin-bottom: 40px;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`

export const Img = styled.img`
  width: 90%;
  max-width: 170px;

  @media screen and (min-width: 768px) {
    margin: auto;
    width: 70%;
    max-width: 400px;
  }
`

export const ButtonsCard = styled.ul`
  padding: 20px;
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0px;
`

export const Button = styled.button`
  margin-right: 15px;
  padding: 0px;
  background-color: transparent;
  border: none;
  outline: none;
  outline: none;
  cursor: pointer;
`

export const Icon = styled.img`
  height: 20px;
  width: 20px;
  color: #f1f5f9;
  color: ${props => (props['data-active'] ? ' #faff00' : '#f1f5f9')};
`

export const Line = styled.hr`
  border: 1px solid #334155;
  width: 100%;
  //   margin: 0px;
`

export const TextArea = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: #f8fafc;
  padding: 10px 16px;
  font-size: 17px;
  //   font-weight: 300;
  line-height: 27px;

  font-weight: ${props => (props['data-bold'] ? 'bold ' : 'normal')};
  font-style: ${props => (props['data-italic'] ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props['data-underline'] ? 'underline' : 'normal'};
`
