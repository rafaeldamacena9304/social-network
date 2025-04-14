import { Link } from 'react-router-dom';
import { LoginForm } from '../../components/LoginForm';

export const LoginPage = () => {
  return (
    <>
      <Link to="/" className="mainTitle">
        A social network.
      </Link>
      <LoginForm />
    </>
  );
};
