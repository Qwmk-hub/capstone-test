import Header from '../components/Header';
import '../styles/design.css';

export default function Library() {
  return (
    <div className="home-container">
      <div className="noise-large"></div>
      <div className="noise-small"></div>
      <div className="blob-purple"></div>
      <div className="blob-pink"></div>
      <div className="blob-cyan"></div>

      <div className="hero-title">
        <p className="hero-title-main">문서 보관함</p>
        <p className="hero-title-sub">저장된 요약본을 확인하세요</p>
      </div>

      <Header activeMenu="library" />
    </div>
  );
}