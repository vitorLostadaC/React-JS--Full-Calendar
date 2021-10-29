import styled, { css } from "styled-components";

export const Days = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 3px;
  transform: scale(0.9);
  transition: all ease 0.2s;
  cursor: pointer;
  border-radius: 20px;
  text-align: center;
  vertical-align: center;
  margin: 1px;

  ${(props) =>
    props.state === "selected" &&
    css`
      background-color: #20deae;
      color: #fff;
    `}

  ${(props) =>
    props.state === "nonPertenceMonth" &&
    css`
      opacity: 0.3;
      cursor: default;
    `}
`;
