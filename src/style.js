import styled, {createGlobalStyle,} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-size: 14px;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html, body{
    height: 100%;
    overflow: hidden;
    letter-spacing: 1px;
  }
`;
export const Left = styled.div`
  margin-right: 300px;
  padding: 20px;
`;

export const Main = styled.div`
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
`;

/*
 * 全局的
 * 继承样式时 先引入 然后：export const HButton = styled(Button)` ... `
 */
export const Button = styled.span`
  box-sizing: border-box;
  display:inline-block;
  padding: 0 8px;
  line-height: 32px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #999;
  cursor: pointer;
`;
