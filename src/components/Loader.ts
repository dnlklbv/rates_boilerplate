import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
background-color: rgba(0, 0, 0, .2);
&:before {
  content: '';
  width: 130px;
  height: 130px;
  position: absolute;
  top: calc(50% - 65px);
  left: calc(50% - 65px);
  border-radius: 100%;
  border: 1.1em solid transparent;
  border-left-color: #001529;
  animation: ${rotate} 1.5s linear infinite;
}
`

export default Loader
