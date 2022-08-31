import styled from "styled-components";

export const Container = styled.div`
  height: clamp(20vh,2000vh,71.9vh);
  position: relative;


  > svg {
    height: 100%;
    width: 100%;
    font-size: 80px ;
  }

.animated {
  animation: animated 3s infinite
}

@keyframes animated {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
`

