/* ════════════════════════════════════════════
   STORY OF US — script.js
════════════════════════════════════════════ */

'use strict';

/* ── CHAPTER DATA ── */
/*
  HOW TO ADD PHOTOS & VIDEOS:
  ─────────────────────────────────────────────
  Each chapter has two fields:

    photo: 'path/to/your/image.jpg'
      → Put your image file in an "images/" folder next to index.html
      → Example: 'images/chapter1.jpg'
      → Supports: .jpg  .jpeg  .png  .webp  .gif
      → Leave as '' to show a placeholder

    video: 'path/to/your/video.mp4'
      → Put your video file in a "videos/" folder next to index.html
      → Example: 'videos/chapter1.mp4'
      → Supports: .mp4  .webm
      → OR paste a YouTube embed URL:
         'https://www.youtube.com/embed/VIDEO_ID'
      → OR paste a Google Drive embed URL:
         'https://drive.google.com/file/d/FILE_ID/preview'
      → Leave as '' to hide the video section

  FOLDER STRUCTURE:
  ─────────────────────────────────────────────
    your-project/
    ├── index.html
    ├── style.css
    ├── script.js
    ├── images/
    │   ├── chapter1.jpg
    │   ├── chapter2.jpg
    │   └── ...
    └── videos/
        ├── chapter1.mp4
        └── ...
*/

