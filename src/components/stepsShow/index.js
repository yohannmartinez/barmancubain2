"use client";

import { useState } from "react";
import styled from "styled-components";

import useTimer from "@/hooks/useTimer";
import Step from "./step";

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  height: 550px;
`;

const StepsShow = ({ steps }) => {
  const [actualStep, setActualStep] = useState(0);

  const nextStep = () => {
    setActualStep(actualStep === steps.length - 1 ? 0 : actualStep + 1);
  };

  const { remainingTime, paused, pause, resume, reset } = useTimer(
    3000,
    nextStep
  );

  const isShowed = (stepIndex) => stepIndex === actualStep;

  const changeStep = (stepIndex) => {
    setActualStep(stepIndex);
    reset();
    resume();
  };

  const onActualStepClick = () => {
    return paused ? resume() : pause();
  };

  return (
    <Container>
      {steps.map((step, stepIndex) => (
        <Step
          isShowed={isShowed}
          onActualStepClick={onActualStepClick}
          changeStep={changeStep}
          step={step}
          stepIndex={stepIndex}
          remainingTime={remainingTime}
        />
      ))}
    </Container>
  );
};

export default StepsShow;
