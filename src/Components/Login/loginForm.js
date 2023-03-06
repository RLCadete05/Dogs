import React from 'react'
import { Link } from 'react-router-dom'

const loginForm = () => {
    const [username,setUserName] = React.useState('');
    const [password,setPassword] = React.useState('');

    function handleSubmit(event){
        
    }

  return (
    <section>
        <h1>Login</h1>
        <form action="">
            <input 
            type="text" 
            value={username}
            onChange={({ target }) => setUserName(target.value) }
            />
            <input 
            type="text" 
            value={password}
            onChange={({ target }) => setPassword(target.value) }
            />
            <button>Entrar</button>
        </form>
        <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default loginForm