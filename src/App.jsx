import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [backendStatus, setBackendStatus] = useState('Carregando...')
  const [error, setError] = useState(null)

  useEffect(() => {
    // Testar conexão com backend
    axios.get('/api/')
      .then(response => {
        setBackendStatus(response.data)
      })
      .catch(err => {
        setError('Erro ao conectar com backend: ' + err.message)
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>JZN App</h1>
        <p>Frontend React + Backend Spring Boot</p>

        <div className="status-card">
          <h2>Status do Backend:</h2>
          {error ? (
            <p className="error">{error}</p>
          ) : (
            <p className="success">{backendStatus}</p>
          )}
        </div>

        <div className="info-card">
          <h3>Configuração:</h3>
          <ul>
            <li>Frontend: React + Vite</li>
            <li>Backend: Spring Boot + PostgreSQL</li>
            <li>Deploy: Docker + Cloudflare Tunnel</li>
            <li>Domínio: pilian.com.br</li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App
