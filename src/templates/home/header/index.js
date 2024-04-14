"use client";

import styled from "styled-components";
import Image from "next/image";

import HomeHeaderImage from "@/assets/images/homeHeader.png";
import Star from "@/assets/icons/star.svg";
import SubTitle from "@/components/subTitle";
import Title from "@/components/title";
import Text from "@/components/text";

const Container = styled.div`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledStar = styled(Image)`
  margin-right: 7px;
`;

const StyledTitle = styled(Title)`
  max-width: 470px;
`;

const StyledText = styled(Text)`
  margin: 0 0 80px 0;
`;

const HomeHeader = () => {
  return (
    <Container>
      <SubTitle>
        <StyledStar src={Star} height={17} alt="Welcome star icon" />
        Bienvenue !
      </SubTitle>
      <StyledTitle>
        Barman cubain,
        <br />
        le bar a coktails pour vos evenements
      </StyledTitle>
      <StyledText>On se déplace à votre fête !</StyledText>
      <Image
        src={HomeHeaderImage}
        alt="Photo d'un barman cubain qui sert un cocktail"
      />
    </Container>
  );
};

export default HomeHeader;
