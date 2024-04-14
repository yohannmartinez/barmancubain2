"use client";

import usePageSize from "@/hooks/usePageSize";
import useScroll from "@/hooks/useScroll";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Title from "../title";
import Link from "next/link";
import Arrow from "@/assets/icons/arrow.svg";

const Container = styled.div`
  width: 100vw;
  height: calc(100vh * 4);
`;

const Sticky = styled.div`
  width: 100vw;
  height: 100vh;
  position: sticky;
  top: 0;
`;

const Crop = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const RotableContainer = styled.div`
  width: 100vw;
  height: 4800px;
  position: relative;
  transform: ${({
    zAxe,
  }) => `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
  rotateY(0deg) rotateZ(-${zAxe}deg) skew(0deg, 0deg);`}
  transform-style: preserve-3d;
`;

const CardContainer = styled.div`
  position: absolute;
  width: 100vw;
  transform: ${({ cardIndex }) => `rotate(${cardIndex * 15}deg)`};
  height: 4800px;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;

const Card = styled(Link)`
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

const CardsWheel = ({ cards }) => {
  const scroll = useScroll();
  const { windowX, windowY } = usePageSize();
  const [zAxe, setZAxe] = useState(0);

  useEffect(() => {
    getRotationAxeZ();
  }, [scroll, windowX, windowY]);

  const getRotationAxeZ = () => {
    const container = document.getElementById("cardsWheelContainer");
    if (container) {
      const containerHeight = container.offsetHeight - window.innerHeight;
      const scrollFromTop = scroll - container.offsetTop;
      const percentage = (scrollFromTop / containerHeight) * 100;
      const limitedPercentage = Math.min(Math.max(percentage, 0), 100);
      setZAxe((limitedPercentage * ((cards.length - 1) * 15)) / 100);
    }
  };

  return (
    <Container id="cardsWheelContainer">
      <Sticky>
        <Crop>
          <RotableContainer zAxe={zAxe}>
            {cards.map((card, cardIndex) => (
              <CardContainer cardIndex={cardIndex}>
                <Card href="/">
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
                </Card>
              </CardContainer>
            ))}
          </RotableContainer>
        </Crop>
      </Sticky>
    </Container>
  );
};

export default CardsWheel;
