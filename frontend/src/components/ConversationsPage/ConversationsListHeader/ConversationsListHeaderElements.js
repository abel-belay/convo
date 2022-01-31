import styled from "styled-components";
import { Link } from "react-router-dom";

export const Avatar = styled.img`
  height: 80%;
  border-radius: 50%;
`;

export const LogoutLink = styled(Link)`
  background: none;
  border: none;
  color: #0066cc;
  font-size: 0.9rem;
  text-decoration: none;
`;

export const Logo = styled.span`
  color: #10c500;
  font-family: "Pacifico", cursive;
  font-size: 2.5rem;
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.25));
`;
