import styled, {createGlobalStyle,} from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1587711318303'); /* IE9 */
  src: url('./iconfont.eot?t=1587711318303#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPwAAsAAAAACKQAAAOiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEaIQKATYCJAMQCwoABCAFhG0HQBt0BxHVmwfJvkgwT5qHAY3ZLhwrfUkaEwSY9/2kSbHtCvwgeCN0kl4BBBTi9+ZcD2xUhBrJt+jRF1IaZJdmDwHwP8dMlwmW3xdAU8sI3hsF4Lh1QH2RQXIHckB+y/Cqg9yNqyEAm0jpRIVKNRpgodB3EoDo0bVzW6yEHVXBFFgmo+BIhZiDjqVN1S4Bs73fFx/JbYGGLtH3rNOpYgfKvOHNRznGNYYWDgJFf16APQ4kkA4UiC6F/nbIIJ9OYsvVikLAMrwa9DXj++ajy0Up16K3KD1t//E0EAa63h1j8wsS3mDJI4MvtiKw4SNuQgO4IUdYgAOcAr6gU8LxaRjIlHA3hMfZ/f0Dht961eD264bT7zZevHzRJv9LtxrcudPobuLst283HHOrzIKlGzcHnbwr7rxp1HLMgmmLROMG9sKxi53GjRcvnr6QBo1RbswC/wati7VjM/01HzHcZntydseroE0R09+jpy2XHUm0NxwK1my5+qbjTL8e0dRzz4lI6WhjtiZ4bd4ugjdYcaz5tMBOm6bFd1iwaNHioM7bp6d0XLhwQXRcr5sqOES/qd9wJPhMjVYWLpfXKfZqzsAjM3NqckT9+6dszVFiP6KiA4+WiR2squSGxjUpljihsn4Tvi7mkf3Y/7EtHjwQvsS9h3jodjngsSPu3xfO44BHcx4KZh8wp3hO8bB0ZYnMMFXGtTmiqDnFXBOXOT2VZbGhb8AqjwTTaDun75y6hplohrxK7Jv4KmRScM3oV+btxNvBq6MD4urgM5ivOj0zy0+r4OUdNbVCh+fLIxu433M+5dy0ig08d9AHABf5TfYGkGu1a+AqT8pyP8Lf8GfwvJ+tvUp8sxwFwINzuxp5cRdFO/nbVIAVr10B7FKKSncoJaktuZpQVOS97qYBNjbgQmFfT/owBoC9IChjQAQaJhEgsYhHKmw66Djkg4FFabBJU/l4Bz/9kAjlBqSaiEDgbTdoeHIUJN4uIxX2MegE+gwG3iXYNBJ+Z3RI7MbDiVEJWtB/iIYGZ7rk4Lfe0U+d4rjKY72Rc0xBXVTp0g0H5D72yR/fiDhwTD1c0fWw6whGpoRGiiAyHsvSFX1SYaifHWYnRiVoQf8hGhqcM1gOmZ+/o586xRUdZdE3co7zQ11UAORNP4A6zuU5+eMbEQeOqYcr8mJn5AnG4nUJjRShRXY8lqSfg+qL8Y39FR4C7Jm+Vs01IYUSOhtzagesuphlkwNNf5zNAAAA') format('woff2'),
  url('./iconfont.woff?t=1587711318303') format('woff'),
  url('./iconfont.ttf?t=1587711318303') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1587711318303#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-create:before {
  content: "\e612";
}

.icon-list:before {
  content: "\e6eb";
}

.icon-shouye:before {
  content: "\e600";
}
`;