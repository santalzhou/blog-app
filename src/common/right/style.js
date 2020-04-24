import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    opacity: .3;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
`;

export const RightWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 15px;
  padding: 8px 22px;
  width: 285px;
  height: 100%;
  background: ${(props) => props.theme.mainC};
  .active{
    width: 80%;
    background: rgba(255, 255, 255, .5);
    transition: all .8s;
    span{
      animation: ${rotate} .8s ease-in-out 1 forwards;
    }
  }
`;

export const Title = styled.div`
  margin: 20px 10px;
  font-size: 14px;
  .link{
    display: block;
    height: 30px;
    line-height: 30px;
    vertical: middle;
    color: #565656;
    text-decoration: none;
    transition: font-size .3s;
    &:hover{
      color: ${(props) => props.theme.darkMC};
    }
    span{
      padding: 0 6px;
      font-size: 16px;
      &:hover{
        color: ${(props) => props.theme.darkMC};
      }
    }
  }
`;

export const Weather = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  p{
    line-height: 26px;
    font-size: 13px;
    color: #555;
  }
`;



export const SearchWrapper = styled.div`
  // border: 1px solid red;
  position: relative;
  width: 30%;
  border-radius: 4px;
  // &:hover{
  //   width: 80%;
  //   background: rgba(255, 255, 255, .5);
  //   transition: all .8s;
  //   span{
  //     animation: ${rotate} .8s ease-in-out 1 forwards;
  //   }
  // }
`

export const Search = styled.input`
  line-height: 26px;
  font-size: 13px;
  padding: 0 18px 0 8px;
  border: none;
  color: #888;
  outline: none;
  background: transparent;
`

export const CloseBtn = styled.span`
  position: absolute;
  top: 5px;
  right: 8px;
  display: inline-block;
  opacity: 0;
  width: 16px;
  height: 16px;
  border-radius: 9px;
  background: #898989;
  cursor: pointer;
  &:after{
    position: absolute;
    top: 0px;
    left: 4px;
    width: 1px;
    height: 11px;
    background: #fafafa;
    content: '';
    transform: rotate(45deg);
    transform-origin: left bottom;
  }
  &:before{
    position: absolute;
    top: 0px;
    right: 4px;
    width: 1px;
    height: 11px;
    background: #fafafa;
    content: '';
    transform: rotate(-45deg);
    transform-origin: right bottom;
  }
`
// // Create the keyframes

// // Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;