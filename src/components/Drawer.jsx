import React, { useState } from "react";
import styled from "styled-components";
import whiteAust from "../assets/svg/whiteAust.svg";

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isopen }) => (isopen ? "0" : "-300px")};
  width: 300px;
  height: 100%;
  background-color: var(--black);
  color: var(--white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px 0 0 10px;
`;

const Header = styled.div`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  font-weight: bold;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const Middle = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const CloseButton = styled.button`
  background-color: var(--black);
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const Option = styled.div`
  margin: 10px 0;
`;

const Drawer = ({ isOpen, onClose }) => {
  return (
    <DrawerContainer isopen={isOpen}>
      <Header>
        <Logo src={whiteAust} alt="Logo" width={"50px"} />
        <div>الرئيسية</div>
      </Header>
      <Middle>
        <Option>خيارات</Option>
        <Option>خيارات</Option>
        <Option>خيارات</Option>
        <Option>خيارات</Option>
        <Option>خيارات</Option>
        <Option>خيارات</Option>
      </Middle>
      <Bottom>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </Bottom>
    </DrawerContainer>
  );
};

export default Drawer;
