import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='texto-de-lado'>
      <d>Olá, sou</d>
        <h2>Gustavo Gonçalves</h2> 
         <p>Desenvolvedor Full-Stack</p>
         <img
  src="/logo512.png"
  alt="Sua Imagem"
  style={{ width: '150px' }} // Ajuste o valor conforme necessário
/>

        <p>
          Seja bem vindo ao meu portfólio !!
        </p>

      </div>
        <a
          className="App-link"
          href="https://github.com/gustavogoncc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique Aqui
        </a>
      </header>
      <main>
        <section className='about-me'>
        <div className='aboute-me-content'>
          <div className='about-me-image'>
            <img src="/gugs.jpg" alt="minha imagem" className='rounded-circle img-medium'/>
            
          </div>
        </div>
         
        
          <h2>Sobre Mim:</h2>
          <p>Eu sou um desenvolvedor Full-Stack, trabalho com as linguagens python e java e com o desenvolvimento web. Sou um apaixonado pela tecnologia,
            estou sempre em busca de conhecimento e em busca de evoluir na minha área. Sempre gostei de algo que envolva tecnologia, algo novo, a curiosidade fez com que
            eu me apaixonasse por essa área. 
          </p>
          <h2>Vida Acadêmica: </h2>
          <p>- Ciência da Computação (em andamento)</p>
          <h2>Certificados relevantes:</h2>
          <p>▪ Curso online em Java Básico com certificação do Curso em Vídeo </p>
          <p>▪ Curso online em java avançado com certificação do Curso em Vídeo</p>
          <p>▪ Curso online de Introdução a Ciência da Computação, o curso de Havard no Brasil com certificação</p>
          <p>▪Curso online de linguagem C com certificação do Curso em Vídeo</p>
          <p>▪Santander Coders 2023 | Back- end</p>
        </section>
        <section className="projet card">
          <h2 className="card-title">Projeto 1</h2>
          <p className='card-text'>Neste  repositório estão os meus primeiros projetos</p>
          <a href='https://github.com/gustavogoncc/gustavogoncc' className='btn btn-primary'>Ver projeto 1</a>
        </section>
        <section className='projet card'>
          <h2 className='cart-title'>Projeto 2</h2>
          <p className='card-text'>Neste repositório estão os códigos na linguagem C</p>
          <a href='https://github.com/gustavogoncc/guga-codigos-ling-C'>Ver projeto 2</a>
        </section>
        <section className='projet card'>
          <h2 className='card-title'> Projeto 3</h2>
          <p className='card-text'>Neste repositório se tem códigos que foram feitos atráves do #7DAYSOFCODE</p>
          <a href='https://github.com/gustavogoncc/7DiasDecodigo'>Ver projeto 3</a>
        </section>
        <section className='projet card'>
          <h2 className='card-title'>Projeto 4</h2>
          <p className='card-text'>Neste repositório estão códigos resolvidos atráves de excercicios do leetcode</p>
          <a href='https://github.com/gustavogoncc/LEETCODE'> Ver projeto 4</a>
        </section>
        <section className='projet card'>
          <h2 className='card-title'>Projeto 5</h2>
          <p className='card-text'>Neste repositório está um projeto de uma agência bancária</p>
          <a href='https://github.com/gustavogoncc/banco'>Ver projeto 5</a>
        </section>
        <section className='projet card'>
          <h2 className='card-title'>Projeto 6</h2>
          <p className='card-text'>Neste repositório estão alguns algoritmos feitos na linguagem java</p>
          <a href='https://github.com/gustavogoncc/01algoritimos'>Ver projeto 6</a>
        </section>
        <section className='projet card'>
          <h2 className='card-title'>Projeto 7</h2>
          <p className='card-text'>Neste repositório está um projeto de criar um jogo de cartas, onde o objetivo é encontrar todos os pares de cartas</p>
          <a href='https://github.com/gustavogoncc/jogomemory'>Ver projeto 7</a>
        </section>
        <section className='projet card'>
          <h2 className='card-title'>Projeto 8</h2>
          <p className='card-text'>Neste repositório está um formulário de pesquisa</p>
          <a href='https://github.com/gustavogoncc/formulariofcode'>Ver projeto 8</a>
        </section>
        <section className='projet card'>
          <h2 className='card-title'>Projeto 9</h2>
          <p className='card-text'>Neste repositório está uma página de tributos</p>
          <a href='https://github.com/gustavogoncc/paginadetributosfreecode'>Ver projeto 9 </a>
        </section>
      </main>

      <footer className='mt=5'>
        <h3> Entre em contato comigo em:</h3>
        <c>gugagoncc@gmail.com</c>
        <h3> </h3>
        <a href='https://www.linkedin.com/in/jos%C3%A9-gustavo-gon%C3%A7alves-da-silva-77471923a/'>Linkedin</a>
      </footer>
    </div>

  );
}

export default App;
