document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing-text");

  const texts = {
    pt: "Sou Tiago, profissional da tecnologia, dedicado a criar soluções tecnológicas eficientes e de alta qualidade. Vamos trabalhar juntos?",
    en: "I'm Tiago, a technology professional dedicated to creating efficient, high-quality tech solutions. Shall we work together?",
  };

  let currentLang = "pt"; // Definição do idioma inicial
  let i = 0;

  function typeText() {
    if (i < texts[currentLang].length) {
      typingElement.textContent += texts[currentLang].charAt(i);
      i++;
      setTimeout(typeText, 50);
    }
  }

  function resetTypingEffect(lang) {
    currentLang = lang;
    i = 0;
    typingElement.textContent = ""; // Limpa o texto atual
    typeText(); // Inicia a digitação novamente com o novo idioma
  }

  typeText(); // Inicia o efeito de digitação no carregamento

  function changeLanguage(lang) {
    document.documentElement.lang = lang;

    // Atualiza os elementos com data-key
    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.getAttribute("data-key");
      element.textContent = translations[lang][key];
    });

    // Reinicia o efeito de digitação para o novo idioma
    resetTypingEffect(lang);
  }

  // Expondo a função globalmente para ser chamada nos botões
  window.changeLanguage = changeLanguage;
});

