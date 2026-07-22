(function () {
  "use strict";

  var copy = {
    zh: {
      nav: ["工艺", "传承", "作品"], wordmark: "古法编程", inquiry: "预约鉴赏", toggle: "EN",
      eyebrow: "创立于终端尚未诞生之前 · EST. 1843", vertical: "不借机器之力",
      heroes: [["匠心制造", "古法编程"], ["拒绝机器", "坚持手写"], ["代码有魂", "人机共鸣"]],
      edition: "第零号工坊<br>巴黎 · 深圳 · /DEV/NULL", lead: "我们拒绝冰冷的自动化。<br>每一行代码，皆由匠人亲手敲入。", explore: "探索工艺",
      slow: "缓慢", kicker: "真正的代码，经得起时间编译。", statement: "在效率被无限追逐的时代，<br>我们选择<span>缓慢。</span>",
      body: "从变量的命名，到分号的落笔，工匠以多年训练出的直觉反复斟酌。我们相信，未经复制粘贴的代码，拥有独一无二的灵魂。",
      heritageTitle: "百年传承<br><em>一条仍在延伸的时间线。</em>", heritageBody: "横向穿越两个世纪。每一次突破，都把思想交到下一双手中；而时间线的最后，正是此刻的你。", drag: "拖动或滚动，穿越计算史",
      people: [["艾达·洛芙莱斯", "Ada Lovelace", "第一位程序员，让机器超越算术"], ["冯·诺依曼", "John von Neumann", "为现代计算机奠定结构"], ["格蕾丝·霍珀", "Grace Hopper", "让语言成为人机之桥"], ["艾伦·图灵", "Alan Turing", "追问机器是否能够思考"], ["克劳德·香农", "Claude Shannon", "用比特度量信息"], ["约翰·麦卡锡", "John McCarthy", "为人工智能命名"], ["丹尼斯·里奇", "Dennis Ritchie", "创造 C，重塑系统世界"], ["林纳斯·托瓦兹", "Linus Torvalds", "让开放协作成为基础设施"], ["我", "", "传承抵达我的指尖，下一行由我写下"]],
      craftTitle: "一行代码，<br>四道古法工序。", signature: "手制 · 无自动补全",
      steps: [["净手", "关闭 Copilot，清空剪贴板。"], ["选字", "严选变量名，不足三日绝不落键。"], ["手作", "逐字符敲击，每日限量八十行。"], ["静候", "让代码自然风干，等待测试。"]],
      disciplineTitle: "顶尖领域，<br>在此交汇。", disciplines: [["数学", "MATHEMATICS", "以抽象，雕刻秩序。"], ["物理", "PHYSICS", "以定律，描述世界。"], ["化学", "CHEMISTRY", "以连接，创造新生。"], ["哲学", "PHILOSOPHY", "以追问，定义智能。"]],
      resonanceTitle: "感受代码的灵魂", resonanceBody: "当指尖触及机器，逻辑不再冰冷。<br>思想穿过电路，在人与机器之间产生共鸣。", resonance: "共鸣",
      collectionTitle: "本季孤品", collectionBody: "每件作品仅编译一次，<br>并附工匠亲签报错信息。", pieces: [["手工数组", "依据长度时价"], ["永恒循环", "不可退出"], ["空指针", "价格面议"]],
      commission: "委托一件作品", footer: "拒绝机器生成 · 坚持手工敲击<br>© 1843—2026 古法编程工坊", back: "返回顶部 ↑", pixels: "本网站由匠人逐像素手工制作"
    },
    en: {
      nav: ["CRAFT", "HERITAGE", "COLLECTION"], wordmark: "ANCIENT CODE", inquiry: "PRIVATE VIEWING", toggle: "中文",
      eyebrow: "ESTABLISHED BEFORE THE TERMINAL · EST. 1843", vertical: "UNASSISTED BY MACHINES",
      heroes: [["CRAFTED", "ANCIENT CODE"], ["NO MACHINES", "WRITTEN BY HAND"], ["CODE HAS SOUL", "HUMAN RESONANCE"]],
      edition: "ATELIER № 0<br>PARIS · SHENZHEN · /DEV/NULL", lead: "We refuse the cold hand of automation.<br>Every line is entered by a human artisan.", explore: "DISCOVER",
      slow: "SLOW", kicker: "True code withstands the compilation of time.", statement: "In an age obsessed with speed,<br>we choose to be <span>slow.</span>",
      body: "From the naming of a variable to the placement of a semicolon, every decision is weighed by trained instinct. Code untouched by copy and paste possesses a soul entirely its own.",
      heritageTitle: "A CENTURY OF HERITAGE<br><em>A timeline still being written.</em>", heritageBody: "Travel horizontally across two centuries. Each breakthrough passes an idea into the next pair of hands—and at the end of the line stands you.", drag: "DRAG OR SCROLL THROUGH COMPUTING HISTORY",
      people: [["Ada Lovelace", "", "The first programmer; she imagined more than arithmetic."], ["John von Neumann", "", "Gave modern computing its enduring architecture."], ["Grace Hopper", "", "Turned language into a bridge to the machine."], ["Alan Turing", "", "Asked whether a machine could think."], ["Claude Shannon", "", "Measured the universe of information in bits."], ["John McCarthy", "", "Gave artificial intelligence its name."], ["Dennis Ritchie", "", "Created C and reshaped the world of systems."], ["Linus Torvalds", "", "Made open collaboration foundational."], ["Me", "", "The heritage reaches my hands. The next line is yours."]],
      craftTitle: "ONE LINE OF CODE.<br>FOUR ANCIENT RITES.", signature: "HANDMADE · NO AUTOCOMPLETE",
      steps: [["PURIFY", "Close Copilot. Empty the clipboard."], ["NAME", "A variable may take three days to name."], ["CRAFT", "One character at a time. Eighty lines a day."], ["REST", "Let the code breathe before testing."]],
      disciplineTitle: "THE FINEST DISCIPLINES,<br>IN CONVERSATION.", disciplines: [["MATH", "MATHEMATICS", "Sculpting order from abstraction."], ["PHYS", "PHYSICS", "Describing the world through laws."], ["CHEM", "CHEMISTRY", "Creating the new through connection."], ["PHIL", "PHILOSOPHY", "Defining intelligence by asking why."]],
      resonanceTitle: "FEEL THE SOUL OF CODE", resonanceBody: "When fingertips meet the machine, logic is no longer cold.<br>Thought passes through the circuit, resonating between human and machine.", resonance: "RESONANCE",
      collectionTitle: "PIÈCES UNIQUES", collectionBody: "Each work is compiled only once,<br>with an error message signed by its maker.", pieces: [["THE HANDMADE ARRAY", "PRICED BY LENGTH"], ["THE ETERNAL LOOP", "NO EXIT"], ["THE NULL POINTER", "PRICE ON REQUEST"]],
      commission: "COMMISSION A PIECE", footer: "MACHINE-GENERATED, NEVER · TYPED BY HAND, ALWAYS<br>© 1843—2026 ANCIENT CODE ATELIER", back: "BACK TO TOP ↑", pixels: "THIS SITE WAS CRAFTED PIXEL BY PIXEL"
    }
  };

  function one(selector) { return document.querySelector(selector); }
  function all(selector) { return Array.prototype.slice.call(document.querySelectorAll(selector)); }
  function html(selector, value) { var node = one(selector); if (node) node.innerHTML = value; }
  function text(selector, value) { var node = one(selector); if (node) node.textContent = value; }

  function activateFallback() {
    var button = one(".langSwitch");
    if (!button) return;
    var hasReact = Object.keys(button).some(function (key) { return key.indexOf("__reactProps$") === 0; });
    if (hasReact) return;

    var lang = localStorage.getItem("atelier-language");
    if (lang !== "zh" && lang !== "en") lang = navigator.language.toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
    var heroIndex = 0;

    function render(nextLang) {
      lang = nextLang;
      var c = copy[lang];
      document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
      var main = one("main");
      if (main) main.className = lang === "zh" ? "lang-zh" : "lang-en";
      localStorage.setItem("atelier-language", lang);
      all(".navLinks a").forEach(function (node, i) { node.textContent = c.nav[i]; });
      text(".nav .wordmark span", c.wordmark); text(".inquiry", c.inquiry); text(".langSwitch span", c.toggle);
      text(".heroEyebrow", c.eyebrow); text(".vertical", c.vertical); html(".edition", c.edition); html(".lead", c.lead);
      html(".roundButton", c.explore + ' <span aria-hidden="true">↗</span>');
      text(".slowWord", c.slow); text(".statement .kicker", c.kicker); html(".statement h2", c.statement); text(".statement .bodyCopy", c.body);
      html(".heritageIntro h2", c.heritageTitle); text(".heritageIntro > p:last-child", c.heritageBody); html(".timelineControls > p", "<i></i> " + c.drag);
      all(".timeNode").forEach(function (node, i) { var p = c.people[i]; textNode(node, "h3", p[0]); textNode(node, "small", p[2]); var secondary = node.querySelector(".nodeCopy p"); if (secondary) { secondary.textContent = p[1]; secondary.style.display = p[1] ? "block" : "none"; } });
      html(".craftContent h2", c.craftTitle); text(".signature", c.signature);
      all(".craftContent li").forEach(function (node, i) { textNode(node, "strong", c.steps[i][0]); textNode(node, "small", c.steps[i][1]); });
      html(".disciplineTitle h2", c.disciplineTitle); all(".disciplineList article").forEach(function (node, i) { textNode(node, "h3", c.disciplines[i][0]); textNode(node, "p", c.disciplines[i][1]); textNode(node, "small", c.disciplines[i][2]); });
      text(".resonance h2", c.resonanceTitle); html(".resonanceContent > p:not(.sectionNo)", c.resonanceBody); text(".pulseLine b", c.resonance);
      text(".collectionHeader h2", c.collectionTitle); html(".collectionHeader > p", c.collectionBody); all(".pieces article").forEach(function (node, i) { textNode(node, "p b", c.pieces[i][0]); textNode(node, "p em", c.pieces[i][1]); });
      html(".finale a", c.commission + ' <span aria-hidden="true">↗</span>'); text("footer .wordmark span", c.wordmark); html("footer > p", c.footer); text("footer div:last-child a", c.back); text("footer div:last-child small", c.pixels);
      button.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
      heroIndex = 0; renderHero();
    }

    function textNode(root, selector, value) { var node = root.querySelector(selector); if (node) node.textContent = value; }
    function renderHero() { var pair = copy[lang].heroes[heroIndex]; text(".rotatingTitle .swapLine", pair[0]); text(".rotatingTitle .swapLine.second", pair[1]); }

    button.addEventListener("click", function () { render(lang === "zh" ? "en" : "zh"); });
    render(lang);
    window.setInterval(function () { heroIndex = (heroIndex + 1) % 3; renderHero(); }, 5200);
  }

  window.addEventListener("load", function () { window.setTimeout(activateFallback, 50); });
})();
