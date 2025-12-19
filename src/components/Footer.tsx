import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      {/* 소셜 아이콘 */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
          </svg>
        </a>
      </div>
      
      {/* 로고 */}
      <p className="footer-logo">lotea.org</p>
      
      {/* 설명 텍스트 */}
      <p className="footer-text">This website is operated to present the research and cooperative activities conducted by the non-profit organization, Logistics Tetris Association.</p>
      <p className="footer-text">© 2025 Logistics Tetris Association. All rights reserved.</p>
      
      {/* 링크들 */}
      <div className="footer-links">
        <Link href="/terms">이용약관</Link>
        <Link href="/privacy">개인정보처리방침</Link>
      </div>
    </footer>
  );
}
