// Mini-juego Smartbox (árbol de decisión)
// Web estática: funciona en GitHub Pages / Netlify / cualquier hosting estático.

const ROOT = {
  "id": "Q1",
  "text": "Si te regalo un recuerdo, ¿cómo te gustaría vivirlo?",
  "options": [
    {
      "key": "A",
      "label": "Despertando en un sitio especial",
      "next": "Q_EST_1"
    },
    {
      "key": "B",
      "label": "Cuidándome y desconectando",
      "next": "Q_BIEN_1"
    },
    {
      "key": "C",
      "label": "Comiendo algo increíble",
      "next": "Q_GAST_1"
    },
    {
      "key": "D",
      "label": "Sintiendo adrenalina",
      "next": "Q_AVEN_1"
    },
    {
      "key": "E",
      "label": "Descubriendo cosas nuevas",
      "next": "Q_TL_1"
    }
  ]
};

const NODES = {
  "Q_EST_1": {
    "text": "Cuando imaginas una escapada, te ves más…",
    "options": [
      {
        "key": "A",
        "label": "Relajándome y cuidándome",
        "next": "Q_EST_BIEN_1"
      },
      {
        "key": "B",
        "label": "Durmiendo en un sitio diferente y especial",
        "next": "Q_EST_ORIG_1"
      }
    ]
  },
  "Q_EST_BIEN_1": {
    "text": "Tu cuerpo te pide…",
    "options": [
      {
        "key": "A",
        "label": "Agua caliente, silencio y descanso total",
        "result": {
          "category": "Estancias · Estancias bienestar · Escapada con spa",
          "final": "A escoger!"
        }
      },
      {
        "key": "B",
        "label": "Un lugar clásico donde desconectar de verdad",
        "result": {
          "category": "Estancias · Estancias bienestar · Balneario",
          "final": "A escoger!"
        }
      }
    ]
  },
  "Q_EST_ORIG_1": {
    "text": "¿Qué te hace más ilusión contar después?",
    "options": [
      {
        "key": "A",
        "label": "Dormir bajo las estrellas",
        "result": {
          "category": "Estancias · Estancias originales · Burbuja",
          "final": "A escoger!"
        }
      },
      {
        "key": "B",
        "label": "Dormir en un lugar que no es nada normal",
        "result": {
          "category": "Estancias · Estancias originales · Insólito",
          "final": "A escoger!"
        }
      }
    ]
  },
  "Q_BIEN_1": {
    "text": "Hoy te apetece cuidarte de qué forma?",
    "options": [
      {
        "key": "A",
        "label": "Verte mejor",
        "next": "Q_BELLEZA_1"
      },
      {
        "key": "B",
        "label": "Relajar el cuerpo",
        "next": "Q_SPA_1"
      },
      {
        "key": "C",
        "label": "Irte unos días y desconectar",
        "next": "Q_BIEN_EST_1"
      }
    ]
  },
  "Q_BELLEZA_1": {
    "text": "Si te dedicas tiempo, ¿en qué lo inviertes?",
    "options": [
      {
        "key": "A",
        "label": "En cuidar mi piel y mi cara",
        "result": {
          "category": "Bienestar · Belleza · Tratamiento facial",
          "final": "A escoger!"
        }
      }
    ]
  },
  "Q_SPA_1": {
    "text": "Ahora mismo lo que más necesitas es…",
    "options": [
      {
        "key": "A",
        "label": "Que me mimen todo el cuerpo",
        "result": {
          "category": "Bienestar · Spa · Tratamiento corporal",
          "final": "A escoger!"
        }
      },
      {
        "key": "B",
        "label": "Relajar tensiones y desconectar la mente",
        "result": {
          "category": "Bienestar · Spa · Masaje",
          "final": "A escoger!"
        }
      }
    ]
  },
  "Q_BIEN_EST_1": {
    "text": "¿Qué te atrae más?",
    "options": [
      {
        "key": "A",
        "label": "Un fin de semana con spa",
        "result": {
          "category": "Bienestar · Estancias bienestar · Escapada spa",
          "final": "A escoger!"
        }
      },
      {
        "key": "B",
        "label": "Un balneario de los de verdad",
        "result": {
          "category": "Bienestar · Estancias bienestar · Balneario",
          "final": "A escoger!"
        }
      }
    ]
  },
  "Q_GAST_1": {
    "text": "Cuando se trata de comer bien, prefieres…",
    "options": [
      {
        "key": "A",
        "label": "Probar sabores nuevos",
        "result": {
          "category": "Gastronomía · Degustación",
          "final": "A escoger!"
        }
      },
      {
        "key": "B",
        "label": "Una cena especial",
        "result": {
          "category": "Gastronomía · Cena",
          "final": "A escoger!"
        }
      }
    ]
  },
  "Q_AVEN_1": {
    "text": "¿Dónde te late más fuerte el corazón?",
    "options": [
      {
        "key": "A",
        "label": "En el aire",
        "next": "Q_AIRE_1"
      },
      {
        "key": "B",
        "label": "En el agua",
        "next": "Q_AGUA_1"
      }
    ]
  },
  "Q_AIRE_1": {
    "text": "¿Qué tipo de emoción buscas?",
    "options": [
      {
        "key": "A",
        "label": "Algo tranquilo y mágico",
        "result": {
          "category": "Aventura · Deportes aéreos · Paseo en globo",
          "final": "A escoger!"
        }
      },
      {
        "key": "B",
        "label": "Caída libre total",
        "result": {
          "category": "Aventura · Deportes aéreos · Paracaidismo",
          "final": "A escoger!"
        }
      },
      {
        "key": "C",
        "label": "Volar y disfrutar del paisaje",
        "result": {
          "category": "Aventura · Deportes aéreos · Parapente",
          "final": "A escoger!"
        }
      },
      {
        "key": "D",
        "label": "Un salto extremo",
        "result": {
          "category": "Aventura · Deportes aéreos · Puenting",
          "final": "A escoger!"
        }
      }
    ]
  },
  "Q_AGUA_1": {
    "text": "¿Cómo te ves en el agua?",
    "options": [
      {
        "key": "A",
        "label": "Explorando el fondo del mar",
        "result": {
          "category": "Aventura · Deportes acuáticos · Buceo",
          "final": "A escoger!"
        }
      },
      {
        "key": "B",
        "label": "Navegando sin prisas",
        "result": {
          "category": "Aventura · Deportes acuáticos · Navegación",
          "final": "A escoger!"
        }
      },
      {
        "key": "C",
        "label": "Cogiendo olas",
        "result": {
          "category": "Aventura · Deportes acuáticos · Surf",
          "final": "A escoger!"
        }
      },
      {
        "key": "D",
        "label": "Remando y disfrutando",
        "result": {
          "category": "Aventura · Deportes acuáticos · Kayak",
          "final": "A escoger!"
        }
      },
      {
        "key": "E",
        "label": "Con viento y adrenalina",
        "result": {
          "category": "Aventura · Deportes acuáticos · Kitesurf",
          "final": "A escoger!"
        }
      }
    ]
  },
  "Q_TL_1": {
    "text": "Te apetece más…",
    "options": [
      {
        "key": "A",
        "label": "Seguir los pasos del cine",
        "result": {
          "category": "Tiempo libre · Tours de cine",
          "final": "A escoger!"
        }
      },
      {
        "key": "B",
        "label": "Perderte en la cultura",
        "result": {
          "category": "Tiempo libre · Museos",
          "final": "A escoger!"
        }
      },
      {
        "key": "C",
        "label": "Salir a explorar",
        "result": {
          "category": "Tiempo libre · Excursiones",
          "final": "A escoger!"
        }
      }
    ]
  }
};


