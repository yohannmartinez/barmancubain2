"use client";

import styled from "styled-components";

import Title from "../title";
import Text from "../text";
import Image from "next/image";

const Container = styled.div`
  border-radius: 30px;
  flex: ${({ isShowed }) => (isShowed ? "4" : "-1")};
  display: flex;
  flex-direction: column;
  align-items: ${({ isShowed }) => (isShowed ? "flex-start" : "center")};
  justify-content: space-between;
  padding: 40px;
  background: black;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8029805672268908) 10%,
      rgba(6, 6, 8, 0.53687412464986) 27%,
      rgba(14, 15, 19, 0) 50%,
      rgba(14, 15, 19, 0.8433167016806722) 100%
    );
    top: 0;
    left: 0;
  }
`;

const Index = styled.div`
  width: 50px;
  height: 50px;
  border: ${({ isShowed }) =>
    isShowed ? " 3px solid var(--colors-primary)" : " 3px solid #C1C1C1"};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  z-index: 1;
`;

const TextContainer = styled.div`
  color: white;
  text-align: left;
  z-index: 1;
`;

const StyledTitle = styled(Title)`
  text-align: left;
  margin: 0;
`;

const StyledText = styled(Text)`
  font-size: 16px;
  text-align: left;
  max-width: 500px;
  line-height: 30px;
`;

const ProgressBar = styled.div`
  width: ${({ remainingTime }) => `${(remainingTime / 3000) * 100}%`};
  height: 5px;
  background-color: var(--colors-primary);
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 0.2s linear;
`;

const Step = ({
  isShowed,
  onActualStepClick,
  changeStep,
  step,
  stepIndex,
  remainingTime,
}) => {
  return (
    <Container
      isShowed={isShowed(stepIndex)}
      onClick={() =>
        isShowed(stepIndex) ? onActualStepClick() : changeStep(stepIndex)
      }
    >
      <Image
        src={step.background}
        alt={`${step.alt}`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Index isShowed={isShowed(stepIndex)}>{stepIndex + 1}</Index>
      {isShowed(stepIndex) && (
        <TextContainer>
          <StyledTitle>{step.name}</StyledTitle>
          <StyledText isShowed={isShowed(stepIndex)}>{step.text}</StyledText>
          <ProgressBar remainingTime={remainingTime} />
        </TextContainer>
      )}
    </Container>
  );
};

export default Step;
