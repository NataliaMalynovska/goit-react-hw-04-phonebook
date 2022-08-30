import styled from 'styled-components';

export const Form = styled.form`
  padding: 16px;
  border: 2px solid Lavender;
  border-radius: 10px;
`;
export const Label = styled.label`
  font-weight: 700;
  font-size: 20px;
`;
export const Input = styled.input`
  dislay: block;
  margin: 0 16px;
  padding: 8px;
  width: 240px;
  height: 40px;
  font-size: 18px;
  background: Lavender;
  border: 1px solid MidnightBlue;
  border-radius: 10px;
  transition: border 50ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 15px 16px 16px -5px rgba(0, 0, 0, 0.6);

  &:hover {
    transform: scale(1.05);
  }
`;
export const ButtonSubmit = styled.button`
  padding: 8px;
  width: 140px;
  height: 40px;
  font-weight: 400;
  font-size: 20px;
  background-color: Lavender;
  border: 1px solid MidnightBlue;
  border-radius: 10px;
  box-shadow: 15px 16px 16px -5px rgba(0, 0, 0, 0.6);

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;
