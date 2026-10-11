export type Lang = 'en' | 'pt';

type Project = {
  id: string;
  name: string;
  url?: string;
  urlLabel?: string;
  logo: string;
  logoInvert?: boolean;
  role: string;
  tagline: string;
  description: string;
  built: string[];
  stack: string[];
};

export type Content = {
  htmlLang: string;
  meta: { title: string; description: string };
  nav: { experience: string; work: string; stack: string; contact: string };
  hero: {
    role: string;
    tagline: string;
    location: string;
    availability: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  experience: { label: string; items: { period: string; role: string; company: string }[] };
  work: { label: string; builtLabel: string; stackLabel: string; projects: Project[] };
  stack: { label: string; groups: { name: string; items: string[] }[] };
  contact: { label: string; headline: string; text: string; email: string; whatsapp: string; linkedin: string };
  footer: { builtWith: string };
};

const stackPipevoz = ['Python', 'Django', 'GraphQL', 'Celery', 'Channels', 'LiveKit', 'Asterisk', 'TypeScript', 'React', 'Astro', 'PostgreSQL', 'Redis', 'Google Cloud'];
const stackXn = ['Python', 'Django', 'GraphQL', 'Celery', 'TypeScript', 'React', 'Apollo', 'Tailwind', 'Astro', 'PostgreSQL', 'Redis', 'Stripe', 'Cloud Run'];
const stackOrkable = ['TypeScript', 'Node.js', 'Express', 'Drizzle', 'PostgreSQL', 'React', 'TanStack Query', 'Tailwind', 'WebSockets', 'Rust', 'Docker', 'Vitest'];

export const content: Record<Lang, Content> = {
  en: {
    htmlLang: 'en',
    meta: {
      title: 'Eric Alexandre — Software Engineer',
      description: 'Eric Alexandre is a software engineer and tech founder from Brazil, with a background in operations and sales.',
    },
    nav: { experience: 'Experience', work: 'Projects', stack: 'Stack', contact: 'Contact' },
    hero: {
      role: 'Software Engineer',
      tagline: 'Tech founder with a background in operations and sales. Building businesses from idea to production.',
      location: 'Brazil · Remote',
      availability: 'Open to international roles',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'See projects',
    },
    experience: {
      label: 'Experience',
      items: [
        { period: 'Mar 2026 — Oct 2026', role: 'Tech Founder', company: 'Pipevoz' },
        { period: 'Jul 2025 — Mar 2026', role: 'Tech Founder', company: 'x-n.dev' },
        { period: 'Apr 2024 — Jan 2026', role: 'Co-founder & Full Stack Developer', company: 'Vozis' },
        { period: 'Jan 2023 — Jun 2025', role: 'Operations Manager', company: 'Contabull' },
        { period: 'Oct 2021 — Aug 2022', role: 'Systems Manager', company: 'Brasil Vantagens' },
        { period: 'Aug 2021 — Dec 2021', role: 'SDR', company: 'Brasil Vantagens' },
      ],
    },
    work: {
      label: 'Projects',
      builtLabel: 'Highlights',
      stackLabel: 'Stack',
      projects: [
        {
          id: 'pipevoz',
          name: 'Pipevoz',
          url: 'https://www.pipevoz.com',
          urlLabel: 'pipevoz.com',
          logo: '/logos/pipevoz.svg',
          role: 'Tech Founder',
          tagline: 'AI voice agents that answer and make calls for businesses.',
          description:
            'Companies use Pipevoz to set up voice agents that answer their phone lines, run outbound call campaigns and talk to visitors on their websites. The platform covers the whole flow: the live conversation, the CRM where teams follow up on each lead, and billing. We ran and validated a pilot with a major bank in Brasília.',
          built: [
            'Real-time voice pipeline (speech-to-text → LLM → text-to-speech) with LiveKit, connected to SIP telephony and Asterisk',
            'Outbound dialer with queues, concurrent calls, retry rules and scheduling on Celery workers',
            'Embeddable web SDK for talking to an agent directly in the browser',
            'Kanban CRM with live updates over WebSockets, plus post-call automations for summaries, data extraction, WhatsApp and SMS',
            'Multi-tenant workspaces with roles, credit and subscription billing, and LGPD-compliant data handling',
            'Runs in production on Google Cloud, with Docker and CI/CD',
          ],
          stack: stackPipevoz,
        },
        {
          id: 'xn',
          name: 'x-n.dev',
          url: 'https://www.x-n.dev',
          urlLabel: 'x-n.dev',
          logo: '/logos/xn.svg',
          role: 'Tech Founder',
          tagline: 'Compare AI models side by side, using your own data.',
          description:
            'Teams use x-n.dev to choose which LLM, speech-to-text or text-to-speech model to ship. They run their own prompts and audio through many models at once and compare quality, latency and cost before committing to a provider.',
          built: [
            'Reusable test scenarios — prompts, audio files, voices and expected outputs — with AI-generated test cases',
            'Parallel runs across 25+ providers, including OpenAI, Anthropic, Google, Deepgram and ElevenLabs',
            'Scoring for quality, latency and cost, with automatic rankings and a public leaderboard',
            'Bring-your-own-key with encrypted credentials, plus support for self-hosted, OpenAI-compatible endpoints',
            'Multi-tenant workspaces and Stripe billing',
            'Serverless deployment on Cloud Run, with Cloud Build and Cloudflare R2',
          ],
          stack: stackXn,
        },
        {
          id: 'orkable',
          name: 'Orkable',
          logo: '/logos/orkable.png',
          logoInvert: true,
          role: 'Tech Founder',
          tagline: 'Create and manage teams of AI agents.',
          description:
            'Orkable organizes AI agents the way a company organizes people: each agent has a role, a manager, a budget and a list of tasks. You assign work, approve important actions and follow every run and its cost in one place, whichever agent tool is doing the work.',
          built: [
            'Org chart of agents with roles, reporting lines and task queues',
            'Integrations with 10+ agent tools, including Claude Code, Codex, Cursor, Gemini and OpenCode',
            'Budget limits, approval steps and a full audit log',
            'Scheduled routines, a plugin SDK and a shared skills catalog',
            'Sandboxed execution, locally or in the cloud',
            'Command-line tool (npx orkable) and a component library with visual regression tests',
          ],
          stack: stackOrkable,
        },
      ],
    },
    stack: {
      label: 'Stack',
      groups: [
        { name: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Rust', 'SQL'] },
        { name: 'Backend', items: ['Django', 'FastAPI', 'Node.js', 'NestJS', 'Express', 'GraphQL', 'REST', 'WebSockets', 'Celery'] },
        { name: 'Frontend', items: ['React', 'Next.js', 'Astro', 'Vite', 'Tailwind CSS', 'Apollo', 'TanStack Query'] },
        { name: 'Data & infra', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Google Cloud', 'AWS', 'Cloudflare'] },
        { name: 'AI & voice', items: ['LLMs', 'Speech-to-text', 'Text-to-speech', 'LiveKit', 'Asterisk', 'SIP telephony'] },
      ],
    },
    contact: {
      label: 'Contact',
      headline: "Let's talk.",
      text: "I'm looking for remote roles, in Brazil or abroad. Whether it's an opportunity or just a question, feel free to reach out.",
      email: 'Email',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
    },
    footer: { builtWith: 'Built with Astro' },
  },

  pt: {
    htmlLang: 'pt-BR',
    meta: {
      title: 'Eric Alexandre — Engenheiro de Software',
      description: 'Eric Alexandre é engenheiro de software e tech founder no Brasil, com experiência em operações e vendas.',
    },
    nav: { experience: 'Experiência', work: 'Projetos', stack: 'Stack', contact: 'Contato' },
    hero: {
      role: 'Engenheiro de Software',
      tagline: 'Tech founder com experiência em operações e vendas. Desenvolvendo negócios da ideia à produção.',
      location: 'Brasil · Remoto',
      availability: 'Aberto a vagas internacionais',
      ctaPrimary: 'Entrar em contato',
      ctaSecondary: 'Ver projetos',
    },
    experience: {
      label: 'Experiência',
      items: [
        { period: 'mar 2026 — out 2026', role: 'Tech Founder', company: 'Pipevoz' },
        { period: 'jul 2025 — mar 2026', role: 'Tech Founder', company: 'x-n.dev' },
        { period: 'abr 2024 — jan 2026', role: 'Co-founder & Full Stack Developer', company: 'Vozis' },
        { period: 'jan 2023 — jun 2025', role: 'Gerente Operacional', company: 'Contabull' },
        { period: 'out 2021 — ago 2022', role: 'Gerente de Sistemas', company: 'Brasil Vantagens' },
        { period: 'ago 2021 — dez 2021', role: 'SDR', company: 'Brasil Vantagens' },
      ],
    },
    work: {
      label: 'Projetos',
      builtLabel: 'Destaques',
      stackLabel: 'Stack',
      projects: [
        {
          id: 'pipevoz',
          name: 'Pipevoz',
          url: 'https://www.pipevoz.com',
          urlLabel: 'pipevoz.com',
          logo: '/logos/pipevoz.svg',
          role: 'Tech Founder',
          tagline: 'Agentes de voz com IA que atendem e fazem ligações para empresas.',
          description:
            'Empresas usam o Pipevoz para criar agentes de voz que atendem suas linhas telefônicas, fazem campanhas de ligação e conversam com visitantes no site. A plataforma cobre o fluxo inteiro: a conversa ao vivo, o CRM onde o time acompanha cada lead e o billing. Realizamos e validamos um piloto com um grande banco de Brasília.',
          built: [
            'Pipeline de voz em tempo real (fala → LLM → voz) com LiveKit, conectado à telefonia SIP e ao Asterisk',
            'Discador outbound com filas, chamadas simultâneas, regras de retentativa e agendamento em workers Celery',
            'SDK embarcável para conversar com o agente direto no navegador',
            'CRM em kanban com atualização ao vivo via WebSockets e automações pós-chamada para resumo, extração de dados, WhatsApp e SMS',
            'Workspaces multi-tenant com papéis, billing por créditos e assinatura e tratamento de dados de acordo com a LGPD',
            'Em produção no Google Cloud, com Docker e CI/CD',
          ],
          stack: stackPipevoz,
        },
        {
          id: 'xn',
          name: 'x-n.dev',
          url: 'https://www.x-n.dev',
          urlLabel: 'x-n.dev',
          logo: '/logos/xn.svg',
          role: 'Tech Founder',
          tagline: 'Compare modelos de IA lado a lado, com os seus próprios dados.',
          description:
            'Times usam o x-n.dev para escolher qual modelo de LLM, transcrição ou voz colocar em produção. Eles rodam os próprios prompts e áudios em vários modelos ao mesmo tempo e comparam qualidade, latência e custo antes de fechar com um fornecedor.',
          built: [
            'Cenários de teste reutilizáveis — prompts, áudios, vozes e respostas esperadas — com casos de teste gerados por IA',
            'Execução paralela em mais de 25 provedores, como OpenAI, Anthropic, Google, Deepgram e ElevenLabs',
            'Pontuação de qualidade, latência e custo, com ranking automático e leaderboard público',
            'Chave própria (BYOK) com credenciais criptografadas e suporte a endpoints self-hosted compatíveis com OpenAI',
            'Workspaces multi-tenant e billing com Stripe',
            'Deploy serverless no Cloud Run, com Cloud Build e Cloudflare R2',
          ],
          stack: stackXn,
        },
        {
          id: 'orkable',
          name: 'Orkable',
          logo: '/logos/orkable.png',
          logoInvert: true,
          role: 'Tech Founder',
          tagline: 'Crie e gerencie times de agentes de IA.',
          description:
            'O Orkable organiza agentes de IA do jeito que uma empresa organiza pessoas: cada agente tem um papel, um responsável, um orçamento e uma lista de tarefas. Você distribui o trabalho, aprova as ações importantes e acompanha cada execução e seu custo num só lugar, seja qual for a ferramenta de agente usada.',
          built: [
            'Organograma de agentes com papéis, hierarquia e filas de tarefas',
            'Integração com mais de 10 ferramentas de agentes, como Claude Code, Codex, Cursor, Gemini e OpenCode',
            'Limites de orçamento, etapas de aprovação e log de auditoria completo',
            'Rotinas agendadas, SDK de plugins e catálogo compartilhado de skills',
            'Execução isolada em sandbox, local ou na nuvem',
            'Ferramenta de linha de comando (npx orkable) e biblioteca de componentes com testes de regressão visual',
          ],
          stack: stackOrkable,
        },
      ],
    },
    stack: {
      label: 'Stack',
      groups: [
        { name: 'Linguagens', items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Rust', 'SQL'] },
        { name: 'Backend', items: ['Django', 'FastAPI', 'Node.js', 'NestJS', 'Express', 'GraphQL', 'REST', 'WebSockets', 'Celery'] },
        { name: 'Frontend', items: ['React', 'Next.js', 'Astro', 'Vite', 'Tailwind CSS', 'Apollo', 'TanStack Query'] },
        { name: 'Dados e infra', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Google Cloud', 'AWS', 'Cloudflare'] },
        { name: 'IA e voz', items: ['LLMs', 'Speech-to-text', 'Text-to-speech', 'LiveKit', 'Asterisk', 'Telefonia SIP'] },
      ],
    },
    contact: {
      label: 'Contato',
      headline: 'Vamos conversar.',
      text: 'Estou buscando vagas remotas, no Brasil ou fora. Seja uma oportunidade ou só uma pergunta, fique à vontade para me chamar.',
      email: 'Email',
      whatsapp: 'WhatsApp',
      linkedin: 'LinkedIn',
    },
    footer: { builtWith: 'Feito com Astro' },
  },
};
