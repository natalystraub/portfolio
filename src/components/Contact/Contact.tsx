import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { Button } from '../../ui/Button';
import { Toast } from '../../ui/Toast';
import { CONTACT_EMAIL, CONTACT_HEADING, CONTACT_LINKS } from './contact-content';

export function Contact() {
  const { copied, copy } = useCopyToClipboard();

  return (
    <section id="contato" className="px-5 pt-16 pb-[90px] text-center lg:pt-[88px]">
      <div className="mx-auto max-w-[1160px]">
        <h2 className="m-0 mb-[30px] font-(family-name:--font-display) text-[clamp(30px,5.6vw,72px)] leading-[1.05] font-bold tracking-[-0.03em]">
          <span className="text-transparent [-webkit-text-stroke:1.2px_var(--ink)]">{CONTACT_HEADING.outline}</span>
          <br />
          <span className="text-(--ink)">{CONTACT_HEADING.filled}</span>
        </h2>
        <div className="mb-[34px] flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${CONTACT_EMAIL}`} variant="primary">
            {CONTACT_EMAIL}
          </Button>
          <Button variant="secondary" onClick={() => copy(CONTACT_EMAIL)}>
            Copiar e-mail
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CONTACT_LINKS.map((link) => (
            <Button key={link.label} href={link.href} download={link.download} variant="secondary">
              {link.label}
            </Button>
          ))}
        </div>
      </div>
      <Toast message="E-mail copiado" visible={copied} />
    </section>
  );
}
