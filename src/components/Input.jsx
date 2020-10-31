import styled from 'styled-components'

const Input = ( props ) => {
  return (
    <Container>
      <CustomInput {...props}></CustomInput>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

const CustomInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${ props => props.theme.colors.neutral }40;
  border-radius: 5px;
  font-size: 18px;
`

export default Input
