import React from 'react';
import '../css/estilo.css'; 
import fundo1 from '../assets/piloto-1.jfif';
import fundo2 from '../assets/piloto-2.jfif';
import fundo3 from '../assets/piloto-3.jfif';
import fundo4 from '../assets/piloto-4.jfif';
import fundo5 from '../assets/piloto-5.jfif';
import logo1 from '../assets/logo-1.png';
function Contato() {
  return (
    <>
      <main>
        {/* Calendário de Junho */}
        <div className="calendario">
          <div className="mes">Junho 2024</div>
          <div className="dias">
            <div className="dia" data-date="2024-06-01">
              1
              <div className="anotacao">Início do mês</div>
            </div>
            <div className="dia" data-date="2024-06-02">2</div>
            <div className="dia" data-date="2024-06-03">
              3
              <div className="anotacao">Mahindra</div>
            </div>
            <div className="dia" data-date="2024-06-04">
              4
              <div className="anotacao">Partida inicial</div>
            </div>
            <div className="dia" data-date="2024-06-30">
              30
              <div className="anotacao">Partida final</div>
            </div>
          </div>
        </div>

        {/* Calendário de Julho */}
        <div className="calendario">
          <div className="mes">Julho 2024</div>
          <div className="dias">
            <div className="dia" data-date="2024-07-01">
              1
              <div className="anotacao">Início do mês</div>
            </div>
            <div className="dia" data-date="2024-07-07">7</div>
            <div className="dia" data-date="2024-07-09">
              9
              <div className="anotacao">Mahindra</div>
            </div>
            <div className="dia" data-date="2024-07-30">
              30
              <div className="anotacao">Partida final</div>
            </div>
          </div>
        </div>

        {/* Calendário de Agosto */}
        <div className="calendario">
          <div className="mes">Agosto 2024</div>
          <div className="dias">
            <div className="dia" data-date="2024-08-01">
              1
              <div className="anotacao">Início do mês</div>
            </div>
            <div className="dia" data-date="2024-08-07">7</div>
            <div className="dia" data-date="2024-08-09">
              9
              <div className="anotacao">Mahindra</div>
            </div>
            <div className="dia" data-date="2024-08-30">
              30
              <div className="anotacao">Partida final</div>
            </div>
          </div>
        </div>

        {/* Seção de Pilotos */}
        <section className="pilotos" id="pilotos">
          <div className="pilotos-section">
            <h2>Pilotos</h2>
            <div className="pilotos-container">
              <div className="piloto" onClick={() => openModal('modal1')}>
              <div><img src={fundo1} alt="img" /></div>
                <h3>Mercedes-EQ Formula E Team</h3>
                <p>Stoffel Vandoorne e Nyck de Vries</p>
              </div>
              
              <div className="piloto" onClick={() => openModal('modal2')}>
              <div><img src={fundo2} alt="img" /></div>
                <h3>Jaguar Racing</h3>
                <p>Sam Bird e Mitch Evans</p>
              </div>
              <div className="piloto" onClick={() => openModal('modal3')}>
              <div><img src={fundo3} alt="img" /></div>
                <h3>DS TECHEETAH</h3>
                <p>Jean-Éric Vergne e António Félix da Costa</p>
              </div>
              <div className="piloto" onClick={() => openModal('modal4')}>
              <div><img src={fundo4} alt="img" /></div>
                <h3>Audi Sport ABT Schaeffler</h3>
                <p>Lucas di Grassi e René Rast</p>
              </div>
              <div className="piloto" onClick={() => openModal('modal5')}>
              <div><img src={fundo5} alt="img" /></div>
                <h3>NIO 333 FE Team</h3>
                <p>Oliver Turvey e Tom Blomqvist</p>
              </div>
            </div>
          </div>

          {/* Modais dos Pilotos */}
          {/* Modal 1 */}
          <div id="modal1" className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => closeModal('modal1')}>&times;</span>
              <h3>Stoffel Vandoorne</h3>
              <p>Piloto belga conhecido por sua habilidade no automobilismo, competiu na Fórmula 1 pela McLaren e atualmente na Fórmula E pela equipe Mercedes-Benz EQ.</p>
              <h3>Nyck de Vries</h3>
              <p>Piloto holandês com sucesso em categorias de base como a Fórmula 2, competindo na Fórmula E pela equipe Mercedes-Benz EQ.</p>
            </div>
          </div>

          {/* Modal 2 */}
          <div id="modal2" className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => closeModal('modal2')}>&times;</span>
              <h3>Sam Bird</h3>
              <p>Piloto britânico experiente na Fórmula E, conhecido por sua habilidade em pistas de rua e consistência nas corridas.</p>
              <h3>Mitch Evans</h3>
              <p>Piloto da Nova Zelândia, competindo pela Jaguar Racing na Fórmula E, demonstrando competitividade e capacidade de lutar pelo pódio.</p>
            </div>
          </div>

          {/* Modal 3 */}
          <div id="modal3" className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => closeModal('modal3')}>&times;</span>
              <h3>Jean-Éric Vergne</h3>
              <p>Piloto francês de destaque na Fórmula E, conhecido por conquistar dois títulos na categoria.</p>
              <h3>António Félix da Costa</h3>
              <p>Piloto português, campeão da Fórmula E em 2020, reconhecido por sua velocidade e consistência nas pistas elétricas.</p>
            </div>
          </div>
        </section>

        {/* Seção de Notícias */}
        <section class="noticias" id="Noticias">
                <h2>Notícias</h2>
                <div class="noticias-section">
                    <h2>Últimas Notícias</h2>
                    <div class="noticias-container">
                        <div class="noticia">
                            <div class="noticia-content">
                                <h3>Fórmula E anuncia parceria com fabricante de carros elétricos para desenvolvimento de tecnologia</h3>
                                <p>A Fórmula E firmou uma nova parceria estratégica com um renomado fabricante de carros elétricos, visando o desenvolvimento conjunto de tecnologias de propulsão elétrica para veículos de rua.</p>
                                <a href="https://www.mahindraracing.com/news">Leia mais</a>
                            </div>
                        </div>
                        <div class="noticia">
                            <div class="noticia-content">
                                <h3>Equipe de Fórmula E revela novo carro com design aerodinâmico e eficiência energética aprimorada</h3>
                                <p>Uma equipe líder na Fórmula E lançou seu mais recente modelo de carro de corrida elétrico, apresentando um design inovador que promete melhorar a aerodinâmica e a eficiência energética nas próximas temporadas.</p>
                                <a href="https://www.mahindraracing.com/news">Leia mais</a>
                            </div>
                        </div>
                        <div class="noticia">
                            <div class="noticia-content">
                                <h3>Fórmula E anuncia expansão para novos mercados com adição de corridas em cidades asiáticas</h3>
                                <p>A Fórmula E revelou planos ambiciosos de expansão, com a inclusão de novas corridas em cidades da Ásia, visando aumentar a presença e o alcance global da categoria de corridas de carros elétricos.</p>
                                <a href="https://www.mahindraracing.com/news">Leia mais</a>
                            </div>
                        </div>
                        <div class="noticia">
                            <div class="noticia-content">
                                <h3>Fórmula E lança iniciativa de sustentabilidade para neutralizar emissões de carbono durante as corridas</h3>
                                <p>Em um esforço para reduzir seu impacto ambiental, a Fórmula E lançou uma iniciativa de sustentabilidade que visa neutralizar as emissões de carbono geradas durante os eventos de corrida, reforçando seu compromisso com a mobilidade elétrica e sustentável.</p>
                                <a href="https://www.mahindraracing.com/news">Leia mais</a>
                            </div>
                        </div>

                    </div>
                </div>
                <section class="parcerias" id="Parcerias">
                    <h2>Parcerias da Mahindra Racing na Fórmula E</h2>
                    <div class="parcerias-grid">
                    <div><img src={logo1} alt="img" /></div>
                    <div><img src={logo1} alt="img" /></div>
                    <div><img src={logo1} alt="img" /></div>
                    <div><img src={logo1} alt="img" /></div>
                    </div>
                </section>
        </section>
        
        <section class="contatos" id="Contatos">
                    <h2>Contatos da Mahindra Racing</h2>
                    <div class="contatos-grid">
                        <div class="contato">
                            <h3>Email</h3>
                            <p>info@mahindraracing.com</p>
                        </div>
                        <div class="contato">
                            <h3>Telefone</h3>
                            <p>+00 123 456 789</p>
                        </div>
                        <div class="contato">
                            <h3>Endereço</h3>
                            <p>123 Street Name, City, Country</p>
                        </div>
                    </div>
                </section>
      </main>
    </>
  );
}

export default Contato;
