import type { Topic } from "./types";

export const topics: Topic[] = [
  {
    id: "calendario-academico",
    title: "Calendário acadêmico",
    description: "Datas, prazos e períodos importantes da graduação.",
    category: "Acadêmico",
    icon: "CalendarDays",
    color: "#18A84E",
    response:
      "Consulte o calendário acadêmico oficial da USCS para acompanhar datas de aulas, avaliações, recessos, rematrículas e demais prazos institucionais.",
    detail:
      "Use este canal para verificar o planejamento oficial do semestre e se organizar com antecedência em relação a provas, feriados, recessos, matrículas e atividades acadêmicas.",
    link: "https://uscs.edu.br/calendario-academico/",
    actionLabel: "Abrir calendário",
  },
  {
    id: "provas-avaliacao",
    title: "Provas e sistemas de avaliação",
    description: "Notas, avaliações e acompanhamento acadêmico.",
    category: "Acadêmico",
    icon: "ClipboardCheck",
    color: "#E72C65",
    response:
      "As informações de provas, notas e sistemas de avaliação devem ser acompanhadas pelo portal acadêmico MentorWeb e pelas orientações oficiais de cada disciplina.",
    detail:
      "Acesse o portal para consultar informações acadêmicas relacionadas ao desempenho, registros da disciplina e acompanhamento das avaliações conforme calendário e critérios definidos pela USCS.",
    link: "https://uscs.mentorweb.ws/uscsMentorWebG5/jsf/geral/executaAppEduMentorWeb.jsf?pcaes=b873d8fde8878c8b176f796c46839a6e63d18870922e57a37e9570b0b2410bf8",
    actionLabel: "Abrir avaliações",
  },
  {
    id: "disciplina-ead",
    title: "Disciplina EAD",
    description: "Ambiente virtual para aulas e conteúdos online.",
    category: "Sistemas Institucionais",
    icon: "Laptop",
    color: "#16A34A",
    response:
      "A disciplina EAD utiliza o ambiente virtual de aprendizagem da USCS para acesso a aulas, atividades, conteúdos e materiais acadêmicos online.",
    detail:
      "Entre com suas credenciais acadêmicas para acompanhar trilhas de aprendizagem, tarefas, materiais disponibilizados por professores e conteúdos digitais das disciplinas.",
    link: "https://ead.uscs.edu.br/login/index.php",
    actionLabel: "Acessar EAD",
  },
  {
    id: "dp-adaptacoes",
    title: "Dependência (DP) e adaptações",
    description: "Orientações sobre DP, adaptações e regularização.",
    category: "Acadêmico",
    icon: "RefreshCw",
    color: "#FF8A1D",
    response:
      "A área de DP e adaptações reúne orientações oficiais para estudantes que precisam regularizar disciplinas, pendências curriculares ou componentes de adaptação.",
    detail:
      "Consulte as regras, prazos e procedimentos publicados pela USCS para entender como acompanhar ou solicitar regularizações relacionadas à sua matriz curricular.",
    link: "https://uscs.edu.br/dp/",
    actionLabel: "Ver DP",
  },
  {
    id: "magickey",
    title: "Acesso ao campus (MagicKey)",
    description: "Controle digital de acesso aos campi da USCS.",
    category: "Campus",
    icon: "KeyRound",
    color: "#0EA5E9",
    response:
      "O MagicKey é o recurso utilizado para liberar o acesso dos alunos aos campi da USCS de forma digital, prática e segura.",
    detail:
      "Acesse o serviço oficial para consultar ou regularizar seu acesso institucional aos campi, conforme as regras de identificação e segurança da universidade.",
    link: "https://uscs.mentorweb.ws/uscsMentorWebG5/jsf/geradorinterface/executa/interfaceexec.jsf?codigoForm=CLI73&evento=Pesquisar&pcaes=703a659c1da4e823d0cdcd56ac3577675ee423606b50b693f9740b74f0f8b892",
    actionLabel: "Abrir MagicKey",
  },
  {
    id: "localizacao-campus",
    title: "Localização e campus",
    description: "Endereços, unidades e localização dos campi.",
    category: "Campus",
    icon: "MapPin",
    color: "#6D3BEF",
    response:
      "Consulte as unidades da USCS para visualizar endereços, localização dos campi e informações institucionais de acesso.",
    detail:
      "O link oficial direciona para a área de unidades da USCS, útil para confirmar campus, endereço e referência de localização antes de se deslocar.",
    link: "https://uscs.edu.br/#unidades",
    actionLabel: "Ver unidades",
  },
  {
    id: "atendimento-institucional",
    title: "Canais de atendimento institucional",
    description: "Contato oficial para dúvidas e solicitações.",
    category: "Atendimento",
    icon: "MessagesSquare",
    color: "#2563EB",
    response:
      "Os canais de atendimento institucional concentram formas oficiais de contato com a USCS para dúvidas, orientações e solicitações gerais.",
    detail:
      "Use o Fale Conosco para encaminhar demandas institucionais pelos canais adequados e obter direcionamento oficial da universidade.",
    link: "https://uscs.edu.br/fale-conosco/",
    actionLabel: "Abrir atendimento",
  },
  {
    id: "corpo-docente",
    title: "Corpo docente e contatos",
    description: "Informações sobre professores e contatos acadêmicos.",
    category: "Atendimento",
    icon: "UsersRound",
    color: "#7C3CFF",
    response:
      "As informações de corpo docente e contatos acadêmicos devem ser acompanhadas pelos canais oficiais do curso e da instituição.",
    detail:
      "Entre em contato com a USCS pelo canal oficial para obter contatos atualizados do corpo docente, coordenadores e demais responsáveis pelo seu curso.",
    link: "https://uscs.edu.br/fale-conosco/",
    actionLabel: "Fale conosco",
  },
  {
    id: "estagio-empregabilidade",
    title: "Estágio e empregabilidade",
    description: "Orientações sobre estágio, carreira e oportunidades.",
    category: "Estágios",
    icon: "BriefcaseBusiness",
    color: "#1765F4",
    response:
      "O tema de estágio e empregabilidade reúne orientações para desenvolvimento profissional, oportunidades e documentos relacionados à vida acadêmica e profissional.",
    detail:
      "Consulte o canal oficial da USCS para obter informações sobre convênios de estágio, parceirias e oportunidades de empregabilidade.",
    link: "https://uscs.edu.br/estagios/",
    actionLabel: "Conferir oportunidades",
  },
  {
    id: "cursos-disponiveis",
    title: "Cursos disponíveis",
    description: "Consulta aos cursos oferecidos pela USCS.",
    category: "Acadêmico",
    icon: "GraduationCap",
    color: "#10B981",
    response:
      "A área de cursos disponíveis apresenta a oferta acadêmica da USCS, com opções de graduação e demais formações divulgadas pela instituição.",
    detail:
      "Acesse a página oficial para navegar pelos cursos, conhecer áreas de formação e encontrar informações institucionais sobre a oferta acadêmica da universidade.",
    link: "https://uscs.edu.br/#cursos",
    actionLabel: "Ver cursos",
  },
  {
    id: "secretaria-documentos",
    title: "Secretaria e documentos",
    description: "Envio e acompanhamento de documentos pendentes.",
    category: "Documentação",
    icon: "FileText",
    color: "#2563EB",
    response:
      "A secretaria e documentos permite acompanhar e entregar documentos acadêmicos pendentes pelos canais oficiais vinculados ao MentorWeb.",
    detail:
      "Use o link oficial para verificar pendências documentais e acompanhar entregas solicitadas pela universidade dentro do ambiente institucional.",
    link: "https://uscs.mentorweb.ws/uscsMentorWebG5/jsf/central/documento/entregadocumentoscentrais.jsf?pcaes=76e166e737ff1387bc80b44942f6ce1bec06f0c9697ead1ce34c34b90f21c317",
    actionLabel: "Ver documentos",
  },
  {
    id: "biblioteca",
    title: "Biblioteca",
    description: "Acervo, consulta e serviços da biblioteca.",
    category: "Biblioteca",
    icon: "BookOpen",
    color: "#6D3BEF",
    response:
      "A biblioteca oferece acesso ao acervo da USCS, permitindo consulta a materiais, recursos acadêmicos e informações bibliográficas.",
    detail:
      "Acesse o MultiAcervo para pesquisar materiais disponíveis e utilizar os serviços digitais relacionados ao acervo bibliográfico da instituição.",
    link: "https://uscs.edu.br/biblioteca/",
    actionLabel: "Abrir acervo",
  },
  {
    id: "carteirinha-estudante",
    title: "Carteirinha de estudante",
    description: "Acesso à carteirinha estudantil pelo portal.",
    category: "Documentação",
    icon: "BadgeCheck",
    color: "#0EA5E9",
    response:
      "A carteirinha de estudante pode ser acessada pelo portal oficial indicado no documento, conforme disponibilidade e vínculo acadêmico.",
    detail:
      "Utilize o serviço institucional para consultar ou acessar sua identificação estudantil vinculada à USCS.",
    link: "https://uscs.mentorweb.ws/uscsMentorWebG5/jsf/geral/executaAppEduMentorWeb.jsf?pcaes=6f5bdd7f015faeee880bb3ea767387ed3171ec8d6f3d7e3d9695e73ad9842eba",
    actionLabel: "Abrir carteirinha",
  },
  {
    id: "apoio-aluno",
    title: "Localização de salas",
    description: "Consulta de salas, turmas e endereços dos campi.",
    category: "Localização",
    icon: "MapPinned",
    color: "#E72C65",
    response:
      "A localização de salas ajuda o estudante a encontrar a sala da sua turma nos campi da USCS.",
    detail:
      "Digite o nome do seu curso para consultar a distribuição correspondente (caso não saiba sua turma, acesse o portal do aluno). Você poderá visualizar dados como turma, período, prédio e campus, facilitando o acesso às informações acadêmicas. ",
    link: "https://uscs.edu.br/distribuicao-de-salas/",
    actionLabel: "Ver salas",
  },
  {
    id: "sistemas-portal-aluno",
    title: "Sistemas e portal do aluno",
    description: "Acesso aos sistemas acadêmicos institucionais.",
    category: "Sistemas Institucionais",
    icon: "MonitorCog",
    color: "#7C3CFF",
    response:
      "Os sistemas e o portal do aluno concentram acessos acadêmicos importantes para serviços digitais, consultas e acompanhamento da vida universitária.",
    detail:
      "Use o link oficial do documento para acessar o ambiente indicado e navegar pelos serviços acadêmicos digitais disponíveis ao estudante.",
    link: "https://share.google/3LSZkR5kuce3rl0Ge",
    actionLabel: "Abrir portal",
  },
  {
    id: "transferencia-turma",
    title: "Transferência de turma",
    description: "Solicitação e orientação para mudança de turma.",
    category: "Acadêmico",
    icon: "ArrowLeftRight",
    color: "#FF8A1D",
    response:
      "A transferência de turma envolve análise acadêmica e deve seguir os procedimentos e prazos definidos pela USCS.",
    detail:
      "Entre em contato com a secretaria ou coordenação do curso pelos canais oficiais da USCS para solicitar a mudança de turma dentro dos prazos estabelecidos.",
    link: "https://uscs.edu.br/fale-conosco/",
    actionLabel: "Solicitar",
  },
];
