import styled, { css, keyframes } from "styled-components";

export const TabHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StylizedTab = styled.button`
  color: #fff;
  width: 100%;
  padding: 20px 0px;
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  border-bottom-color: #393e46;
  cursor: ${(p) => (p.disabled ? "default" : "pointer")};
  ${(p) =>
    p.active &&
    css`
      color: #00adb5;
      font-weight: bold;
      // animation: ${inset} 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    `}
  ${(p) => !p.active && p.inactiveStyle}
`;

export const StyledTabPanel = styled.div`
  display: ${(p) => (p.active ? "flex" : "none")};
  font-size: 4rem;
  background: #393e46;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const TabsHolder = styled.div`
  display: flex;
  /* can be used to stack them vertically by using column*/
  flex-direction: row;
`;

export const inactiveTab = {
  opacity: 0.65
};

// width, index,
/**
 * [0] [1] [2] ...
 * W * index
 *
 */
export const TabSlider = styled.div`
  width: ${(props) => `${props.width}px`};
  height: 4px;
  background-color: #00adb5;
  transition: 0.2s;
  transform: ${(props) => `translateX(${props.width * props.index}px)`};
`;

const inset = keyframes`
  0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(0, 173, 181, 0);
            box-shadow: inset 0 0 0 0 rgba(0, 173, 181, 0);
  }
  100% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 173, 181, 0.5);
            box-shadow: inset 0 0 14px 0px rgba(0, 173, 181, 0.5);
  }
`;
