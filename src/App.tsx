import { useEffect, useState } from "react"

type ModalKind = "reservation" | "consultation" | "video" | "notice" | null

const navigation = [
  { label: "병원소개", href: "#about" },
  { label: "진료안내", href: "#services" },
  { label: "치료클리닉", href: "#clinics" },
  { label: "한방건강정보", href: "#news" },
  { label: "커뮤니티", href: "#stories" },
]

const heroSlides = [
  {
    eyebrow: "몸과 마음이 다시, 편안해지는 곳",
    title: ["일상의 건강을", "되찾는 한방의 힘"],
    description: [
      "사람을 먼저 생각하는 다온한방병원이",
      "건강한 하루를 함께 만들어갑니다.",
    ],
    tone: "hero-art--one",
  },
  {
    eyebrow: "전통의 지혜를 오늘의 건강으로",
    title: ["내 몸에 꼭 맞는", "세심한 한방 진료"],
    description: [
      "충분히 듣고 꼼꼼하게 살피며",
      "환자 한 분 한 분의 회복을 돕습니다.",
    ],
    tone: "hero-art--two",
  },
  {
    eyebrow: "건강한 일상으로 돌아가는 길",
    title: ["치료를 넘어", "편안한 회복까지"],
    description: [
      "몸의 균형과 생활 습관을 함께 살펴",
      "오래도록 이어지는 건강을 만듭니다.",
    ],
    tone: "hero-art--three",
  },
]

const signatureServices = [
  {
    icon: "✦",
    title: "맞춤 한방치료",
    text: (
      <>
        개인별 체질과 상태에 맞춘
        <br />
        1:1 맞춤 치료
      </>
    ),
  },
  {
    icon: "✿",
    title: "안전한 한약 처방",
    text: (
      <>
        믿을 수 있는
        <br />
        청정 한약재 사용
      </>
    ),
  },
  {
    icon: "⌁",
    title: "통증 클리닉",
    text: (
      <>
        허리·목·관절 등<br />
        만성 통증 치료
      </>
    ),
  },
  {
    icon: "♧",
    title: "생활질환 클리닉",
    text: (
      <>
        소화기·호흡기·여성질환 등<br />
        생활 속 건강 관리
      </>
    ),
  },
  {
    icon: "✧",
    title: "면역·보약 클리닉",
    text: (
      <>
        체질 개선과
        <br />
        면역력 증진
      </>
    ),
  },
]

const clinics = [
  {
    title: "통증·척추 클리닉",
    text: "허리, 목, 어깨, 무릎 등",
    color: "#cfc7ba",
  },
  { title: "소화기 클리닉", text: "소화불량, 위장장애 등", color: "#e0d1bf" },
  {
    title: "교통사고 후유증 클리닉",
    text: "사고 후 통증, 재활 치료",
    color: "#c2c4ba",
  },
  {
    title: "여성건강 클리닉",
    text: "생리통, 갱년기, 여성질환 등",
    color: "#dec9c2",
  },
  {
    title: "소아·성장 클리닉",
    text: "성장, 면역, 체질 개선",
    color: "#ccd1bf",
  },
  { title: "보약·면역 클리닉", text: "체질 개선, 체력 회복", color: "#c4ccc2" },
]

const rooms = ["진료실", "추나요법실", "한약조제실", "입원실"]

const notices = [
  ["추석 연휴 진료 일정 안내", "2024.09.10"],
  ["특강 해열 한약 프로그램 안내", "2024.09.05"],
  ["진료 예약 시스템 오픈 안내", "2024.08.28"],
]

// 시안 속 공간 이미지를 동일한 색상과 비율의 레이어로 재현합니다.
function InteriorArt({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`interior-art ${compact ? "interior-art--compact" : ""}`}
      aria-hidden="true"
    >
      <span className="interior-art__light" />
      <span className="interior-art__highlight" />
      <span className="interior-art__shadow" />
      <span className="interior-art__floor" />
      <span className="interior-art__counter" />
      <span className="interior-art__base" />
    </div>
  )
}

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return <span aria-hidden="true">{direction === "left" ? "‹" : "›"}</span>
}

