import './App.css';
import Navbar from './components/widget/navbar';

// Header Component
const Header = () => (
  <header className="header-bg">
    <div className="header-content">
      <h1 className="header-title">
        Mercuone
        <hr className="header-hr" />
        <div className="header-aurora">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="header-aurora-item"></div>
          ))}
        </div>
      </h1>
      <p className="header-subtitle">Welcome to Mercuone Portfolio</p>
      <div className="header-scrolling">
        <a id="scroll" href="#scroll">Scroll</a>
        <p className="" style={{ fontSize: 'smaller' }}>v</p>
      </div>
    </div>
  </header>
);

const App = () => (
  <div>
    <Navbar />
    <Header />
  </div>
);

export default App;
