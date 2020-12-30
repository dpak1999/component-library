import styled from "styled-components";

const primaryColor = "#214A4A";

const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: "Roboto Mono", monospace;
`;

const PrimaryButton = styled(Button)`
  background-color: ${primaryColor};
  border: none;
  color: white;
`;
export default PrimaryButton;
