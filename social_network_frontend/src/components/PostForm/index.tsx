import { FormEvent, useState } from 'react';
import * as S from './style';

export const PostForm = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const token = localStorage.getItem('access_token');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8000/create_post/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
    } else {
      const data = await response.json();
      console.log(data);
      window.location.reload();
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Title>Create post</S.Title>
      <S.Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />
      <S.TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      ></S.TextArea>
      <S.Register>Post</S.Register>
    </S.Form>
  );
};
