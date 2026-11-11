// All texts and CV data of the one-pager live in this file.
// Every user-facing string has an English (en) and a Hungarian (hu) version.

export const site = {
  name: 'Bence Tóth',
  nameLocal: { en: 'Bence Tóth', hu: 'Tóth Bence' },
  // Not published on the site. The contact form sends through Formspree
  // (NEXT_PUBLIC_FORM_ENDPOINT); without it the form is hidden.
  email: '',
  linkedin: 'https://www.linkedin.com/in/tothbenceistvan',
  linkedinLabel: 'in/tothbenceistvan',
  github: 'https://github.com/Mikemilligan93',
  githubLabel: 'Mikemilligan93',
  location: { en: 'Budapest, Hungary', hu: 'Budapest' },
};

export const locales = ['en', 'hu'];

export const ui = {
  en: {
    metaTitle: 'Bence Tóth – Business Analyst & Tech Writer',
    metaDescription:
      'Bence Tóth – Senior Business Analyst. The bridge between client and development team: requirements, options, decisions and specifications teams can build from.',
    nav: { about: 'About', cv: 'CV', work: 'Case studies', blog: 'Blog', contact: 'Contact me' },
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    langSwitch: 'Magyar',
    langSwitchShort: 'HU',
    menu: 'Menu',
    skip: 'Skip to content',
    hero: {
      hello: "Hi, I'm Bence.",
      title: ['I build the', 'bridge between', 'client and team.'],
      titleMark: 'bridge', // the word that gets the highlight
      // one string per paragraph
      intro: [
        "Senior Business Analyst at Mito in Budapest. I sit between the client and the development team and make sure both sides mean the same thing. I find out what the client actually needs, lay out the options with their trade-offs, tell them which one I'd pick, and write it all down as a specification the client can sign and the team can build from.",
        "Before software, I spent years in finance operations at Diageo and Citi, on the user's side of internal tools. That's where I learned to think in processes, and what a badly specified tool feels like from the inside.",
        "Off the clock: video games, cars, and the occasional side project built with AI, mostly to find out what it can't do.",
      ],
      ctaCv: 'See my CV',
      ctaContact: "Let's talk",
      badgeRole: 'Senior BA @ Mito',
      badgeSince: 'On the job since 2017',
      photoAlt: 'Bence Tóth holding a microphone',
    },
    cv: {
      kicker: 'The track record',
      title: 'CV',
      lead: 'From finance operations to software delivery. Open any role for the details.',
      download: 'Download CV (PDF)',
      expand: 'Show details',
      collapse: 'Hide details',
      present: 'Present',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills & tools',
    },
    work: {
      kicker: 'Selected work',
      title: 'Case studies',
      lead: 'Side projects where an AI wrote the code and I owned everything else: the brief, the decisions, the testing. The same job I do at work, compressed into days.',
      read: 'Read the case study',
      draft: 'Draft',
      kickerDetail: 'Case study',
      client: 'Client',
      role: 'Role',
      year: 'Year',
      duration: 'Duration',
      back: 'All case studies',
      next: 'Next case study',
      ctaTitle: 'Facing something similar?',
      ctaText: 'I am happy to talk it through, no strings attached.',
      ctaButton: 'Contact me',
    },
    contact: {
      kicker: 'Say hello',
      title: 'Contact me',
      lead: 'Want to work together, or have a project that needs someone between the client and the team? Write to me here or on LinkedIn.',
      name: 'Your name',
      email: 'Your e-mail',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending…',
      sent: 'Got it, thanks. I will get back to you soon.',
      error: 'Something went wrong. Please try again or use one of the links.',
      mailNote: 'Your e-mail app will open with the message filled in.',
    },
    blog: {
      title: 'Blog',
      lead: 'Notes on specifications, decisions and building with AI.',
      all: 'All',
      read: 'Read post',
      back: 'Back to all posts',
      empty: 'No posts with this tag yet.',
      englishOnly: '',
    },
    approach: {
      kicker: 'The short version',
      title: 'How I work',
      lead: 'Six habits I bring to every project.',
    },
    footer: "Built with Next.js, Markdown and an AI that didn't write the spec.",
  },
  hu: {
    metaTitle: 'Tóth Bence – üzleti elemző és tech writer',
    metaDescription:
      'Tóth Bence – senior üzleti elemző. Híd az ügyfél és a fejlesztőcsapat között: igények, lehetőségek, döntések és megépíthető specifikációk.',
    nav: { about: 'Rólam', cv: 'Önéletrajz', work: 'Esettanulmányok', blog: 'Blog', contact: 'Írj nekem' },
    themeToLight: 'Váltás világos módra',
    themeToDark: 'Váltás sötét módra',
    langSwitch: 'English',
    langSwitchShort: 'EN',
    menu: 'Menü',
    skip: 'Ugrás a tartalomra',
    hero: {
      hello: 'Szia, Bence vagyok.',
      title: ['Áthidalom', 'az ügyfél és', 'a fejlesztők közti gapeket'],
      titleMark: 'Áthidalom',
      intro: [
        'Senior üzleti elemző vagyok a Mitónál. Az ügyfél és a fejlesztőcsapat között dolgozom, és az a munkám, hogy a két oldal ugyanazt értse. Kiderítem, mire van valójában szüksége az ügyfélnek, ha kell egymás mellé teszem a lehetőségeket az előnyeikkel és hátrányaikkal, majd a döntést olyan specifikációba írom le, amely mindenkinek megfelel.',
        'Mielőtt a szoftverek felé fordultam, éveket töltöttem pénzügyi területen a Diageónál és a Citinél, a belső rendszerek powerusereként. Ott tanultam meg folyamatokban gondolkodni, és ott tapasztaltam meg belülről, milyen az ügyféloldalon lenni egy fejlesztési projektben.',
        'Munkán kívül: videojátékok, autók, és néha egy-egy AI-jal épített hobbiprojekt, főleg azért, hogy kiderüljön, mire nem vagyok képes.',
      ],
      ctaCv: 'Önéletrajzom',
      ctaContact: 'Beszéljünk',
      badgeRole: 'Senior BA @ Mito',
      badgeSince: '2017 óta a pályán',
      photoAlt: 'Tóth Bence mikrofonnal a kezében',
    },
    cv: {
      kicker: 'Pályám',
      title: 'Önéletrajz',
      lead: 'Pénzügytől a szoftverfejlesztésig. A részletekért nyiss le egy pozíciót.',
      download: 'Önéletrajz letöltése (PDF)',
      expand: 'Részletek megjelenítése',
      collapse: 'Részletek elrejtése',
      present: 'jelenleg',
      experience: 'Szakmai tapasztalat',
      education: 'Tanulmányok',
      skills: 'Készségek és eszközök',
    },
    work: {
      kicker: 'Válogatott munkák',
      title: 'Esettanulmányok',
      lead: 'Hobbiprojektek, ahol a kódot AI írta, minden mást én vittem: a briefet, a döntéseket, a tesztelést. Ugyanaz a munka, amit a cégnél végzek, csak napokba sűrítve. Az esettanulmányok angol nyelvűek.',
      read: 'Esettanulmány (angolul)',
      draft: 'Piszkozat',
      kickerDetail: 'Esettanulmány',
      client: 'Ügyfél',
      role: 'Szerep',
      year: 'Év',
      duration: 'Időtartam',
      back: 'Összes esettanulmány',
      next: 'Következő esettanulmány',
      ctaTitle: 'Hasonló helyzetben vagy?',
      ctaText: 'Szívesen átbeszélem, kötelezettség nélkül.',
      ctaButton: 'Írj nekem',
    },
    contact: {
      kicker: 'Köszönj be',
      title: 'Írj nekem',
      lead: 'Dolgoznál velem, vagy van egy projekted, ahol kell valaki az ügyfél és a csapat közé? Írj itt vagy LinkedInen.',
      name: 'Neved',
      email: 'E-mail-címed',
      message: 'Üzenet',
      send: 'Üzenet küldése',
      sending: 'Küldés…',
      sent: 'Megkaptam, köszönöm. Hamarosan jelentkezem.',
      error: 'Valami hiba történt. Próbáld újra, vagy használd valamelyik linket.',
      mailNote: 'Megnyílik a levelezőprogramod az előre kitöltött üzenettel.',
    },
    blog: {
      title: 'Blog',
      lead: 'Jegyzetek specifikációkról, döntésekről és az AI buildekről.',
      all: 'Összes',
      read: 'Elolvasom',
      back: 'Vissza a bejegyzésekhez',
      empty: 'Ehhez a címkéhez még nincs bejegyzés.',
      englishOnly: 'A blog angol nyelvű.',
    },
    approach: {
      kicker: 'Röviden',
      title: 'Így dolgozom',
      lead: 'Hat szokás, amit minden projektbe magammal viszek.',
    },
    footer: 'Next.js-szel, Markdownnal és egy AI-jal készült, de a specifikációt nem az AI írta.',
  },
};

