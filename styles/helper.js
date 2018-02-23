import css from 'styled-jsx/css'

export default css`
  .pl {
    float: left;
  }
  .pr {
    float: right;
  }
  .cf:after {
    content: '';
    display: table;
    clear: both;
  }
`
