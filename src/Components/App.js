import React, { Component } from "react";
import { createGlobalStyle } from "styled-components";

// Router
import Router from "../Components/Router";

// GlobalStyled
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: rgba(20, 20, 20 , 1);
}
a {
  color: inherit;
  text-decoration: none;
}
ol,
ul {
  list-style: none;
}
img {
  border: none;
  max-width: 100%;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}
fieldset {
  border: none;
}
legend,
caption {
  display: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
}
header,
section,
footer,
article,
aside,
figure,
video,
audio,
nav {
  display: block;
}
strong,
em {
  font-weight: normal;
  font-style: normal;
}
button,
input[type="submit"],
input[type="reset"] {
  cursor: pointer;
}
.cf:after,
.cf:before {
  content: "";
  display: block;
  clear: both;
}
`;

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyle />
      </>
    );
  }
}

export default App;
