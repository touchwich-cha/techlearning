"use client";

import { useRef, useEffect } from "react";
import { copy, type Locale } from "@/app/site-data";
import { PageIntro } from "@/components/shared/PageIntro";
import { CallToAction } from "@/components/shared/CallToAction";

const serviceIcons = [
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z",
  "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
];

export function ServicesPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const sectionRef = useRef<HTMLElement>(null);

  const extra = locale === "th"
    ? [
        ["05", "Corporate", "Presentation และ Company Profile ที่ดูเป็นมืออาชีพและสะท้อนภาพลักษณ์องค์กร"],
        ["06", "Onboarding", "สื่อปฐมนิเทศที่สื่อสารวัฒนธรรม กฎ และสิ่งที่พนักงานต้องรู้"],
      ]
    : [
        ["05", "Corporate", "Strategic presentations and company profiles that reflect your organization."],
        ["06", "Onboarding", "Warm, clear orientation media for culture, rules, and essential knowledge."],
      ];

  const allServices = [...t.serviceItems, ...extra];

  return (
    <main>
      <PageIntro
        eyebrow="Capabilities"
        title={locale === "th" ? "บริการออกแบบสื่อการเรียนรู้" : "Learning media services"}
        body={locale === "th"
          ? "เปลี่ยนข้อมูลที่ซับซ้อนให้เป็นประสบการณ์เรียนรู้ที่เข้าใจง่ายและน่าจดจำ"
          : "Turn complex information into clear, memorable learning experiences."}
      />
      <section className="service-page section-pad" ref={sectionRef}>
        {allServices.map(([number, title, description], i) => (
          <article key={number} className="service-card" style={{ "--card-delay": `${i * 0.1}s` } as React.CSSProperties}>
            <div className="service-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={serviceIcons[i % serviceIcons.length]} />
              </svg>
            </div>
            <span className="service-tag">{number}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="service-card-glow" />
          </article>
        ))}
      </section>
      <CallToAction locale={locale} />
    </main>
  );
}