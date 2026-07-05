export type Locale = "th" | "en";

export const projectGroups = [
  {
    slug: "logical-test",
    title: { th: "Logical Test", en: "Logical Test" },
    type: { th: "Interactive assessment", en: "Interactive assessment" },
    description: {
      th: "ระบบประเมินเชิงตรรกะที่แปลงเกณฑ์ซับซ้อนให้เป็นหน้าจอใช้งานที่อ่านง่ายและตัดสินใจได้รวดเร็ว",
      en: "A logical assessment interface that turns complex criteria into clear, decision-ready screens.",
    },
    images: ["logical-test-01.png", "logical-test-02.png"],
    cover: "logical-test-01.png",
    aspect: "square",
  },
  {
    slug: "gamifications",
    title: { th: "Gamification System", en: "Gamification System" },
    type: { th: "Learning mechanics", en: "Learning mechanics" },
    description: {
      th: "ระบบระดับ คะแนน และความก้าวหน้า เพื่อช่วยให้ผู้เรียนเห็นเป้าหมายและอยากเรียนต่อจนจบ",
      en: "Levels, scores, and progress mechanics designed to sustain learner motivation.",
    },
    images: ["gamifications-01.png", "gamifications-02.png", "gamifications-03.png"],
    cover: "gamifications-01.png",
    aspect: "square",
  },
  {
    slug: "gmp-pest-control",
    title: { th: "GMP — การควบคุมสัตว์พาหะ", en: "GMP — Pest Control" },
    type: { th: "ชุดภาพอบรม 17 ฉาก", en: "17-scene training series" },
    description: {
      th: "ชุดตัวละครและเหตุการณ์สำหรับอธิบายความเสี่ยงจากสัตว์พาหะในพื้นที่ผลิต ให้จดจำสัญญาณเตือนได้จากภาพ",
      en: "A character-led scene series that makes pest risks and warning signs memorable for production teams.",
    },
    images: [
      "gmp-pest-control-01.png","gmp-pest-control-02.png","gmp-pest-control-03.png",
      "gmp-pest-control-04.png","gmp-pest-control-05.png","gmp-pest-control-06.png",
      "gmp-pest-control-07.png","gmp-pest-control-08.png","gmp-pest-control-09.png",
      "gmp-pest-control-10.png","gmp-pest-control-11.png","gmp-pest-control-12.png",
      "gmp-pest-control-13.png","gmp-pest-control-14.png","gmp-pest-control-15.png",
      "gmp-pest-control-16.png","gmp-pest-control-17.png",
    ],
    cover: "gmp-pest-control-01.png",
    aspect: "wide",
  },
  {
    slug: "gmp-cleanliness",
    title: { th: "GMP — ความสะอาด", en: "GMP — Cleanliness" },
    type: { th: "ชุดภาพอบรม 4 ฉาก", en: "4-scene training series" },
    description: {
      th: "สื่อภาพขั้นตอนและพฤติกรรมด้านความสะอาดสำหรับพื้นที่ผลิต ถ่ายทอดมาตรฐานให้เป็นสถานการณ์ที่เข้าถึงง่าย",
      en: "A visual series translating cleanliness standards into friendly, practical workplace situations.",
    },
    images: ["gmp-cleanliness-01.png", "gmp-cleanliness-02.png", "gmp-cleanliness-03.png", "gmp-cleanliness-04.png"],
    cover: "gmp-cleanliness-01.png",
    aspect: "wide",
  },
  {
    slug: "gmp-floor",
    title: { th: "GMP — การดูแลพื้น", en: "GMP — Floor Care" },
    type: { th: "ชุดภาพอบรม 11 ฉาก", en: "11-scene training series" },
    description: {
      th: "ลำดับภาพการดูแลพื้นในโรงงาน ตั้งแต่การสังเกตความเสี่ยงจนถึงการจัดการอย่างถูกวิธี",
      en: "An 11-scene sequence covering floor hazards, observation, and correct handling in production areas.",
    },
    images: [
      "gmp-floor-01.png","gmp-floor-02.png","gmp-floor-03.png",
      "gmp-floor-04.png","gmp-floor-05.png","gmp-floor-06.png",
      "gmp-floor-07.png","gmp-floor-08.png","gmp-floor-09.png",
      "gmp-floor-10.png","gmp-floor-11.png",
    ],
    cover: "gmp-floor-01.png",
    aspect: "wide",
  },
] as const;

export const nav = {
  th: [
    ["หน้าแรก", ""], ["บริการ", "services"], ["ผลงาน", "portfolio"],
    ["ขั้นตอน", "process"], ["เกี่ยวกับเรา", "about"], ["ติดต่อ", "contact"],
  ],
  en: [
    ["Home", ""], ["Services", "services"], ["Work", "portfolio"],
    ["Process", "process"], ["About", "about"], ["Contact", "contact"],
  ],
} as const;

export const copy = {
  th: {
    quote: "ขอใบเสนอราคา",
    eyebrow: "สื่อการเรียนรู้สำหรับองค์กรยุคใหม่",
    hero: "ทำเรื่องยากให้เห็นภาพ — และอยากเรียนต่อ",
    intro: "TechLearning เปลี่ยนคู่มือ มาตรฐาน และขั้นตอนการทำงาน ให้เป็น E-Learning, Animation และ Infographic ที่เข้าใจง่าย จดจำได้ และพร้อมใช้จริง",
    viewWork: "ดูผลงานล่าสุด",
    selected: "ผลงานที่เพิ่งเพิ่ม",
    selectedSub: "จากระบบประเมินเชิงตรรกะ ไปจนถึงชุดสื่อ GMP ที่เล่าเป็นฉากและตัวละคร",
    services: "สิ่งที่เราทำ",
    serviceItems: [
      ["01", "E-Learning", "เปลี่ยนคู่มือและเนื้อหาอบรมเป็นบทเรียนภาพที่ดูง่ายและพร้อมใช้กับ LMS"],
      ["02", "Safety & GMP", "จำลองเหตุการณ์และพฤติกรรมที่ถูกต้องสำหรับโรงงานและองค์กร"],
      ["03", "Storytelling", "เล่าเรื่องยากผ่านตัวละครและสถานการณ์ที่เป็นมิตรกับผู้เรียน"],
      ["04", "Visual Data", "จัดระบบนโยบาย ขั้นตอน และข้อมูลซับซ้อนให้สแกนอ่านได้ทันที"],
    ],
    proof: ["5 ชุดผลงานใหม่", "37 ภาพพร้อมใช้งาน", "TH / EN สองภาษา"],
  },
  en: {
    quote: "Request a quote",
    eyebrow: "Learning media for modern organizations",
    hero: "Make complex ideas visible — and worth learning",
    intro: "TechLearning turns manuals, standards, and procedures into clear E-Learning, animation, and infographics that people remember and can use.",
    viewWork: "View recent work",
    selected: "Recently added work",
    selectedSub: "From logical assessment interfaces to character-led GMP learning series.",
    services: "What we do",
    serviceItems: [
      ["01", "E-Learning", "Turn training content into clear visual lessons ready for your LMS."],
      ["02", "Safety & GMP", "Model correct behavior and real workplace situations for industrial teams."],
      ["03", "Storytelling", "Explain difficult topics through approachable characters and scenarios."],
      ["04", "Visual Data", "Structure policies, procedures, and complex information for quick scanning."],
    ],
    proof: ["5 new project series", "37 production-ready visuals", "Thai / English"],
  },
} as const;
