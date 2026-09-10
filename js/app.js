/* ==============================================================
   GUARDIÃS DOS SABERES — JAVASCRIPT PURO
   Este arquivo guarda os dados editáveis e as interações do site.
   Não é necessário React, Node.js ou Python para utilizá-lo.
================================================================ */

/* ==============================================================
   1. PLANTAS DO CATÁLOGO — ADICIONE UMA NOVA PLANTA AQUI
   Copie um objeto inteiro, cole antes do ] final e altere os dados.

   Campos:
   - id: texto único, sem espaços nem acentos; ex.: "hortela".
   - image: imagem dentro da pasta assets/.
   - audioSrc: nome/caminho do arquivo MP3; deixe null se ainda não houver áudio.
   - guardianName: nome autorizado da guardiã; deixe null enquanto estiver pendente.
================================================================ */
const PLANTS = [
  {
    id: "arruda",
    name: "Arruda",
    scientific: "Ruta graveolens",
    family: "Rutaceae",
    category: "Aromáticas",
    image: "assets/guardias-arruda.jpg",
    description: "Uma planta de presença marcante nos quintais e nas memórias de cuidado compartilhadas entre gerações.",
    status: "Ficha em revisão",
    statusTone: "warm",
    uses: "Proteção e cuidado — relato cultural",
    audioSrc: null,
    guardianName: null,
  },
  {
    id: "capim-santo",
    name: "Capim-santo",
    scientific: "Cymbopogon citratus",
    family: "Poaceae",
    category: "Aromáticas",
    image: "assets/guardias-capim-santo.jpg",
    description: "Folhas longas que perfumam a casa e revelam como cultivo, conversa e acolhimento caminham juntos.",
    status: "Identificação conferida",
    statusTone: "green",
    uses: "Bem-estar — relato cultural",
    audioSrc: null,
    guardianName: null,
  },
  {
    id: "mastruz",
    name: "Mastruz",
    scientific: "Dysphania ambrosioides",
    family: "Amaranthaceae",
    category: "Nativas e cultivadas",
    image: "assets/guardias-mastruz.jpg",
    description: "Pequena, resistente e muito lembrada: uma entrada para investigar nomes, ambientes e histórias de quintal.",
    status: "Relato autorizado",
    statusTone: "clay",
    uses: "Memória e território — relato cultural",
    audioSrc: null,
    guardianName: null,
  },
];

/* ==============================================================
   2. PERFIS MODELO DAS GUARDIÃS
   Todos estes dados são FICTÍCIOS e existem apenas como modelo visual.
   Para publicar uma guardiã real, substitua nome, foto, história,
   práticas, plantas, áudio e a frase de modelo por dados autorizados.
================================================================ */
const MODEL_PROFILES = [
  {
    id: "perfil-quilombola",
    badge: "PERFIL MODELO",
    name: "Dona Maria do Dendê",
    role: "Quilombola · conhecedora de quintais",
    image: "assets/perfil-modelo-quilombola.png",
    imageAlt: "Ilustração de uma mulher cuidando de plantas medicinais em vasos de barro",
    age: "62 anos",
    territory: "Quintal comunitário — Bacabeira",
    bio: "Perfil ilustrativo de uma guardiã que aprendeu os nomes das plantas com as mulheres mais velhas da família e hoje cuida de um quintal onde cada vaso tem uma história. Este texto de exemplo mostra como a trajetória real será contada, com as palavras escolhidas pela própria participante.",
    practices: ["Reconhecimento e cultivo de plantas medicinais do quintal", "Transmissão dos saberes para filhos e netos", "Preparos caseiros tradicionais e memória do território"],
    plants: ["Arruda", "Mastruz", "Capim-santo"],
    quote: "Perfil modelo — aguardando a história autorizada de uma guardiã real da comunidade.",
    audioSrc: null,
    audioNote: "O relato oral será publicado após entrevista e autorização",
  },
  {
    id: "perfil-benzedeira",
    badge: "PERFIL MODELO",
    name: "Dona Rosa da Palavra",
    role: "Benzedeira · cuidado pela palavra",
    image: "assets/perfil-modelo-benzedeira.png",
    imageAlt: "Ilustração de uma mulher com as mãos unidas em gesto de benção",
    age: "58 anos",
    territory: "Casa de rezar — Bacabeira",
    bio: "Perfil ilustrativo de uma benzedeira que recebe quem chega com uma palavra, um gesto e uma vela acesa. Aqui será registrada a forma como a guardiã real descreve sua própria prática, incluindo o que ela autorizar compartilhar e o que deve permanecer no espaço da intimidade.",
    practices: ["Acolhimento pela escuta e pela palavra", "Benzimentos tradicionais e momentos de cuidado", "Memória das orações aprendidas na família"],
    plants: ["Arruda", "Capim-santo"],
    quote: "Perfil modelo — aguardando a história autorizada de uma benzedeira real da comunidade.",
    audioSrc: null,
    audioNote: "O relato oral será publicado após entrevista e autorização",
  },
  {
    id: "perfil-quebradeira",
    badge: "PERFIL MODELO",
    name: "Dona Zefa do Coco",
    role: "Quebradeira de coco · saberes da mata",
    image: "assets/perfil-modelo-quebradeira.png",
    imageAlt: "Ilustração de uma mulher segurando um coco babaçu entre coqueiros",
    age: "47 anos",
    territory: "Babaçuais — Bacabeira",
    bio: "Perfil ilustrativo de uma quebradeira que aprendeu o tempo do fruto, o caminho da mata e o jeito certo de quebrar o coco com as mulheres que vieram antes dela. Este espaço receberá a trajetória real, contada com as palavras e os limites que a participante escolher.",
    practices: ["Leitura do tempo e dos ciclos da mata", "Quebra do coco e aproveitamento integral do fruto", "Sustentação das famílias e memória dos babaçuais"],
    plants: ["Babaçu", "Plantas do entorno do coqueiral"],
    quote: "Perfil modelo — aguardando a história autorizada de uma quebradeira real da comunidade.",
    audioSrc: null,
    audioNote: "O relato oral será publicado após entrevista e autorização",
  },
];

