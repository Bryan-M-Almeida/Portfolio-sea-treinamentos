document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    let activeTab = null;

    function showTab(tabId) {
        const tabContent = document.getElementById(tabId);
        const tabBtn = document.querySelector(`[data-tab="${tabId}"]`);

        if (!tabContent || !tabBtn) return;

        if (activeTab) {
            const prevContent = document.getElementById(activeTab);
            const prevBtn = document.querySelector(`[data-tab="${activeTab}"]`);
            if (prevContent && prevBtn) {
                prevContent.classList.add('hidden');
                prevBtn.classList.remove('bg-blue-600', 'text-white');
                prevBtn.classList.add('bg-gray-200', 'text-black');
            }
        }

        tabContent.classList.remove('hidden');
        tabBtn.classList.add('bg-blue-600', 'text-white');
        tabBtn.classList.remove('bg-gray-200', 'text-black');

        activeTab = tabId;
    }



    showTab('sobre');

    tabs.forEach(btn => {
        btn.addEventListener('click', () => showTab(btn.dataset.tab));
    });

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            const targetId = link.getAttribute('href').substring(1);
            const tabElement = document.getElementById(targetId);
            tabElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, -80);

            if (tabElement) {
                e.preventDefault();
                showTab(targetId);
                tabElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Menu mobile
const btnMobile = document.getElementById('navToggle');
const menu = document.getElementById('mobileMenu');
const iconOpen = document.getElementById('iconOpen');
const iconClose = document.getElementById('iconClose');

if (btnMobile) {
    btnMobile.addEventListener('click', () => {
        const open = menu.classList.toggle('hidden') === false;
        btnMobile.setAttribute('aria-expanded', open ? 'true' : 'false');
        iconOpen.classList.toggle('hidden', open);
        iconClose.classList.toggle('hidden', !open);
    });
}

const courseInfos = {
    eletrica: {
        title: "Técnico em Elétrica",
        content: "Curso completo para atuar em instalações elétricas residenciais, comerciais e industriais, com foco em manutenção e normas técnicas."
    },
    seguranca: {
        title: "Segurança do Trabalho",
        content: "Capacitação para identificar e prevenir riscos ocupacionais, garantindo a saúde e segurança no ambiente de trabalho."
    },
    rh: {
        title: "Recursos Humanos",
        content: "Formação voltada para gestão de pessoas, processos seletivos, treinamento e desenvolvimento organizacional."
    },
    mecanica: {
        title: "Técnico em Mecânica",
        content: "Curso para manutenção, operação e montagem de máquinas e sistemas mecânicos em diferentes setores."
    },
    adm: {
        title: "Auxiliar Administrativo",
        content: "Formação para executar atividades de apoio em escritórios, rotinas administrativas, atendimento e organização de documentos."
    },
    enfermagem: {
        title: "Auxiliar em Enfermagem",
        content: "Curso para auxiliar profissionais da saúde no cuidado com pacientes, administração de medicamentos e apoio hospitalar."
    },
    eletricista: {
        title: "Eletricista Industrial",
        content: "Capacitação em instalação, operação e manutenção de sistemas elétricos industriais, com foco em automação e segurança."
    },
    equivalencia: {
        title: "Técnico por Equivalência",
        content: "Valide suas experiências e conhecimentos práticos para obter um diploma técnico reconhecido oficialmente."
    },
    eja: {
        title: "EJA Supletivo",
        content: "Ensino para jovens e adultos concluírem o ensino fundamental ou médio de forma rápida e flexível."
    },
    nr: {
        title: "Normas Regulamentadoras",
        content: "Cursos obrigatórios e especializados: NR-10 (eletricidade), NR-11 (transporte), NR-18 (construção), NR-20 (inflamáveis), NR-33 (espaço confinado), NR-34 (indústria naval), NR-35 (trabalho em altura) e NR-37 (plataformas de petróleo)."
    }
};

function toggleInfo(courseKey) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const content = document.getElementById('modal-content');

    title.textContent = courseInfos[courseKey].title;
    content.textContent = courseInfos[courseKey].content;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

const carrossel = document.getElementById('carrossel');
const prevBtnGaleria = document.getElementById('prevBtnGaleria');
const nextBtnGaleria = document.getElementById('nextBtnGaleria');

const scrollAmount = 320;

prevBtnGaleria.addEventListener('click', () => {
    carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

nextBtnGaleria.addEventListener('click', () => {
    carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});