import { useAuth0 } from '@auth0/auth0-react';

export const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <button
        className="nav-link text-white"
        onClick={() => loginWithRedirect()}
      >
        Login
      </button>
    )
  );
};

export default Login;
