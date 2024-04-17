"use client";

import Text from "@/components/text";
import styled from "styled-components";
import Arrow from "@/assets/icons/arrow.svg";
import Image from "next/image";
import Link from "next/link";

const Container = styled(Link)`
  border-radius: 30px;
  padding: 30px;
  border: 1px solid #dddddd;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.02);
  }
`;

const StyledText = styled(Text)`
  font-size: 16px;
  margin: 0;
  line-height: 30px;
  color: #727272;
`;

const BottomSection = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Profile = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background: ${({ picture }) => `url('${picture}')`};
  background-size: cover;
  background-position: center;
`;

const Name = styled(Text)`
  font-weight: bold;
  margin-left: 20px;
`;

const Button = styled.div`
  height: 50px;
  width: 50px;
  background: var(--colors-secondary);
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Review = ({ review }) => {
  return (
    <Container
      target="_blank"
      href="https://www.mariages.net/food-truck/animation-barman-cubain--e152420#reviews"
    >
      <StyledText>"{review.text}"</StyledText>
      <BottomSection>
        <Flex>
          <Profile picture={review.picture} />
          <Name>{review.name}</Name>
        </Flex>
        <Button>
          <Image
            src={Arrow}
            alt={`Voir tous les avis de barman cubain sur mariage.net`}
          />
        </Button>
      </BottomSection>
    </Container>
  );
};

export default Review;
