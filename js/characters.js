/* דמויות מצוירות מקוריות (SVG). אפשר להחליף בתמונות שלכם דרך config.js */
(function () {
  var S = 'stroke="#14183a" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"';

  var SVG = {
    red:
      '<svg class="char" viewBox="0 0 100 140" aria-hidden="true"><g ' + S + '>' +
      '<ellipse cx="50" cy="136" rx="26" ry="4" fill="rgba(0,0,0,.2)" stroke="none"/>' +
      '<path d="M30 56 L10 124 L50 114 L90 124 L70 56 Z" fill="#ffd23f"/>' +
      '<rect x="33" y="92" width="14" height="36" rx="6" fill="#f4f4f8"/>' +
      '<rect x="53" y="92" width="14" height="36" rx="6" fill="#f4f4f8"/>' +
      '<rect x="30" y="122" width="19" height="11" rx="4" fill="#ff9f1c"/>' +
      '<rect x="51" y="122" width="19" height="11" rx="4" fill="#ff9f1c"/>' +
      '<rect x="29" y="50" width="42" height="48" rx="14" fill="#e8312f"/>' +
      '<rect x="14" y="54" width="14" height="34" rx="7" fill="#e8312f"/>' +
      '<rect x="72" y="54" width="14" height="34" rx="7" fill="#e8312f"/>' +
      '<rect x="12" y="82" width="18" height="10" rx="5" fill="#ff9f1c"/>' +
      '<rect x="70" y="82" width="18" height="10" rx="5" fill="#ff9f1c"/>' +
      '<path d="M50 60 l4 9 10 1 -8 6 3 10 -9 -6 -9 6 3 -10 -8 -6 10 -1z" fill="#ffd23f"/>' +
      '<circle cx="50" cy="32" r="22" fill="#e8312f"/>' +
      '<rect x="29" y="24" width="42" height="15" rx="7" fill="#ffd23f"/>' +
      '<circle cx="41" cy="31" r="3.5" fill="#14183a" stroke="none"/>' +
      '<circle cx="59" cy="31" r="3.5" fill="#14183a" stroke="none"/>' +
      '<path d="M43 46 Q50 51 57 46" fill="none"/>' +
      '<path d="M50 10 L50 2" fill="none"/><circle cx="50" cy="3" r="3" fill="#ffd23f"/>' +
      '</g></svg>',

    night:
      '<svg class="char" viewBox="0 0 100 140" aria-hidden="true"><g ' + S + '>' +
      '<ellipse cx="50" cy="136" rx="26" ry="4" fill="rgba(0,0,0,.2)" stroke="none"/>' +
      '<path d="M30 56 Q6 90 14 126 L50 114 L86 126 Q94 90 70 56 Z" fill="#6a3fd1"/>' +
      '<circle cx="24" cy="96" r="2.5" fill="#fff" stroke="none"/><circle cx="76" cy="104" r="2.5" fill="#fff" stroke="none"/>' +
      '<circle cx="34" cy="116" r="2.5" fill="#fff" stroke="none"/>' +
      '<rect x="33" y="92" width="14" height="36" rx="6" fill="#3b2a7a"/>' +
      '<rect x="53" y="92" width="14" height="36" rx="6" fill="#3b2a7a"/>' +
      '<rect x="30" y="123" width="19" height="10" rx="5" fill="#c9d3ff"/>' +
      '<rect x="51" y="123" width="19" height="10" rx="5" fill="#c9d3ff"/>' +
      '<rect x="29" y="50" width="42" height="48" rx="14" fill="#4a35a8"/>' +
      '<rect x="14" y="54" width="14" height="34" rx="7" fill="#4a35a8"/>' +
      '<rect x="72" y="54" width="14" height="34" rx="7" fill="#4a35a8"/>' +
      '<rect x="29" y="86" width="42" height="7" fill="#c9d3ff"/>' +
      '<path d="M55 60 a10 10 0 1 0 0 20 a8 8 0 1 1 0 -20z" fill="#fff3a8"/>' +
      '<circle cx="50" cy="32" r="23" fill="#6a3fd1"/>' +
      '<ellipse cx="50" cy="35" rx="15" ry="16" fill="#ffd9b0"/>' +
      '<rect x="33" y="28" width="34" height="9" rx="4.5" fill="#c9d3ff"/>' +
      '<circle cx="42" cy="32.5" r="2.5" fill="#14183a" stroke="none"/>' +
      '<circle cx="58" cy="32.5" r="2.5" fill="#14183a" stroke="none"/>' +
      '<path d="M44 44 Q50 48 56 44" fill="none"/>' +
      '<path d="M46 12 a5 5 0 1 0 8 0 a3.6 3.6 0 1 1 -8 0z" fill="#fff3a8" stroke-width="2"/>' +
      '</g></svg>',

    blocks:
      '<svg class="char" viewBox="0 0 100 140" aria-hidden="true"><g ' + S + '>' +
      '<ellipse cx="50" cy="136" rx="26" ry="4" fill="rgba(0,0,0,.2)" stroke="none"/>' +
      '<rect x="30" y="94" width="18" height="34" rx="4" fill="#2457e6"/>' +
      '<rect x="52" y="94" width="18" height="34" rx="4" fill="#2457e6"/>' +
      '<rect x="28" y="124" width="22" height="9" rx="3" fill="#14183a"/>' +
      '<rect x="50" y="124" width="22" height="9" rx="3" fill="#14183a"/>' +
      '<rect x="26" y="50" width="48" height="46" rx="6" fill="#ff7a1a"/>' +
      '<rect x="26" y="50" width="24" height="23" rx="4" fill="#ffd23f"/>' +
      '<rect x="50" y="73" width="24" height="23" rx="4" fill="#2ec4b6"/>' +
      '<rect x="10" y="54" width="16" height="30" rx="4" fill="#2ec4b6"/>' +
      '<rect x="74" y="54" width="16" height="30" rx="4" fill="#ffd23f"/>' +
      '<rect x="9" y="84" width="18" height="14" rx="3" fill="#ff7a1a"/>' +
      '<rect x="73" y="84" width="18" height="14" rx="3" fill="#ff7a1a"/>' +
      '<path d="M50 14 L50 6" fill="none"/><circle cx="50" cy="5" r="4" fill="#ef4136"/>' +
      '<rect x="28" y="14" width="44" height="34" rx="6" fill="#52e0cf"/>' +
      '<rect x="36" y="24" width="9" height="9" rx="2" fill="#14183a"/>' +
      '<rect x="55" y="24" width="9" height="9" rx="2" fill="#14183a"/>' +
      '<path d="M40 40 L60 40" fill="none"/>' +
      '</g></svg>',

    sand:
      '<svg class="char" viewBox="0 0 120 140" aria-hidden="true"><g ' + S + '>' +
      '<ellipse cx="60" cy="136" rx="42" ry="5" fill="rgba(0,0,0,.2)" stroke="none"/>' +
      '<path d="M22 130 Q8 84 28 62 Q20 20 60 14 Q100 20 92 62 Q112 84 98 130 Z" fill="#e3b96b"/>' +
      '<path d="M26 70 Q4 80 8 106" fill="none" stroke-width="9"/>' +
      '<path d="M94 70 Q116 80 112 106" fill="none" stroke-width="9"/>' +
      '<path d="M26 70 Q4 80 8 106" fill="none" stroke="#e3b96b" stroke-width="4"/>' +
      '<path d="M94 70 Q116 80 112 106" fill="none" stroke="#e3b96b" stroke-width="4"/>' +
      '<circle cx="38" cy="100" r="6" fill="#c99a4c" stroke="none"/>' +
      '<circle cx="82" cy="108" r="8" fill="#c99a4c" stroke="none"/>' +
      '<circle cx="60" cy="118" r="5" fill="#c99a4c" stroke="none"/>' +
      '<ellipse cx="46" cy="48" rx="9" ry="11" fill="#fff"/>' +
      '<ellipse cx="74" cy="48" rx="9" ry="11" fill="#fff"/>' +
      '<circle cx="48" cy="51" r="4" fill="#14183a" stroke="none"/>' +
      '<circle cx="72" cy="51" r="4" fill="#14183a" stroke="none"/>' +
      '<path d="M34 34 L56 42" fill="none" stroke-width="6"/>' +
      '<path d="M86 34 L64 42" fill="none" stroke-width="6"/>' +
      '<path d="M44 74 Q60 64 76 74 Q60 90 44 74Z" fill="#5a2b0b"/>' +
      '</g></svg>'
  };

  function imgHTML(src, name) {
    return '<img class="char" src="' + encodeURI(src) + '" alt="' + (name || "") + '">';
  }

  G.charHTML = function (h) {
    return h.img ? imgHTML(h.img, h.name) : SVG[h.kind || "red"];
  };
  G.villainHTML = function () {
    var v = CONFIG.villain;
    return v.img ? imgHTML(v.img, v.name) : SVG.sand;
  };
})();
