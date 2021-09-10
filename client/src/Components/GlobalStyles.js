import { createGlobalStyle } from "styled-components";

export const breakpoints = { tablet: "600px" };

export default createGlobalStyle`
:root {
--custom-font: "Raleway";

}

html, body {
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh;
    background-color: black;
}

h1, h2 {
    --custom-font: "Raleway"
}
`;
