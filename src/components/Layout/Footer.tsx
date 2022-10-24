import styled from "styled-components";

const Footer = styled.footer`
  width: 100%;
  height: 30px;
  background-color: black;
  color: white;
  display: grid;
  place-content: center;
`;

export default function FooterComponent() {
  return (
    <Footer>
      <p
        style={{ textAlign: "center", margin: 0 }}
      >{`Copyright Movie-X © ${new Date().getFullYear()}`}</p>
    </Footer>
  );
}
