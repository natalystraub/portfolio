import { useLanguage } from '../../hooks/useLanguage';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { Button } from '../../ui/Button';
import { Toast } from '../../ui/Toast';
import { CONTACT_EMAIL, CONTACT_HEADING, CONTACT_LINKS } from './contact-content';

export function Contact() {
  const { lang } = useLanguage();
  const { copied, copy } = useCopyToClipboard();
  const isPt = lang === 'pt';

  return (
    <section id="contato" className="px-5 pt-16 pb-[90px] text-center lg:pt-[88px]">
      <div className="mx-auto max-w-[1160px]">
        <h2 className="m-0 mb-[30px] font-(family-name:--font-display) text-[clamp(30px,5.6vw,72px)] leading-[1.05] font-bold tracking-[-0.03em]">
          <span className="text-transparent [-webkit-text-stroke:1.2px_var(--ink)]">
            {isPt ? CONTACT_HEADING.outlinePt : CONTACT_HEADING.outlineEn}
          </span>
          <br />
          <span className="text-(--ink)">{isPt ? CONTACT_HEADING.filledPt : CONTACT_HEADING.filledEn}</span>
        </h2>
        <div className="mb-[34px] flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${CONTACT_EMAIL}`} variant="primary">
            {CONTACT_EMAIL}
          </Button>
          <Button variant="secondary" onClick={() => copy(CONTACT_EMAIL)}>
            {isPt ? 'Copiar e-mail' : 'Copy email'}
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {CONTACT_LINKS.map((link) => (
            <Button key={link.labelPt} href={link.href} download={link.download} variant="secondary">
              {isPt ? link.labelPt : link.labelEn}
            </Button>
          ))}
        </div>
      </div>
      <Toast message={isPt ? 'E-mail copiado' : 'Email copied'} visible={copied} />
    </section>
  );
}
