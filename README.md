# Portfólio · Nátaly Straub

> Site pessoal da **Nátaly Straub**, desenvolvedora de software e estudante de Engenharia de Software.
> Uma página só, em português e inglês, que reúne projetos, experiência, tecnologias, formação e contato.

<p>
  <img alt="React 19" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
</p>

---

## 📚 Sumário

1. [Rodando em 1 minuto](#-rodando-em-1-minuto)
2. [Como a página é montada](#-como-a-página-é-montada)
3. [A regra de ouro: texto fica separado do código](#-a-regra-de-ouro-texto-fica-separado-do-código)
4. [Guias passo a passo](#-guias-passo-a-passo)
   - [Mudar um texto](#mudar-um-texto)
   - [Adicionar uma experiência](#adicionar-uma-experiência)
   - [Adicionar um projeto](#adicionar-um-projeto)
   - [Adicionar uma tecnologia](#adicionar-uma-tecnologia)
   - [Trocar o currículo em PDF](#trocar-o-currículo-em-pdf)
   - [Mudar as cores](#mudar-as-cores)
5. [Como o PT/EN funciona](#-como-o-pten-funciona)
6. [Os efeitos visuais e onde eles moram](#-os-efeitos-visuais-e-onde-eles-moram)
7. [Mapa das pastas](#-mapa-das-pastas)
8. [Comandos](#-comandos)
9. [Publicando o site](#-publicando-o-site)
10. [Problemas comuns](#-problemas-comuns)
11. [Contato](#-contato)

---

## 🚀 Rodando em 1 minuto

Você só precisa ter o **[Node.js](https://nodejs.org/)** instalado (versão 20 ou mais nova). Para conferir, rode `node -v` no terminal.

```bash
# 1. Baixe o projeto
git clone git@github.com:natalystraub/portfolio.git

# 2. Entre na pasta
cd portfolio

# 3. Instale as dependências (só precisa fazer uma vez)
npm install

# 4. Ligue o site
npm run dev
```

Pronto! Abra **http://localhost:5173** no navegador.

Enquanto o `npm run dev` estiver rodando, **qualquer arquivo que você salvar aparece na hora no navegador**, sem precisar recarregar. Para desligar, aperte `Ctrl + C` no terminal.

---

## 🧩 Como a página é montada

O site é uma página só, dividida em seções que aparecem uma embaixo da outra. A ordem é definida em [`src/pages/Home.tsx`](src/pages/Home.tsx):

```
┌──────────────────────────────────────────┐
│  Header        menu + botão PT / EN       │  ← fica fixo no topo
├──────────────────────────────────────────┤
│  Hero          nome, cargo e botões       │
│  TechMarquee   faixa de tecnologias       │
│  Projects      projetos com mockup        │
│  Experience    linha do tempo             │
│  TechStack     grade de tecnologias       │
│  Education     faculdade e idiomas        │
│  About         sobre mim                  │
│  Contact       e-mail, redes e currículo  │
└──────────────────────────────────────────┘
```

Cada seção é um componente React com a sua própria pasta dentro de [`src/components/`](src/components/). Para mudar a ordem das seções, basta mudar a ordem das linhas em `Home.tsx`.

---

## ⭐ A regra de ouro: texto fica separado do código

Todo o texto que aparece no site fica em arquivos terminados em **`-content.ts`**. Os componentes (`.tsx`) só cuidam da aparência.

Na prática, isso quer dizer que **para mudar o conteúdo você quase nunca precisa mexer em HTML, CSS ou React**. É só editar uma lista de dados.

Cada pasta de seção segue o mesmo padrão:

```
Experience/
├── Experience.tsx           ← a aparência da seção
├── TimelineEntry.tsx        ← um pedaço menor da seção (um card)
└── experience-content.ts    ← o TEXTO da seção  ✏️ é aqui que você edita
```

### Onde está cada texto

| Quero mudar…                         | Arquivo                                                                                                    |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Nome, cargo e botões do topo         | [`Hero/hero-content.ts`](src/components/Hero/hero-content.ts)                                               |
| Faixa de tecnologias que desliza     | [`TechMarquee/tech-marquee-content.ts`](src/components/TechMarquee/tech-marquee-content.ts)                 |
| Projetos                             | [`Projects/projects-content.ts`](src/components/Projects/projects-content.ts)                               |
| Dados de exemplo dentro dos mockups  | [`Projects/mockups-content.ts`](src/components/Projects/mockups-content.ts)                                 |
| Experiência                          | [`Experience/experience-content.ts`](src/components/Experience/experience-content.ts)                       |
| Grade de tecnologias                 | [`TechStack/tech-stack-content.ts`](src/components/TechStack/tech-stack-content.ts)                         |
| Faculdade e idiomas                  | [`Education/education-content.ts`](src/components/Education/education-content.ts)                           |
| Sobre mim                            | [`About/about-content.ts`](src/components/About/about-content.ts)                                           |
| E-mail, LinkedIn, GitHub             | [`Contact/contact-content.ts`](src/components/Contact/contact-content.ts)                                   |
| Links do menu                        | [`Header/nav-links.ts`](src/components/Header/nav-links.ts)                                                 |

> Todos os caminhos acima começam em `src/components/`.

---

## 🛠️ Guias passo a passo

### Mudar um texto

1. Abra o arquivo da seção na tabela acima.
2. Procure o texto que você quer mudar.
3. Troque a versão em português (campo que termina em **`Pt`**) **e** a versão em inglês (campo que termina em **`En`**).
4. Salve. O navegador atualiza sozinho.

```ts
titlePt: 'Desenvolvedora de software',   // aparece quando o site está em PT
titleEn: 'Software developer',           // aparece quando o site está em EN
```

> 💡 Sempre preencha os dois idiomas. Se esquecer um, quem trocar o idioma vai ver o texto vazio ou antigo.

---

### Adicionar uma experiência

Abra [`experience-content.ts`](src/components/Experience/experience-content.ts). Ele é uma lista (`[ ... ]`), e cada item entre `{ }` é um card da linha do tempo.

Copie um item existente, cole logo abaixo (não esqueça a vírgula entre eles) e edite:

```ts
export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'freelance',
    // ...experiência que já existe
  },
  {
    id: 'empresa-x',                                    // nome interno, sem espaços. Não aparece no site
    periodPt: 'Jan 2027 – atual',                       // período em PT
    periodEn: 'Jan 2027 – present',                     // período em EN
    titlePt: 'Desenvolvedora de software · Empresa X',  // cargo e empresa em PT
    titleEn: 'Software developer · Company X',          // cargo e empresa em EN
    descriptionPt: 'O que você fez, em uma ou duas frases.',
    descriptionEn: 'What you did, in one or two sentences.',
    tagPt: 'Trabalho',                                  // etiqueta pequena embaixo do card
    tagEn: 'Work',
  },
];
```

Os cards aparecem **na ordem da lista**, de cima para baixo. No computador eles se alternam automaticamente entre o lado esquerdo e o direito da linha do tempo.

---

### Adicionar um projeto

Abra [`projects-content.ts`](src/components/Projects/projects-content.ts). Cada projeto tem estes campos:

| Campo                          | O que é                                                         | Exemplo                                      |
| ------------------------------ | --------------------------------------------------------------- | -------------------------------------------- |
| `id`                           | Nome interno, sem espaços                                       | `'meu-projeto'`                              |
| `tagPt` / `tagEn`              | Etiqueta no topo do card                                        | `'React'`                                    |
| `yearPt` / `yearEn`            | Ano do projeto                                                  | `'2026'`                                     |
| `titlePt` / `titleEn`          | Nome do projeto                                                 | `'Gerenciador de Tarefas'`                   |
| `descriptionPt` / `descriptionEn` | Um parágrafo explicando o projeto                            | `'Aplicação para…'`                          |
| `highlightsPt` / `highlightsEn`   | Lista de pontos técnicos em destaque                         | `['Rotas com React Router', '…']`            |
| `stack`                        | Tecnologias usadas (aparecem como etiquetas)                    | `['React', 'Vite']`                          |
| `links`                        | Botões de demo e código                                         | veja o exemplo abaixo                        |
| `mockup`                       | Qual ilustração aparece ao lado: `'tasks'` ou `'stream'`        | `'tasks'`                                    |
| `url`                          | Texto que aparece na barra de endereço do mockup                | `'natalystraub/meu-projeto'`                 |
| `reversed`                     | *(opcional)* `true` coloca a imagem à esquerda e o texto à direita | `true`                                    |

Exemplo de `links`:

```ts
links: [
  { labelPt: 'Ver demo',   labelEn: 'Live demo',   href: 'https://meu-projeto.vercel.app/' },
  { labelPt: 'Ver código', labelEn: 'Source code', href: 'https://github.com/natalystraub/meu-projeto' },
],
```

> 💡 **Dica de layout:** alterne `reversed: true` em um projeto sim, um não. Assim a imagem muda de lado e a seção fica mais dinâmica.

> ⚠️ **Sobre o mockup:** hoje só existem duas ilustrações prontas (`tasks` e `stream`), desenhadas em código em `TaskManagerMockup.tsx` e `StreamFilterMockup.tsx`. Um projeto novo pode reaproveitar uma delas. Para ter uma ilustração própria, é preciso criar um novo componente de mockup e registrá-lo em `ProjectCard.tsx` e no tipo `ProjectMockup` em `src/types/project.ts`.

---

### Adicionar uma tecnologia

Existem **dois lugares** com tecnologias:

- **Faixa que desliza** logo abaixo do topo: [`tech-marquee-content.ts`](src/components/TechMarquee/tech-marquee-content.ts). É só uma lista de nomes, basta adicionar mais um:

  ```ts
  export const TECHNOLOGIES = ['JavaScript', 'TypeScript', 'React', /* ... */ 'Docker'];
  ```

- **Grade da seção Stack**: [`tech-stack-content.ts`](src/components/TechStack/tech-stack-content.ts). Cada item tem uma categoria e um nome:

  ```ts
  {
    id: 'docker',
    categoryPt: 'Ferramentas e Fundamentos',   // use a mesma categoria de outros itens para agrupar
    categoryEn: 'Tools & Fundamentals',
    titlePt: 'Docker',
    titleEn: 'Docker',
  },
  ```

---

### Trocar o currículo em PDF

1. Gere o novo PDF.
2. Renomeie para **`nataly-straub-curriculo.pdf`**.
3. Coloque dentro da pasta [`public/`](public/), substituindo o arquivo antigo.

Os botões **"Baixar currículo"** (no topo) e **"Currículo (PDF)"** (no contato) já apontam para esse arquivo, então não precisa mexer em mais nada.

---

### Mudar as cores

Todas as cores do site ficam no começo de [`src/index.css`](src/index.css), dentro de `:root`. Trocar um valor ali muda a cor no site inteiro.

| Variável               | Onde aparece                                     | Cor atual  |
| ---------------------- | ------------------------------------------------ | ---------- |
| `--bg`                 | Fundo da página                                  | `#060a18`  |
| `--card`               | Fundo dos cards (semitransparente)               | azul escuro |
| `--ink`                | Texto principal                                  | `#eef2ff`  |
| `--muted`              | Texto secundário, datas, descrições              | `#9aa7c7`  |
| `--line`               | Bordas e linha do tempo                          | azul claro translúcido |
| `--blue`               | Cor principal de destaque                        | `#4d6bff`  |
| `--violet`             | Segunda cor dos gradientes                       | `#8b6cff`  |
| `--ice`                | Etiquetas                                        | `#b7cbff`  |
| `--glow`               | Brilho do hover e do foco                        | azul translúcido |

Nos componentes, essas variáveis são usadas pelas classes do Tailwind, por exemplo `text-(--ink)` ou `border-(--line)`.

As fontes também ficam ali: **Sora** (títulos), **Manrope** (texto) e **JetBrains Mono** (detalhes em estilo código).

---

## 🌐 Como o PT/EN funciona

O botão **PT / EN** no topo troca o idioma do site inteiro na hora, sem recarregar.

Funciona assim:

```
LanguageProvider  ──guarda──▶  idioma atual ('pt' ou 'en')
       │
       ▼
qualquer componente chama useLanguage()
       │
       ▼
mostra o campo ...Pt ou ...En do arquivo de conteúdo
```

- O idioma é guardado em [`src/contexts/LanguageContext.tsx`](src/contexts/LanguageContext.tsx) e começa em **português**.
- Os componentes leem o idioma com o hook [`useLanguage()`](src/hooks/useLanguage.ts):

```tsx
const { lang } = useLanguage();
const isPt = lang === 'pt';

return <h4>{isPt ? entry.titlePt : entry.titleEn}</h4>;
```

---

## ✨ Os efeitos visuais e onde eles moram

Cada efeito é um **hook** reutilizável em [`src/hooks/`](src/hooks/). Se quiser ajustar algum, é lá que você mexe.

| Efeito                                                         | Hook                                                         |
| -------------------------------------------------------------- | ------------------------------------------------------------ |
| Cargo do topo sendo "digitado" e apagado em loop               | [`useTypewriter`](src/hooks/useTypewriter.ts)                |
| Menu destaca a seção que está na tela                          | [`useActiveSection`](src/hooks/useActiveSection.ts)          |
| Linha da experiência se preenche conforme você rola            | [`useScrollTimeline`](src/hooks/useScrollTimeline.ts)        |
| Brilho que segue o mouse em cima dos cards                     | [`useSpotlight`](src/hooks/useSpotlight.ts)                  |
| Botão de copiar e-mail com aviso "copiado"                     | [`useCopyToClipboard`](src/hooks/useCopyToClipboard.ts)      |

Peças visuais genéricas, usadas em várias seções, ficam em [`src/ui/`](src/ui/):

- **`Aurora`**: o brilho azul e violeta fixo no fundo
- **`BrowserWindow`**: a "janela de navegador" em volta dos mockups dos projetos
- **`Button`**: os botões do site
- **`Toast`**: o aviso que aparece ao copiar o e-mail

---

## 🗂️ Mapa das pastas

```
portfolio/
├── public/                         arquivos servidos como estão
│   ├── favicon.svg                 ícone da aba do navegador
│   └── nataly-straub-curriculo.pdf currículo para download
│
├── src/
│   ├── components/                 uma pasta por seção do site
│   ├── contexts/                   idioma (PT/EN)
│   ├── hooks/                      efeitos e comportamentos reutilizáveis
│   ├── pages/Home.tsx              junta as seções na ordem da página
│   ├── types/                      "formato" esperado de cada conteúdo
│   ├── ui/                         peças visuais genéricas
│   ├── index.css                   cores, fontes e estilos globais
│   ├── App.tsx                     componente raiz
│   └── main.tsx                    ponto de entrada do React
│
├── index.html                      HTML base (título da aba)
└── vite.config.ts                  configuração do Vite, Tailwind e React Compiler
```

> **E a pasta `types/`?** Ela descreve quais campos cada conteúdo precisa ter. Se você esquecer um campo obrigatório (por exemplo, `titleEn`), o editor sublinha o erro em vermelho antes mesmo de você abrir o site.

---

## ⌨️ Comandos

| Comando           | Quando usar                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| `npm install`     | Na primeira vez, ou depois de baixar mudanças que alteram dependências       |
| `npm run dev`     | Para trabalhar no site com atualização automática                            |
| `npm run build`   | Para gerar a versão final. Também confere erros de tipo. Resultado em `dist/` |
| `npm run preview` | Para ver a versão final (`dist/`) rodando localmente antes de publicar       |
| `npm run lint`    | Para procurar problemas e más práticas no código                             |

---

## 📦 Publicando o site

O resultado do `npm run build` é um site estático (só HTML, CSS e JS), então ele pode ser publicado em qualquer hospedagem gratuita, como **Vercel**, **Netlify** ou **GitHub Pages**.

Exemplo com a **Vercel**:

1. Entre em [vercel.com](https://vercel.com/) com a conta do GitHub.
2. Clique em **Add New → Project** e escolha o repositório `portfolio`.
3. A Vercel reconhece o Vite sozinha. Confirme:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Clique em **Deploy**.

Depois disso, todo `git push` na branch `main` publica uma nova versão automaticamente.

---

## 🩺 Problemas comuns

<details>
<summary><b><code>npm: command not found</code></b></summary>

O Node.js não está instalado ou o terminal não o encontra. Instale pelo [site oficial](https://nodejs.org/) e abra um terminal novo.
</details>

<details>
<summary><b>A porta 5173 já está em uso</b></summary>

Outro projeto já está usando essa porta. O Vite vai sugerir outra (por exemplo, `5174`). É só abrir o endereço que aparecer no terminal.
</details>

<details>
<summary><b>Mudei um texto, mas só aparece em um idioma</b></summary>

Confira se você editou os dois campos: o que termina em `Pt` e o que termina em `En`.
</details>

<details>
<summary><b>O <code>npm run build</code> deu erro de tipo</b></summary>

Provavelmente falta um campo obrigatório ou há um erro de digitação em algum arquivo `-content.ts`. A mensagem de erro mostra o arquivo e a linha. Compare com um item que já funciona.
</details>

<details>
<summary><b>O site quebrou depois de adicionar um item</b></summary>

Quase sempre é uma vírgula faltando entre os itens `{ }` da lista, ou uma aspa que não foi fechada. O editor costuma sublinhar o lugar exato.
</details>

---

## 💬 Contato

- **E-mail:** naty.ramos636@gmail.com
- **LinkedIn:** [linkedin.com/in/nataly-straub](https://www.linkedin.com/in/nataly-straub)
- **GitHub:** [github.com/natalystraub](https://github.com/natalystraub)
