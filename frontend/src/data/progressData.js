export const sprints = [
  {
    id: 1,
    title: "Sprint 1",
    subtitle: "Concepção e Planejamento",
    status: "completed",
    description:
      "Levantamento de requisitos junto à ABDI, definição da arquitetura do sistema e criação dos primeiros protótipos de interface. Análise de mercado e pesquisa de soluções concorrentes.",
    technologies: ["Figma", "Notion", "Python", "Git", "Draw.io"],
    features: [
      "Documento de requisitos (SRS) finalizado e validado com a ABDI",
      "Arquitetura de microsserviços definida e aprovada",
      "Protótipos de alta fidelidade criados no Figma",
      "Ambiente de desenvolvimento e repositório configurados",
    ],
    future:
      "Refinamento contínuo de requisitos conforme feedback das sprints subsequentes e validações junto ao cliente.",
  },
  {
    id: 2,
    title: "Sprint 2",
    subtitle: "Modelo de Visão Computacional",
    status: "completed",
    description:
      "Desenvolvimento e treinamento do modelo de detecção de EPIs com YOLOv8. Dataset coletado e anotado com mais de 5.000 imagens de ambientes industriais reais, atingindo alta precisão na detecção.",
    technologies: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Roboflow"],
    features: [
      "Dataset com +5.000 imagens anotadas de ambientes industriais",
      "Detecção de capacete de segurança (mAP 94%)",
      "Detecção de colete reflexivo (mAP 92%)",
      "Detecção de óculos e protetor facial (mAP 89%)",
    ],
    future:
      "Expansão para luvas, botinas, protetores auriculares e EPIs específicos por setor industrial.",
  },
  {
    id: 3,
    title: "Sprint 3",
    subtitle: "Integração de Câmeras",
    status: "completed",
    description:
      "Implementação do pipeline de processamento de vídeo em tempo real via RTSP. Suporte a múltiplas câmeras simultâneas com processamento edge para latência mínima.",
    technologies: ["RTSP", "FFmpeg", "CUDA", "Redis", "Docker"],
    features: [
      "Pipeline de vídeo em tempo real com latência <50ms",
      "Suporte a 8+ câmeras IP simultâneas",
      "Processamento edge com aceleração GPU (CUDA)",
      "Reconexão automática em caso de falha de câmera",
    ],
    future:
      "Integração com câmeras PTZ para rastreamento automático de operadores e cobertura de área ampliada.",
  },
  {
    id: 4,
    title: "Sprint 4",
    subtitle: "Sistema de Alertas",
    status: "in-progress",
    description:
      "Sistema de notificações em tempo real para supervisores e gestores. Alertas multicanal via painel web, app mobile e alarme sonoro no chão de fábrica.",
    technologies: ["WebSockets", "Node.js", "Firebase", "React Native", "SendGrid"],
    features: [
      "Alertas em tempo real via WebSocket com <100ms de delay",
      "Notificações push no aplicativo mobile",
      "Histórico de alertas com filtros e exportação",
      "Níveis de criticidade configuráveis por área",
    ],
    future:
      "Integração com sistema CFTV corporativo e geofencing de zonas de risco com alertas automáticos.",
  },
  {
    id: 5,
    title: "Sprint 5",
    subtitle: "Travamento de Maquinário",
    status: "planned",
    description:
      "Integração física com sistemas de automação industrial via MQTT e OPC-UA. Travamento preventivo de máquinas quando operador sem EPI é detectado na zona de risco.",
    technologies: ["MQTT", "OPC-UA", "ESP32", "Arduino", "Node-RED"],
    features: [
      "Travamento em <200ms após detecção de inconformidade",
      "Protocolo de segurança com confirmação manual para reativação",
      "Compatibilidade com CLPs Siemens e Allen-Bradley",
      "Log de eventos auditável para conformidade NR-12",
    ],
    future:
      "Suporte a protocolos industriais adicionais (Profibus, EtherNet/IP) e integração com sistemas SCADA.",
  },
  {
    id: 6,
    title: "Sprint 6",
    subtitle: "Dashboard e Relatórios",
    status: "planned",
    description:
      "Painel gerencial com métricas de conformidade, histórico de incidentes e relatórios automáticos para auditoria. Exportação em PDF/Excel e integração com ferramentas de BI.",
    technologies: ["React", "Recharts", "PostgreSQL", "FastAPI", "Power BI"],
    features: [
      "Dashboard em tempo real com KPIs de segurança",
      "Relatórios automáticos em PDF e Excel",
      "Integração nativa com Power BI corporativo",
      "Análise preditiva de risco por setor/turno",
    ],
    future:
      "Módulo de IA generativa para recomendações proativas de segurança baseadas em padrões históricos.",
  },
];
