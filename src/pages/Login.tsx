import Header from '../components/Header';
import '../styles/design.css';

export default function Login() {
  return (
    <div className="home-container">
      <div className="noise-large"></div>
      <div className="noise-small"></div>
      <div className="hero-title">
        <p className="hero-title-main">로그인로그인</p>
      </div>
      <Header activeMenu="login" />
    </div>
  );
}