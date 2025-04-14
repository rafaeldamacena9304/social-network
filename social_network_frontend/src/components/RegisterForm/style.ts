import styled from 'styled-components';

export const Form = styled.form`
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #111;
  border-radius: 16px;
  padding: 24px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  color: #eee;
  text-align: center;
  margin-bottom: 24px;
`;
export const Input = styled.input`
  width: 350px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-left: 16px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border-bottom: 6px solid lightblue;
  }
`;
export const TextArea = styled.textarea`
  width: 350px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding-left: 16px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border-bottom: 6px solid lightblue;
  };
  resize: none;
`;
export const Button = styled.button`
  background-color: lightblue;
  font-weight: bold;
  color: black;
  border: none;
  border-radius: 8px;
  width: 150px;
  margin-bottom: 16px;
`;
export const Register = styled.button`
  background-color: transparent;
  font-weight: bold;
  color: #ccc;
  border: 1px solid lightblue;
  border-radius: 8px;
  width: 150px;
  margin-bottom: 16px;
`;
