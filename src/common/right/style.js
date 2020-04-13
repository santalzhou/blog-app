import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: ${props => props.theme.mainC};
`

export const Title = styled.div`
  margin-left: 20px;
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  color: ${props => props.theme.darkMC};
`

export const Weather = styled.div`
  margin-left: 20px;
  float: left;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  p{
    line-height: 26px;
    font-size: 13px;
    color: #555;
  }
`