// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | 물류테트리스협회",
  description: "물류테트리스협회 웹사이트 및 서비스 이용약관",
};

const EFFECTIVE_DATE = "2025-12-20";
const VERSION = "v1.0";

const ORG = {
  name: "물류테트리스협회",
  address: "충청북도 청주시 상당구 상당로 127, 자연타워 501-135호",
  대표자: "심영민/협회장",
  email: "james@lotea.org",
  phone: "0504-0812-9773",
};

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 1040, margin: "0 auto", padding: "28px 16px" }}>
      {children}
    </div>
  );
}

function H1({ children }: { children: React.ReactNode }) {
  return <h1 style={{ margin: "0 0 8px 0", fontSize: 28 }}>{children}</h1>;
}
function Meta({ children }: { children: React.ReactNode }) {
  return <div style={{ color: "rgba(0,0,0,0.65)", fontSize: 13 }}>{children}</div>;
}
function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} style={{ margin: "26px 0 10px 0", fontSize: 18 }}>
      {children}
    </h2>
  );
}
function P({ children }: { children: React.ReactNode }) {
  return <p style={{ margin: "0 0 10px 0", lineHeight: 1.75, fontSize: 14 }}>{children}</p>;
}
function Ul({ items }: { items: string[] }) {
  return (
    <ul style={{ margin: "0 0 10px 20px", lineHeight: 1.75, fontSize: 14 }}>
      {items.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  );
}
function Toc({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav
      aria-label="목차"
      style={{
        border: "1px solid rgba(0,0,0,0.10)",
        borderRadius: 12,
        padding: 14,
        marginTop: 18,
        background: "rgba(0,0,0,0.02)",
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 8 }}>목차</div>
      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`} style={{ textDecoration: "underline" }}>
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function TermsPage() {
  const toc = [
    { id: "t1", label: "제1조(목적)" },
    { id: "t2", label: "제2조(정의)" },
    { id: "t3", label: "제3조(약관의 효력 및 변경)" },
    { id: "t4", label: "제4조(서비스의 제공 및 변경)" },
    { id: "t5", label: "제5조(회원가입)" },
    { id: "t6", label: "제6조(회원정보의 변경)" },
    { id: "t7", label: "제7조(계정 및 비밀번호 관리)" },
    { id: "t8", label: "제8조(이용자의 의무)" },
    { id: "t9", label: "제9조(게시물의 관리)" },
    { id: "t10", label: "제10조(지식재산권)" },
    { id: "t11", label: "제11조(유료 서비스, 회비, 후원/기부 및 환불)" },
    { id: "t12", label: "제12조(서비스 이용제한 및 중단)" },
    { id: "t13", label: "제13조(손해배상)" },
    { id: "t14", label: "제14조(면책)" },
    { id: "t15", label: "제15조(개인정보 보호)" },
    { id: "t16", label: "제16조(준거법 및 관할)" },
    { id: "tinfo", label: "협회 정보" },
  ];

  return (
    <Container>
      <H1>물류테트리스협회 이용약관</H1>
      <Meta>
        시행일자: {EFFECTIVE_DATE} · 버전: {VERSION}
      </Meta>

      <Toc items={toc} />

      <SectionTitle id="t1">제1조(목적)</SectionTitle>
      <P>
        본 약관은 {ORG.name}(이하 “협회”)가 제공하는 웹사이트 및 관련 서비스(회원 서비스, 교육·연구
        콘텐츠, 행사·세미나 신청, 후원/기부, 뉴스레터 등)의 이용 조건과 절차, 협회와 이용자의 권리·의무 및
        책임사항을 규정함을 목적으로 합니다.
      </P>

      <SectionTitle id="t2">제2조(정의)</SectionTitle>
      <P>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</P>
      <Ul
        items={[
          "“서비스”란 협회가 제공하는 온라인/오프라인 교육·연구·행사·자료 제공 및 이에 부수하는 제반 서비스를 말합니다.",
          "“이용자”란 본 약관에 따라 협회가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.",
          "“회원”이란 협회에 개인정보를 제공하여 회원가입을 하고, 협회가 제공하는 서비스를 지속적으로 이용할 수 있는 자를 말합니다.",
          "“콘텐츠”란 협회가 제공하는 문서, 이미지, 영상, 강의자료, 연구자료, 게시물 등 일체의 정보를 말합니다.",
        ]}
      />

      <SectionTitle id="t3">제3조(약관의 효력 및 변경)</SectionTitle>
      <Ul
        items={[
          "본 약관은 서비스 화면에 게시하거나 기타 방법으로 공지함으로써 효력이 발생합니다.",
          "협회는 관련 법령을 위반하지 않는 범위에서 약관을 개정할 수 있습니다.",
          "약관을 개정하는 경우 적용일자 및 개정사유를 명시하여 적용일 7일 전부터 공지하며, 이용자에게 불리한 변경의 경우 적용일 30일 전부터 공지합니다.",
          "이용자가 개정약관 적용일 이후 서비스를 계속 이용하는 경우 개정약관에 동의한 것으로 봅니다.",
        ]}
      />

      <SectionTitle id="t4">제4조(서비스의 제공 및 변경)</SectionTitle>
      <P>협회는 다음 서비스를 제공합니다.</P>
      <Ul
        items={[
          "물류 및 공급망 분야 교육(오프라인/온라인), 세미나·포럼·워크숍",
          "연구자료/보고서/뉴스레터 제공",
          "중소 물류기업 및 청년 인력 역량강화 프로그램 운영",
          "디지털 및 스마트물류 확산을 위한 정보 제공 및 커뮤니티 운영",
          "후원/기부 및 회비 납부(해당 시)",
        ]}
      />
      <P>
        협회는 운영상·기술상 필요에 따라 서비스 내용을 변경할 수 있으며, 변경 시 사전 공지합니다.
      </P>

      <SectionTitle id="t5">제5조(회원가입)</SectionTitle>
      <Ul
        items={[
          "회원가입은 이용자가 약관 및 개인정보처리방침에 동의하고, 협회가 정한 가입 양식을 작성하여 신청하며, 협회가 이를 승낙함으로써 성립합니다.",
          "협회는 다음 각 호에 해당하는 신청에 대해 승낙을 거절하거나 사후에 회원자격을 제한·상실시킬 수 있습니다: (1) 허위 정보 기재 또는 타인 명의 도용 (2) 서비스 운영을 고의로 방해하거나 법령·공서양속을 위반하는 행위 (3) 기타 협회가 합리적 이유로 필요하다고 판단하는 경우",
        ]}
      />

      <SectionTitle id="t6">제6조(회원정보의 변경)</SectionTitle>
      <P>
        회원은 가입 시 기재한 정보가 변경된 경우 즉시 수정해야 하며, 미수정으로 인한 불이익은 회원 본인에게
        있습니다.
      </P>

      <SectionTitle id="t7">제7조(계정 및 비밀번호 관리)</SectionTitle>
      <Ul
        items={[
          "계정 및 비밀번호 관리 책임은 회원에게 있습니다.",
          "도난·유출이 의심되는 경우 회원은 즉시 협회에 통지해야 하며, 협회는 합리적 범위 내에서 보호조치를 취합니다.",
        ]}
      />

      <SectionTitle id="t8">제8조(이용자의 의무)</SectionTitle>
      <P>이용자는 다음 행위를 해서는 안 됩니다.</P>
      <Ul
        items={[
          "법령 또는 본 약관 위반, 공서양속에 반하는 행위",
          "협회 또는 제3자의 지식재산권·명예·프라이버시 침해",
          "서비스 해킹, 악성코드 유포, 비정상 트래픽 발생 등 운영 방해",
          "협회 사전 승인 없는 영리 목적 광고·홍보·모집 행위",
          "유료 서비스(해당 시) 결제의 부정 사용",
        ]}
      />

      <SectionTitle id="t9">제9조(게시물의 관리)</SectionTitle>
      <Ul
        items={[
          "이용자가 서비스 내에 게시한 게시물의 책임은 게시자에게 있습니다.",
          "협회는 게시물이 다음에 해당할 경우 사전 통지 없이 삭제·차단할 수 있습니다: (1) 타인의 권리를 침해하거나 법령 위반 소지가 있는 경우 (2) 음란, 혐오, 차별, 명예훼손, 불법정보 포함 (3) 서비스 운영 목적과 무관한 반복성 광고/스팸",
        ]}
      />

      <SectionTitle id="t10">제10조(지식재산권)</SectionTitle>
      <Ul
        items={[
          "협회가 제공하는 콘텐츠에 대한 저작권 등 지식재산권은 협회 또는 정당한 권리자에게 귀속됩니다.",
          "이용자는 협회 사전 서면 동의 없이 콘텐츠를 복제, 배포, 전송, 2차적 저작물 작성, 상업적 이용할 수 없습니다.",
          "협회가 별도로 공개/공유 가능 범위를 표시한 자료는 해당 조건(라이선스/출처표기 등)에 따릅니다.",
        ]}
      />

      <SectionTitle id="t11">제11조(유료 서비스, 회비, 후원/기부 및 환불)</SectionTitle>
      <Ul
        items={[
          "협회는 일부 서비스에 대해 참가비·수강료·회비를 부과하거나 후원/기부를 받을 수 있습니다(해당 시).",
          "결제 조건(금액, 제공 내용, 제공 시점, 취소·환불 규정 등)은 결제 화면 또는 별도 안내에 따릅니다.",
          "후원/기부는 법령상 또는 결제수단 정책상 환불이 제한될 수 있으며, 협회는 사전에 고지합니다.",
        ]}
      />
      <P>
        온라인 교육/디지털 콘텐츠 제공 형태로 운영되는 경우(해당 시), 청약철회 및 환불 기준은 관련 법령과 공정한
        기준에 따라 별도로 고지된 규정이 우선 적용될 수 있습니다.
      </P>

      <SectionTitle id="t12">제12조(서비스 이용제한 및 중단)</SectionTitle>
      <Ul
        items={[
          "협회는 점검, 장애, 천재지변, 통신사 사정 등 불가피한 경우 서비스 제공을 일시 중단할 수 있습니다.",
          "협회는 이용자가 본 약관을 위반하거나 불법행위가 확인되는 경우 사전 경고 후 이용을 제한할 수 있으며, 긴급한 경우 사후 통지할 수 있습니다.",
        ]}
      />

      <SectionTitle id="t13">제13조(손해배상)</SectionTitle>
      <P>
        협회 또는 이용자가 본 약관을 위반하여 상대방에게 손해를 입힌 경우, 귀책 당사자는 통상손해 범위 내에서
        배상 책임을 집니다.
      </P>

      <SectionTitle id="t14">제14조(면책)</SectionTitle>
      <Ul
        items={[
          "협회는 무료로 제공되는 서비스와 관련하여 법령상 허용되는 범위에서 책임을 제한할 수 있습니다.",
          "협회는 이용자 상호 간 또는 이용자와 제3자 간 분쟁에 개입하지 않으며, 협회 귀책이 없는 한 책임을 지지 않습니다.",
        ]}
      />

      <SectionTitle id="t15">제15조(개인정보 보호)</SectionTitle>
      <P>
        협회는 개인정보를 관련 법령 및 개인정보처리방침에 따라 처리하며, 개인정보처리방침은 본 약관의 일부를
        구성합니다.
      </P>

      <SectionTitle id="t16">제16조(준거법 및 관할)</SectionTitle>
      <Ul
        items={[
          "본 약관은 대한민국 법령에 따라 해석·적용됩니다.",
          "서비스 이용과 관련하여 분쟁이 발생한 경우, 협회 소재지 관할 법원을 전속 관할로 합니다(법령상 달리 정함이 있는 경우 제외).",
        ]}
      />

      <SectionTitle id="tinfo">협회 정보</SectionTitle>
      <Ul
        items={[
          `단체명: ${ORG.name}`,
          `소재지: ${ORG.address}`,
          `대표자: ${ORG.대표자}`,
          `이메일: ${ORG.email}`,
          `연락처: ${ORG.phone}`,
        ]}
      />
    </Container>
  );
}
