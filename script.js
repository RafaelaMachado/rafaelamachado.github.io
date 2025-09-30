document.addEventListener("DOMContentLoaded", function () {
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
        { "text": "Quero ir pra casa", "icon": "🏠" },
        { "text": "Vamos brincar", "icon": "🎲" },
        { "text": "Que pena que acabou", "icon": "😢" }
      ]
    },
    {
      "name": "Comer e Beber",
      "id": "comer-beber",
      "color": "#FFA07A",
      "image": "assets/comida.png",
      "items": [
        { "text": "Quero comer", "image": "assets/comida.png" },
        { "text": "Quero beber", "icon": "🥤" },
        { "text": "Tenho fome", "icon": "🍔" }
      ]
    },
    {
      "name": "Banheiro",
      "id": "banheiro",
      "color": "#98FB98",
      "icon": "🚽",
      "items": [
        { "text": "Quero ir ao banheiro", "icon": "🚽" },
        { "text": "Terminei", "icon": "✅" },
        { "text": "Preciso de ajuda", "icon": "🙋" }
      ]
    }
  ];

  let voices = window.speechSynthesis.getVoices();
  const selectedVoice = voices.find(v => v.lang === "pt-BR") || null;

  function speak(text) {
    if (!text) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.voice = selectedVoice;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }

  function createTab(category, active = false) {
    const button = document.createElement("button");
    button.className = "tab" + (active ? " active" : "");
    button.dataset.category = category.id;

    if (category.image) {
      const img = document.createElement("img");
      img.src = category.image;
      img.alt = category.name;
      img.style.width = "24px";
      img.style.height = "24px";
      img.style.marginRight = "5px";
      img.onerror = () => img.style.display = "none";
      button.appendChild(img);
    } else if (category.icon) {
      const spanIcon = document.createElement("span");
      spanIcon.textContent = category.icon;
      spanIcon.style.marginRight = "5px";
      button.appendChild(spanIcon);
    }

    const spanText = document.createElement("span");
    spanText.textContent = category.name;
    button.appendChild(spanText);

    tabNav.appendChild(button);
  }

  function createItem(item, categoryColor) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundColor = categoryColor;

    if (item.image) {
      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.text;
      img.onerror = () => {
        img.style.display = "none";
        if (item.icon) {
          const iconDiv = document.createElement("div");
          iconDiv.className = "icon";
          iconDiv.textContent = item.icon;
          card.appendChild(iconDiv);
        }
      };
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
  }

  function createSection(category, active = false) {
    const section = document.createElement("section");
    section.className = "row category" + (active ? " active" : "");
    section.id = category.id;

    category.items.forEach(item => {
      section.appendChild(createItem(item, category.color));
    });

    tabContent.appendChild(section);
  }

  function initializeBoard(json) {
    json.forEach((category, index) => {
      const active = index === 0;
      createTab(category, active);
      createSection(category, active);
    });
  }

  function configureTabSwitch() {
    tabNav.addEventListener("click", e => {
      const tab = e.target.closest(".tab");
      if (!tab) return;

      const activeTab = document.querySelector(".tab.active");
      if (activeTab) activeTab.classList.remove("active");

      tab.classList.add("active");

      const activeSection = document.querySelector(".category.active");
      if (activeSection) activeSection.classList.remove("active");

      const section = document.getElementById(tab.dataset.category);
      if (section) section.classList.add("active");
    });
  }

  initializeBoard(boardJSON);
  configureTabSwitch();
});
