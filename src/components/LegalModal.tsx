// components/LegalModal.tsx
"use client";

import React, { useEffect, useRef } from "react";

export type LegalDocSection = {
  id: string;
  title: string;
  body: string[];
  bullets?: string[];
};

export type LegalDoc = {
  title: string;
  meta: string; // "시행일자: ... · 버전: ..."
  intro?: string[];
  sections: LegalDocSection[];
};

type Props = {
  open: boolean;
  onClose: () => void;
  doc: LegalDoc;
};

export default function LegalModal({ open, onClose, doc }: Props) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  // ESC 닫기
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // 바디 스크롤 잠금
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // 열릴 때 상단으로
  useEffect(() => {
    if (!open) return;
    requestAnimationFrame(() => contentRef.current?.scrollTo({ top: 0, behavior: "auto" }));
  }, [open, doc.title]);

  if (!open) return null;

  return (
    <div
      role="presentation"
      onMouseDown={(e) => {
        // 오버레이 클릭 시 닫기(모달 외부)
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.70)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={doc.title}
        style={{
          width: "min(980px, 100%)",
          height: "min(78vh, 860px)",
          background: "#fff",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.30)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "14px 16px",
            borderBottom: "1px solid rgba(0,0,0,0.10)",
            display: "flex",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 16, fontWeight: 800 }}>{doc.title}</div>
            <div style={{ fontSize: 12, color: "rgba(0,0,0,0.65)" }}>{doc.meta}</div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              border: "1px solid rgba(0,0,0,0.12)",
              background: "#fff",
              borderRadius: 10,
              padding: "8px 10px",
              cursor: "pointer",
              fontWeight: 800,
            }}
            aria-label="닫기"
          >
            닫기
          </button>
        </div>

        {/* Body */}
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", flex: 1, minHeight: 0 }}>
          {/* TOC */}
          <aside
            style={{
              borderRight: "1px solid rgba(0,0,0,0.10)",
              padding: 14,
              overflow: "auto",
              background: "rgba(0,0,0,0.02)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 900, marginBottom: 10, color: "rgba(0,0,0,0.70)" }}>
              목차
            </div>

            <ul style={{ margin: 0, paddingLeft: 16, lineHeight: 1.8, fontSize: 13 }}>
              {doc.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const container = contentRef.current;
                      if (!container) return;
                      const target = container.querySelector<HTMLElement>(`[data-sec="${s.id}"]`);
                      if (!target) return;

                      const cTop = container.getBoundingClientRect().top;
                      const tTop = target.getBoundingClientRect().top;
                      const delta = tTop - cTop;

                      container.scrollTo({ top: container.scrollTop + delta - 8, behavior: "smooth" });
                    }}
                    style={{ textDecoration: "underline", color: "rgba(0,0,0,0.75)" }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <main ref={contentRef} style={{ padding: 16, overflow: "auto" }}>
            {doc.intro?.length ? (
              <div style={{ marginBottom: 16 }}>
                {doc.intro.map((x, i) => (
                  <p key={i} style={{ margin: "0 0 10px 0", fontSize: 13, lineHeight: 1.75, color: "rgba(0,0,0,0.80)" }}>
                    {x}
                  </p>
                ))}
              </div>
            ) : null}

            {doc.sections.map((s) => (
              <section key={s.id} data-sec={s.id} style={{ marginBottom: 18 }}>
                <h2 style={{ margin: "0 0 8px 0", fontSize: 15, fontWeight: 900 }} id={s.id}>
                  {s.title}
                </h2>

                {s.body.map((p, i) => (
                  <p key={i} style={{ margin: "0 0 8px 0", fontSize: 13, lineHeight: 1.75, color: "rgba(0,0,0,0.85)" }}>
                    {p}
                  </p>
                ))}

                {s.bullets?.length ? (
                  <ul style={{ margin: "8px 0 0 18px", padding: 0, fontSize: 13, lineHeight: 1.7, color: "rgba(0,0,0,0.85)" }}>
                    {s.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
