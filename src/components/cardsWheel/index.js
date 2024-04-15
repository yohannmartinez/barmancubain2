"use client";

import usePageSize from "@/hooks/usePageSize";
import useScroll from "@/hooks/useScroll";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./card";

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
              <Card
                key={cardIndex + card.name}
                card={card}
                cardIndex={cardIndex}
              />
            ))}
          </RotableContainer>
        </Crop>
      </Sticky>
    </Container>
  );
};

export default CardsWheel;
