import { FormEvent, useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('bio', bio);
    formData.append('password', password);

    if (profilePicture) {
      formData.append('profile_picture', profilePicture);
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/register_user/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Erro ao registrar');
      }

      console.log('Registro bem-sucedido');
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Title>Create account</S.Title>
      <S.Input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Create username"
      />
      <S.Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Type your e-mail"
      />
      <S.Input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
        placeholder="Your first name"
      />
      <S.Input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="Your last name"
      />
      <S.TextArea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Bio"
      ></S.TextArea>
      <S.Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Create your password"
      />

      <S.Input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setProfilePicture(e.target.files[0]);
          }
        }}
      />

      <S.Register>Register</S.Register>
    </S.Form>
  );
};
