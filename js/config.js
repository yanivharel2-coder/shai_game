/* ===========================================================
   קובץ הגדרות - כאן משנים דברים בלי לגעת בשאר הקוד
   =========================================================== */
window.CONFIG = {

  /* תמונות למשחק הזיכרון ולפאזל.
     מעלים את הקבצים לתיקייה images/ ורושמים כאן את השמות שלהם, למשל:
       images: ["images/ron.jpg", "images/gal.png", "images/family.jpg"]
     אם הרשימה ריקה, המשחק משתמש בתמונות מובנות (אימוג׳י וסצנות). */
  images: [
    "images/spiderman.jpg",
    "images/sonic-movie.jpg",
    "images/sonic-tails.jpg",
    "images/bluey.jpg",
    "images/ice-age.jpg"
  ],

  /* תמונות למשחק הזיכרון בלבד (למשל מדבקות קטנות).
     אם הרשימה ריקה, משחק הזיכרון משתמש ברשימה שלמעלה. */
  memoryImages: [
    "images/memory/01.png",
    "images/memory/02.png",
    "images/memory/03.png",
    "images/memory/04.png",
    "images/memory/05.png",
    "images/memory/06.png",
    "images/memory/07.png",
    "images/memory/08.png",
    "images/memory/09.png",
    "images/memory/10.png",
    "images/memory/11.png",
    "images/memory/12.png",
    "images/memory/13.png",
    "images/memory/14.png",
    "images/memory/15.png",
    "images/memory/16.png",
    "images/memory/17.png",
    "images/memory/18.png",
    "images/memory/19.png",
    "images/memory/20.png"
  ],

  /* משחק זיכרון: מקסימום קלפים וגודל מינימלי לקלף (בפיקסלים) */
  maxMemoryCards: 40,
  minMemoryCard: 110,

  /* פאזל: גודל מינימלי לחלק (בפיקסלים) ומקסימום חלקים בקושי "קשה" */
  minPuzzlePiece: 105,
  maxPuzzlePieces: 24,

  /* כמה שלבים עד שמצילים דמות */
  storySteps: 20,

  /* כמה לבבות יש בכל שלב (5 טעויות = חוזרים לתחילת השלב) */
  maxHearts: 5,

  /* כל כמה שאלות נכונות מופיעה שאלת בונוס לקבלת עזרת גיבור משפחה */
  bonusEvery: 5,

  /* גיבורי המשפחה (מוגרלים באקראי כשעונים נכון על שאלת בונוס) */
  familyHeroes: [
    { id: "shai",  name: "שי",   title: "הילד הג׳ינג׳י שמטפס על קירות", type: "video", src: "family/shai.mp4",  icon: "🕷️" },
    { id: "emma",  name: "אמה",  title: "הלוחמת בורוד",                 type: "gif",   src: "family/emma.gif",  icon: "💖" },
    { id: "omer",  name: "עומר", title: "נגן הגיטרה הטוב בעולם",         type: "video", src: "family/omer.mp4",  icon: "🎸" },
    { id: "itay",  name: "איתי", title: "המתופף המשוגע",                type: "video", src: "family/itay.mp4",  icon: "🥁" },
    { id: "dana",  name: "דנה",  title: "המלכה הלוחמת",                 type: "video", src: "family/dana.mp4",  icon: "👑" },
    { id: "yaniv", name: "יניב", title: "מלך עולם הקרח",                type: "video", src: "family/yaniv.mp4", icon: "❄️" }
  ],

  /* הגיבורים שמצילים, לפי הסדר. אפשר להחליף לתמונה משלכם:
       { name: "השם", img: "characters/hero1.png" }
     אם img ריק, מוצגת דמות מצוירת מובנית. */
  heroes: [
    { name: "הגיבור האדום", img: null, kind: "red" },
    { name: "גיבור הלילה",  img: null, kind: "night" },
    { name: "איש הקוביות",  img: null, kind: "blocks" }
  ],

  /* הדמות הרעה */
  villain: { name: "איש החול", img: null }
};
