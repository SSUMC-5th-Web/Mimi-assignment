import React from "react";
import styled from 'styled-components';

export const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: pink;
  border-radius: 50%;
`;

function RunCircle() {
  return <Circle />;
}

export default RunCircle;