const CHAPTERS = [
  {
    num: 'I',
    name: 'The First Meet',
    icon: '✦',
    date: 'The day we never know that we will be here',
    quote: '"Every love story begins with a single, unremarkable moment that turns out to be the most remarkable of all."',
    art: 'stars',
    salutation: 'My Manuuu,',
    paragraphs: [
      { text: 'Miss Mansi Saini , natkhat member of Cybernetics (IT Society) being the CS and Head of coding club , i always use to see you as a cutie and chulbuli si pyaari bachi ', dropCap: true },
      { text: 'I always use to thought that this pyaari bachi who use to smile everytime , seems happy , use to crack joke has something deep inside her which is hidden inside her heart' },
      { text: 'But i can sense that purity, that aapna pan and that kid inside you , i always and always love that kid , idk how but i felt so connected with you.' },
      { text: 'We never know , atleast not at that moment that we will be like this ,but i love how everything turn out' }
    ],
    signature: 'forever yours ♥',
    // ↓↓↓ ADD YOUR FILES HERE ↓↓↓
    photo: './assests/photo1.jpeg',           // e.g. 'images/chapter1.jpg'
    photoCaption: 'Maybe the First picture together!',
    video: './assests/video1.mp4',           // e.g. 'videos/chapter1.mp4'
    videoCaption: 'The moment you first smiled at me'
  },
  {
    num: 'II',
    name: 'Learning Together',
    icon: '☽',
    date: 'The month that followed',
    quote: '"To love someone is to learn the song in their heart and sing it to them when they have forgotten the words."',
    art: 'moon',
    salutation: 'My Baby,',
    paragraphs: [
      { text: 'That month , after freshers , i.e. January , the turning point of our bond, that month started everything', dropCap: true },
      { text: 'That sambhar ki trip was the first time we had ache se convo , and i was sitting on your lap , that was so comfortable and i never thought you feel lonely when shifted on middle seat in the jeep, that karoke movement' },
      { text: 'That photo you clicked , theres a saying that if photo is clicked by someone who appreciate or love you , then the photo become much better, , remember my photo? ' },
      { text: 'And the highlight of the month was we started working on the project , and i think that was the bestest decision i had take that time to sit with you guys , i learned , i built not only project but also the BOND with you '}
    ],
    signature: 'your Senior ♥',
    photo: './assests/photo2.1.jpeg',
    photoCaption: 'Our Photo together',
    photo: './assests/photo2.1.jpeg',
    photoCaption: 'Our Photo together',
    video: './assests/video2.mp4',
    videoCaption: 'That was fun!!!!!!!'
  },
  {
    num: 'III',
    name: 'Our Comfortness Increases',
    icon: '♥',
    date: 'Woven through all our days',
    quote: '"Love creates its own dialect — one that can only be spoken between two people who have truly chosen each other."',
    art: 'hearts',
    salutation: 'My darling,',
    paragraphs: [
      { text: 'That Project gives us the bestest thing i.e. the bond and comfortness we started feeling around each other , the way you treats me was something else. ', dropCap: true },
      { text: 'You always give me that respect and that affection ; that affection make me feel that i have earned something in my life , i always and always appreciate your skills you have.' },
      { text: 'Each i got to know through project, so after that i use to appreciate a lot from my whole heart , i maybe tell you , appreciated you multiple times.' },
      { text: 'I started feeling the purest bond between us two , i use to love your presence , i love to sit with you , i love to work on project with you , i started enjoying your company and i started feeling very very comfortable.' }
    ],
    signature: 'Yours ♥',
    photo: './assests/photo3.jpeg',
    photoCaption: 'Never thought these two people with different vibes will meet!',
    video: './assests/video3.mp4',
    videoCaption: 'My lil puppyyy'
  },
  // {
  //   num: 'IV',
  //   name: 'The Long Walks',
  //   icon: '✧',
  //   date: 'Those endless evenings',
  //   quote: '"Not all those who wander are lost — some of them are just hopelessly, happily in love."',
  //   art: 'path',
  //   salutation: 'Dear wanderer,',
  //   paragraphs: [
  //     { text: 'We never planned to walk so far. We would say "just around the block" and find ourselves, an hour later, in some neighbourhood neither of us knew, pointing at houses and inventing lives for the people inside.', dropCap: true },
  //     { text: 'You talked about things you had never said aloud before, and I understood then that there are thoughts which need movement to arrive — ideas too big to sit still, truths that can only be spoken while the world is sliding past.' },
  //     { text: 'Once, it started to rain, and we had no umbrella, and instead of running we just kept walking. Just kept talking. The rain was warm and neither of us wanted to go inside.' },
  //     { text: 'All my favourite cities are the ones I have walked through with you. All my favourite moments are the ones where we didn\'t know where we were going and it didn\'t matter at all.' }
  //   ],
  //   signature: 'always walking beside you ♥',
  //   photo: '',
  //   photoCaption: 'Streets we made our own',
  //   video: '',
  //   videoCaption: 'An evening walk, captured'
  // },
  // {
  //   num: 'V',
  //   name: 'Rainy Day Sanctuary',
  //   icon: '☽',
  //   date: 'Every grey afternoon',
  //   quote: '"The best shelter in any storm is the presence of someone who has chosen to love you without reservation."',
  //   art: 'rain',
  //   salutation: 'My safe harbour,',
  //   paragraphs: [
  //     { text: 'There is a particular quality to an afternoon indoors with rain at the window. The world contracts to the size of the room. Time becomes elastic. Everything outside can wait.', dropCap: true },
  //     { text: 'We are masters of the rainy afternoon. We have perfected it into an art form: the exact right ratio of silence to conversation, the comfortable sprawl across furniture, the cups of tea that go cold because we forgot them in favour of the other\'s company.' },
  //     { text: 'Once, a whole Sunday vanished this way. We didn\'t plan it; it simply happened the way all the best things with you happen — organically, without agenda, without the pressure of making something special, and therefore becoming exactly that.' },
  //     { text: 'I choose a rainy day with you over any perfect day alone. I choose ordinary time with you over extraordinary time with anyone else. This is the truest thing I know.' }
  //   ],
  //   signature: 'your warmest shelter ♥',
  //   photo: '',
  //   photoCaption: 'Rain on the window, you beside me',
  //   video: '',
  //   videoCaption: 'The playlist of our grey afternoons'
  // },
  // {
  //   num: 'VI',
  //   name: 'The Hard Chapter',
  //   icon: '✦',
  //   date: 'When things were difficult',
  //   quote: '"Love is not just the golden hours. It is also the 3am phone calls, the difficult conversations, the choosing each other anyway."',
  //   art: 'stars',
  //   salutation: 'My steadfast one,',
  //   paragraphs: [
  //     { text: 'There was a time when I was not easy to love. I want to name it plainly, without disguise: I was difficult, and frightened, and I did not always make it easy for you to stay.', dropCap: true },
  //     { text: 'And you stayed. Not with a performance of patience, not with martyrdom, but with the quiet, consistent choice to be present. You sat with me in the rooms I tried to hide and you didn\'t recoil from what you found there.' },
  //     { text: 'I have tried to find the words for what that meant. What I keep arriving at is this: you showed me that love, real love, is not conditional on my being at my best. That it holds in the hard weather.' },
  //     { text: 'I don\'t take it for granted. Not for a single day. The gift of being fully known and fully loved anyway — I carry it with me everywhere. It made me braver than I would have been alone.' }
  //   ],
  //   signature: 'grateful beyond all words ♥',
  //   photo: '',
  //   photoCaption: 'The light we found after the dark',
  //   video: '',
  //   videoCaption: 'Our song for hard days'
  // },
  // {
  //   num: 'VII',
  //   name: 'Our Adventures',
  //   icon: '✧',
  //   date: 'Every journey we took',
  //   quote: '"Adventure is not about the places — it\'s about who you discover when you\'re lost somewhere beautiful together."',
  //   art: 'stars',
  //   salutation: 'My fellow explorer,',
  //   paragraphs: [
  //     { text: 'We have been spectacularly, joyfully lost together. We have taken wrong trains and eaten at restaurants we found by accident and slept in rooms that smelled of old wood and discovered that the wrong way is sometimes the right way.', dropCap: true },
  //     { text: 'You are the best possible companion for the unexpected. When things go sideways — and with us, things do go sideways — you do not catastrophise. You look at me with those eyes and somehow the disaster becomes an anecdote we\'ll be telling for years.' },
  //     { text: 'My favourite version of every city I have visited is the version I saw with you. Not because the city changed, but because the way you look at things teaches me to look differently.' },
  //     { text: 'There are places I want to take you still. There are horizons I have been saving, knowing they\'ll be better with you in the frame.' }
  //   ],
  //   signature: 'your navigator and companion ♥',
  //   photo: '',
  //   photoCaption: 'Somewhere we got beautifully lost',
  //   video: '',
  //   videoCaption: 'Our best adventure, in moving pictures'
  // },
  // {
  //   num: 'VIII',
  //   name: 'Quiet Evenings',
  //   icon: '♥',
  //   date: 'The softest hours',
  //   quote: '"Peace is not the absence of noise. It is the presence of someone whose silence feels like home."',
  //   art: 'moon',
  //   salutation: 'My quietude,',
  //   paragraphs: [
  //     { text: 'Not all love is loud. Some of it is this: you, reading. Me, watching you read. The particular quality of a room lit only by lamplight and the understanding that nothing needs to be said.', dropCap: true },
  //     { text: 'We have become fluent in shared silence. There is an intimacy in it that conversation can\'t quite reach — the knowledge that two people can occupy the same space without performance, without the energy of entertainment, just the simple comfort of proximity.' },
  //     { text: 'The candle burning low. Your feet in my lap. A film we half-watched and fully forgot the plot of. The hour that dissolves without either of us noticing. This is abundance. This is the life that looked ordinary from the outside and felt extraordinary from within.' },
  //     { text: 'I want a thousand more of these evenings. I want to grow old in exactly this kind of comfortable quiet, with you across from me, reading something, unbothered and beloved.' }
  //   ],
  //   signature: 'your peaceful harbor ♥',
  //   photo: '',
  //   photoCaption: 'An evening soft as candlelight',
  //   video: '',
  //   videoCaption: 'The songs of our quiet hours'
  // },
  // {
  //   num: 'IX',
  //   name: 'The Way You Love',
  //   icon: '✦',
  //   date: 'Every day, in a hundred ways',
  //   quote: '"It is the small, unremarkable acts of love — done consistently, over time — that build something magnificent."',
  //   art: 'hearts',
  //   salutation: 'My love,',
  //   paragraphs: [
  //     { text: 'You love in a language of small gestures. I want to make sure you know that I notice every single one. The cup of tea before I ask for it. The way you check I have eaten when I am too lost in something to remember. The questions you ask that prove you were listening weeks ago.', dropCap: true },
  //     { text: 'You love without demanding an audience. You do not love to be seen loving — you love because it is simply who you are, as natural and unremarkable to you as breathing. This is the rarest kind.' },
  //     { text: 'You remember the things I mention once and forget I mentioned. You hold the threads of what I care about and weave them into the fabric of how you treat me. You have taught me, by example, how to love better.' },
  //     { text: 'I am a better person for being loved by you. I do not say this to flatter you. I say it because it is a factual account of what has happened to me since you arrived.' }
  //   ],
  //   signature: 'changed, by you, for the better ♥',
  //   photo: '',
  //   photoCaption: 'A small gesture that meant everything',
  //   video: '',
  //   videoCaption: 'The thousand ways you show up'
  // },
  // {
  //   num: 'X',
  //   name: 'The Family We Found',
  //   icon: '☽',
  //   date: 'As our world grew larger',
  //   quote: '"Family is not always where we begin. Sometimes it is where love, over time, leads us."',
  //   art: 'stars',
  //   salutation: 'My dearest,',
  //   paragraphs: [
  //     { text: 'Something shifted the first time I sat at a table that felt like belonging and realised it was also, quietly, yours. The people who loved you became people I loved. The table grew. The circle widened. The definition of home extended.', dropCap: true },
  //     { text: 'I have watched you with the people who knew you before I did, and I have loved those glimpses into the you that existed before we existed. The old stories. The roles you play in other people\'s histories. The laughter that predates me.' },
  //     { text: 'And I have watched them receive you home, again and again, with the ease of people who have always known exactly where you belong — in the middle of things, causing warmth, laughing too loud, refilling glasses.' },
  //     { text: 'Thank you for letting me into that. Thank you for introducing me to the village it takes. Thank you for making me feel, slowly and surely, like I was always supposed to be part of it.' }
  //   ],
  //   signature: 'part of your story now ♥',
  //   photo: '',
  //   photoCaption: 'All of us together, chaotic and perfect',
  //   video: '',
  //   videoCaption: 'A gathering I never want to forget'
  // },
  // {
  //   num: 'XI',
  //   name: 'The Letters I Never Sent',
  //   icon: '✧',
  //   date: 'Written in the small hours',
  //   quote: '"Some feelings are too large for speech. They wait, patient, until the right pen finds them."',
  //   art: 'path',
  //   salutation: 'My hesitant heart\'s confession,',
  //   paragraphs: [
  //     { text: 'There were things I wrote to you that I never gave you. Drafts on the backs of receipts. Voice notes recorded at two in the morning and deleted before dawn. Pages that began with your name and ended in the middle of a sentence I lost the courage to finish.', dropCap: true },
  //     { text: 'I kept them all. In a folder on my phone labelled with something dull and unromantic to disguise it. Sixty-three unsent words, two hundred attempted declarations, one voice note I still cannot bring myself to delete even though I no longer need to send it.' },
  //     { text: 'They were not unsent because the feelings were uncertain. They were unsent because the feelings were too large for the small words I kept finding. You deserved better sentences than I could manage at the time.' },
  //     { text: 'This is the one I finally finished. I am giving it to you now, a little late, but entirely true. You were worth every draft. You are worth every word I have ever struggled to say.' }
  //   ],
  //   signature: 'finally finding the words ♥',
  //   photo: '',
  //   photoCaption: 'Pages and pages, written for you',
  //   video: '',
  //   videoCaption: 'A reading — my voice, for your ears only'
  // },
  // {
  //   num: 'XII',
  //   name: 'Our Milestones',
  //   icon: '♥',
  //   date: 'The markers along our road',
  //   quote: '"A life is not built of grand gestures but of small decisions made with love, day after day, without fanfare."',
  //   art: 'stars',
  //   salutation: 'My co-architect,',
  //   paragraphs: [
  //     { text: 'First anniversary. First home. First time you called somewhere "ours" in passing, without ceremony, and I had to pretend I was looking at something across the room because my eyes were doing something embarrassing.', dropCap: true },
  //     { text: 'The milestones felt small in the moment — just days, just decisions, just ordinary mornings that happened to be significant. Looking back, they shimmer. They are the architecture of something I could not have designed alone.' },
  //     { text: 'We built this. Not with a plan, not with a blueprint, but with the daily willingness to keep choosing each other. To show up. To repair. To celebrate. To sit in the mundane and find it secretly magnificent.' },
  //     { text: 'I want to mark them all. I want a record of every small brave choice we made that added up, without our quite realising it, to this life that I would not trade for any other.' }
  //   ],
  //   signature: 'proud of everything we\'ve built ♥',
  //   photo: '',
  //   photoCaption: 'The milestones, golden in memory',
  //   video: '',
  //   videoCaption: 'A timeline of us, in pictures'
  // },
  // {
  //   num: 'XIII',
  //   name: 'The Dreams We Share',
  //   icon: '✦',
  //   date: 'Whispered at the edge of sleep',
  //   quote: '"To dream with someone is an act of profound trust — you are showing them the shape of the future you hope for."',
  //   art: 'moon',
  //   salutation: 'My dreamer,',
  //   paragraphs: [
  //     { text: 'Late at night, when the world has narrowed to the two of us, we talk about the life we are still building. The places we have not been yet. The mornings we have not woken up to. The small impossible things that feel possible, encased in the particular safety of your presence.', dropCap: true },
  //     { text: 'I love those conversations. The way they live in the conditional — we would, we could, imagine if — as if all futures were available to us, as if the only question were which one to choose. With you, it feels true. The possibilities feel real.' },
  //     { text: 'There are dreams I have not shared with anyone else. Things I wanted once and lost the courage to want, retrieved only by the confidence you seem to have in me — an amount I am still learning to match in myself.' },
  //     { text: 'I do not know exactly what the future holds. But I know you are in it. And this is not uncertainty — it is the most grounded thing I know.' }
  //   ],
  //   signature: 'dreaming beside you ♥',
  //   photo: '',
  //   photoCaption: 'A view we haven\'t seen yet, but will',
  //   video: '',
  //   videoCaption: 'A vision of our favourite future'
  // },
  // {
  //   num: 'XIV',
  //   name: 'The Gratitude',
  //   icon: '☽',
  //   date: 'A debt I can never repay',
  //   quote: '"Gratitude is love made articulate — the moment when you name, out loud, the weight of what someone has given you."',
  //   art: 'hearts',
  //   salutation: 'My everything,',
  //   paragraphs: [
  //     { text: 'I do not say thank you enough. I want to say it now, in full, without abbreviation: thank you for choosing me. Thank you for choosing me on the easy days and the hard ones. Thank you for choosing me when I made it difficult to.', dropCap: true },
  //     { text: 'Thank you for the patience I did not always deserve and the grace you gave anyway. Thank you for the times you held the space when I could not hold it myself. Thank you for the version of me that only exists because you believed in it first.' },
  //     { text: 'Thank you for the laughter — God, thank you for the laughter. For making ordinary life funny and strange and worth the telling. For turning the small disasters into the best stories. For laughing with me, and occasionally at me, with complete and unconditional love.' },
  //     { text: 'I carry the gift of your love with me everywhere. It has changed the way I walk through the world. I am not the same person I was before you — I am more, and better, and I owe you more than I can say. So I say it again: thank you. Thank you. Thank you.' }
  //   ],
  //   signature: 'thankful in ways words can\'t hold ♥',
  //   photo: '',
  //   photoCaption: 'Gratitude, in every frame I have of you',
  //   video: '',
  //   videoCaption: 'Everything I want to thank you for'
  // },
  // {
  //   num: 'XV',
  //   name: 'Always & Forever',
  //   icon: '✦',
  //   date: 'The last page — and the first',
  //   quote: '"The last page of a love story is never really the last. It is always, secretly, the beginning of the next."',
  //   art: 'stars',
  //   salutation: 'My forever,',
  //   paragraphs: [
  //     { text: 'And so we arrive here — the last letter, the final page, the place where the story closes. Except that I do not believe in endings with you. I believe in continuations. I believe in the next chapter, and the one after that, and the unwritten ones we cannot yet see.', dropCap: true },
  //     { text: 'I have loved you in all the ways I know how. I have tried to be worthy of the love you gave me and found myself humbled by it, regularly, in the best possible sense. I have tried to be present. I have tried to be honest. I have tried, above all, to make you feel what I feel: that you are extraordinary, and that your presence in my life is a grace I did not earn.' },
  //     { text: 'If I could go back to the beginning — to that first hello, to the first walk, to the first time I heard your real laugh — I would choose every moment again. Every single one, including the hard ones. They all led here.' },
  //     { text: 'I love you. I loved you then, when I didn\'t yet know I was loving you. I love you now, with everything I have learned. I will love you in every chapter still to come, in all the forms that love takes as we grow and change and carry each other forward.\n\nAlways. And forever.' }
  //   ],
  //   signature: 'yours — completely, always ♥',
  //   photo: '',
  //   photoCaption: 'All of it. Everything. Us.',
  //   video: '',
  //   videoCaption: 'Our story, from the beginning'
  // }
];

