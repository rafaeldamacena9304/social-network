import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  background-color: #111;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin-bottom: 40px;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  border: 1px solid #333;
  padding: 8px;
  border-radius: 6px;
`;
export const UserProfile = styled.div`
  display: flex;
  align-items: center;
`;
export const UserProfilePic = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 24px;
  border-radius: 50%;
  object-fit: cover;
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
  padding: 2px 12px;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  text-align: start;
  width: 100%;
`;
export const Title = styled.h3`
  color: #ddd;
  margin-bottom: 12px;
`;
export const Content = styled.p`
  color: #eee;
`;
