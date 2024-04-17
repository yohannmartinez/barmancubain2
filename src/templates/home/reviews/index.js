"use client";

import styled from "styled-components";

import Title from "@/components/title";
import Review from "./review";
import StarBubble from "@/assets/icons/starBubble.svg";
import { reviews } from "./reviews";
import Image from "next/image";
import Background from "@/assets/images/moreReviews.png";
import Text from "@/components/text";
import SubTitle from "@/components/subTitle";
import Link from "next/link";

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
    background-image: url(${StarBubble.src});
    background-size: 100%;
    background-repeat: no-repeat;
    left: 0;
    top: 0;
    transform: translate(-120%, -50%);
  }
  &::after {
    content: "";
    position: absolute;
    width: 60px;
    height: 60px;
    background-image: url(${StarBubble.src});
    background-size: 100%;
    background-repeat: no-repeat;
    right: 0;
    top: 0;
    transform: translate(130%, 100%) scaleX(-1) scaleY(-1);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  margin: 70px 0;
`;

const ReviewsContainer = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StickyContainer = styled.div`
  flex: 1;
  position: relative;
`;

const StickyElements = styled(Link)`
  display: block;
  position: sticky;
  height: 60vh;
  top: 20vh;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.02);
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const ContactUs = styled.div`
  border-radius: 30px;
  padding: 30px;
  border: 1px solid #dddddd;
  background: black;
  height: 250px;
  cursor: pointer;
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.02);
  }
`;

const StyledText = styled(Title)`
  color: white;
`;

const Reviews = () => {
  return (
    <Container>
      <StyledTitle>
        Des tas d'entreprises et de particuliers nous font confiance !
      </StyledTitle>
      <Wrapper>
        <ReviewsContainer>
          {reviews.map((review) => (
            <Review review={review} />
          ))}
          <ContactUs>
            <StyledText>N'attendez plus, contactez-nous !</StyledText>
            <SubTitle>C'est parti</SubTitle>
          </ContactUs>
        </ReviewsContainer>
        <StickyContainer>
          <StickyElements
            target="_blank"
            href="https://www.mariages.net/food-truck/animation-barman-cubain--e152420#reviews"
          >
            <Image
              src={Background}
              alt={`prestation de barman cubain`}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </StickyElements>
        </StickyContainer>
      </Wrapper>
    </Container>
  );
};

export default Reviews;
