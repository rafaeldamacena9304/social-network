import { useState } from 'react';
import * as S from './style';
import { PostForm } from '../PostForm';

export const CreatePostPlacerholder = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false);

  return (
    <>
      {isCreating && (
        <>
          {/* Overlay que cobre toda a tela */}
          <S.Overlay onClick={() => setIsCreating(false)} />
          
          {/* Modal centralizado */}
          <S.ModalWrapper>
            <PostForm />
            <S.CancelButton onClick={() => setIsCreating(false)}>
              Cancel
            </S.CancelButton>
          </S.ModalWrapper>
        </>
      )}
      
      {/* Feed com placeholder e botão para criar post */}
      {!isCreating && (
        <S.Container>
          <S.Placeholder>What are you thinking about?</S.Placeholder>
          <S.Button onClick={() => setIsCreating(true)}>
            Create Post
          </S.Button>
        </S.Container>
      )}
    </>
  );
};
