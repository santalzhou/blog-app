import styled from 'styled-components';

export const Wrap = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10002;
    &:after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 0;
        vertical-align: middle;
      }
`;

export const Text = styled.p`
    display: inline-block;
    width: 300px;
    padding: 16px 12px;
    vertical-align: middle;
    text-align: left;
    background-color: #fff;
    border-radius: 4px;
`;
