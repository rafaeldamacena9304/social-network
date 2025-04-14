import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #111;
  padding: 24px;
  border-radius: 24px;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px;
  width: 100%;
  margin-bottom: 24px;
  border: 1px solid #aaa;
  border-radius: 16px;
`;
export const Name = styled.h2`
  color: white;
  font-weight: 600;
`;
export const Username = styled.p`
  color:#ccc;
  font-weight:normal;
  font-size:16px;
  text-align:center;
`
export const ProfilePic = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit:cover;
`;
export const Button = styled.button`
  background-color: lightblue;
  color: black;
  font-weight: bold;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 8px 24px;
`;
export const Bio = styled.p`
  font-size: 20px;
  color: white;
  padding: 16px;
`;