// color: one of yellow | pink | green | purple | blue | orange (see globals.css)
export const jobs = [
  {
    id: 'mito-senior',
    company: 'Mito Group',
    color: 'yellow',
    role: { en: 'Senior IT Business Analyst', hu: 'Senior IT üzleti elemző' },
    start: { en: 'Oct 2025', hu: '2025. okt.' },
    end: null,
    location: { en: 'Budapest · Hybrid', hu: 'Budapest · Hibrid' },
    bullets: {
      en: [
        'Writing functional specifications from client requirement documents',
        'Preparing scope of work documents for new projects',
        'Mentoring and leading BA work in the team',
      ],
      hu: [
        'Funkcionális specifikációk írása ügyféligény-dokumentumokból',
        'Scope of work dokumentumok készítése új projektekhez',
        'A csapat BA-munkájának mentorálása és vezetése',
      ],
    },
    skills: ['Business Analysis', 'Technical Writing'],
  },
  {
    id: 'mito-ba',
    company: 'Mito Group',
    color: 'yellow',
    role: { en: 'IT Business Analyst', hu: 'IT üzleti elemző' },
    start: { en: 'May 2023', hu: '2023. máj.' },
    end: { en: 'Oct 2025', hu: '2025. okt.' },
    location: { en: 'Budapest', hu: 'Budapest' },
    bullets: {
      en: [
        'Bridging the gap between business needs and tech solutions',
        'Facilitating communication between business stakeholders and technical teams (frontend, backend, QA) to keep everyone aligned on project goals',
        'Creating consistent and detailed technical documentation',
        "Analysing the client's business needs",
        'Collaborating closely with UX/UI design teams on user-friendly solutions that meet both technical and design standards',
        'Improving workshop techniques and information channels',
      ],
      hu: [
        'Híd az üzleti igények és a technológiai megoldások között',
        'Az üzleti szereplők és a technikai csapatok (frontend, backend, QA) közötti kommunikáció támogatása, hogy mindenki ugyanazokat a projektcélokat lássa',
        'Egységes és részletes technikai dokumentáció készítése',
        'Az ügyfél üzleti igényeinek elemzése',
        'Szoros együttműködés a UX/UI csapatokkal olyan felhasználóbarát megoldásokon, amelyek technikai és designszempontból is megállják a helyüket',
        'A workshoptechnikák és az információs csatornák fejlesztése',
      ],
    },
    skills: ['Business Analysis', 'Technical Writing'],
  },
  {
    id: 'it4all',
    company: 'it4all Hungary',
    color: 'pink',
    role: { en: 'IT Business Analyst', hu: 'IT üzleti elemző' },
    start: { en: 'Jun 2021', hu: '2021. jún.' },
    end: { en: 'May 2023', hu: '2023. máj.' },
    location: { en: 'Budapest', hu: 'Budapest' },
    bullets: {
      en: [
        'Gathering business requirements from clients; managing and prioritising the product backlog (Azure DevOps)',
        'End-to-end project management, from the business proposal to the end of the support period',
        'Coordinating a team of developers',
        'Writing technical, process and user documentation',
        'Creating BPMN and UML diagrams (Visio, Lucidchart)',
        'Designing lo-fi wireframes and UI (Figma)',
      ],
      hu: [
        'Üzleti követelmények felmérése az ügyfeleknél; a product backlog kezelése és priorizálása (Azure DevOps)',
        'Teljes körű projektmenedzsment az üzleti ajánlattól a support időszak végéig',
        'Fejlesztőcsapat koordinálása',
        'Technikai, folyamat- és felhasználói dokumentáció írása',
        'BPMN- és UML-diagramok készítése (Visio, Lucidchart)',
        'Lo-fi drótvázak és UI tervezése (Figma)',
      ],
    },
    skills: ['Project Management', 'Business Analysis', 'Azure DevOps', 'Figma'],
  },
  {
    id: 'citi',
    company: 'Citi',
    color: 'blue',
    role: {
      en: 'Financial Reporting Officer – Liquidity',
      hu: 'Financial Reporting Officer – Liquidity',
    },
    start: { en: 'Oct 2020', hu: '2020. okt.' },
    end: { en: 'Jun 2021', hu: '2021. jún.' },
    location: { en: 'Budapest', hu: 'Budapest' },
    bullets: {
      en: [
        'CRD IV daily liquidity reporting for the largest entity, Citibank Europe plc',
        'Taking part in an RPA project: process mapping and UAT testing (Knime)',
        'Process simplification through automation (mainly in Excel)',
      ],
      hu: [
        'CRD IV szerinti napi likviditási riporting a legnagyobb entitás, a Citibank Europe plc számára',
        'Részvétel RPA-projektben: folyamatfelmérés és UAT tesztelés (Knime)',
        'Folyamatok egyszerűsítése automatizálással (főként Excelben)',
      ],
    },
    skills: ['Financial Reporting', 'Process Simplification'],
  },
  {
    id: 'diageo-ba',
    company: 'Diageo',
    color: 'green',
    role: {
      en: 'Business Analyst – Data & Analytics',
      hu: 'Business Analyst – Data & Analytics',
    },
    start: { en: 'Sep 2019', hu: '2019. szept.' },
    end: { en: 'Oct 2020', hu: '2020. okt.' },
    location: { en: 'Budapest', hu: 'Budapest' },
    bullets: {
      en: [
        'Providing regular and ad-hoc reports for the Source-to-Pay (STP) team',
        'Supporting the data warehouse developers in BI projects (Power BI)',
        'Designing solutions for incoming reporting demands',
        'Process simplification (UiPath)',
      ],
      hu: [
        'Rendszeres és ad-hoc riportok készítése a Source-to-Pay (STP) csapatnak',
        'Az adattárház-fejlesztők támogatása BI-projektekben (Power BI)',
        'Megoldások tervezése a beérkező riportigényekre',
        'Folyamatok egyszerűsítése (UiPath)',
      ],
    },
    skills: ['Business Intelligence', 'Power BI', 'Excel'],
  },
  {
    id: 'diageo-lg',
    company: 'Diageo',
    color: 'green',
    role: {
      en: 'Business Analyst – L&G Tool Development (part-time internal project)',
      hu: 'Business Analyst – L&G Tool Development (part-time internal project)',
    },
    start: { en: 'Jan 2020', hu: '2020. jan.' },
    end: { en: 'Apr 2020', hu: '2020. ápr.' },
    location: { en: 'Budapest', hu: 'Budapest' },
    bullets: {
      en: [
        'Business analyst on the development of a new facility management tool',
        'Process mapping and redesign; writing user stories and maintaining the product backlog',
        'Gathering business requirements from internal stakeholders',
        'Coordinating daily stand-ups with the developer team',
        'Facilitating user training',
      ],
      hu: [
        'Üzleti elemző egy új hitelkeret-kezelő (facility management) eszköz fejlesztésében',
        'Folyamatfelmérés és -újratervezés; user storyk írása és a product backlog karbantartása',
        'Üzleti követelmények felmérése a belső érintetteknél',
        'A fejlesztőcsapat napi standupjainak koordinálása',
        'Felhasználói oktatások tartása',
      ],
    },
    skills: ['Project Management', 'Business Analysis'],
  },
  {
    id: 'diageo-bank',
    company: 'Diageo',
    color: 'green',
    role: { en: 'Bank Operations Analyst', hu: 'Bank Operations Analyst' },
    start: { en: 'Apr 2018', hu: '2018. ápr.' },
    end: { en: 'Sep 2019', hu: '2019. szept.' },
    location: { en: 'Budapest', hu: 'Budapest' },
    bullets: {
      en: [
        "Managing Diageo's external facilities (guarantees, letters of credit) at partner banks",
        'Owning yearly audit projects (yearly review of external facilities, bank account completeness)',
        'Taking part in Lean Six Sigma projects',
        'Preparing the weekly cash flow forecasts',
        'Admin of the Loans & Guarantees tool: uploading and editing facilities, maintaining and cleansing the database',
        'Supporting the team in various cash projects',
      ],
      hu: [
        'A Diageo külső banki garanciáinak kezelése',
        'Éves auditprojektek felelőse (külső hitelkeretek éves felülvizsgálata, bankszámlák ellenőrzése)',
        'Részvétel Lean Six Sigma projektekben',
        'Heti cash flow előrejelzések készítése',
        'A Loans & Guarantees eszköz adminisztrátora: hitelkeretek feltöltése és szerkesztése, az adatbázis karbantartása és tisztítása',
        'A csapat támogatása különböző cash projektekben',
      ],
    },
    skills: ['Project Management', 'Bank Guarantees'],
  },
  {
    id: 'diageo-trainee',
    company: 'Diageo',
    color: 'green',
    role: { en: 'Bank Operations Trainee', hu: 'Bank Operations Trainee' },
    start: { en: 'Nov 2017', hu: '2017. nov.' },
    end: { en: 'Apr 2018', hu: '2018. ápr.' },
    location: { en: 'Budapest', hu: 'Budapest' },
    bullets: {
      en: [
        'Supporting the Bank Operations Centre in various cash-related projects',
        'Backup admin of the Loans & Guarantees tool',
        'Supporting the yearly audit projects of the Bank Operations Centre (e.g. account dormancy check, bank account completeness)',
      ],
      hu: [
        'A Bank Operations Centre támogatása különböző cash projektekben',
        'A Loans & Guarantees eszköz helyettes adminisztrátora',
        'A Bank Operations Centre éves auditprojektjeinek támogatása (pl. pending számlák ellenőrzése, bankszámlák teljessége)',
      ],
    },
    skills: [],
  },
];

