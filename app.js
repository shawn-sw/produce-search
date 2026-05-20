
let currentFilter = "all";
const input = document.getElementById("searchInput");
const results = document.getElementById("results");
const countText = document.getElementById("countText");
const clearBtn = document.getElementById("clearBtn");

function norm(s) {
  return String(s || "").toLowerCase().replace(/[#,'’"()\-]/g, " ").replace(/\s+/g, " ").trim();
}

function isNumericSearch(value) {
  const trimmed = String(value || "").trim();
  return /^\d+$/.test(trimmed) && Number(trimmed) <= 10000;
}

function matchProduct(p, q) {
  if (!q) return true;
  const rawInput = input.value.trim();
  if (isNumericSearch(rawInput)) {
    return norm(p.plu).includes(norm(rawInput));
  }

  const haystack = norm([p.article_no, p.plu, p.description, p.origin, p.chinese_description].join(" "));
  return q.split(" ").every(part => haystack.includes(part));
}

function sortByPluPriority(products, rawInput) {
  if (!isNumericSearch(rawInput)) return products;
  const normalizedInput = norm(rawInput);
  return [...products].sort((a, b) => {
    const aExact = norm(a.plu) === normalizedInput;
    const bExact = norm(b.plu) === normalizedInput;
    if (aExact !== bExact) return aExact ? -1 : 1;
    return 0;
  });
}

function render() {
  const rawInput = input.value.trim();
  const q = norm(rawInput);
  const filtered = sortByPluPriority(PRODUCTS.filter(p => matchProduct(p, q)), rawInput);

  countText.textContent = `找到 ${filtered.length} 条 / 共 ${PRODUCTS.length} 条`;

  if (filtered.length === 0) {
    results.innerHTML = `<div class="empty">没有找到结果</div>`;
    return;
  }

  results.innerHTML = filtered.map(p => `
    <article class="card">
<div class="card-title">${escapeHtml(p.description)}</div>
<div class="row"><div class="label">编号</div><div>${escapeHtml(p.article_no)}</div></div>      <div class="row"><div class="label">PLU</div><div>${escapeHtml(p.plu)}</div></div>
      <div class="row"><div class="label">产地</div><div>${escapeHtml(p.origin)}</div></div>
      <div class="row"><div class="label">价格</div><div>${escapeHtml(p.price)}</div></div>
      <div class="row"><div class="label">中文描述</div><div><span class="badge">${escapeHtml(p.chinese_description)}</span></div></div>
    </article>
  `).join("");
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, ch => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));
}

document.querySelectorAll(".chip").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    render();
  });
});

input.addEventListener("input", render);
clearBtn.addEventListener("click", () => { input.value = ""; input.focus(); render(); });

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js"));
}

render();
