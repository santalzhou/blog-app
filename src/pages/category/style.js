import styled from 'styled-components';
import { Button, } from '../../style';

export const Block = styled.div`
  padding: 30px 40px;
  display:flex; 
  h4{
    position: relative;
    width: 120px;
    line-height: 30px;
    font-size: 16px;
    color: #6b6b6b;
    &:before{
      position: absolute;
      top: 0px;
      left: -16px;
      width: 2px;
      height: 30px;
      background: ${(props) => props.theme.mainC};
      content: '';
    }
  }
  input{
    margin-top: 5px;
    padding: 1px 6px;
    height: 26px;
    outline: none;
    color: #898989;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    border-right: none;
    &::-webkit-input-placeholder{
      color: #bbb;
    }
  }
`;
export const List = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled(Button)`
  position: relative;
  margin: 10px 20px;
  padding: 4px 20px;
  &:hover{
    color: #f1f1f1;
    .mask{
      height: 40px;
    }
  }
`;

export const DelMask = styled.span`
  overflow: hidden;
  display: inline-block;
  position: absolute;
  top: 0;
  right: -1px;                    //  此处元素宽度有问题！
  left: 0;
  height: 0;
  line-height: 40px;
  text-align: center;
  background: rgba(0, 0, 0, .3);
  transition: height .2s;
  border-radius: 4px;
`;
export const Submit = styled(Button)`
  margin-top: 5px;
  height: 30px;
  line-height: 30px;
  border-radius: 0 4px 4px 0;
`;