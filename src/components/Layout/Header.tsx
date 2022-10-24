import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 20px;
  background-color: black;
  display: flex;
  padding: 15px 0;
  justify-content: center;
  position: fixed;
  p {
    text-align: center;
    margin: 0;
    font-size: 25px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #d4ad17;
  }
`;

export default function HeaderComponent() {
  return (
    <Header>
      <p>Movie X</p>
    </Header>
  );
}
