function getPromptTitle(promptBox) {
  let cursor = promptBox.previousElementSibling;
  while (cursor) {
    if (/^H[2-4]$/.test(cursor.tagName)) return cursor.innerText.trim();
    cursor = cursor.previousElementSibling;
  }

  const sectionTitle = promptBox.closest("section")?.querySelector("h2");
  return sectionTitle ? sectionTitle.innerText.trim() : "예시 프롬프트";
}

function buildPromptCollection() {
  const collection = document.getElementById("prompt-collection-list");
  const indexList = document.getElementById("prompt-index-list");
  const promptCount = document.getElementById("prompt-count");
  if (!collection) return;

  const prompts = [...document.querySelectorAll(".prompt-box pre[id]")].filter(
    (prompt) => !prompt.closest("#prompt-collection")
  );

  collection.innerHTML = "";
  if (indexList) indexList.innerHTML = "";
  if (promptCount) promptCount.innerText = `총 ${prompts.length}개 프롬프트`;

  const groups = new Map();

  prompts.forEach((prompt, index) => {
    const promptBox = prompt.closest(".prompt-box");
    const sectionTitle = prompt.closest("section")?.querySelector("h2")?.innerText.trim() || "";
    const promptTitle = getPromptTitle(promptBox);
    const promptNumber = String(index + 1).padStart(2, "0");
    const cardId = `prompt-card-${prompt.id}`;

    const card = document.createElement("article");
    card.className = "prompt-card";
    card.id = cardId;

    const header = document.createElement("div");
    header.className = "prompt-card-header";

    const title = document.createElement("div");
    title.className = "prompt-card-title";
    title.innerHTML = `<strong>${promptNumber}. ${promptTitle}</strong><span>${sectionTitle}</span>`;

    const button = document.createElement("button");
    button.type = "button";
    button.dataset.copySource = prompt.id;
    button.innerText = "복사";

    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.innerText = prompt.innerText.trim();
    pre.appendChild(code);

    header.append(title, button);
    card.append(header, pre);
    collection.appendChild(card);

    if (!groups.has(sectionTitle)) groups.set(sectionTitle, []);
    groups.get(sectionTitle).push({ number: promptNumber, title: promptTitle, cardId });
  });

  if (!indexList) return;

  groups.forEach((items, sectionTitle) => {
    const group = document.createElement("article");
    group.className = "prompt-index-card";

    const heading = document.createElement("h3");
    heading.innerText = sectionTitle;

    const count = document.createElement("span");
    count.innerText = `${items.length}개`;

    const list = document.createElement("ol");
    items.forEach((item) => {
      const row = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${item.cardId}`;
      link.innerText = `${item.number}. ${item.title}`;
      row.appendChild(link);
      list.appendChild(row);
    });

    group.append(heading, count, list);
    indexList.appendChild(group);
  });
}

function setupCopyButtons() {
  const copyButtons = document.querySelectorAll("[data-copy-target], [data-copy-source]");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.dataset.copyTarget || button.dataset.copySource;
      const target = document.getElementById(targetId);
      if (!target) return;

      const text = target.innerText.trim();
      await navigator.clipboard.writeText(text);

      const originalText = button.innerText;
      button.innerText = "완료";
      button.classList.add("copied");

      window.setTimeout(() => {
        button.innerText = originalText;
        button.classList.remove("copied");
      }, 1200);
    });
  });
}

buildPromptCollection();
setupCopyButtons();

const sidebarToggle = document.querySelector(".sidebar-toggle");
const sidebarStateKey = "codex-playbook-sidebar-collapsed";

function setSidebarCollapsed(collapsed) {
  document.body.classList.toggle("sidebar-collapsed", collapsed);
  if (sidebarToggle) {
    sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
    sidebarToggle.querySelector("span[aria-hidden]")?.replaceChildren(collapsed ? "☰" : "×");
  }
  window.localStorage.setItem(sidebarStateKey, collapsed ? "true" : "false");
}

function setupSidebarToggle() {
  if (!sidebarToggle) return;

  const savedState = window.localStorage.getItem(sidebarStateKey) === "true";
  setSidebarCollapsed(savedState);

  sidebarToggle.addEventListener("click", () => {
    setSidebarCollapsed(!document.body.classList.contains("sidebar-collapsed"));
  });
}

const sections = [...document.querySelectorAll("main section")];
const navLinks = [...document.querySelectorAll(".sidebar a")];

function setActiveNav(sectionId) {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.hash === `#${sectionId}`);
  });
}

function updateActiveNav() {
  const anchorLine = window.innerHeight * 0.35;
  const current =
    sections
      .map((section) => ({
        id: section.id,
        top: Math.abs(section.getBoundingClientRect().top - anchorLine),
      }))
      .sort((a, b) => a.top - b.top)[0] || sections[0];

  if (current) setActiveNav(current.id);
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const targetId = link.hash.replace("#", "");
    if (targetId) setActiveNav(targetId);
    if (window.matchMedia("(max-width: 900px)").matches) {
      setSidebarCollapsed(true);
    }
  });
});

setupSidebarToggle();
window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("resize", updateActiveNav);
updateActiveNav();