/* ── STATE ── */
let unlockedCount  = 1;
let readChapters   = new Set();
let currentChapter = 0;
let isModalOpen    = false;

/* ══════════════════════════════════════
   AMBIENT SETUP
══════════════════════════════════════ */

function createStars() {
  const sf = document.getElementById('starfield');
  if (!sf) return;
  for (let i = 0; i < 240; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.6 + 0.4;
    s.style.cssText = [
      `left:${Math.random() * 100}%`,
      `top:${Math.random() * 100}%`,
      `width:${size}px`,
      `height:${size}px`,
      `--td:${2 + Math.random() * 5}s`,
      `--td2:${(Math.random() * 6).toFixed(2)}s`,
      `--op1:${(Math.random() * 0.2).toFixed(2)}`,
      `--op2:${(0.5 + Math.random() * 0.5).toFixed(2)}`
    ].join(';');
    sf.appendChild(s);
  }
}

function createParticles() {
  const pc = document.getElementById('particles');
  if (!pc) return;
  const symbols = ['♥', '♡', '✦', '✧', '·', '⁎', '✶'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.cssText = [
      `left:${Math.random() * 96}%`,
      `--ps:${10 + Math.random() * 14}px`,
      `--pd:${8 + Math.random() * 14}s`,
      `--pd2:${(Math.random() * 16).toFixed(1)}s`
    ].join(';');
    pc.appendChild(p);
  }
}

