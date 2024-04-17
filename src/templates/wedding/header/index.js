"use client";

import styled from "styled-components";
import Image from "next/image";

import HomeHeaderImage from "@/assets/images/homeHeader.png";
import Ring from "@/assets/icons/ring.svg";
import SubTitle from "@/components/subTitle";
import Title from "@/components/title";
import Text from "@/components/text";

const Container = styled.div`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledRing = styled(Image)`
  margin-right: 7px;
`;

const StyledTitle = styled(Title)`
  max-width: 470px;
`;

const StyledText = styled(Text)`
  margin: 0 0 80px 0;
`;

const WeddingHeader = () => {
  return (
    <Container>
      <SubTitle>
        <StyledRing
          src={Ring}
          height={17}
          alt="Accueil du site barman cubain"
        />
        Mariage
      </SubTitle>
      <StyledTitle>
        Sublimez votre union en compagnie de Barman Cubain
      </StyledTitle>
      <StyledText>On se déplace à votre fête !</StyledText>
      <Image
        src={HomeHeaderImage}
        alt="Photo d'un barman cubain qui sert un cocktail"
      />
    </Container>
  );
};

export default WeddingHeader;
