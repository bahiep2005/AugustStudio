import React, { useState } from 'react';
import Header from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';
import LoginPage from './layouts/LoginPage';
import RegisterPage from './layouts/RegisterPage'; // Thêm dòng này
import './components/header/Header.css';
import './components/footer/Footer.css';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="flex-layout">
      {activePage !== 'login' && activePage !== 'register' && (
        <Header activePage={activePage} setActivePage={setActivePage} />
      )}
      {activePage === 'login' ? (
        <LoginPage onSwitchToRegister={() => setActivePage('register')} />
      ) : activePage === 'register' ? (
        <RegisterPage onSwitchToLogin={() => setActivePage('login')} />
      ) : (
        <Main
          activePage={activePage}
          onExplore={() => setActivePage('services')}
          onReadMore={() => setActivePage('about')}
          onBlog={() => setActivePage('blog')}
          onBooking={() => setActivePage('booking')}
        />
      )}
      {activePage !== 'login' && activePage !== 'register' && <Footer />}
    </div>
  );
}

export default App;