/* ══════════════════════════════════════
   COVER → APP TRANSITION
══════════════════════════════════════ */

function openBook() {
  const cover = document.getElementById('cover');
  const app   = document.getElementById('app');
  cover.classList.add('hidden');
  setTimeout(() => {
    cover.setAttribute('hidden', '');
    app.removeAttribute('hidden');
    renderGrid();
    updateProgress();
  }, 1400);
}

function goToCover() {
  const cover = document.getElementById('cover');
  const app   = document.getElementById('app');
  app.setAttribute('hidden', '');
  cover.removeAttribute('hidden');
  requestAnimationFrame(() => cover.classList.remove('hidden'));
}

/* ══════════════════════════════════════
   CHAPTERS GRID
══════════════════════════════════════ */

function renderGrid() {
  const grid = document.getElementById('chaptersGrid');
  if (!grid) return;
  grid.innerHTML = '';
  CHAPTERS.forEach((ch, i) => {
    const unlocked = i < unlockedCount;
    const read     = readChapters.has(i);
    grid.appendChild(buildCard(ch, i, unlocked, read));
  });
}

function buildCard(ch, i, unlocked, read) {
  const card = document.createElement('div');
  card.className = 'chapter-card' +
    (unlocked ? ' unlocked' : ' locked') +
    (read     ? ' read'     : '');
  card.setAttribute('aria-label',
    unlocked
      ? `Chapter ${ch.num}: ${ch.name}${read ? ' (read)' : ' (unread)'}`
      : `Chapter ${ch.num}: locked`
  );
  if (unlocked) {
    card.tabIndex = 0;
    card.addEventListener('click', () => openChapter(i));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openChapter(i); }
    });
  }
  card.innerHTML = `
    <div class="envelope-wrap">
      <div class="envelope-body">
        <div class="envelope-flap"></div>
        <div class="env-seal">
          ${unlocked
            ? `<i class="fa-solid fa-${read ? 'envelope-open' : 'heart'}"></i>`
            : '<i class="fa-solid fa-lock"></i>'}
        </div>
        ${!unlocked ? '<div class="lock-overlay"><i class="fa-solid fa-lock"></i></div>' : ''}
        ${read ? '<div class="read-badge"><i class="fa-solid fa-check"></i></div>' : ''}
      </div>
    </div>
    <div class="chapter-meta">
      <div class="chapter-num-tag">Chapter ${ch.num}</div>
      <div class="chapter-name">${unlocked ? ch.name : '— locked —'}</div>
    </div>
  `;
  return card;
}

