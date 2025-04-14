import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  padding: 24px;
  display: flex;
  align-items: center;
  margin-bottom: 36px;
  background-color: #111;
  border-radius: 16px;
  z-index: 1; /* Mantém o container atrás do overlay/modal */
`;

export const Placeholder = styled.p`
  font-size: 20px;
  color: white;
  margin-right: 24px;
`;

export const Button = styled.button`
  color: black;
  background-color: lightblue;
  padding: 8px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
`;

/* Overlay cobrindo toda a tela */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999; /* Acima de tudo */
`;

/* Modal centralizado na tela */
export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #111;
  padding: 32px;
  border-radius: 16px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  max-width: 90vw;
`;

export const CancelButton = styled.button`
  margin-top: 16px;
  padding: 8px 24px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;