/* ==============================================================
   3. LINHA DO TEMPO DE GRAZIELA BARROSO
   Para acrescentar um marco histórico, copie um objeto e use fatos
   conferidos em fontes institucionais.
================================================================ */
const GRAZIELA_TIMELINE = [
  { year: "1912", title: "Onde tudo começa", text: "Graziela Maciel Barroso nasce em 11 de abril, em Corumbá, no então Mato Grosso." },
  { year: "1944", title: "Primeiros gestos de campo", text: "Começa a trabalhar como herborizadora e separadora de sementes no Horto Florestal." },
  { year: "1946", title: "Uma porta aberta", text: "É aprovada em concurso público para naturalista e torna-se a primeira mulher contratada por concurso no Jardim Botânico do Rio de Janeiro." },
  { year: "1962", title: "Aprender em movimento", text: "Conclui o curso de História Natural aos 50 anos, depois de ingressar na graduação aos 47." },
  { year: "1973", title: "Doutorado aos 61", text: "Defende sua tese na Unicamp e amplia a atuação como professora e orientadora de novas gerações." },
  { year: "1978—1999", title: "Obras que permanecem", text: "Publica referências como os três volumes de Sistemática de angiospermas do Brasil e Frutos e sementes." },
  { year: "2003", title: "Um legado vivo", text: "Morre aos 92 anos, ainda vinculada ao Jardim Botânico e reconhecida por sua produção e formação de pesquisadores." },
];

const state = { category: "Todas", search: "", activePlant: null };
const byId = (id) => document.getElementById(id);

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;" })[character]);
}

