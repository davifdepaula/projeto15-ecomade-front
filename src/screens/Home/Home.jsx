import React, { useContext } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth.jsx';
import Container from './Home.styled.js';

export default function Home() {
  const { user, setToken, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    setToken(null);
    setUser(null);
    navigate('/');
  };

  return (
    <Container>
      <h2>Móveis</h2>
      <h1>Ecomade</h1>
      <button type="button" onClick={() => navigate('/produtos')}>Ver Produtos</button>
    </Container>
  );
}