const el = (id) => document.getElementById(id);
const screenStart = el("screenStart");
const screenQuiz = el("screenQuiz");
const screenResult = el("screenResult");

const startBtn = el("startBtn");
const backBtn = el("backBtn");
const restartBtn = el("restartBtn");
const copyBtn = el("copyBtn");

const qnum = el("qnum");
const question = el("question");
const options = el("options");
const bar = el("bar");

const resultLine = el("resultLine");
const resultPill = el("resultPill");
const pathList = el("pathList");

let history = []; // [{nodeId, qText, choiceKey, choiceLabel}]
let currentNodeId = "Q1";

function getNode(nodeId) {
  if (nodeId === "Q1") return ROOT;
  return NODES[nodeId];
}

function showStart() {
  screenStart.classList.remove("hidden");
  screenQuiz.classList.add("hidden");
  screenResult.classList.add("hidden");
  bar.style.width = "0%";
}

function showQuiz() {
  screenStart.classList.add("hidden");
  screenQuiz.classList.remove("hidden");
  screenResult.classList.add("hidden");
}

function showResult() {
  screenStart.classList.add("hidden");
  screenQuiz.classList.add("hidden");
  screenResult.classList.remove("hidden");
}

function setProgress() {
  // Progreso aproximado: máximo 3 pantallas (Q1 + 1 + final)
  const steps = Math.min(history.length + 1, 3);
  const pct = (steps / 3) * 100;
  bar.style.width = pct.toFixed(0) + "%";
}

