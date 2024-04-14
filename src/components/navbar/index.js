"use client";

import Image from "next/image";
import styled from "styled-components";
import Logo from "@/assets/icons/logoBlack.svg";
import Menu from "@/assets/icons/menu.svg";

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Container>
      <Image
        src={Logo}
        height={25}
        alt="Logo du site barman cubain"
        style={{ cursor: "pointer" }}
      />
      <Image src={Menu} height={15} alt="Menu" style={{ cursor: "pointer" }} />
    </Container>
  );
};

export default Navbar;
