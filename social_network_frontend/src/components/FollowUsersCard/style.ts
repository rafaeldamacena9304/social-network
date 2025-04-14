import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  padding: 24px;
  background-color: #111;
  border-radius: 16px;
`;
export const Card = styled.div`
  width: 100%;
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-radius: 8px;
`;
export const UserProfile = styled.img`
  width: 36px;
`;
export const Username = styled.span`
  display: inline-block;
  color: #ddd;
  font-size: 16px;
`;
export const FollowButton = styled.button`
  background-color: lightblue;
  color: #black;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 8px;
`;
