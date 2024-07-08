import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. Load the authenticated user
  const { isAuthenticated, isLoading } = useUser();
  //   console.log("user", user);

  //2. if there is no authenticated user, reditect to the '/login'
  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );
  //3. while loading, show a sipnner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. if there is a user , render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