function updateProgress() {
  const total = CHAPTERS.length;
  const pct   = unlockedCount / total;
  const circ  = 2 * Math.PI * 20;
  const ring  = document.getElementById('ringFill');
  const num   = document.getElementById('ringNum');
  const txt   = document.getElementById('progressText');
  if (ring) ring.style.strokeDashoffset = circ - pct * circ;
  if (num)  num.textContent = unlockedCount;
  if (txt)  txt.textContent = `Chapter ${unlockedCount} of ${total} unlocked`;
}

/* ══════════════════════════════════════
   MODAL — OPEN / CLOSE / NAVIGATE
══════════════════════════════════════ */

function openChapter(index) {
  if (index >= unlockedCount) return;
  currentChapter = index;
  populateModal(index);
  const overlay = document.getElementById('modalOverlay');
  overlay.removeAttribute('aria-hidden');
  overlay.classList.add('visible');
  isModalOpen = true;
  document.body.style.overflow = 'hidden';

  if (!readChapters.has(index)) {
    readChapters.add(index);
    if (index + 1 < CHAPTERS.length && index + 1 >= unlockedCount) {
      unlockedCount = index + 2;
    }
    renderGrid();
    updateProgress();
  }
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('visible');
  overlay.setAttribute('aria-hidden', 'true');
  isModalOpen = false;
  document.body.style.overflow = '';
}

