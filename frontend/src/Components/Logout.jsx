import { useAuth0 } from '@auth0/auth0-react';

export const Logout = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <button className="nav-link text-white" onClick={() => logout()}>
        Logout
      </button>
    )
  );
};

export default Logout;
