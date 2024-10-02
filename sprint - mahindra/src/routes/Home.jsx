import React from 'react';
import fundo1 from '../assets/fundo1.jfif';
import fundo2 from '../assets/fundo2.jfif';
import fundo3 from '../assets/fundo3.jfif';

import '../css/estilo.css';
import '../utils/animation';


function Home() {
  return (
    <>
      <main>
              <div class="header">
            <div class="esquerda">
                <h1>Formula E</h1>
                <ul class="breadcrumb">
                    <li><a href="#">
                            Game
                        </a></li>
                    /
                    <li><a href="#" class="active">Quiz</a></li>
                </ul>
            </div>
            <a href="#" class="compartilhar">
                <i class='bx bx-share-alt'></i>
                <span>Compartilhar</span>
            </a>
        </div>

        {/* Carrossel */}
        <div className="carrossel-container" id="inicio">
          <div className="carrossel">
            <div><img src={fundo1} alt="Slide 1" /></div>
            <div><img src={fundo2} alt="Slide 2" /></div>
            <div><img src={fundo3} alt="Slide 3" /></div>
          </div>
          <div className="carrossel-text">
            <h2>Mahindra Racing!</h2>
            <p>Bem-vindo e venha prestigiar o nosso mundo da Formula E.</p>
          </div>
          <div className="carrossel-overlay">
            <h2>Viva a emoção!</h2>
            <p>Experimente a adrenalina da velocidade na pista da Formula E.</p>
          </div>
          <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
          <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
        </div>

        {/* Seções */}
        <section className="problema">
          <h2>Problema Identificado</h2>
          <ul>
              <li> A popularização da Mahindra na Fórmula E enfrenta desafios como competir com equipes estabelecidas, </li>
              <li>consolidar sua marca, atrair patrocinadores e expandir sua base de fãs. Investimentos em tecnologia </li>
              <li>e desenvolvimento de talentos são essenciais para manter a competitividade. O sucesso requer uma </li>
              <li>abordagem estratégica abrangente, incluindo marketing, parcerias e foco na inovação.</li>
          </ul>
        </section>

        <section class="solucao">
                <h2>Solução</h2>
                <ul>
                   <li> A solução é um site interativo e gamificado dedicado à Fórmula E, que oferece uma experiência </li>
                   <li> imersiva com informações sobre circuitos, estatísticas, classificações e passeios virtuais dos carros. </li>
                   <li> A plataforma será fácil de usar e acessível em diferentes dispositivos. </li>
                   <li> Recursos como quizzes interativos sobre a história da Fórmula E, pilotos e equipes, </li>
                   <li> múltiplos níveis de dificuldade, e rankings locais e globais com recompensas irão engajar os usuários. </li>
                   <li> Elementos sociais e interativos, como quizzes em tempo real durante as corridas e opções de compartilhamento</li>
                   <li> de resultados nas redes sociais, aumentarão a visibilidade e o engajamento. Esta abordagem visa atrair </li>
                   <li> novos públicos, educar sobre os benefícios dos carros elétricos e fortalecer a posição da Mahindra Racing na Fórmula E.</li>
                </ul>
            </section>


            <section class="impactosN">
            <h2>Impactos Negativos do Problema</h2>
            <ul>
                <li><h3>Engajamento Limitado:</h3> A Fórmula E, sendo uma categoria mais nova e tecnológica, ainda não conquistou um público tão fiel quanto outras categorias de automobilismo.</li>
                <li>A falta de interatividade com o público dificulta a criação de uma base de fãs sólida.</li>
                <li><h3>Visibilidade Reduzida:</h3> A cobertura midiática da Fórmula E é menos abrangente em comparação com outras categorias de automobilismo.</li>
                <li>A competição por atenção com outros eventos esportivos e de entretenimento é acirrada.</li>
                <li><h3>Acessibilidade e Conveniência:</h3> As corridas ocorrem em diversos fusos horários, o que pode dificultar a audiência ao vivo. </li>
                <li>Falta de plataformas integradas que permitam uma experiência de visualização flexível e interativa.</li>
            </ul>
           </section>

        <section className="impactosP">
          <h2>Impactos Positivos</h2>
          <ul>
            <li><h3>Aumento do Engajamento:</h3> O site interativo mantém os usuários engajados por mais tempo.</li>
          </ul>
        </section>

        <div className="curiosidades">
          <h2>Curiosidades sobre a Formula E</h2>
          <ul>
            <li>A Formula E é a primeira competição de carros de corrida totalmente elétricos do mundo.</li>
          </ul>
        </div>

        <div className="chamada">
          <h2>Chamada para Ação:</h2>
          <p>Explore nosso site e teste seus conhecimentos com nossos quizzes exclusivos.</p>
          <button className="chamada-btn">Inscrever-se na Newsletter</button>
        </div>

        <section class="corridas-section" id="corridas">
                <h2>Próximas Corridas</h2>
                <div class="corridas-container">
                    <div class="corrida">
                        <h3>New York City E-Prix</h3>
                        <p>Data: 9 e 10 de julho de 2024</p>
                        <p>Local: Red Hook, Brooklyn</p>
                        <p>Cidade: Nova York, EUA</p>
                    </div>
                    <div class="corrida">
                        <h3>Seoul E-Prix</h3>
                        <p>Data: 14 de agosto de 2024</p>
                        <p>Local: TBD</p>
                        <p>Cidade: Seul, Coreia do Sul</p>
                    </div>
                    <div class="corrida">
                        <h3>Paris E-Prix</h3>
                        <p>Data: 24 de agosto de 2024</p>
                        <p>Local: Circuit des Invalides</p>
                        <p>Cidade: Paris, France</p>
                    </div>
                    <div class="corrida">
                        <h3>Mexico City E-Prix</h3>
                        <p>Data: 7 de setembro de 2024</p>
                        <p>Local: Autódromo Hermanos Rodríguez</p>
                        <p>Cidade: Cidade do México, México</p>
                    </div>
                    <div class="corrida">
                        <h3>Berlin E-Prix</h3>
                        <p>Data: 21 de setembro de 2024</p>
                        <p>Local: Tempelhof Airport Street Circuit</p>
                        <p>Cidade: Berlim, Alemanha</p>
                    </div>
                    <div class="corrida">
                        <h3>Rome E-Prix</h3>
                        <p>Data: 5 de outubro de 2024</p>
                        <p>Local: Circuito Cittadino dell'EUR</p>
                        <p>Cidade: Roma, Itália</p>
                    </div>
                </div>
            </section>

            <div class="quiz-container">
                <div class="quiz">
                    <p id="numero">#1</p>
                    <div class="question">
                        <p id="question">Qual equipe conquistou a pole position na última corrida da Formula E?</p>
                    </div>
                    <div class="options">
                        <button id="0">Audi Sport ABT</button>
                        <button id="1">Nissan e.dams</button>
                        <button id="2">Mercedes-EQ Formula E Team</button>
                        <button id="3">Envision Virgin Racing</button>
                    </div>
                </div>
                <div class="chart-container">
                    <canvas id="progressChart"></canvas>
                </div>
            </div>

       
      </main>
    </>
  );
}

export default Home;