function showToast(message) {
  const toast = byId("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 3200);
}

function updatePlantCounters() {
  ["plant-count-nav", "plant-count-hero", "plant-count-title"].forEach((id) => { const element = byId(id); if (element) element.textContent = String(PLANTS.length).padStart(2, "0"); });
}

function renderCategories() {
  const root = byId("category-tabs");
  if (!root) return;
  const categories = ["Todas", ...new Set(PLANTS.map((plant) => plant.category))];
  root.innerHTML = categories.map((category) => `<button type="button" class="${state.category === category ? "active" : ""}" data-category="${escapeHTML(category)}">${escapeHTML(category)}</button>`).join("");
}

function filteredPlants() {
  const query = state.search.trim().toLowerCase();
  return PLANTS.filter((plant) => {
    const categoryMatches = state.category === "Todas" || plant.category === state.category;
    const text = `${plant.name} ${plant.scientific} ${plant.family}`.toLowerCase();
    return categoryMatches && (!query || text.includes(query));
  });
}

function renderPlants() {
  const grid = byId("plant-grid");
  const empty = byId("empty-state");
  if (!grid || !empty) return;
  const list = filteredPlants();
  grid.innerHTML = list.map((plant, index) => `
    <article class="plant-card">
      <div class="plant-image"><img src="${escapeHTML(plant.image)}" alt="Detalhe botânico da planta ${escapeHTML(plant.name)}" /><small>FICHA ${String(index + 1).padStart(2, "0")}</small><button class="plant-open" type="button" data-open-plant="${escapeHTML(plant.id)}" aria-label="Abrir ficha de ${escapeHTML(plant.name)}">↗</button></div>
      <div class="plant-body"><div class="plant-meta"><span class="status ${escapeHTML(plant.statusTone)}">${escapeHTML(plant.status)}</span><em>${escapeHTML(plant.family)}</em></div><h3>${escapeHTML(plant.name)}</h3><p class="scientific">${escapeHTML(plant.scientific)}</p><p>${escapeHTML(plant.description)}</p><button class="open-link" type="button" data-open-plant="${escapeHTML(plant.id)}">Ler a ficha ›</button></div>
    </article>`).join("");
  empty.hidden = list.length !== 0;
}

function openPlant(plantId) {
  const plant = PLANTS.find((item) => item.id === plantId);
  if (!plant) return;
  state.activePlant = plant;
  byId("modal-image").src = plant.image;
  byId("modal-image").alt = `Detalhe botânico de ${plant.name}`;
  const audio = plant.audioSrc
    ? `<audio class="audio-native" controls src="${escapeHTML(plant.audioSrc)}">Seu navegador não suporta áudio.</audio>`
    : `<div class="audio-pending"><span>◖</span><div><b>Relato oral em preparação</b><span>Aguardando autorização e publicação da voz da guardiã.</span></div><em>EM BREVE</em></div>`;
  byId("modal-content").innerHTML = `
    <span class="status ${escapeHTML(plant.statusTone)}">${escapeHTML(plant.status)}</span>
    <h2 id="modal-title">${escapeHTML(plant.name)}</h2><em>${escapeHTML(plant.scientific)}</em>
    <p class="modal-lead">${escapeHTML(plant.description)}</p>
    <div class="modal-data"><div><span>Família botânica</span><b>${escapeHTML(plant.family)}</b></div><div><span>Registro</span><b>${escapeHTML(plant.uses)}</b></div><div><span>Guardiã do relato</span><b>${escapeHTML(plant.guardianName || "Aguardando entrevista autorizada")}</b></div></div>
    <div class="modal-alert">✦ Esta entrada registra um conhecimento cultural. A identificação e as informações científicas devem ser conferidas por profissionais antes de qualquer uso.</div>
    ${audio}
    <button class="qr-button" type="button" id="open-qr">▦ Gerar QR Code</button>`;
  byId("plant-modal").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = byId(modalId);
  if (modal) modal.hidden = true;
  document.body.style.overflow = "";
}

function openQr() {
  if (!state.activePlant) return;
  const url = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, "")}index.html#planta-${state.activePlant.id}`;
  byId("qr-description").textContent = `Imprima este código e cole-o junto à planta para abrir a ficha de ${state.activePlant.name}.`;
  byId("qr-image").src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(url)}`;
  byId("qr-image").alt = `QR Code da ficha ${state.activePlant.name}`;
  byId("qr-url").textContent = url;
  closeModal("plant-modal");
  byId("qr-modal").hidden = false;
  document.body.style.overflow = "hidden";
}

/* ==============================================================
   4. ABERTURA A PARTIR DE QR CODE
   Cada QR aponta para: index.html#planta-id-da-planta
   Exemplo: index.html#planta-arruda

   Esta função lê esse endereço quando a página abre e mostra a ficha
   correta automaticamente. Não altere o texto "planta-"; altere apenas
   o campo id de cada planta na lista PLANTS, no início deste arquivo.
================================================================ */
function openPlantFromUrl() {
  const match = decodeURIComponent(window.location.hash).match(/^#planta-([a-z0-9-]+)$/i);
  if (!match) return;

  const plantId = match[1];
  const plantExists = PLANTS.some((plant) => plant.id === plantId);
  if (!plantExists) return;

  // Garante que a ficha apareça mesmo se a pessoa tiver usado filtros antes.
  state.category = "Todas";
  state.search = "";
  const search = byId("plant-search");
  if (search) search.value = "";
  renderCategories();
  renderPlants();

  // Rolagem e modal são separados para a página terminar de renderizar primeiro.
  byId("catalogo")?.scrollIntoView({ behavior: "auto", block: "start" });
  window.setTimeout(() => openPlant(plantId), 120);
}

function renderProfiles() {
  const root = byId("profile-grid");
  if (!root) return;
  root.innerHTML = MODEL_PROFILES.map((profile, index) => `
    <article class="profile-card" id="${escapeHTML(profile.id)}">
      <div class="profile-photo"><img src="${escapeHTML(profile.image)}" alt="${escapeHTML(profile.imageAlt)}" loading="lazy" /><span class="profile-badge">${escapeHTML(profile.badge)}</span><span class="profile-index">${String(index + 1).padStart(2, "0")}</span></div>
      <div class="profile-body"><div class="profile-meta"><span>${escapeHTML(profile.role)}</span><span>${escapeHTML(profile.age)} · ${escapeHTML(profile.territory)}</span></div><h3>${escapeHTML(profile.name)}</h3><p class="profile-bio">${escapeHTML(profile.bio)}</p>
      <div class="profile-block"><span>Práticas e saberes</span>${profile.practices.map((practice) => `<div class="practice">${escapeHTML(practice)}</div>`).join("")}</div>
      <div class="profile-block"><span>Plantas relacionadas</span><div class="plants">${profile.plants.map((plant) => `<span>${escapeHTML(plant)}</span>`).join("")}</div></div>
      <div class="profile-audio"><span>◖</span><div><b>Relato oral</b><span>${escapeHTML(profile.audioSrc ? "Áudio disponível nesta ficha" : profile.audioNote)}</span></div></div>
      <p class="profile-quote"><em>${escapeHTML(profile.quote)}</em></p></div>
    </article>`).join("");
}

function renderTimeline() {
  const root = byId("timeline");
  if (!root) return;
  root.innerHTML = GRAZIELA_TIMELINE.map((event, index) => `<article class="timeline-event"><span class="timeline-year">${escapeHTML(event.year)}</span><span class="timeline-dot"></span><div class="timeline-card"><small>MARCO ${String(index + 1).padStart(2, "0")}</small><h3>${escapeHTML(event.title)}</h3><p>${escapeHTML(event.text)}</p></div></article>`).join("");
}

function enableNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) toggle.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); });
  document.querySelectorAll(".main-nav a").forEach((link) => link.addEventListener("click", () => nav?.classList.remove("open")));
}

function enableHomeInteractions() {
  const search = byId("plant-search");
  search?.addEventListener("input", (event) => { state.search = event.target.value; renderPlants(); });
  byId("clear-search")?.addEventListener("click", () => { state.search = ""; search.value = ""; renderPlants(); });
  byId("category-tabs")?.addEventListener("click", (event) => { const button = event.target.closest("[data-category]"); if (!button) return; state.category = button.dataset.category; renderCategories(); renderPlants(); });
  document.addEventListener("click", (event) => { const trigger = event.target.closest("[data-open-plant]"); if (trigger) openPlant(trigger.dataset.openPlant); });
  [byId("show-all-plants"), document.querySelector("[data-action='show-all']")].forEach((button) => button?.addEventListener("click", () => { state.category = "Todas"; state.search = ""; if (search) search.value = ""; renderCategories(); renderPlants(); byId("catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" }); showToast("Todas as entradas do catálogo estão visíveis."); }));
  byId("plant-modal")?.addEventListener("click", (event) => { if (event.target === byId("plant-modal")) closeModal("plant-modal"); });
  byId("qr-modal")?.addEventListener("click", (event) => { if (event.target === byId("qr-modal")) closeModal("qr-modal"); });
  document.addEventListener("click", (event) => { const close = event.target.closest("[data-close]"); if (close) closeModal(close.dataset.close); if (event.target.id === "open-qr") openQr(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeModal("plant-modal"); closeModal("qr-modal"); } });
}

document.addEventListener("DOMContentLoaded", () => {
  enableNavigation();
  updatePlantCounters();
  renderCategories();
  renderPlants();
  renderProfiles();
  renderTimeline();
  enableHomeInteractions();
  openPlantFromUrl();

  // Permite testar outro QR Code sem recarregar a página inteira.
  window.addEventListener("hashchange", openPlantFromUrl);
});