function Button({
  children,
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode
  variant?: "primary" | "light" | "outline"
  onClick: () => void
}) {
  return (
    <button
      className={`pill-button pill-button--${variant}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function Header({ onModal }: { onModal: (kind: ModalKind) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="brand"
          href="#home"
          aria-label="다온한방병원 홈"
          onClick={closeMenu}
        >
          <img src="/assets/20c3e.svg" alt="" />
          <span className="brand__text">
            <strong>다온한방병원</strong>
            <small>DAON KOREAN MEDICINE HOSPITAL</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`header-panel ${menuOpen ? "header-panel--open" : ""}`}>
          <nav className="main-nav" aria-label="주요 메뉴">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="search-button"
            type="button"
            aria-label="검색"
            onClick={() => onModal("notice")}
          >
            ⌕
          </button>
          <div className="header-actions">
            <Button variant="light" onClick={() => onModal("consultation")}>
              온라인 상담
            </Button>
            <Button onClick={() => onModal("reservation")}>예약하기</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero({ onModal }: { onModal: (kind: ModalKind) => void }) {
  const [current, setCurrent] = useState(0)
  const slide = heroSlides[current]

  const moveSlide = (amount: number) => {
    setCurrent(
      (value) => (value + amount + heroSlides.length) % heroSlides.length,
    )
  }

  return (
    <section className="hero" id="home" aria-label="다온한방병원 주요 안내">
      <div className="hero__content">
        <p className="hero__eyebrow">{slide.eyebrow}</p>
        <h1>
          {slide.title[0]}
          <br />
          {slide.title[1]}
        </h1>
        <p className="hero__description">
          {slide.description[0]}
          <br />
          {slide.description[1]}
        </p>
        <div className="hero__actions">
          <Button onClick={() => onModal("reservation")}>
            진료 예약하기&nbsp; →
          </Button>
          <a className="pill-button pill-button--light" href="#about">
            병원 소개 보기
          </a>
        </div>
        <div className="hero__pager" aria-label="슬라이드 위치">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={current === index ? "is-active" : ""}
              type="button"
              aria-label={`${index + 1}번 슬라이드`}
              onClick={() => setCurrent(index)}
            >
              0{index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className={`hero-art ${slide.tone}`}>
        <InteriorArt />
        <div className="hero__arrows">
          <button
            type="button"
            aria-label="이전 슬라이드"
            onClick={() => moveSlide(-1)}
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            aria-label="다음 슬라이드"
            onClick={() => moveSlide(1)}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

function SignatureServices() {
  return (
    <section
      className="signature-services"
      id="services"
      aria-label="다온의 주요 진료"
    >
      {signatureServices.map((service) => (
        <article key={service.title}>
          <span className="service-icon">{service.icon}</span>
          <h2>{service.title}</h2>
          <p>{service.text}</p>
        </article>
      ))}
    </section>
  )
}

function Philosophy({ onModal }: { onModal: (kind: ModalKind) => void }) {
  return (
    <section className="philosophy" id="about">
      <div className="philosophy__image">
        <InteriorArt />
      </div>
      <div className="philosophy__content">
        <p className="section-kicker">
          ━&nbsp;&nbsp; 전통의 지혜, 오늘의 건강으로
        </p>
        <h2>
          사람을 위한
          <br />
          올바른 한방치료
        </h2>
        <p className="section-description">
          다온한방병원은 전통의 가치를 바탕으로
          <br />
          현대인의 건강 고민을 함께 해결합니다.
        </p>
        <div className="care-values">
          <div>
            <span>♡</span>
            <strong>환자 중심 진료</strong>
          </div>
          <div>
            <span>♧</span>
            <strong>안전한 의료 시스템</strong>
          </div>
          <div>
            <span>♙</span>
            <strong>풍부한 임상 경험</strong>
          </div>
        </div>
      </div>
      <button
        className="video-button"
        type="button"
        onClick={() => onModal("video")}
      >
        <span className="video-button__circle">
          <span className="video-button__play">▶</span>
        </span>
        <strong>
          다온한방병원
          <br />
          소개 영상 보기
        </strong>
      </button>
    </section>
  )
}

function ClinicSection({ onModal }: { onModal: (kind: ModalKind) => void }) {
  return (
    <section className="clinic-section" id="clinics">
      <div className="section-heading">
        <h2>주요 진료 클리닉</h2>
        <p>
          다양한 한방 진료로
          <br />
          일상의 건강을 지켜드립니다.
        </p>
        <button type="button" onClick={() => onModal("consultation")}>
          전체 진료 보기&nbsp; →
        </button>
      </div>
      <div className="clinic-grid">
        {clinics.map((clinic) => (
          <button
            className="clinic-card"
            type="button"
            key={clinic.title}
            onClick={() => onModal("consultation")}
          >
            <span
              className="clinic-card__image"
              style={{ backgroundColor: clinic.color }}
            >
              <span />
              <i />
            </span>
            <strong>{clinic.title}</strong>
            <small>{clinic.text}</small>
          </button>
        ))}
      </div>
    </section>
  )
}

function HealingSpace({ onModal }: { onModal: (kind: ModalKind) => void }) {
  const [selectedRoom, setSelectedRoom] = useState(0)

  return (
    <section className="healing-space">
      <div className="healing-space__copy">
        <h2>
          편안함이 머무는
          <br />
          치료 공간
        </h2>
        <p>
          휴식과 회복이 모두 일어날 수 있는
          <br />
          쾌적한 진료 환경을 제공합니다.
        </p>
        <Button variant="light" onClick={() => onModal("video")}>
          병원 둘러보기&nbsp; →
        </Button>
      </div>
      <div className="room-gallery" aria-label="병원 공간">
        {rooms.map((room, index) => (
          <button
            className={selectedRoom === index ? "is-selected" : ""}
            type="button"
            key={room}
            onClick={() => setSelectedRoom(index)}
          >
            <InteriorArt compact />
            <span>{room}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

function InformationFooter({
  onModal,
}: {
  onModal: (kind: ModalKind) => void
}) {
  return (
    <section className="info-footer" id="news">
      <div className="notices">
        <div className="info-title">
          <h2>공지사항</h2>
          <button type="button" onClick={() => onModal("notice")}>
            더보기&nbsp; +
          </button>
        </div>
        <ul>
          {notices.map(([title, date]) => (
            <li key={title}>
              <button type="button" onClick={() => onModal("notice")}>
                {title}
              </button>
              <time>{date}</time>
            </li>
          ))}
        </ul>
      </div>
      <div className="stories" id="stories">
        <h2>환자분들의 이야기</h2>
        <blockquote>
          “꾸준한 치료로 허리 통증이 많이 좋아졌어요.
          <br />
          친절하고 세심한 진료에 늘 감사합니다.”
        </blockquote>
        <p>김나영 님&nbsp;&nbsp; | &nbsp;&nbsp;허리 통증 치료</p>
      </div>
      <div className="location">
        <h2>오시는 길</h2>
        <div className="map-placeholder">
          <span>●</span>
        </div>
        <p>
          경상남도 진주시 진주대로 123
          <br />
          다온한방병원
        </p>
        <a
          className="pill-button pill-button--outline"
          href="https://map.kakao.com/"
          target="_blank"
          rel="noreferrer"
        >
          지도에서 보기&nbsp; →
        </a>
      </div>
      <div className="contact">
        <h2>진료 예약 및 상담</h2>
        <a className="phone-number" href="tel:0551234567">
          ☎&nbsp; 055-123-4567
        </a>
        <p>
          평일&nbsp;&nbsp;&nbsp;&nbsp; 09:00 - 18:00
          <br />
          토요일&nbsp;&nbsp; 09:00 - 13:00
          <br />
          점심시간&nbsp; 12:30 - 13:30
        </p>
        <div>
          <Button variant="light" onClick={() => onModal("reservation")}>
            진료 예약하기 →
          </Button>
          <button
            className="text-link"
            type="button"
            onClick={() => onModal("consultation")}
          >
            온라인
            <br />
            상담 →
          </button>
        </div>
      </div>
    </section>
  )
}

function Modal({ kind, onClose }: { kind: ModalKind onClose: () => void }) {
  useEffect(() => {
    if (!kind) return
    const closeOnEscape = (event: KeyboardEvent) =>
      event.key === "Escape" && onClose()
    document.addEventListener("keydown", closeOnEscape)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", closeOnEscape)
      document.body.style.overflow = ""
    }
  }, [kind, onClose])

  if (!kind) return null

  const content = {
    reservation: [
      "진료 예약하기",
      "전화 또는 온라인으로 편리하게 예약해 주세요.",
    ],
    consultation: [
      "온라인 상담",
      "진료에 대해 궁금한 점을 남겨주시면 친절히 안내해 드립니다.",
    ],
    video: [
      "다온한방병원 소개",
      "사람을 먼저 생각하는 다온의 진료 철학과 공간을 소개합니다.",
    ],
    notice: ["다온 소식", "새로운 진료 일정과 병원 소식을 안내해 드립니다."],
  }[kind]

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="modal__close"
          type="button"
          aria-label="팝업 닫기"
          onClick={onClose}
        >
          ×
        </button>
        {kind === "video" && (
          <div className="modal__visual">
            <InteriorArt />
            <span>▶</span>
          </div>
        )}
        <p className="section-kicker">DAON KOREAN MEDICINE HOSPITAL</p>
        <h2 id="modal-title">{content[0]}</h2>
        <p>{content[1]}</p>
        {kind === "reservation" && (
          <div className="modal__actions">
            <a
              className="pill-button pill-button--primary"
              href="tel:0551234567"
            >
              전화 예약하기
            </a>
            <button
              className="pill-button pill-button--light"
              type="button"
              onClick={() => window.alert("온라인 예약 접수가 완료되었습니다.")}
            >
              온라인 예약 접수
            </button>
          </div>
        )}
        {kind === "consultation" && (
          <form
            className="consult-form"
            onSubmit={(event) => {
              event.preventDefault()
              window.alert("상담 문의가 접수되었습니다.")
              onClose()
            }}
          >
            <label>
              이름
              <input required name="name" placeholder="이름을 입력해 주세요" />
            </label>
            <label>
              연락처
              <input
                required
                name="phone"
                type="tel"
                placeholder="010-0000-0000"
              />
            </label>
            <label>
              문의 내용
              <textarea
                required
                name="message"
                placeholder="궁금한 내용을 입력해 주세요"
              />
            </label>
            <button className="pill-button pill-button--primary" type="submit">
              상담 신청하기
            </button>
          </form>
        )}
        {kind === "notice" && (
          <ul className="modal__notices">
            {notices.map(([title, date]) => (
              <li key={title}>
                <span>{title}</span>
                <time>{date}</time>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default function App() {
  const [modal, setModal] = useState<ModalKind>(null)

  return (
    <>
      <div className="page-shell">
        <Header onModal={setModal} />
        <main>
          <Hero onModal={setModal} />
          <SignatureServices />
          <Philosophy onModal={setModal} />
          <ClinicSection onModal={setModal} />
          <HealingSpace onModal={setModal} />
          <InformationFooter onModal={setModal} />
        </main>
      </div>
      <Modal kind={modal} onClose={() => setModal(null)} />
    </>
  )
}
