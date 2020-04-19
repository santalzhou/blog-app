import styled from 'styled-components';
import {Button, } from '../../style';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;
export const Header = styled.div`
  margin-bottom: 20px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #555;
`;
export const HInupt = styled.input`
  margin-left: 20px;
  height: 28px;
  line-height: 28px;
  padding: 0 6px;
  border: none;
  outline: none;
  font-size: 15px;
  color: #9a9a9a;
`;
export const Footer = styled.div`
  padding-top: 20px;
  `;

export const BackB = styled(Button)`
  float: right;
  margin-right: 30px;
`;

export const ConfirmB = styled(Button)`
  float: right;
  margin-right: 60px;
  border-color: ${(props) => props.theme.darkMC};
  color: ${(props) => props.theme.darkMC};
`;
