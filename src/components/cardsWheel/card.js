"use client";

import Link from "next/link";
import styled from "styled-components";
import Title from "../title";

const CardContainer = styled.div`
  position: absolute;
  width: 100vw;
  transform: ${({ cardIndex }) => `rotate(${cardIndex * 15}deg)`};
  height: 4800px;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;

const Container = styled(Link)`
  position: relative;
  overflow: hidden;
  width: 400px;
  margin-top: calc((100vh - 600px) / 2);
  max-height: 600px;
  border-radius: 50px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  pointer-events: all;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px 20px 40px;
  box-sizing: border-box;
`;

const Name = styled(Title)`
  color: white;
`;

const Button = styled.div`
  height: 60px;
  width: 60px;
  background: var(--colors-secondary);
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = ({ card, cardIndex }) => {
  return (
    <CardContainer cardIndex={cardIndex}>
      <Container href="/">
        <Image
          src={card.background}
          alt={`prestation ${card.name} de barman cubain`}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <BottomContainer>
          <Name>{card.name}</Name>
          <Button>
            <Image src={Arrow} />
          </Button>
        </BottomContainer>
      </Container>
    </CardContainer>
  );
};

export default Card;
