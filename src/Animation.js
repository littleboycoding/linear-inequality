import { keyframes } from "styled-components";

const FlyDown = keyframes`
    from {
      transform: translateY(-50%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

const FlyRight = keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  `;

const FlyLeft = keyframes`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  `;

export { FlyDown, FlyRight, FlyLeft };
