import { useEffect } from "react";
import Zigbot from "../components/Zigbot";
import { brand, faq } from "../lib/copy";

const base = import.meta.env.BASE_URL;

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="faq-page"
      style={
        {
          "--faq-mark": `url('${base}zigbert-mark.png')`,
          "--zigbot-avatar": `url('${base}zigbot.png')`,
        } as React.CSSProperties
      }
    >
      <main className="faq-wrap">
        <div className="faq-head">
          <h1>
            {faq.titleLead} <span className="accent-text">{faq.titleAccent}</span>
          </h1>
          <p>{faq.lede}</p>
        </div>

        {/* Flat list, no category sections. Click a question to drop its answer down. */}
        <div className="faq-list">
          {faq.items.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>

        <p className="faq-foot">
          {faq.footLead} <a href={`mailto:${brand.email}`}>{brand.email}</a>.
        </p>
      </main>

      <Zigbot />
    </div>
  );
}
