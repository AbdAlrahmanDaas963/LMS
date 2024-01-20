import styled from "styled-components";
import { motion } from "framer-motion";

//Header Styles
export const HeaderBar = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background: #111;
  flex: 0 0 1;
`;

export const ToggleButton = styled.button`
  background: #fff;
  padding: 0.5rem 0.7rem;
  color: #333;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

//Sidebar Styles
export const SidebarBox = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  background: var(--blue);
  color: #fff;
  width: 0;
  overflow: hidden;
  border-radius: 4px 0px 0px 4px;

  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
`;

export const LinksBox = styled(motion.ul)`
  list-style: none;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const LinkItem = styled(motion.li)`
  margin-bottom: 1rem;
`;

//Container && Content Styles
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContentBox = styled.div`
  display: flex;
  height: 100%;
`;

//Content Styles
export const Article = styled.div`
  padding: 1rem;
  background: #411;
  color: #fff;
  flex: 1;
`;
