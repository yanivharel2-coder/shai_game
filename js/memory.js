/* משחק זיכרון: רמה אחת, הכי הרבה קלפים שנכנסים במסך, שחקן אחד או שניים */
(function () {
  var GAP = 10;

  function cardFaces(pairs) {
    var pool = (CONFIG.memoryImages && CONFIG.memoryImages.length) ? CONFIG.memoryImages : (CONFIG.images || []);
    var user = G.shuffle(pool).slice(0, pairs).map(function (src) {
      return '<img src="' + G.urlOf(src) + '" alt="">';
    });
    var need = pairs - user.length;
    var emo = G.shuffle(DATA.emojiPool).slice(0, Math.max(0, need)).map(function (e) {
      return '<span class="emo">' + e + '</span>';
    });
    return G.shuffle(user.concat(emo));
  }

  function layout(W, H) {
    var best = null;
    for (var c = 2; c <= 12; c++) {
      for (var r = 2; r <= 10; r++) {
        var n = c * r;
        if (n % 2 || n > CONFIG.maxMemoryCards) continue;
        var cell = Math.min((W - GAP * (c - 1)) / c, (H - GAP * (r - 1)) / r);
        if (cell < CONFIG.minMemoryCard) continue;
        if (!best || n > best.n || (n === best.n && cell > best.cell)) best = { c: c, r: r, n: n, cell: cell };
      }
    }
    if (!best) {
      var cc = W > H ? 4 : 3, rr = W > H ? 3 : 4;
      best = { c: cc, r: rr, n: 12, cell: Math.max(50, Math.min((W - GAP * (cc - 1)) / cc, (H - GAP * (rr - 1)) / rr)) };
    }
    best.cell = Math.floor(Math.min(best.cell, 200));
    return best;
  }

  function play(container, players, mini, onDone) {
    container.innerHTML =
      '<section class="mem"><div class="scorebar"></div>' +
      '<div class="mem-area"><div class="mem-grid"></div></div></section>';
    var bar = container.querySelector(".scorebar");
    var area = container.querySelector(".mem-area");
    var grid = container.querySelector(".mem-grid");
    var rect = area.getBoundingClientRect();

    var lay;
    if (mini) {
      var cell = Math.floor(Math.min((rect.width - GAP * 2) / 3, (rect.height - GAP) / 2, 170));
      lay = { c: 3, r: 2, n: 6, cell: Math.max(60, cell) };
    } else {
      lay = layout(rect.width, rect.height);
    }

    var faces = cardFaces(lay.n / 2);
    var deck = [];
    faces.forEach(function (h, i) { deck.push({ id: i, h: h }); deck.push({ id: i, h: h }); });
    deck = G.shuffle(deck);

    grid.style.gridTemplateColumns = "repeat(" + lay.c + "," + lay.cell + "px)";
    grid.style.gridAutoRows = lay.cell + "px";
    grid.style.gap = GAP + "px";
    grid.style.setProperty("--cell", lay.cell + "px");

    var cards = deck.map(function (d, i) {
      var b = G.el('<button class="mcard" aria-label="קלף"><span class="in"><span class="f b">⭐</span><span class="f fr">' + d.h + '</span></span></button>');
      b.dataset.i = i;
      grid.appendChild(b);
      return b;
    });

    var scores = players === 2 ? [0, 0] : [0];
    var turn = 0, found = 0, open = [], lock = false;
    var total = lay.n / 2;

    function paintBar() {
      if (mini) { bar.innerHTML = '<div class="chip on">מצאו את הזוגות</div>'; return; }
      if (players === 1) {
        bar.innerHTML = '<div class="chip on">זוגות: ' + scores[0] + ' מתוך ' + total + '</div>';
      } else {
        bar.innerHTML =
          '<div class="chip p1' + (turn === 0 ? " on" : "") + '">שחקן 1: ' + scores[0] + '</div>' +
          '<div class="chip p2' + (turn === 1 ? " on" : "") + '">שחקן 2: ' + scores[1] + '</div>';
      }
    }
    paintBar();

    function finish() {
      G.sfx.win();
      G.confetti(mini ? 40 : 90);
      if (mini) { G.later(onDone, 1000); return; }
      var title, text = "";
      if (players === 1) {
        title = "כל הכבוד! מצאת את כל הזוגות";
      } else if (scores[0] === scores[1]) {
        title = "תיקו!"; text = "שניכם מצאתם " + scores[0] + " זוגות.";
      } else {
        var w = scores[0] > scores[1] ? 1 : 2;
        title = "שחקן " + w + " ניצח!"; text = scores[0] + " מול " + scores[1];
      }
      G.later(function () {
        G.dialog({
          art: '<span style="font-size:90px">🏆</span>', title: title, text: text,
          buttons: [
            { label: "עוד משחק", onClick: function () { play(container, players, false); } },
            { label: "תפריט", cls: "alt", onClick: function () { G.go("home"); } }
          ]
        });
      }, 900);
    }

    cards.forEach(function (card, idx) {
      card.onclick = function () {
        if (lock || card.classList.contains("up") || card.classList.contains("done")) return;
        card.classList.add("up");
        G.sfx.flip();
        open.push(idx);
        if (open.length < 2) return;
        lock = true;
        var a = open[0], b = open[1];
        if (deck[a].id === deck[b].id) {
          G.later(function () {
            cards[a].classList.add("done"); cards[b].classList.add("done");
            G.sfx.match();
            scores[turn]++; found++;
            open = []; lock = false;
            paintBar();
            if (found === total) finish();
          }, 500);
        } else {
          G.later(function () {
            cards[a].classList.remove("up"); cards[b].classList.remove("up");
            open = []; lock = false;
            if (players === 2) turn = 1 - turn;
            paintBar();
          }, 1100);
        }
      };
    });
  }

  window.Memory = {
    start: function (container) {
      container.innerHTML =
        '<section class="menu"><h2>משחק זיכרון</h2><div class="menu-btns">' +
        '<button class="btn big" data-p="1">👤 שחקן אחד</button>' +
        '<button class="btn big alt" data-p="2">👥 שני שחקנים</button></div></section>';
      container.querySelectorAll("[data-p]").forEach(function (b) {
        b.onclick = function () { play(container, +b.dataset.p, false); };
      });
    },
    mini: function (box, onDone) { play(box, 1, true, onDone); }
  };
})();
