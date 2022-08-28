import styled from 'styled-components';

export const ContactItem = styled.li`
height: 56px;
padding: 8px;
display: flex;
gap:32px;
align-items: center;
  `;
export const ContactData = styled.p`
font-weight: 400;
font-size: 20px;
`;
export const ButtonDelete= styled.button`
padding: 8px;
width: 100px;
height: 40px;
font-weight: 400;
font-size: 20px;
background-color: Lavender;
border:1px solid MidnightBlue;
border-radius: 10px;
box-shadow: 15px 16px 16px -5px rgba(0,  0,  0, 0.6);

&:hover {
  transform: scale(1.05);
  cursor: pointer;
}
`;