const translations = {
  pt: {
    intro: "Intro",
    projetos: "Projetos",
    valores: "Valores",
    contato: "Contato",
    hello: "Hello World!",
    code: "Código",
    website: "Site",
    prot: "Protótipo",
    "descricao-projetos":
      "Aqui vão algumas das minhas experiências em projetos. Você pode conferir mais no",
    "titulo-agenda+": "Agenda+ - Aplicativo de Gestão de Eventos",
    "texto-agenda+":
      "Agenda+ é um aplicativo desenvolvido em Flutter como parte do meu projeto final na disciplina de Desenvolvimento Mobile. O objetivo do aplicativo é permitir aos usuários gerenciar seus eventos de maneira prática e organizada, oferecendo funcionalidades para adicionar, editar, visualizar e excluir eventos de forma rápida",
    "titulo-zenith": "Zenith Studio - Website de Estúdio de Tatuagem.",
    "texto-zenith":
      "Zenith Studio é um site desenvolvido para um estúdio de tatuagem, com o objetivo de oferecer uma experiência online intuitiva e informativa para clientes em potencial. O site apresenta uma interface visualmente atraente, com um design moderno que reflete a identidade artística e profissional do estúdio.",
    "stock-titulo":
      "Sistema de Gerenciamento de Estoque e Controle de Compras.",
    "stock-texto":
      "O Sistema de Gerenciamento de Estoque e Controle de Compras é um projeto desenvolvido como parte da minha formação acadêmica. O objetivo principal do sistema é fornecer uma solução eficiente para o controle de inventário e a gestão de compras de uma empresa. O sistema permite que os usuários acompanhem o estoque de produtos, registrem compras e atualizem as quantidades automaticamente, garantindo maior precisão e agilidade no processo.",
    "titulo-debora": "Layout para e-commerce Débora Acessorios.",
    "texto-debora":
      "O protótipo do site Débora Acessórios foi desenvolvido no Figma com o objetivo de criar uma experiência de compra online fluida e atraente para o e-commerce especializado em joias. O projeto busca refletir a elegância e sofisticação das peças da marca, ao mesmo tempo que proporciona aos usuários uma navegação intuitiva e agradável.",
    "titulo-rebeca": "Rebeca Ferrari - Site",
    "texto-rebeca":
      "O site Rebeca Ferrari Psicóloga foi desenvolvido com o objetivo de oferecer uma plataforma digital que reflita a abordagem acolhedora e profissional da psicóloga Rebeca Ferrari. O site foi projetado para facilitar o contato de novos pacientes, oferecer informações sobre os serviços de psicologia, e reforçar a presença online de Rebeca, ajudando-a a atrair mais clientes e expandir seu consultório.",
    "titulo-value1": "Comprometimento com a Qualidade",
    "texto-value1":
      "Acredito que a excelência deve estar presente em cada linha de código. Meu compromisso é entregar soluções que atendam às necessidades do cliente, mas também que sejam robustas, escaláveis e de fácil manutenção. Cada projeto é uma oportunidade de superar expectativas e entregar um trabalho de alta qualidade.",
    "titulo-value2": "Inovação Contínua",
    "texto-value2":
      "O mundo da tecnologia está em constante evolução, e para acompanhar esse ritmo, busco sempre me atualizar com as mais recentes tendências e ferramentas do mercado. Essa busca constante por inovação garante que minhas soluções sejam modernas, eficientes e preparadas para o futuro.",
    "titulo-value3": "Colaboração e Trabalho em Equipe",
    "texto-value3":
      "Embora a programação muitas vezes pareça um trabalho solitário, acredito que o verdadeiro sucesso vem da colaboração. Trabalhar em equipe, compartilhar ideias e aprender com outros profissionais são atitudes fundamentais para criar soluções mais completas e eficientes.",
    "titulo-value4": "Ética e Transparência",
    "texto-value4":
      "A ética no desenvolvimento de software é fundamental. Prezo pela transparência em todas as fases do projeto, desde o planejamento até a entrega final, garantindo que o cliente esteja sempre ciente do andamento do trabalho e das soluções propostas. Transparência é essencial para construir uma relação de confiança.",
    "texto-value5":
      "Meus valores são a base que guia cada decisão que tomo ao longo do meu trabalho como desenvolvedor. Eles refletem não apenas meu compromisso com a qualidade técnica, mas também minha postura profissional e ética. Acredito que, ao seguir esses princípios, posso não apenas criar soluções tecnológicas de impacto, mas também construir relações duradouras e de confiança com meus clientes e colegas de equipe. Cada projeto que desenvolvo é uma oportunidade de aplicar esses valores e criar algo significativo para todos os envolvidos.",
  },
  en: {
    intro: "Intro",
    projetos: "Projects",
    valores: "Values",
    contato: "Contact",
    hello: "Hello World!",
    code: "Code",
    prot: "Prototype",
    website: "Website",
    "descricao-projetos":
      "Here are some of my project experiences. You can check out more on",
    "titulo-agenda+": "Agenda + - Event Management App",
    "texto-agenda+":
      "Agenda+ is an app developed in Flutter as part of my final project in the Mobile Development course. The app aims to help users manage their events in a practical and organized way, offering features to quickly add, edit, view, and delete events.",
    "titulo-zenith": "Zenith Studio - Tattoo Studio Website.",
    "texto-zenith":
      "Zenith Studio is a website developed for a tattoo studio, aiming to provide an intuitive and informative online experience for potential clients. The site features a visually appealing interface with a modern design that reflects the artistic and professional identity of the studio.",
    "stock-titulo": "Stock Management and Purchase Control System.",
    "stock-texto":
      "The Stock Management and Purchase Control System is a project developed as part of my academic training. The main objective of the system is to provide an efficient solution for inventory control and company purchase management. The system allows users to track product stock, record purchases, and automatically update quantities, ensuring greater accuracy and efficiency in the process.",
    "titulo-debora": "Layout for Débora Accessories E-commerce.",
    "texto-debora":
      "The Débora Accessories website prototype was developed in Figma with the goal of creating a smooth and engaging online shopping experience for the jewelry-focused e-commerce. The project aims to reflect the elegance and sophistication of the brand's pieces while providing users with an intuitive and pleasant navigation experience.",
    "titulo-rebeca": "Rebeca Ferrari - Website",
    "texto-rebeca":
      "The Rebeca Ferrari Psychologist website was developed to provide a digital platform that reflects the welcoming and professional approach of psychologist Rebeca Ferrari. The website was designed to facilitate contact with new patients, provide information about psychology services, and strengthen Rebeca's online presence, helping her attract more clients and expand her practice.",
    "titulo-value1": "Commitment to Quality",
    "texto-value1":
      "I believe that excellence should be present in every line of code. My commitment is to deliver solutions that meet the client's needs, but also that are robust, scalable, and easy to maintain. Every project is an opportunity to exceed expectations and deliver high-quality work.",
    "titulo-value2": "Continuous Innovation",
    "texto-value2":
      "The world of technology is constantly evolving, and to keep up with this pace, I always seek to stay updated with the latest trends and tools in the market. This constant pursuit of innovation ensures that my solutions are modern, efficient, and prepared for the future.",
    "titulo-value3": "Collaboration and Teamwork",
    "texto-value3":
      "Although programming often seems like a solitary job, I believe true success comes from collaboration. Working in a team, sharing ideas, and learning from other professionals are essential actions to create more complete and efficient solutions.",
    "titulo-value4": "Ethics and Transparency",
    "texto-value4":
      "Ethics in software development is essential. I value transparency in all phases of the project, from planning to final delivery, ensuring that the client is always aware of the progress and proposed solutions. Transparency is key to building a trusting relationship.",
    "texto-value5":
      "My values are the foundation that guides every decision I make in my work as a developer. They reflect not only my commitment to technical quality but also my professional and ethical stance. I believe that by following these principles, I can not only create impactful technological solutions but also build lasting and trustworthy relationships with my clients and team members. Every project I develop is an opportunity to apply these values and create something meaningful for everyone involved.",
  },
};

function changeLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-key]").forEach((element) => {
    const key = element.getAttribute("data-key");
    element.textContent = translations[lang][key];
  });
}

// Theme switcher
const themeToggle = document.getElementById("theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Verifica o tema salvo ou preferência do sistema
function checkTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.setAttribute("data-theme", savedTheme);
    updateIcon(savedTheme);
  } else if (prefersDarkScheme.matches) {
    document.body.setAttribute("data-theme", "light");
    updateIcon("light");
  }
}

// Atualiza o ícone do botão
function updateIcon(theme) {
  const icon = themeToggle.querySelector("i");
  if (theme === "dark") {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// Alterna entre temas
themeToggle.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    updateIcon("light");
  } else {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    updateIcon("dark");
  }
});

// Verifica o tema ao carregar a página
document.addEventListener("DOMContentLoaded", checkTheme);

// Observa mudanças na preferência do sistema (se nenhum tema foi salvo)
prefersDarkScheme.addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    const newTheme = e.matches ? "dark" : "light";
    document.body.setAttribute("data-theme", newTheme);
    updateIcon(newTheme);
  }
});
