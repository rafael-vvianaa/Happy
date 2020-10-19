import React from 'react';

import './styles/global.css';
import './styles/pages/lading.css';

import logoImg from './imagens/Logo.svg'
function App() {
  return (
    <div id="page-lading">
     <div className="content-wrapper">
       <img src={logoImg} alt="Happy"></img>
       <main>
         <h1>Leve felicidade para o mundo</h1>
         <p>Visite orfanatos e mude o dia de mutas crianças.</p>
       </main>

       <div className="location">
         <strong>Aracaju</strong>
         <span>Sergipe</span>
       </div>

       <a href=""className='enter-app'>
         >
       </a>
     </div>
    
    </div>
  );
}

export default App;
