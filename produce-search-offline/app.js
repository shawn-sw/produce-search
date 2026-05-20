
let currentFilter = "all";
const input = document.getElementById("searchInput");
const results = document.getElementById("results");
const countText = document.getElementById("countText");
const clearBtn = document.getElementById("clearBtn");

function norm(s) {
  return String(s || "").toLowerCase().replace(/[#,'’"()\-]/g, " ").replace(/\s+/g, " ").trim();
}

function matchProduct(p, q) {
  if (!q) return true;
  const haystack = norm([p.item, p.plu, p.name, p.origin, p.category].join(" "));
  return q.split(" ").every(part => haystack.includes(part));
}

function render() {
  const q = norm(input.value);
  const filtered = PRODUCTS.filter(p => {
    const categoryOK = currentFilter === "all" || p.category === currentFilter;
    return categoryOK && matchProduct(p, q);
  });

  countText.textContent = `找到 ${filtered.length} 条 / 共 ${PRODUCTS.length} 条`;

  if (filtered.length === 0) {
    results.innerHTML = `<div class="empty">没有找到结果</div>`;
    return;
  }

  results.innerHTML = filtered.map(p => `
    <article class="card">
      <div class="card-title">${escapeHtml(p.name)}</div>
      <div class="row"><div class="label">编号</div><div>${escapeHtml(p.item)}</div></div>
      <div class="row"><div class="label">PLU</div><div>${escapeHtml(p.plu)}</div></div>
      <div class="row"><div class="label">产地</div><div>${escapeHtml(p.origin)}</div></div>
      <div class="row"><div class="label">分类</div><div><span class="badge">${p.category === "Fruit" ? "水果" : "蔬菜"}</span></div></div>
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
