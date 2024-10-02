import React from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import logo from '../assets/logo.png'; 

function Nav() {
  return (
    <>
      {/* Menu */}
      <div className="menu close">
        <Link to="/" className="logo">
          <div className="nome-logo">
            <span>Formula</span>E
          </div>
        </Link>

        <ul className="side-menu">
          <li>
            <Link to="/#inicio">
              <i className='bx bx-home'></i>Início
            </Link>
          </li>
          <li>
            <Link to="/#inicio#corridas">
              <i className='bx bxs-car-crash'></i>Corridas
            </Link>
          </li>
          <li>
            <Link to="/#inicio#quiz"> {/* Aqui foi ajustado */}
              <i className='bx bx-joystick-alt'></i>Quiz
            </Link>
          </li>
          <li>
            <Link to="/corridas" className="nav-link">
              <i className='bx bx-calendar'></i>Calendário
            </Link>
          </li>
          <li>
            <Link to="/corridas#pilotos">
              <i className='bx bxs-face-mask'></i>Pilotos
            </Link>
          </li>
          <li>
            <Link to="/corridas#Noticias">
              <i className='bx bx-news'></i>Notícias
            </Link>
          </li>
          <li>
            <Link to="/corridas#parcerias">
              <i className='bx bxs-user-account'></i>Parcerias
            </Link>
          </li>
          <li>
            <Link to="/corridas#contato">
              <i className='bx bx-phone'></i>Contato
            </Link>
          </li>
        </ul>

        <ul className="side-menu">
          <li>
            <a href="#" className="logout">
              <i className='bx bx-log-out-circle'></i>
              Sair
            </a>
          </li>
        </ul>
      </div>
      
      {/* Fim do menu */}

      {/* Main Conteúdo */}
      <div className="conteudo">
        {/* Navbar */}
        <nav>
          <i className='bx bx-menu menu-toggle'></i>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Pesquisar..." />
              <button className="search-btn" type="submit">
                <i className='bx bx-search'></i>
              </button>
            </div>
          </form>
          <input type="checkbox" id="theme-toggle" hidden />
          <label htmlFor="theme-toggle" className="theme-toggle"></label>
          <a href="#" className="notif">
            <i className='bx bx-bell'></i>
            <span className="count">12</span>
          </a>
          <a href="#" className="usuario">
            <img src={logo} alt="Logo do usuário" /> {/* Usei o logo importado */}
          </a>
        </nav>
      </div>
    </>
  );
}

export default Nav;
