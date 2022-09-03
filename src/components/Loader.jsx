import React from "react"
import styled from "styled-components"

const Spinner = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #ff6060);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 9px), #000 0);
  animation: spinner 1s infinite linear;
  @keyframes spinner {
    to {
      transform: rotate(1turn);
    }
  }
`

function Loader() {
  return <Spinner />
}

export default Loader