function navigate(dir) {
  const next = currentChapter + dir;
  if (next < 0 || next >= CHAPTERS.length || next >= unlockedCount) return;
  currentChapter = next;
  populateModal(next);
  if (!readChapters.has(next)) {
    readChapters.add(next);
    if (next + 1 < CHAPTERS.length && next + 1 >= unlockedCount) {
      unlockedCount = next + 2;
    }
    renderGrid();
    updateProgress();
  }
}

/* ══════════════════════════════════════
   MODAL POPULATION
══════════════════════════════════════ */

function populateModal(i) {
  const ch = CHAPTERS[i];

  document.getElementById('pageNumLeft').textContent  = `— ${romanPage(i)} —`;
  document.getElementById('pageIllustration').innerHTML = buildIllustration(ch.art, ch.icon);
  document.getElementById('pageQuote').innerHTML      = `<p>${ch.quote}</p>`;

  document.getElementById('letterChapterTag').textContent = `Chapter ${ch.num}`;
  document.getElementById('letterTitle').textContent      = ch.name;
  document.getElementById('letterDate').textContent       = ch.date;

  const body = document.getElementById('letterBody');
  body.innerHTML = `<span class="salutation">${ch.salutation}</span>`;
  ch.paragraphs.forEach((p, pi) => {
    const para = document.createElement('p');
    if (pi === 0 && p.dropCap) para.className = 'drop-cap';
    para.textContent = p.text;
    body.appendChild(para);
  });

  document.getElementById('letterMedia').innerHTML    = buildMedia(ch);
  document.getElementById('letterSignature').textContent = ch.signature;
  document.getElementById('pageNumRight').textContent = `${i * 2 + 2}`;

  buildDots(i);
  document.getElementById('navPrev').disabled = i === 0;
  document.getElementById('navNext').disabled = (i + 1 >= unlockedCount) || (i === CHAPTERS.length - 1);
}

