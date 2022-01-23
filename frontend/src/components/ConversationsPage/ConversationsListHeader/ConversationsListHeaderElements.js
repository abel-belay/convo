import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Avatar = styled.img`
  height: 80%;
  border-radius: 50%;
`

export const LogoutLink = styled(Link)`
  background: none;
  border: none;
  color: #0066CC;
  font-size: 0.9rem;
  text-decoration: none;
`