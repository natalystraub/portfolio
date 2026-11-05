import { useId, useState, type FormEvent } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import type { MockTask } from '../../types/project';
import { INITIAL_TASKS } from './mockups-content';

const ICON_BUTTON =
  'grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-(--line) bg-(--bg) text-(--muted) transition-colors hover:border-(--blue) hover:text-(--ink)';

export function TaskManagerMockup() {
  const { lang } = useLanguage();
  const inputId = useId();
  const errorId = useId();
  const [tasks, setTasks] = useState<MockTask[]>(INITIAL_TASKS);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const [openTaskId, setOpenTaskId] = useState<number | null>(null);
  const isPt = lang === 'pt';
  const completedCount = tasks.filter((task) => task.isCompleted).length;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = title.trim();

    if (!trimmed) {
      setError(true);
      return;
    }

    setTasks((current) => [...current, { id: Date.now(), titlePt: trimmed, titleEn: trimmed, isCompleted: false }]);
    setTitle('');
    setError(false);
  }

  function toggleTask(taskId: number) {
    setTasks((current) =>
      current.map((task) => (task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task)),
    );
  }

  function deleteTask(taskId: number) {
    setTasks((current) => current.filter((task) => task.id !== taskId));
  }

  function toggleDetails(taskId: number) {
    setOpenTaskId((current) => (current === taskId ? null : taskId));
  }

  return (
    <>
      <div className="flex items-center justify-between gap-3">
        <strong className="font-(family-name:--font-display) text-[15px] text-(--ink)">
          {isPt ? 'Gerenciador de Tarefas' : 'Task Manager'}
        </strong>
        <span className="shrink-0 font-(family-name:--font-mono) text-[11.5px] text-(--muted)" aria-live="polite">
          {completedCount}/{tasks.length} {isPt ? 'feitas' : 'done'}
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex gap-2">
        <label htmlFor={inputId} className="sr-only">
          {isPt ? 'Título da tarefa' : 'Task title'}
        </label>
        <input
          id={inputId}
          type="text"
          value={title}
          maxLength={60}
          onChange={(event) => {
            setTitle(event.target.value);
            if (error) setError(false);
          }}
          placeholder={isPt ? 'Nova tarefa…' : 'New task…'}
          aria-invalid={error}
          aria-describedby={error ? errorId : undefined}
          className={`h-10 min-w-0 flex-1 rounded-lg border bg-(--bg) px-3 text-[13.5px] text-(--ink) placeholder:text-(--muted) focus:border-(--blue) focus:outline-none ${
            error ? 'border-[#e5484d]' : 'border-(--line)'
          }`}
        />
        <button
          type="submit"
          className="h-10 shrink-0 rounded-lg border border-(--blue) bg-(--blue) px-3.5 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          {isPt ? 'Adicionar' : 'Add'}
        </button>
      </form>
      {error && (
        <p id={errorId} role="alert" className="m-0 -mt-1 text-[12px] text-[#ff8a8d]">
          {isPt ? 'Digite um título para a tarefa.' : 'Type a title for the task.'}
        </p>
      )}

      <ul className="m-0 flex max-h-[184px] list-none flex-col gap-2 overflow-y-auto p-0 pr-0.5">
        {tasks.length === 0 && (
          <li className="rounded-lg border border-dashed border-(--line) px-3 py-4 text-center text-[13px] text-(--muted)">
            {isPt ? 'Nenhuma tarefa por aqui. Que tal criar uma?' : 'No tasks yet. How about adding one?'}
          </li>
        )}
        {tasks.map((task) => {
          const taskTitle = isPt ? task.titlePt : task.titleEn;
          const description = isPt ? task.descriptionPt : task.descriptionEn;
          const isOpen = openTaskId === task.id;

          return (
            <li key={task.id} className="rounded-lg border border-(--line) bg-(--bg-2)">
              <div className="flex items-center gap-1.5 p-1.5">
                <button
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  aria-pressed={task.isCompleted}
                  className="flex h-10 min-w-0 flex-1 items-center gap-2.5 rounded-md px-2 text-left"
                >
                  <span
                    aria-hidden="true"
                    className={`grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full border transition-colors ${
                      task.isCompleted ? 'border-(--blue) bg-(--blue)' : 'border-(--muted)'
                    }`}
                  >
                    {task.isCompleted && (
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="white" strokeWidth="3.5">
                        <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span
                    className={`truncate text-[13.5px] transition-colors ${
                      task.isCompleted ? 'text-(--muted) line-through' : 'text-(--ink)'
                    }`}
                  >
                    {taskTitle}
                  </span>
                </button>
                {description && (
                  <button
                    type="button"
                    onClick={() => toggleDetails(task.id)}
                    aria-expanded={isOpen}
                    aria-label={isPt ? `Detalhes de ${taskTitle}` : `Details for ${taskTitle}`}
                    className={ICON_BUTTON}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      aria-hidden="true"
                    >
                      <path d="M6 17l5-5-5-5M13 17l5-5-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => deleteTask(task.id)}
                  aria-label={isPt ? `Excluir ${taskTitle}` : `Delete ${taskTitle}`}
                  className={`${ICON_BUTTON} hover:text-[#ff8a8d]`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 002 2h6a2 2 0 002-2l1-12M9 7V4h6v3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {isOpen && description && (
                <p className="m-0 border-t border-(--line) px-3.5 py-2.5 text-[12.5px] text-(--muted)">{description}</p>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
