document.addEventListener("DOMContentLoaded", () => {
  const tabNav = document.getElementById("tab-nav");
  const tabContent = document.getElementById("tab-content");

  const boardJSON = [
    {
      "name": "Início",
      "id": "inicio",
      "color": "#FFB6C1",
      "icon": "🏠",
      "items": [
        { "text": "Eu sou a Laura", "image": "assets/eu.jpeg" },
        { "text": "Quero ir pra casa", "icon": "🏠🚶‍♀️" },
        { "text": "Vamos brincar", "icon": "🎲🤹‍♂️" },
        { "text": "Quero mais", "icon": "🤲😋" },
        { "text": "Que pena que acabou", "icon": "😞💔" },
        { "text": "Quero comer", "icon": "🍎🍌" },
        { "text": "Quero dormir", "icon": "😴🛌" },
        { "text": "Vamos escolher outro", "icon": "🔄🤔" },
        { "text": "Guarda guarda guarda", "icon": "😢" },
        { "text": "Eu gosto disso", "icon": "😊❤️" },
        { "text": "Não quero mais", "icon": "🙅‍♀️❌" },
        { "text": "Quero àgua", "icon": "💧🥤" },
        { "text": "Vamos passear", "icon": "🚶‍♂️🌳" },
        { "text": "Vamos parar", "icon": "✋🛑" },
        { "text": "Vamos ouvir música", "icon": "🎵🎧" },
        { "text": "Eu não gostei", "icon": "😕👎" },
        { "text": "Quero ir no banheiro", "icon": "🚻🚽" },
        { "text": "Estou sentindo dor", "icon": "😣🤕" },
        { "text": "Preciso de ajuda", "icon": "🆘🙋🏻‍♀️" },
        { "text": "Preciso me acalmar", "icon": "😌🧘" },
        { "text": "Quero carinho", "icon": "🤗💞" },
        { "text": "Estou brava", "icon": "😡🔥" },
        { "text": "Estou feliz", "icon": "😄🌞" },
        { "text": "Estou triste", "icon": "😢☔" },
        { "text": "Que nojo", "icon": "🤢🤮" },
        { "text": "Que susto", "icon": "😱" },
        { "text": "Muito bem", "icon": "👍👏" },
      ]
    },
    {
      "name": "Comer e Beber",
      "id": "comer-beber",
      "color": "#FFA07A",
      "image": "assets/comida.png",
      "items": [
        { "text": "Hora do lanche", "image": "assets/comida.png" },
        { "text": "Vamos abrir", "icon": "🥤" },
        { "text": "Vamos fechar", "icon": "🍔" },
        { "text": "Quero mais", "icon": "🍔" },
        { "text": "Vamos jogar no lixo", "icon": "🍔" },
        { "text": "Acabou", "icon": "🍔" },
        { "text": "Estou com fome", "icon": "🍔" },
        { "text": "Guarda guarda guarda", "icon": "🍔" },
        { "text": "Hummm que delícia", "icon": "🍔" },
        { "text": "Não quero mais", "icon": "🍔" },
        { "text": "Estou com sede", "icon": "🍔" },
        { "text": "Eu não gostei", "icon": "🍔" },
        { "text": "Frutas", "icon": "🍔" },
        { "text": "Bolo", "icon": "🍔" },
        { "text": "Preciso de ajuda", "icon": "🍔" },
        { "text": "Comidas", "icon": "🍔" },
        { "text": "Lanche", "icon": "🍔" },
        { "text": "Leite", "icon": "🍔" },
        { "text": "Vamos escovar os dentes", "icon": "🍔" },
        { "text": "Vamos lavar as mãos", "icon": "🍔" },
        { "text": "Muito bem", "icon": "🍔" },

      ]
    },
    {
      "name": "Banheiro",
      "id": "banheiro",
      "color": "#98FB98",
      "icon": "🚽",
      "items": [
        { "text": "Vamos ao banheiro", "icon": "🚽" },
        { "text": "Vamos fazer coco", "icon": "🚽" },
        { "text": "Vamos escovar os dentes", "icon": "✅" },
        { "text": "Vamos limpar", "icon": "🙋" },
        { "text": "Vamos jogar no lixo", "icon": "🙋" },
        { "text": "Vamos lavar as mãos", "icon": "🙋" },
        { "text": "Vamos fazer xixi", "icon": "🙋" },
        { "text": "Não quero mais", "icon": "🙋" },
        { "text": "Vamos tomar banho", "icon": "🙋" },
        { "text": "PReciso de ajuda", "icon": "🙋" },
        { "text": "Eca que nojo", "icon": "🙋" },
        { "text": "Muito bem", "icon": "🙋" },
      ]
    },
    {
      "name": "Brincar",
      "id": "brincar",
      "color": "#98FB98",
      "icon": "🚽",
      "items": [
        { "text": "Minha vez", "icon": "🚽" },
        { "text": "Abrir", "icon": "🚽" },
        { "text": "Me dá", "icon": "✅" },
        { "text": "Quero mais", "icon": "🙋" },
        { "text": "Acabou", "icon": "🙋" },
        { "text": "Pegar as bonecas", "icon": "🙋" },
        { "text": "Guarda guarda guarda", "icon": "🙋" },
        { "text": "Eu gosto disso", "icon": "🙋" },
        { "text": "Não quero mais", "icon": "🙋" },
        { "text": "Ursinhos", "icon": "🙋" },
        { "text": "PReciso Jogos de encaixe", "icon": "🙋" },
        { "text": "Vamos de novo", "icon": "🙋" },
        { "text": "Brincar de comidinha", "icon": "🙋" },
        { "text": "Vamos desenhar", "icon": "🙋" },
        { "text": "Preciso de ajuda", "icon": "🙋" },
        { "text": "Vamos colocar uma peça", "icon": "🙋" },
        { "text": "Animais", "icon": "🙋" },
        { "text": "Vamos brincar de bola", "icon": "🙋" },
        { "text": "Quebra cabeça", "icon": "🙋" },
        { "text": "Carrinhos", "icon": "🙋" },
        { "text": "Me empresta", "icon": "🙋" },
        { "text": "O ou", "icon": "🙋" },
        { "text": "Muito bem", "icon": "🙋" },
      ]
    },
    {
      "name": "Lugares",
      "id": "lugares",
      "color": "#98FB98",
      "icon": "🚽",
      "items": [
        { "text": "Quero ir pra casa", "icon": "🚽" },
        { "text": "Shopping", "icon": "🚽" },
        { "text": "Quero mais", "icon": "✅" },
        { "text": "Superarsi", "icon": "🙋" },
        { "text": "Escola", "icon": "🙋" },
        { "text": "Casa dos avós", "icon": "🙋" },
        { "text": "Eu gosto disso", "icon": "🙋" },
        { "text": "Vamos passear", "icon": "🙋" },
        { "text": "Casa do tio Murilo", "icon": "🙋" },
        { "text": "Eu não gostei", "icon": "🙋" },
        { "text": "Preciso de ajuda", "icon": "🙋" },
        { "text": "Estou feliz", "icon": "🙋" },
      ]
    },
  ];

  function initVoices() {
    const voices = window.speechSynthesis.getVoices();
    
    const ptBRVoices = voices.filter(v => v.lang === "pt-BR");

    selectedVoice = ptBRVoices.find(v => v.name.includes("Francisca")) 
                    || ptBRVoices[0]
                    || null;

    console.log("Voz selecionada:", selectedVoice?.name || "nenhuma");
  }

  function waitForVoices() {
    return new Promise(resolve => {
      let voices = speechSynthesis.getVoices();
      if (voices.length) return resolve(voices);
      speechSynthesis.onvoiceschanged = () => resolve(speechSynthesis.getVoices());
    });
  }

  let selectedVoice = null;

  async function initVoices() {
    const voices = await waitForVoices();
    const ptBRVoices = voices.filter(v => v.lang === "pt-BR");

    selectedVoice = ptBRVoices.find(v => v.name.includes("Francisca")) 
                  || ptBRVoices[0]
                  || null;

    console.log("Voz selecionada:", selectedVoice?.name || "nenhuma");
  }

  initVoices();

  function speak(text) {
    if (!text || !selectedVoice) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.voice = selectedVoice;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }

  const createTab = (category, isActive = false) => {
    const button = document.createElement("button");
    button.className = "tab" + (isActive ? " active" : "");
    button.dataset.category = category.id;

    if (category.image) {
      const img = document.createElement("img");
      img.src = category.image;
      img.alt = category.name;
      img.onerror = () => img.style.display = "none";
      button.appendChild(img);
    } else if (category.icon) {
      const spanIcon = document.createElement("span");
      spanIcon.textContent = category.icon;
      button.appendChild(spanIcon);
    }

    const spanText = document.createElement("span");
    spanText.textContent = category.name;
    button.appendChild(spanText);

    tabNav.appendChild(button);
  };

  const createItem = (item, color) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundColor = color;

    if (item.image) {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.text;
      img.onerror = () => img.style.display = "none";
      card.appendChild(img);
    } else if (item.icon) {
      const iconDiv = document.createElement("div");
      iconDiv.className = "icon";
      iconDiv.textContent = item.icon;
      card.appendChild(iconDiv);
    }

    const span = document.createElement("span");
    span.textContent = item.text;
    card.appendChild(span);

    card.addEventListener("click", () => speak(item.text));

    return card;
  };

  const createSection = (category, isActive = false) => {
    const section = document.createElement("section");
    section.className = "category" + (isActive ? " active" : "");
    section.id = category.id;

    const itemsContainer = document.createElement("div");
    itemsContainer.className = "items-container";
    category.items.forEach(item => itemsContainer.appendChild(createItem(item, category.color)));

    const fixedContainer = document.createElement("div");
    fixedContainer.className = "fixed-container";
    const fixedItems = [
      { text: "Preciso de ajuda", icon: "🙋" },
      { text: "Sim", icon: "✅" },
      { text: "Não", icon: "❌" },
      { text: "Quero mais", icon: "🍀" }
    ];
    fixedItems.forEach(item => fixedContainer.appendChild(createItem(item, category.color)));

    section.append(itemsContainer, fixedContainer);
    tabContent.appendChild(section);
  };


  const initializeBoard = json => {
    json.forEach((category, i) => {
      const isActive = i === 0;
      createTab(category, isActive);
      createSection(category, isActive);
    });
  };

  tabNav.addEventListener("click", e => {
    const tab = e.target.closest(".tab");
    if (!tab) return;

    document.querySelector(".tab.active")?.classList.remove("active");
    tab.classList.add("active");

    document.querySelector(".category.active")?.classList.remove("active");
    const section = document.getElementById(tab.dataset.category);
    section?.classList.add("active");
  });

  initializeBoard(boardJSON);
});

