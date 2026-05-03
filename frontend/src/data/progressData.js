export const sprints = [
  {
    id: 1,
    title: "Sprint 1",
    subtitle: "Concepcao e Planejamento",
    status: "completed",
    description:
      "Levantamento de requisitos junto a ABDI, definicao da arquitetura do sistema e criacao dos primeiros prototipos de interface. Analise de mercado e pesquisa de solucoes concorrentes.",
    technologies: ["Figma", "Notion", "Python", "Git", "Draw.io"],
    features: [
      "Documento de requisitos (SRS) finalizado",
      "Ambiente de desenvolvimento e repositorio configurados",
      "Site do grupo com informacoes de entregas e do projeto",
    ],
    future:
      "Refinamento continuo de requisitos conforme feedback das sprints subsequentes e validacoes junto ao cliente.",
  },
  {
    id: 2,
    title: "Sprint 2",
    subtitle: "Modelo de Visao Computacional",
    status: "completed",
    description:
      "Desenvolvimento e treinamento do modelo de deteccao de EPIs com YOLOv8. Dataset coletado e anotado com mais de 4.300 imagens de ambientes industriais reais, atingindo alta precisao na deteccao.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Roboflow"],
    features: [
      "Dataset com +4.300 imagens anotadas de ambientes industriais",
      "Deteccao de capacete de seguranca (mAP 98%)",
      "Deteccao de oculos e protetor facial (mAP 82%)",
    ],
    future:
      "Expansao para luvas, botinas, protetores auriculares e EPIs especificos por setor industrial. Alem de aprimoramento continuo do modelo com mais dados e tecnicas avancadas de IA.",
  },
  {
    id: 3,
    title: "Sprint 3",
    subtitle: "Integracao da Plataforma e Alertas",
    status: "in-progress",
    description:
      "Sprint em andamento focada na integracao entre o motor de deteccao, o painel web e os canais de alerta. O objetivo e garantir fluxo completo de evento ate notificacao para supervisao.",
    technologies: ["React", "Node.js", "MQTT", "PostgreSQL"],
    features: [
      "Integracao parcial entre deteccao e dashboard em tempo real",
      "Canal de alertas push em validacao com testes internos",
      "Persistencia de eventos de inconformidade no banco",
    ],
    future:
      "Finalizar hardening da comunicacao em tempo real, concluir testes de carga e preparar a base para integracao com travamento automatizado.",
  },
  {
    id: 4,
    title: "Sprint 4",
    subtitle: "IoT, Bloqueio Preventivo e Piloto",
    status: "planned",
    description:
      "Sprint planejada para conectar o sistema a dispositivos IoT e validar cenarios de bloqueio preventivo de maquinas em ambiente controlado.",
    technologies: ["ESP32", "C++", "Node-RED"],
    features: [
      "Integracao com microcontroladores para acionamento de bloqueio",
      "Regras de seguranca por zona e tipo de EPI",
      "Execucao de piloto assistido com coleta de metricas operacionais",
    ],
    future:
      "Conduzir piloto com parceiros industriais, medir impacto em conformidade e consolidar relatorios para expansao da solucao.",
  },
];
