import { useState } from 'react';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        navigate('/');
      } else {
        console.error('Erro ao fazer login');
        setError(
          'Login failed. Check your credentials or create a new account.'
        );
      }
    } catch (error) {
      console.error(error);
      setError('Login failed. Check your credentials or create a new account.');
    }
  };

  return (
    <S.Form onSubmit={handleLogin}>
      <S.Title>Faça login</S.Title>
      <S.Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Digite seu username"
      />
      <S.Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Digite sua senha"
      />
      <S.Button>Login</S.Button>
      <S.Register as={Link} to="/register">
        Register
      </S.Register>
      {error !== null && <S.Error>{error}</S.Error>}
    </S.Form>
  );
};
