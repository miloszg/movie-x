import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 20px;
  background-color: black;
  color: white;
  display: flex;
  padding: 15px 5%;
  position: fixed;
  p {
    text-align: center;
    margin: 0;
    font-size: 20px;
    line-height: 20px;
  }
`;

export default function HeaderComponent() {
  return (
    <Header>
      <p>MovieX</p>
    </Header>
  );
}
