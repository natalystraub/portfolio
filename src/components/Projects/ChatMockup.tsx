import { useState } from 'react';
import type { FormEvent } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { MockMessage } from '../../types/project';
import { INITIAL_MESSAGES } from './mockups-content';

export function ChatMockup() {
  const { lang } = useLanguage();
  const [messages, setMessages] = useState<MockMessage[]>(INITIAL_MESSAGES);
  const [sender, setSender] = useState<MockMessage['sender']>('user');
  const [text, setText] = useState('');
  const isPt = lang === 'pt';
  const isBot = sender === 'bot';

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const value = text.trim();
    if (!value) return;

    setMessages((current) => [...current, { id: Date.now(), sender, textPt: value, textEn: value }]);
    setText('');
  }

  return (
    <div className="grid gap-3">
      <ul className="m-0 flex max-h-[220px] list-none flex-col gap-2 overflow-y-auto p-0 pr-0.5">
        {messages.map((message) => (
          <li key={message.id} className={`flex ${message.sender === 'bot' ? 'justify-start' : 'justify-end'}`}>
            <span
              className={`max-w-[80%] break-words rounded-2xl px-3.5 py-2 text-[13px] ${
                message.sender === 'bot' ? 'bg-(--violet)/20 text-(--ink)' : 'bg-(--blue) text-white'
              }`}
            >
              {isPt ? message.textPt : message.textEn}
            </span>
          </li>
        ))}
      </ul>

      <form
        onSubmit={handleSubmit}
        className={`flex items-center gap-2 rounded-xl border bg-(--bg-2) p-2 ${
          isBot ? 'border-(--violet)' : 'border-(--line)'
        }`}
      >
        <button
          type="button"
          onClick={() => setSender(isBot ? 'user' : 'bot')}
          aria-pressed={isBot}
          className="h-9 shrink-0 rounded-lg border border-(--line) px-3 text-[12px] font-semibold text-(--ink) transition-colors hover:border-(--blue)"
        >
          {isBot ? (isPt ? 'Robô' : 'Bot') : isPt ? 'Usuário' : 'User'}
        </button>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          aria-label={isPt ? 'Mensagem' : 'Message'}
          placeholder={isPt ? 'Digite uma mensagem…' : 'Type a message…'}
          className="h-9 min-w-0 flex-1 bg-transparent text-[13px] text-(--ink) outline-none placeholder:text-(--muted)"
        />
        <button
          type="submit"
          className="h-9 shrink-0 rounded-lg bg-(--ink) px-3 text-[12px] font-semibold text-(--bg)"
        >
          {isPt ? 'Enviar' : 'Send'}
        </button>
      </form>
    </div>
  );
}
