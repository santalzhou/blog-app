import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
`

export const ListWrapper = styled.ul`
  padding: 0 10px; 
  // border: 1px solid red;
`
export const Item = styled.li`
  padding: 15px 20px;
  // border-bottom: 1px solid #ddd;
  box-shadow: 0 0 0px .5px rgba(0, 0, 0, .1);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  h5{
    font-size: 16px;
    color: #555;
    line-height: 36px;
    span{
      float: right;
      font-size: 14px;
      color: #888;
    }
  }
  p{
    text-indent: 20px;
    line-height: 1.5;
    font-size: 13px;  
    color: #888;
    overflow: hidden;
  }
`