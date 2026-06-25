// ===== DADOS DOS MÓDULOS =====
const modulos = {
    1: {
        titulo: "Introdução à Robótica Educacional e ao Curso",
        descricao: "Compreender o papel da robótica e do pensamento computacional na BNCC e conhecer a organização do curso.",
        cor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        icone: "fa-graduation-cap",
        pdf: "assets/pdfs/modulo1.pdf",
        video1: {
            titulo: "O que é Robótica Educacional?",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        video2: {
            titulo: "Pensamento Computacional na BNCC",
            url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        },
        quiz: [
            { pergunta: "1. Qual documento estabelece a cultura digital como competência geral da educação no Brasil?", opcoes: ["Lei de Diretrizes e Bases (LDB)", "Base Nacional Comum Curricular (BNCC)", "Parâmetros Curriculares Nacionais (PCN)", "Plano Nacional de Educação (PNE)"], correta: 1 },
            { pergunta: "2. O que é Pensamento Computacional?", opcoes: ["Apenas saber programar em linguagens complexas", "Capacidade de formular problemas e desenvolver soluções organizadas de forma lógica", "Uso exclusivo de computadores em sala de aula", "Memorização de códigos de programação"], correta: 1 },
            { pergunta: "3. Qual resolução tornou obrigatório o ensino de Pensamento Computacional a partir de 2026?", opcoes: ["Resolução CNE/CEB nº 01/2020", "Resolução CNE/CEB nº 04/2018", "Resolução CNE/CEB nº 02/2025", "Resolução CNE/CEB nº 03/2022"], correta: 2 },
            { pergunta: "4. Qual das alternativas NÃO é uma habilidade do Pensamento Computacional?", opcoes: ["Decomposição de problemas", "Reconhecimento de padrões", "Memorização de fórmulas", "Abstração"], correta: 2 },
            { pergunta: "5. A robótica educacional se articula com qual abordagem interdisciplinar?", opcoes: ["STEAM (Ciência, Tecnologia, Engenharia, Artes e Matemática)", "Apenas Matemática", "Apenas Ciências", "Apenas Artes"], correta: 0 }
        ]
    },
    2: {
        titulo: "Kits de Robótica",
        descricao: "Identificar e conhecer os componentes: Arduino, Microbit e Kit LEGO Educacional.",
        cor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        icone: "fa-microchip",
        pdf: "assets/pdfs/modulo2.pdf",
        video1: { titulo: "Conhecendo o Arduino", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        video2: { titulo: "Microbit e LEGO Educacional", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        quiz: [
            { pergunta: "1. Qual é a principal característica do Arduino?", opcoes: ["É um software de programação", "É uma plataforma de hardware livre com microcontrolador programável", "É um simulador virtual", "É um kit exclusivo da LEGO"], correta: 1 },
            { pergunta: "2. O Microbit foi desenvolvido originalmente para qual finalidade?", opcoes: ["Uso industrial", "Ensino de computação para crianças no Reino Unido", "Pesquisa científica avançada", "Jogos de videogame"], correta: 1 },
            { pergunta: "3. Qual componente do LEGO Educacional permite programação?", opcoes: ["Apenas as peças plásticas", "O Brick (tijolo inteligente) com sensores e motores", "A caixa de armazenamento", "As rodas"], correta: 1 },
            { pergunta: "4. O que são sensores em um kit de robótica?", opcoes: ["Peças que apenas emitem luz", "Dispositivos que captam informações do ambiente (luz, som, distância)", "Peças decorativas", "Fonte de energia"], correta: 1 },
            { pergunta: "5. Qual a vantagem pedagógica do LEGO Educacional?", opcoes: ["É o mais barato do mercado", "Não requer programação", "Integra montagem física e programação de forma lúdica", "Só funciona conectado à internet"], correta: 2 }
        ]
    },
    3: {
        titulo: "Programação em Blocos Aplicada à Robótica",
        descricao: "Utilizar ambientes de programação em blocos (Scratch/MakeCode) em desafios simples relacionados à robótica.",
        cor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        icone: "fa-puzzle-piece",
        pdf: "assets/pdfs/modulo3.pdf",
        video1: { titulo: "Introdução ao Scratch", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        video2: { titulo: "Programando com MakeCode", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        quiz: [
            { pergunta: "1. O que é programação em blocos?", opcoes: ["Programação apenas com textos complexos", "Programação visual onde comandos são encaixados como peças de quebra-cabeça", "Programação sem computador", "Programação apenas para robôs industriais"], correta: 1 },
            { pergunta: "2. Qual ambiente de programação em blocos foi desenvolvido pelo MIT?", opcoes: ["Python", "Java", "Scratch", "C++"], correta: 2 },
            { pergunta: "3. O MakeCode é especialmente utilizado para programar qual dispositivo?", opcoes: ["Arduino apenas", "Microbit", "Raspberry Pi", "LEGO apenas"], correta: 1 },
            { pergunta: "4. O que é um 'loop' (laço) em programação?", opcoes: ["Um comando que executa uma ação repetidamente", "Um tipo de sensor", "Uma peça física do robô", "Um erro de programação"], correta: 0 },
            { pergunta: "5. Qual a principal vantagem da programação em blocos para o Ensino Fundamental?", opcoes: ["É mais cara que a programação textual", "Reduz a barreira de entrada e permite foco na lógica", "Não permite criar projetos reais", "Só funciona online"], correta: 1 }
        ]
    },
    4: {
        titulo: "Simuladores de Robótica e Eletrônica Básica",
        descricao: "Explorar simuladores (Tinkercad) para compreender sensores, atuadores e circuitos básicos em robótica.",
        cor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        icone: "fa-flask",
        pdf: "assets/pdfs/modulo4.pdf",
        video1: { titulo: "Introdução ao Tinkercad", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        video2: { titulo: "Montando Circuitos no Tinkercad", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        quiz: [
            { pergunta: "1. O que é um simulador de robótica?", opcoes: ["Um robô físico real", "Um ambiente virtual que emula o comportamento de componentes eletrônicos", "Um tipo de sensor", "Um software de edição de texto"], correta: 1 },
            { pergunta: "2. Qual simulador gratuito é amplamente utilizado para Arduino e circuitos?", opcoes: ["Photoshop", "Tinkercad", "Word", "Excel"], correta: 1 },
            { pergunta: "3. O que é um atuador em robótica?", opcoes: ["Um componente que capta informações", "Um componente que realiza uma ação (motor, LED, buzzer)", "Uma fonte de energia", "Um tipo de programação"], correta: 1 },
            { pergunta: "4. Qual a vantagem de usar simuladores na escola?", opcoes: ["Substitui totalmente o professor", "Permite experimentação sem custo com componentes físicos", "É mais difícil que usar kits reais", "Não permite aprender nada"], correta: 1 },
            { pergunta: "5. O que é um LED?", opcoes: ["Um sensor de temperatura", "Um diodo emissor de luz (atuador)", "Um tipo de bateria", "Um motor"], correta: 1 }
        ]
    },
    5: {
        titulo: "Robótica, Interdisciplinaridade e Sequências Didáticas",
        descricao: "Integrar robótica e pensamento computacional a conteúdos da BNCC, elaborando atividades e mini-projetos interdisciplinares.",
        cor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        icone: "fa-sitemap",
        pdf: "assets/pdfs/modulo5.pdf",
        video1: { titulo: "Robótica e Interdisciplinaridade", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        video2: { titulo: "Elaborando Sequências Didáticas", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        quiz: [
            { pergunta: "1. O que é uma sequência didática?", opcoes: ["Uma lista de conteúdos sem relação entre si", "Um conjunto organizado de atividades com objetivos progressivos", "Apenas uma prova", "Um tipo de software"], correta: 1 },
            { pergunta: "2. Qual a importância da interdisciplinaridade na robótica educacional?", opcoes: ["Não tem importância", "Permite integrar conhecimentos de várias áreas, enriquecendo a aprendizagem", "Apenas complica o planejamento", "Só é útil no Ensino Médio"], correta: 1 },
            { pergunta: "3. Qual metodologia ativa é frequentemente associada à robótica educacional?", opcoes: ["Aula expositiva tradicional", "Aprendizagem Baseada em Projetos (PBL)", "Decoreba", "Cópia do quadro"], correta: 1 },
            { pergunta: "4. O que é Aprendizagem Criativa (Resnick)?", opcoes: ["Aprendizado apenas por memorização", "Abordagem baseada em Projetos, Paixão, Pares e Brincar (4Ps)", "Aprendizado sem tecnologia", "Apenas para adultos"], correta: 1 },
            { pergunta: "5. Ao integrar robótica à BNCC, o professor deve:", opcoes: ["Ignorar as competências da BNCC", "Alinhar as atividades às competências e habilidades previstas", "Usar apenas em aulas de matemática", "Focar apenas na parte técnica"], correta: 1 }
        ]
    },
    6: {
        titulo: "Projeto Final",
        descricao: "Elaborar uma sequência didática completa em robótica, adequada à sua realidade escolar, para aplicação em contexto real de ensino.",
        cor: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
        icone: "fa-project-diagram",
        pdf: "assets/pdfs/modulo6.pdf",
        video1: { titulo: "Orientações para o Projeto Final", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        video2: { titulo: "Exemplos de Projetos Escolares", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        quiz: [
            { pergunta: "1. Qual o objetivo principal do Projeto Final?", opcoes: ["Apenas memorizar conteúdos", "Elaborar uma sequência didática aplicável à realidade escolar do professor", "Fazer uma prova teórica", "Construir um robô físico obrigatoriamente"], correta: 1 },
            { pergunta: "2. O que deve constar em uma sequência didática de robótica?", opcoes: ["Apenas o nome da atividade", "Objetivos, competências BNCC, materiais, etapas, avaliação", "Apenas imagens", "Apenas vídeos"], correta: 1 },
            { pergunta: "3. Por que é importante adaptar o projeto à realidade escolar?", opcoes: ["Não é importante", "Garante viabilidade considerando recursos, tempo e perfil dos alunos", "Apenas para complicar", "Só importa em escolas particulares"], correta: 1 },
            { pergunta: "4. Qual elemento é essencial na avaliação de um projeto de robótica?", opcoes: ["Apenas a nota final", "Rubricas que considerem processo, produto e competências desenvolvidas", "Apenas a aparência do robô", "Não se avalia projetos de robótica"], correta: 1 },
            { pergunta: "5. Ao concluir este curso, o professor estará apto a:", opcoes: ["Construir robôs industriais", "Integrar robótica e pensamento computacional às suas práticas pedagógicas", "Programar em linguagens avançadas", "Vender kits de robótica"], correta: 1 }
        ]
    }
};

// ===== ESTADO DO USUÁRIO =====
let progresso = JSON.parse(localStorage.getItem('progressoCurso')) || {};

for (let i = 1; i <= 6; i++) {
    if (!progresso[i]) {
        progresso[i] = { apresentacao: false, pdf: false, video1: false, video2: false, quiz: false, notaQuiz: 0 };
    }
}

// ===== NAVEGAÇÃO =====
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (sectionId === 'trilha') atualizarTrilha();
}

// ===== ABRIR MÓDULO =====
function openModulo(num) {
    const modulo = modulos[num];
    const prog = progresso[num];

    const html = `
        <div class="modulo-detail-header" style="background: ${modulo.cor};">
            <span style="font-size: 0.9rem; opacity: 0.9; letter-spacing: 1px;">MÓDULO ${String(num).padStart(2, '0')}</span>
            <h1>${modulo.titulo}</h1>
            <p>${modulo.descricao}</p>
        </div>
        <div class="etapa-card">
            <div class="etapa-header" onclick="toggleEtapa('apresentacao-${num}')">
                <div class="etapa-title"><i class="fas fa-flag"></i><span>Apresentação do Módulo</span></div>
                <div class="etapa-check ${prog.apresentacao ? 'done' : ''}" id="check-apresentacao-${num}">${prog.apresentacao ? '<i class="fas fa-check"></i>' : ''}</div>
            </div>
            <div class="etapa-body" id="apresentacao-${num}">
                <p><strong>Bem-vindo(a) ao Módulo ${num}!</strong></p>
                <p>Neste módulo, você irá: ${modulo.descricao}</p>
                <p><strong>Duração estimada:</strong> 2h30 a 3h</p>
                <p><strong>Conteúdo:</strong></p>
                <ul class="objectives-list">
                    <li><i class="fas fa-file-pdf"></i> Material de estudo em PDF</li>
                    <li><i class="fas fa-video"></i> 2 videoaulas práticas</li>
                    <li><i class="fas fa-tasks"></i> Quiz de avaliação com 5 questões</li>
                </ul>
                <button class="btn-primary" onclick="marcarEtapa(${num}, 'apresentacao')"><i class="fas fa-check"></i> Marcar como lido</button>
            </div>
        </div>
        <div class="etapa-card">
            <div class="etapa-header" onclick="toggleEtapa('pdf-${num}')">
                <div class="etapa-title"><i class="fas fa-file-pdf"></i><span>Comece Aqui - Material de Estudo</span></div>
                <div class="etapa-check ${prog.pdf ? 'done' : ''}" id="check-pdf-${num}">${prog.pdf ? '<i class="fas fa-check"></i>' : ''}</div>
            </div>
            <div class="etapa-body" id="pdf-${num}">
                <p>Estude o material teórico do módulo. Após a leitura, marque como concluído.</p>
                <div class="pdf-container">
                    <iframe src="${modulo.pdf}" type="application/pdf"></iframe>
                </div>
                <button class="btn-primary" onclick="marcarEtapa(${num}, 'pdf')"><i class="fas fa-check"></i> Concluí a leitura</button>
            </div>
        </div>
        <div class="etapa-card">
            <div class="etapa-header" onclick="toggleEtapa('video1-${num}')">
                <div class="etapa-title"><i class="fas fa-video"></i><span>Videoaula 1 - ${modulo.video1.titulo}</span></div>
                <div class="etapa-check ${prog.video1 ? 'done' : ''}" id="check-video1-${num}">${prog.video1 ? '<i class="fas fa-check"></i>' : ''}</div>
            </div>
            <div class="etapa-body" id="video1-${num}">
                <div class="video-container"><iframe src="${modulo.video1.url}" allowfullscreen></iframe></div>
                <button class="btn-primary" onclick="marcarEtapa(${num}, 'video1')"><i class="fas fa-check"></i> Assisti à videoaula</button>
            </div>
        </div>
        <div class="etapa-card">
            <div class="etapa-header" onclick="toggleEtapa('video2-${num}')">
                <div class="etapa-title"><i class="fas fa-video"></i><span>Videoaula 2 - ${modulo.video2.titulo}</span></div>
                <div class="etapa-check ${prog.video2 ? 'done' : ''}" id="check-video2-${num}">${prog.video2 ? '<i class="fas fa-check"></i>' : ''}</div>
            </div>
            <div class="etapa-body" id="video2-${num}">
                <div class="video-container"><iframe src="${modulo.video2.url}" allowfullscreen></iframe></div>
                <button class="btn-primary" onclick="marcarEtapa(${num}, 'video2')"><i class="fas fa-check"></i> Assisti à videoaula</button>
            </div>
        </div>
        <div class="etapa-card">
            <div class="etapa-header" onclick="toggleEtapa('quiz-${num}')">
                <div class="etapa-title"><i class="fas fa-tasks"></i><span>Quiz de Avaliação - 5 Questões</span></div>
                <div class="etapa-check ${prog.quiz ? 'done' : ''}" id="check-quiz-${num}">${prog.quiz ? '<i class="fas fa-check"></i>' : ''}</div>
            </div>
            <div class="etapa-body" id="quiz-${num}">
                <div class="quiz-container" id="quiz-container-${num}">${gerarQuizHTML(num)}</div>
            </div>
        </div>
    `;

    document.getElementById('modulo-dynamic-content').innerHTML = html;
    showSection('modulo-content');
}

// ===== GERAR HTML DO QUIZ =====
function gerarQuizHTML(numModulo) {
    const quiz = modulos[numModulo].quiz;
    let html = '<h3 style="margin-bottom: 1.5rem; color: var(--primary);"><i class="fas fa-question-circle"></i> Responda às questões abaixo:</h3>';
    quiz.forEach((q, idx) => {
        html += `
            <div class="quiz-question" id="question-${numModulo}-${idx}">
                <h4>${q.pergunta}</h4>
                <div class="quiz-options">
                    ${q.opcoes.map((op, opIdx) => `
                        <label class="quiz-option" onclick="selecionarOpcao(${numModulo}, ${idx}, ${opIdx})">
                            <input type="radio" name="q${numModulo}-${idx}" value="${opIdx}"><span>${op}</span>
                        </label>
                    `).join('')}
                </div>
                <div class="quiz-feedback" id="feedback-${numModulo}-${idx}"></div>
            </div>
        `;
    });
    html += `<button class="btn-submit-quiz" onclick="corrigirQuiz(${numModulo})"><i class="fas fa-check-circle"></i> Corrigir Quiz</button>
             <div class="quiz-result" id="resultado-quiz-${numModulo}"></div>`;
    return html;
}

function selecionarOpcao(numModulo, idxQuestao, idxOpcao) {
    const question = document.getElementById(`question-${numModulo}-${idxQuestao}`);
    question.querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
    const labels = question.querySelectorAll('.quiz-option');
    labels[idxOpcao].classList.add('selected');
    labels[idxOpcao].querySelector('input').checked = true;
}

function corrigirQuiz(numModulo) {
    const quiz = modulos[numModulo].quiz;
    let acertos = 0;
    let todasRespondidas = true;
    quiz.forEach((q, idx) => {
        const question = document.getElementById(`question-${numModulo}-${idx}`);
        const selecionada = question.querySelector('input[type="radio"]:checked');
        const feedback = document.getElementById(`feedback-${numModulo}-${idx}`);
        const labels = question.querySelectorAll('.quiz-option');
        labels.forEach(l => l.classList.remove('correct', 'incorrect'));
        if (!selecionada) { todasRespondidas = false; return; }
        const respUsuario = parseInt(selecionada.value);
        if (respUsuario === q.correta) {
            acertos++;
            labels[respUsuario].classList.add('correct');
            feedback.className = 'quiz-feedback show correct';
            feedback.innerHTML = '<i class="fas fa-check-circle"></i> Resposta correta!';
        } else {
            labels[respUsuario].classList.add('incorrect');
            labels[q.correta].classList.add('correct');
            feedback.className = 'quiz-feedback show incorrect';
            feedback.innerHTML = `<i class="fas fa-times-circle"></i> Resposta incorreta. A correta é: <strong>${q.opcoes[q.correta]}</strong>`;
        }
    });
    if (!todasRespondidas) { alert('Por favor, responda todas as questões antes de corrigir.'); return; }
    const nota = (acertos / quiz.length) * 10;
    const aprovado = nota >= 6;
    const resultado = document.getElementById(`resultado-quiz-${numModulo}`);
    resultado.className = `quiz-result show ${aprovado ? 'aprovado' : 'reprovado'}`;
    resultado.innerHTML = `
        <h3>${aprovado ? '🎉 Parabéns! Você foi aprovado!' : '📚 Continue estudando!'}</h3>
        <p><strong>Nota: ${nota.toFixed(1)}</strong> (${acertos} de ${quiz.length} questões corretas)</p>
        ${aprovado ? '<p>Você concluiu este módulo com sucesso!</p>' : '<p>Você precisa de nota mínima 6.0 para aprovar. Revise o material e tente novamente.</p>'}
    `;
    if (aprovado) marcarEtapa(numModulo, 'quiz', nota);
    resultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function marcarEtapa(numModulo, etapa, notaQuiz = null) {
    progresso[numModulo][etapa] = true;
    if (notaQuiz !== null) progresso[numModulo].notaQuiz = notaQuiz;
    const check = document.getElementById(`check-${etapa}-${numModulo}`);
    if (check) { check.classList.add('done'); check.innerHTML = '<i class="fas fa-check"></i>'; }
    salvarProgresso();
    atualizarProgressoModulo(numModulo);
    atualizarProgressoTotal();
}

function toggleEtapa(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function atualizarProgressoModulo(numModulo) {
    const prog = progresso[numModulo];
    const etapas = ['apresentacao', 'pdf', 'video1', 'video2', 'quiz'];
    const concluidas = etapas.filter(e => prog[e]).length;
    const percentual = (concluidas / etapas.length) * 100;
    const progressBar = document.getElementById(`progress-${numModulo}`);
    const statusBadge = document.getElementById(`status-${numModulo}`);
    if (progressBar) progressBar.style.width = percentual + '%';
    if (statusBadge) {
        if (percentual === 0) { statusBadge.textContent = 'Não iniciado'; statusBadge.className = 'status-badge'; }
        else if (percentual === 100) { statusBadge.textContent = '✓ Concluído'; statusBadge.className = 'status-badge concluido'; }
        else { statusBadge.textContent = `${Math.round(percentual)}% em andamento`; statusBadge.className = 'status-badge em-andamento'; }
    }
}

function atualizarProgressoTotal() {
    let totalEtapas = 0, concluidas = 0;
    for (let i = 1; i <= 6; i++) {
        const prog = progresso[i];
        ['apresentacao', 'pdf', 'video1', 'video2', 'quiz'].forEach(e => { totalEtapas++; if (prog[e]) concluidas++; });
    }
    const percentual = Math.round((concluidas / totalEtapas) * 100);
    document.getElementById('progresso-total').textContent = percentual + '%';
}

function atualizarTrilha() {
    for (let i = 1; i <= 6; i++) atualizarProgressoModulo(i);
    atualizarProgressoTotal();
}

function salvarProgresso() {
    localStorage.setItem('progressoCurso', JSON.stringify(progresso));
}

document.addEventListener('DOMContentLoaded', () => atualizarTrilha());