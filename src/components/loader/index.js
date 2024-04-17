"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "@/assets/icons/logoStencil.svg";
import NextImage from "next/image";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  background: var(--colors-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  opacity: ${({ isLoading }) => (isLoading ? "1" : "0")};
  pointer-events: ${({ isLoading }) => (isLoading ? "auto" : "none")};
  z-index: 100;
`;

const LogoContainer = styled.div`
  background: var(--colors-primary);
  width: 300px;
  height: 48px;
  position: relative;
  z-index: 101;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ pourcentLoaded }) => `${pourcentLoaded}%`};
    height: 48px;
    background: white;
    transition: width 0.2s;
    z-index: -1;
  }
`;

const Loader = ({ images }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const pourcentLoaded = (loadedImages * 100) / images.length;

  useEffect(() => {
    images.forEach((src) => {
      const image = new Image();
      image.src = src;
      image.onload = setLoadedImages((prev) => prev + 1);
    });
    return () => {};
  }, []);

  useEffect(() => {
    let timeoutId;

    if (loadedImages === images.length) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [loadedImages]);

  return (
    <Container isLoading={isLoading}>
      <LogoContainer pourcentLoaded={pourcentLoaded}>
        <NextImage
          src={Logo}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="logo"
        />
      </LogoContainer>
    </Container>
  );
};

export default Loader;
