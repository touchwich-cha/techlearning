"use client";

import { useState } from "react";
import { contact, type Locale } from "@/app/site-data";

const strings = {
  th: {
    heading: "ฟอร์มขอใบเสนอราคา",
    sub: "กรอกรายละเอียดคร่าว ๆ เราจะติดต่อกลับภายใน 24 ชั่วโมง",
    name: "ชื่อของคุณ *",
    company: "บริษัท / องค์กร",
    email: "อีเมล *",
    phone: "เบอร์โทร",
    interest: "สนใจบริการ",
    interestOptions: ["สื่ออบรม / E-Learning", "ระบบงาน HR", "ทั้งสองอย่าง", "อื่น ๆ"],
    message: "เล่าโจทย์ของคุณ *",
    messagePlaceholder: "เช่น อยากได้สื่ออบรม GMP สำหรับพนักงานใหม่ หรืออยากมีระบบเก็บ KPI แทนไฟล์ Excel",
    submit: "ส่งคำขอใบเสนอราคา",
    sending: "กำลังส่ง...",
    success: "ได้รับคำขอแล้ว ขอบคุณครับ — เราจะตอบกลับภายใน 24 ชั่วโมง",
    mailtoNote: "ระบบกำลังเปิดโปรแกรมอีเมลของคุณพร้อมข้อมูลที่กรอกไว้ — กดส่งในโปรแกรมอีเมลได้เลย",
    error: "ส่งไม่สำเร็จ กรุณาลองอีกครั้ง หรือส่งตรงถึงอีเมล:",
    subject: "ขอใบเสนอราคา",
    bodyLabels: { name: "ชื่อ", company: "บริษัท", email: "อีเมล", phone: "โทร", interest: "สนใจบริการ", message: "รายละเอียด" },
  },
  en: {
    heading: "Request a quote",
    sub: "Share the rough details — we reply within 24 hours.",
    name: "Your name *",
    company: "Company / organization",
    email: "Email *",
    phone: "Phone",
    interest: "Interested in",
    interestOptions: ["Training media / E-Learning", "HR systems", "Both", "Other"],
    message: "Tell us the brief *",
    messagePlaceholder: "e.g. GMP training media for new hires, or a KPI system to replace Excel files",
    submit: "Send quote request",
    sending: "Sending...",
    success: "Request received — we'll reply within 24 hours. Thank you!",
    mailtoNote: "Opening your email client with the details filled in — just press send.",
    error: "Sending failed. Please try again, or email us directly:",
    subject: "Quote request",
    bodyLabels: { name: "Name", company: "Company", email: "Email", phone: "Phone", interest: "Interested in", message: "Brief" },
  },
} as const;

type Status = "idle" | "sending" | "success" | "mailto" | "error";
type FormData_ = { name: string; company: string; email: string; phone: string; interest: string; message: string };

export function QuoteForm({ locale }: { locale: Locale }) {
  const t = strings[locale];
  const [status, setStatus] = useState<Status>("idle");

  function buildMailto(data: FormData_) {
    const subject = `${t.subject} — ${data.interest}`;
    const body = (Object.keys(t.bodyLabels) as (keyof FormData_)[])
      .map((key) => `${t.bodyLabels[key]}: ${data[key]}`)
      .join("\n");
    return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (String(fields.get("website") ?? "").trim()) {
      setStatus("success"); // honeypot tripped — drop silently
      return;
    }
    const data: FormData_ = {
      name: String(fields.get("name") ?? "").trim(),
      company: String(fields.get("company") ?? "").trim(),
      email: String(fields.get("email") ?? "").trim(),
      phone: String(fields.get("phone") ?? "").trim(),
      interest: String(fields.get("interest") ?? ""),
      message: String(fields.get("message") ?? "").trim(),
    };

    const endpoint = process.env.NEXT_PUBLIC_QUOTE_ENDPOINT;
    if (!endpoint) {
      window.location.href = buildMailto(data);
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      // text/plain keeps this a CORS "simple request", so it works against
      // Apps Script web apps and n8n webhooks without server-side CORS setup.
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ ...data, locale, submittedAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="quote-form-heading">
        <h2>{t.heading}</h2>
        <p>{t.sub}</p>
      </div>
      <div className="quote-grid">
        <label>
          <span>{t.name}</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          <span>{t.company}</span>
          <input name="company" autoComplete="organization" />
        </label>
        <label>
          <span>{t.email}</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label>
          <span>{t.phone}</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="full">
          <span>{t.interest}</span>
          <select name="interest" defaultValue={t.interestOptions[0]}>
            {t.interestOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        <label className="full">
          <span>{t.message}</span>
          <textarea name="message" required rows={5} placeholder={t.messagePlaceholder} />
        </label>
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="quote-honeypot" />
      <div className="quote-actions">
        <button className="button" type="submit" disabled={status === "sending"}>
          {status === "sending" ? t.sending : t.submit}
        </button>
        {status === "success" && <p className="quote-status success" role="status">{t.success}</p>}
        {status === "mailto" && <p className="quote-status" role="status">{t.mailtoNote}</p>}
        {status === "error" && (
          <p className="quote-status error" role="alert">
            {t.error} <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        )}
      </div>
    </form>
  );
}
