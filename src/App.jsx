import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [showCredentials, setShowCredentials] = useState(false); // Estado para mostrar credenciales

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
    setMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.username !== 'Jhon') {
      setMessage('Usuario incorrecto');
    } else if (credentials.password !== '123') {
      setMessage('Contraseña incorrecta');
    } else {
      setMessage('Login exitoso');
      setTimeout(() => navigate('/dashboard'), 1000);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Bienvenido</h1>
        <p>Por favor ingrese sus credenciales de acceso.</p>
        
        {message && (
          <div style={{ color: message === 'Login exitoso' ? 'green' : 'red', textAlign: 'center', marginBottom: '1rem' }}>
            {message}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="login-button">Ingresar</button>
        
        <div className="form-footer">
          <a href="#forgot">Has olvidado tu contraseña?</a>
          <p>Aún no tienes una cuenta? <a href="#signup">Crear cuenta</a></p>
        </div>
      </form>

      <button
        className="login-button"
        style={{ maxWidth: 300, margin: '10px auto', display: 'block' }}
        onClick={() => setShowCredentials(prev => !prev)}
      >
        {showCredentials ? 'Ocultar credenciales' : 'Ver credenciales'}
      </button>

      {showCredentials && (
        <div className="credentials-card">
          <h3>Credenciales correctas</h3>
          <p><strong>Username:</strong> Jhon</p>
          <p><strong>Password:</strong> 123</p>
        </div>
      )}
    </div>
  );
};

export default App;