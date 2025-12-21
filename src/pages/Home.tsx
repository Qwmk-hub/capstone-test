import Header from '../components/Header';
import '../styles/design.css';
import '../styles/animations.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Noise overlays */}
      <div className="noise-large"></div>
      <div className="noise-small"></div>

      {/* Blob decorations */}
      <div className="blob-purple"></div>
      <div className="blob-pink"></div>
      <div className="blob-cyan"></div>

      {/* Hero content */}
      <div className="hero-title">
        <p className="hero-title-main animate-slide-up">긴 문서, 한눈에 핵심만</p>
        <p className="hero-title-sub animate-slide-up delay-200">AI 기반 스마트 요약 시스템</p>
      </div>

      {/* University info */}
      <div className="university-info animate-slide-up delay-400">한양대학교 ERICA 소프트웨어융합대학</div>

      {/* Header */}
      <Header activeMenu="home" />
    </div>
  );
}