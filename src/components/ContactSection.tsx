import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">문의하기</h2>
      <p className="contact-subtitle">회원 가입 및 사업 참여에 대해 문의해주세요</p>
      
      <div className="contact-content">
        {/* 이미지 영역 */}
        <div className="contact-image">
          <Image 
            src="/images/contact.png" 
            alt="contact"
            width={480}
            height={360}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* 연락처 정보 */}
        <div className="contact-info">
          <h3 className="contact-info-title">연락처 안내</h3>
          
          {/* 대표전화 */}
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div>
              <p className="contact-info-label">대표전화</p>
              <p className="contact-info-value">0504-0812-9773</p>
            </div>
          </div>

          {/* 이메일 */}
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <p className="contact-info-label">이메일</p>
              <p className="contact-info-value">james@lotea.org</p>
            </div>
          </div>

          {/* 주소 */}
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <p className="contact-info-label">주소</p>
              <p className="contact-info-value">
                충청북도 청주시 상당구 상당로 127,<br />
                5층 135호
              </p>
            </div>
          </div>

          {/* 운영시간 */}
          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <div>
              <p className="contact-info-label">운영시간</p>
              <p className="contact-info-value">
                평일 09:00 - 18:00<br />
                (주말 및 공휴일 휴무)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
