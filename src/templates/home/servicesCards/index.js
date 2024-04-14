"use client";

import styled from "styled-components";

import Title from "@/components/title";
import HeartBubble from "@/assets/icons/heartBubble.svg";
import Text from "@/components/text";
import CardsWheel from "@/components/cardsWheel";
import { cards } from "./cards";

const Container = styled.div`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled(Title)`
  max-width: 470px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 60px;
    height: 60px;
    background-image: url(${HeartBubble.src});
    background-size: 100%;
    background-repeat: no-repeat;
    left: 0;
    top: 0;
    transform: translate(-110%, -50%);
  }
  &::after {
    content: "";
    position: absolute;
    width: 60px;
    height: 60px;
    background-image: url(${HeartBubble.src});
    background-size: 100%;
    background-repeat: no-repeat;
    right: 0;
    top: 0;
    transform: translate(110%, 50%) scaleX(-1);
  }
`;

const StyledText = styled(Text)`
  margin: 0 0 0px 0;
`;

const ServicesCards = () => {
  return (
    <Container>
      <StyledTitle image={HeartBubble}>
        Vous allez adorer faire la fete avec nous
      </StyledTitle>
      <StyledText>
        Une petite liste des evenements où on peut venir !
      </StyledText>
      <CardsWheel cards={cards} />
    </Container>
  );
};

export default ServicesCards;
