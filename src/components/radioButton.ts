import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 18%;
  left: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 1px solid #CCCCCC;
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #CCCCCC;
    &::after {
        margin-left: 25px;
        border: 1px solid #0099FF;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: #009933;
    border: 1px solid #009933;
    &::after {
        margin-left: 10px;
        border: 1px solid #009933;
    }
  }
`;

export { RadioButton, RadioButtonLabel, Item };