export const education = [
  {
    school: { en: 'Corvinus University of Budapest', hu: 'Budapesti Corvinus Egyetem' },
    degree: {
      en: "Master's degree, International Business and Economics",
      hu: 'Mesterképzés, nemzetközi gazdaság és gazdálkodás',
    },
    note: {
      en: 'Specialised in International Finance and Business Economy',
      hu: 'Szakirány: nemzetközi pénzügyek',
    },
    years: '2016 – 2019',
  },
  {
    school: { en: 'University of Public Service', hu: 'Nemzeti Közszolgálati Egyetem' },
    degree: {
      en: "Bachelor's degree, Public Administration",
      hu: 'Alapképzés, közigazgatás',
    },
    note: null,
    years: '2013 – 2016',
  },
];

// "How I work": one card per habit, same order in both languages.
export const principles = {
  en: [
    {
      title: 'Read everything, then talk to people.',
      text: 'I read the whole requirement document, turn it into a list of open questions, then take those questions to the people who can answer them.',
    },
    {
      title: 'Options, trade-offs, a recommendation.',
      text: "Clients get the options side by side, what each one costs, and which one I'd choose and why. The decision stays theirs.",
    },
    {
      title: 'Show the consequence.',
      text: "When I think a request is wrong, I walk through what it leads to and let the client draw the conclusion.",
    },
    {
      title: 'Every decision has an owner.',
      text: 'Vague ownership is how projects stall. Who decides, who answers and who builds goes on paper early.',
    },
    {
      title: 'No hidden problems.',
      text: "A known problem gets raised the day I know about it. And I don't write a spec section I can't explain.",
    },
    {
      title: 'AI drafts, people decide.',
      text: "I use AI to analyse input material, draft documents and build my own tools. The client relationship, and anyone else's voice, stay with people. Code got cheap; a clear description didn't.",
    },
  ],
  hu: [
    {
      title: 'Előbb olvasok, aztán kérdezek.',
      text: 'Végigolvasom a teljes követelménydokumentumot, nyitott kérdések listájává alakítom, aztán ezekkel a kérdésekkel megyek azokhoz, akik meg tudják válaszolni őket.',
    },
    {
      title: 'Lehetőségek, kompromisszumok, javaslat.',
      text: 'Az ügyfél egymás mellett látja a lehetőségeket és hogy én melyiket választanám és miért. A döntés az övé marad.',
    },
    {
      title: 'Megmutatom a következményt.',
      text: 'Ha szerintem egy kérés rossz, végigmegyek azon, mihez vezet, és hagyom, hogy az ügyfél vonja le a következtetést.',
    },
    {
      title: 'Minden döntésnek gazdája van.',
      text: 'Sokszor a tisztázatlan felelősség miatt akadnak el a projektek. Hogy ki dönt, ki válaszol és ki épít, az már korán papírra kerül.',
    },
    {
      title: 'Nincsenek eltitkolt problémák.',
      text: 'Egy ismert problémát már akkor jelzek, amikor tudomást szerzek róla. Nem írok olyan specifikációt, amelyet nem tudok elmagyarázni.',
    },
    {
      title: 'Az AI vázlatot ír, ember dönt.',
      text: 'AI-jal elemzem a bemeneti anyagokat, dokumentumvázlatokat készítek és saját eszközöket építek. Az ügyfélkapcsolat és mások hangja emberek kezében marad. A kód olcsó lett, a világos leírás nem.',
    },
  ],
};

export const skills = [
  'Business Analysis',
  'Functional Specifications',
  'Scope of Work',
  'Workshop Facilitation',
  'Technical Writing',
  'Project Management',
  'Requirements Gathering',
  'Backlog Management',
  'BPMN & UML',
  'Wireframing',
  'Figma',
  'Azure DevOps',
  'Power BI',
  'Excel',
  'Process Simplification',
];
