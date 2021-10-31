import styled from 'styled-components';

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 80px;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const InputBoxLabel = styled.label`
  margin: 2px 10px 2px 0; 
`;


const InputBox = styled.input.attrs(props => ({
  type: props.type || "text",
  size: props.size || "0.5em",
}))`
  color: ${(props) => props.theme.specs.color };
  border: 1px solid #cccccc;
  border-radius: ${(props) => props.theme.specs.borderRadius };
  font-size: ${(props) => props.theme.specs.fontSize };
  width: 70%;
  padding: ${(props) => props.theme.specs.padding };
`;

export { InputBox, InputBoxLabel, InputItem };