/* ══════════════════════════════════════
   MEDIA BUILDER  ← MAIN CHANGE IS HERE
══════════════════════════════════════ */

function buildMedia(ch) {
  let html = `<div class="media-divider"><i class="fa-solid fa-camera-retro"></i> memories</div>`;

  /* ── PHOTO ── */
  if (ch.photo && ch.photo.trim() !== '') {
    /* Real image provided */
    html += `
      <div class="photo-frame" style="padding:0; background:none; border:none;">
        <img
          src="${ch.photo}"
          alt="${ch.photoCaption || 'Our memory'}"
          style="width:100%; height:100%; object-fit:cover; border-radius:4px; display:block;"
          onerror="this.parentElement.innerHTML=\`
            <div style='display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:0.5rem;color:rgba(100,70,20,0.5);font-style:italic;font-size:0.85rem;text-align:center;padding:1rem;'>
              <i class='fa-regular fa-image' style='font-size:2rem;opacity:0.5;'></i>
              <div>Image not found</div>
              <div style='font-size:0.72rem;opacity:0.6;'>${ch.photo}</div>
            </div>
          \`"
        />
      </div>
      <p style="font-family:var(--font-serif);font-style:italic;font-size:0.78rem;color:rgba(100,70,20,0.45);text-align:center;margin-top:-0.4rem;">${ch.photoCaption || ''}</p>
    `;
  } else {
    /* Placeholder */
    html += `
      <div class="photo-frame">
        <i class="fa-regular fa-image photo-icon"></i>
        <div>${ch.photoCaption || 'Add a photo for this chapter'}</div>
        <div class="photo-hint">Set  photo: 'images/yourfile.jpg'  in CHAPTERS data</div>
      </div>
    `;
  }

  /* ── VIDEO ── */
  if (ch.video && ch.video.trim() !== '') {
    const isEmbed = ch.video.includes('youtube.com') || ch.video.includes('drive.google.com') || ch.video.includes('youtu.be');

    if (isEmbed) {
      /* YouTube / Drive iframe */
      html += `
        <div class="video-frame" style="padding:0; overflow:hidden;">
          <iframe
            src="${ch.video}"
            title="${ch.videoCaption || 'Our video memory'}"
            style="width:100%; height:100%; border:none; border-radius:4px;"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
        <p style="font-family:var(--font-serif);font-style:italic;font-size:0.78rem;color:rgba(100,70,20,0.45);text-align:center;margin-top:-0.4rem;">${ch.videoCaption || ''}</p>
      `;
    } else {
      /* Local mp4 / webm */
      html += `
        <div class="video-frame" style="padding:0; overflow:hidden;">
          <video
            controls
            style="width:100%; height:100%; object-fit:cover; border-radius:4px; display:block;"
            onerror="this.parentElement.innerHTML='<div style=\'display:flex;align-items:center;justify-content:center;height:100%;color:rgba(245,224,160,0.4);font-style:italic;font-size:0.85rem;\'>Video not found</div>'"
          >
            <source src="${ch.video}" type="${ch.video.endsWith('.webm') ? 'video/webm' : 'video/mp4'}">
            Your browser does not support video.
          </video>
        </div>
        <p style="font-family:var(--font-serif);font-style:italic;font-size:0.78rem;color:rgba(100,70,20,0.45);text-align:center;margin-top:-0.4rem;">${ch.videoCaption || ''}</p>
      `;
    }
  }
  /* If video is empty, no video section shown at all — cleaner look */

  return html;
}

/* ══════════════════════════════════════
   NAV DOTS
══════════════════════════════════════ */

function buildDots(active) {
  const wrap    = document.getElementById('navDots');
  wrap.innerHTML = '';
  const visible = Math.min(unlockedCount, CHAPTERS.length);
  for (let i = 0; i < visible; i++) {
    const btn = document.createElement('button');
    btn.className = 'nav-dot' +
      (i === active ? ' active' : '') +
      (readChapters.has(i) && i !== active ? ' read-dot' : '');
    btn.setAttribute('aria-label', `Go to chapter ${i + 1}`);
    btn.addEventListener('click', () => { currentChapter = i; populateModal(i); });
    wrap.appendChild(btn);
  }
}

/* ══════════════════════════════════════
   ILLUSTRATIONS
══════════════════════════════════════ */

