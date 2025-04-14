import { Link } from 'react-router-dom';
import { RegisterForm } from '../../components/RegisterForm';

export const UserRegisterPage = () => {
  return (
    <>
      <Link to="/" className="mainTitle">
        A social network.
      </Link>
      <RegisterForm />
    </>
  );
};
