"use client";

import StepsShow from "@/components/stepsShow";
import SubTitle from "@/components/subTitle";
import Title from "@/components/title";
import styled from "styled-components";
import { steps } from "./steps";

const Container = styled.div`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled(Title)`
  max-width: 470px;
  margin-bottom: 70px;
`;

const Booking = () => {
  return (
    <Container>
      <SubTitle>Rapide, efficace</SubTitle>
      <StyledTitle>Faites appel à nos services en un clin d'oeil !</StyledTitle>
      <StepsShow steps={steps} />
    </Container>
  );
};

export default Booking;