function render(nodeId) {
  currentNodeId = nodeId;
  const node = getNode(nodeId);
  showQuiz();
  setProgress();

  qnum.textContent = `Pregunta ${history.length + 1}`;
  question.textContent = node.text;

  options.innerHTML = "";
  node.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "opt";
    btn.type = "button";
    btn.innerHTML = `<span class="tag">${opt.key}</span> ${opt.label}`;
    btn.addEventListener("click", () => onChoose(nodeId, node.text, opt));
    options.appendChild(btn);
  });
}

function onChoose(nodeId, qText, opt) {
  history.push({
    nodeId,
    qText,
    choiceKey: opt.key,
    choiceLabel: opt.label
  });

  if (opt.result) {
    renderResult(opt.result);
  } else {
    render(opt.next);
  }
}

function renderResult(res) {
  showResult();
  bar.style.width = "100%";

  resultLine.textContent = `Según tus respuestas: ${res.category}`;
  resultPill.textContent = `Final: ${res.final}`;

  pathList.innerHTML = "";
  history.forEach((h) => {
    const li = document.createElement("li");
    li.textContent = `${h.qText} → ${h.choiceKey}) ${h.choiceLabel}`;
    pathList.appendChild(li);
  });
}

function back() {
  if (history.length === 0) {
    showStart();
    return;
  }
  history.pop();
  if (history.length === 0) {
    render("Q1");
    return;
  }
  // Recalcular desde el inicio para evitar inconsistencias
  const replay = [...history];
  history = [];
  let nodeId = "Q1";
  for (const step of replay) {
    const node = getNode(nodeId);
    const chosen = node.options.find(o => o.key === step.choiceKey);
    history.push(step);
    if (chosen.result) {
      renderResult(chosen.result);
      return;
    }
    nodeId = chosen.next;
  }
  render(nodeId);
}

function restart() {
  history = [];
  render("Q1");
}

function copyOutcome() {
  let outcome = "Resultado del mini-juego Smartbox\n";
  outcome += history.map(h => `- ${h.qText} → ${h.choiceKey}) ${h.choiceLabel}`).join("\n");
  outcome += "\n\nFinal: A escoger!";
  navigator.clipboard.writeText(outcome).then(() => {
    copyBtn.textContent = "Copiado";
    setTimeout(() => copyBtn.textContent = "Copiar resultado", 1200);
  });
}

startBtn.addEventListener("click", () => render("Q1"));
backBtn.addEventListener("click", back);
restartBtn.addEventListener("click", restart);
copyBtn.addEventListener("click", copyOutcome);

showStart();