function buildIllustration(type, icon) {
  const svgs = {
    stars: `
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" stroke="rgba(201,168,76,0.2)" stroke-width="1"/>
        <circle cx="60" cy="60" r="45" stroke="rgba(201,168,76,0.12)" stroke-width="1" stroke-dasharray="4 4"/>
        ${[...Array(8)].map((_, i) => {
          const a = (i * 45) * Math.PI / 180;
          const r = 35 + (i % 2) * 12;
          const x = 60 + r * Math.cos(a);
          const y = 60 + r * Math.sin(a);
          const s = 3 + (i % 3);
          return `<polygon points="${x},${y - s} ${x + s * 0.4},${y + s * 0.4} ${x - s * 0.8},${y - s * 0.3} ${x + s * 0.8},${y - s * 0.3} ${x - s * 0.4},${y + s * 0.4}" fill="rgba(201,168,76,0.7)"/>`;
        }).join('')}
        <text x="60" y="67" text-anchor="middle" font-size="28" fill="rgba(201,168,76,0.8)" font-family="serif">${icon}</text>
      </svg>`,
    moon: `
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" stroke="rgba(201,168,76,0.15)" stroke-width="1"/>
        <path d="M75 30 Q48 60 75 90 Q30 85 30 60 Q30 35 75 30Z" fill="rgba(201,168,76,0.65)" opacity="0.9"/>
        <circle cx="48" cy="48" r="5" fill="rgba(160,120,40,0.25)"/>
        <circle cx="58" cy="70" r="3" fill="rgba(160,120,40,0.2)"/>
        <circle cx="40" cy="65" r="4" fill="rgba(160,120,40,0.18)"/>
      </svg>`,
    hearts: `
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" stroke="rgba(192,96,122,0.2)" stroke-width="1"/>
        ${[[60,55,22],[40,45,12],[80,45,12],[60,80,10]].map(([x, y, s]) =>
          `<path d="M${x},${y + s * 0.3} C${x},${y - s * 0.1} ${x - s},${y - s * 0.8} ${x - s},${y - s * 0.35} C${x - s},${y - s * 0.8} ${x - s * 0.5},${y - s} ${x},${y - s * 0.6} C${x + s * 0.5},${y - s} ${x + s},${y - s * 0.8} ${x + s},${y - s * 0.35} C${x + s},${y - s * 0.8} ${x},${y - s * 0.1} ${x},${y + s * 0.3}Z" fill="rgba(192,96,122,0.65)"/>`
        ).join('')}
      </svg>`,
    rain: `
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" stroke="rgba(100,140,200,0.2)" stroke-width="1"/>
        <ellipse cx="60" cy="42" rx="30" ry="18" fill="rgba(100,140,200,0.35)"/>
        ${[...Array(12)].map((_, i) => {
          const x = 25 + (i % 6) * 14 + (Math.floor(i / 6) * 7);
          const y = 68 + Math.floor(i / 6) * 16;
          return `<line x1="${x}" y1="${y}" x2="${x - 3}" y2="${y + 10}" stroke="rgba(100,160,220,0.5)" stroke-width="1.5" stroke-linecap="round"/>`;
        }).join('')}
      </svg>`,
    path: `
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="58" stroke="rgba(201,168,76,0.15)" stroke-width="1"/>
        <path d="M20 95 Q40 75 60 80 Q80 85 100 60 Q95 40 80 30" stroke="rgba(201,168,76,0.6)" stroke-width="2" stroke-linecap="round" fill="none" stroke-dasharray="6 4"/>
        <circle cx="20" cy="95" r="4" fill="rgba(192,96,122,0.7)"/>
        <circle cx="80" cy="30" r="4" fill="rgba(201,168,76,0.8)"/>
        ${[...Array(5)].map((_, i) => {
          const t = (i + 1) / 6;
          const x = 20 + t * 80;
          const y = 95 - t * 40 + Math.sin(t * Math.PI) * 10;
          return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2" fill="rgba(201,168,76,0.4)"/>`;
        }).join('')}
      </svg>`
  };
  return svgs[type] || svgs.stars;
}

function romanPage(i) {
  const romans = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV'];
  return romans[i] || (i + 1);
}

/* ══════════════════════════════════════
   KEYBOARD & CLICK HANDLERS
══════════════════════════════════════ */

document.addEventListener('keydown', e => {
  if (!isModalOpen) return;
  if (e.key === 'Escape')     closeModal();
  if (e.key === 'ArrowRight') navigate(1);
  if (e.key === 'ArrowLeft')  navigate(-1);
});

document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeModal();
});

const bookWrap = document.getElementById('bookWrap');
if (bookWrap) {
  bookWrap.addEventListener('click', openBook);
  bookWrap.addEventListener('keydown', e => { if (e.key === 'Enter') openBook(); });
}

const openBtn = document.getElementById('openBtn');
if (openBtn) {
  openBtn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openBook(); }
  });
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */

(function init() {
  createStars();
  createParticles();
})();