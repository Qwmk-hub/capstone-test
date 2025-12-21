import Header from '../components/Header';
import '../styles/design.css';

export default function Summary() {
  return (
    <div className="home-container">
      <div className="noise-large"></div>
      <div className="noise-small"></div>
      <div className="blob-purple"></div>
      <div className="blob-pink"></div>
      <div className="blob-cyan"></div>

      <div className="hero-title">
        <p className="hero-title-main">문서 요약</p>
        <p className="hero-title-sub">스마트하게 핵심을 찾아보세요</p>
      </div>

      <Header activeMenu="summary" />
    </div>
  );
}