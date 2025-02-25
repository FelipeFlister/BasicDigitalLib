import { Link } from 'react-router-dom';
// Para acessar qualquer página vc precisa configurar o endereço dela, e usar o link para poder ir nela
export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Ir para About</Link> 
    </div>
  );
}
