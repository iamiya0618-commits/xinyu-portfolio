'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLang } from '@/lib/LangContext'

const VIOLET = '#7C3AED'

type CvMode = 'pm' | 'media'

export default function CVPage() {
  const { lang, setLang } = useLang()
  const [mode, setMode] = useState<CvMode>('pm')
  const d = lang === 'en' ? (mode === 'pm' ? cvPmEn : cvMediaEn) : (mode === 'pm' ? cvPmZh : cvMediaZh)
  const shared = lang === 'en' ? sharedEn : sharedZh

  return (
    <main className="bg-white min-h-screen">
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors shrink-0">
            ← {lang === 'en' ? 'Back to Portfolio' : '返回作品集'}
          </Link>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center rounded-full border border-gray-200 p-0.5 bg-gray-50">
              <button
                onClick={() => setMode('pm')}
                className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all ${mode === 'pm' ? 'bg-white text-violet-700 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {lang === 'en' ? 'Product & Design' : '产品 & 设计'}
              </button>
              <button
                onClick={() => setMode('media')}
                className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all ${mode === 'media' ? 'bg-white text-violet-700 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {lang === 'en' ? 'Media & Comms' : '传媒 & 运营'}
              </button>
            </div>
            <button
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-violet-400 hover:text-violet-600 transition-all"
            >
              {lang === 'en' ? '中文' : 'EN'}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-24">

        {/* ── Header ── */}
        <div className="mb-14 pb-10 border-b border-gray-100">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: VIOLET }}>
                {lang === 'en' ? (mode === 'pm' ? 'Product & Design' : 'Media & Communications') : (mode === 'pm' ? '产品 & 设计' : '传媒 & 运营')}
              </p>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-2">{shared.name}</h1>
              <p className="text-xl text-gray-500">{d.title}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-400 mt-5">
            <span>18919078733</span>
            <span>iamiya0187@163.com</span>
            <Link href="/" className="hover:text-violet-600 transition-colors">
              {lang === 'en' ? 'Portfolio →' : '作品集 →'}
            </Link>
          </div>
        </div>

        {/* ── Education (always first) ── */}
        <Section label={shared.sections.education}>
          {shared.education.map((e, i) => (
            <div key={e.school} className="mb-8 last:mb-0">
              <EntryHeader title={e.school} subtitle={e.degree} date={e.date} />
              {(d.educationNotes?.[i] ?? e.notes) && (
                <BulletList items={d.educationNotes?.[i] ?? e.notes ?? []} />
              )}
            </div>
          ))}
        </Section>

        {/* ── Mode-specific sections ── */}
        {d.sections.map((section) => (
          <Section key={section.label} label={section.label}>
            {section.entries.map((entry) => (
              <div key={entry.title + entry.date} className="mb-10 last:mb-0">
                <EntryHeader
                  title={entry.title}
                  subtitle={entry.subtitle}
                  date={entry.date}
                  accentSubtitle={entry.accentSubtitle}
                />
                <BulletList items={entry.items} />
              </div>
            ))}
          </Section>
        ))}

        {/* ── Skills ── */}
        <Section label={shared.sections.skills}>
          <div className="grid sm:grid-cols-2 gap-6">
            {(mode === 'pm' ? shared.skillsPm : shared.skillsMedia).map((group) => (
              <div key={group.category}>
                <p className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-3">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Awards ── */}
        <Section label={shared.sections.awards} last>
          <ul className="space-y-4">
            {(mode === 'pm' ? shared.awardsPm : shared.awardsMedia).map((a) => (
              <li key={a.year + a.title} className="flex gap-4 items-start">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-violet-50 text-violet-600 shrink-0 mt-0.5">{a.year}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{a.title}</p>
              </li>
            ))}
          </ul>
        </Section>

      </div>
    </main>
  )
}

// ─── UI Helpers ───────────────────────────────────────────────────────────────
function Section({ label, children, last }: { label: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`mb-14 ${last ? '' : 'pb-14 border-b border-gray-100'}`}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-6 h-px" style={{ background: VIOLET }} />
        <p className="text-[10px] font-black tracking-[0.3em] uppercase" style={{ color: VIOLET }}>{label}</p>
      </div>
      {children}
    </div>
  )
}

function EntryHeader({ title, subtitle, date, accentSubtitle }: {
  title: string; subtitle: string; date: string; accentSubtitle?: boolean
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
      <div>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-sm" style={accentSubtitle ? { color: VIOLET, fontWeight: 500 } : { color: '#6B7280' }}>{subtitle}</p>
      </div>
      <span className="text-xs font-medium text-gray-400 shrink-0 pt-0.5">{date}</span>
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-sm text-gray-500 flex gap-2 leading-relaxed">
          <span style={{ color: VIOLET }} className="shrink-0 mt-0.5">·</span>{item}
        </li>
      ))}
    </ul>
  )
}

// ─── Shared Content (Education base, Skills, Awards) ──────────────────────────
const sharedEn = {
  name: 'Xinyu Zhang',
  sections: {
    education: 'Education',
    skills: 'Skills',
    awards: 'Awards',
  },
  education: [
    {
      school: 'The University of Sydney',
      degree: 'Master of Interaction Design and Electronic Arts (Audio and Acoustic) · QS Top 50',
      date: 'Jul 2024 – Jun 2026',
      notes: [
        'Research focus: UI/UX design practice, interactive software development, interactive installation design, sound system design',
      ],
    },
    {
      school: 'Guangxi Arts Institute',
      degree: "Bachelor's in Broadcasting and Hosting Arts",
      date: 'Sep 2019 – Jun 2023',
      notes: [
        'GPA: 84.69 / 100 (Top 15%)  ·  Outstanding Graduate  ·  2-year Outstanding Class Officer',
      ],
    },
  ],
  skillsPm: [
    { category: 'Design & Prototyping', items: ['Figma', 'Adobe PS', 'Premiere Pro', 'Audition', 'CapCut', 'Xmind'] },
    { category: 'Research & Strategy', items: ['User Research', 'Usability Testing', 'Service Design', 'Interaction Design', 'PRD Writing'] },
    { category: 'AI Tools', items: ['ChatGPT', 'Claude', 'Gemini', 'Copilot', 'Cursor', 'DeepSeek'] },
    { category: 'Data & Languages', items: ['SQL', 'Tableau', 'SPSS', 'Mandarin (Native)', 'English — IELTS 6.5 · Speaking 7.0'] },
  ],
  skillsMedia: [
    { category: 'Content Production', items: ['Premiere Pro', 'Audition', 'Adobe PS', 'CapCut', 'Figma'] },
    { category: 'Content Strategy', items: ['Copywriting', 'Brand Communications', 'WeChat / Xiaohongshu / Instagram', 'Event Planning', 'Script Writing'] },
    { category: 'AI & Digital Tools', items: ['ChatGPT', 'Claude', 'Gemini', 'Copilot'] },
    { category: 'Languages', items: ['Mandarin — Level 1B (Native)', 'English — IELTS 6.5 · Speaking 7.0', 'Bilingual EN/ZH working proficiency'] },
  ],
  awardsPm: [
    { year: '2025', title: 'Atlassian "Campus as a Marketplace" Design Competition — Group 1st Place · AUD 10,000' },
    { year: '2023', title: 'Outstanding Graduate · Guangxi Arts Institute' },
    { year: '2022', title: '"Zhujin Cup" Public Service Advertising Competition — Excellence Award' },
    { year: '2021', title: 'National College Student Advertising Creative Competition — Provincial Level, Broadcasting Category, 2nd Prize' },
    { year: '2020', title: 'National College Student Advertising Creative Competition — Provincial Level, Broadcasting Category, 2nd Prize' },
  ],
  awardsMedia: [
    { year: '2022', title: '"Zhujin Cup" Public Service Advertising Competition — Excellence Award' },
    { year: '2021', title: 'National College Student Advertising Creative Competition — Provincial Level, Broadcasting Category, 2nd Prize' },
    { year: '2020', title: 'National College Student Advertising Creative Competition — Provincial Level, Broadcasting Category, 2nd Prize' },
    { year: '2023', title: 'Outstanding Graduate · Guangxi Arts Institute' },
    { year: '2022', title: 'Short Film 《Baise Baise》— School 2nd Prize · 10,000+ views on Douyin & Bilibili' },
    { year: '2022', title: 'Short Film 《Soul of Liu Script》— School 1st Prize · WeChat reads 3,000+ · Total plays 10,000+' },
  ],
}

const sharedZh = {
  name: '张馨予',
  sections: {
    education: '教育背景',
    skills: '技能',
    awards: '获奖经历',
  },
  education: [
    {
      school: '悉尼大学 The University of Sydney · QS前50',
      degree: '交互设计与电子艺术（音频与声学方向）硕士',
      date: '2024年7月 – 2026年6月',
      notes: [
        '研究方向：UI/UX 设计实践、交互软件开发、交互装置设计、声音系统设计',
      ],
    },
    {
      school: '广西艺术学院',
      degree: '播音与主持艺术 学士',
      date: '2019年9月 – 2023年6月',
      notes: [
        '绩点：84.69/100（排名前15%）· 优秀毕业生 · 连续两年优秀班干部',
      ],
    },
  ],
  skillsPm: [
    { category: '设计与原型', items: ['Figma', 'Adobe PS', 'Premiere Pro', 'Audition', '剪映', 'Xmind'] },
    { category: '研究与策略', items: ['用户研究', '可用性测试', '服务设计', '交互设计', 'PRD撰写'] },
    { category: 'AI 工具', items: ['ChatGPT', 'Claude', 'Gemini', 'Copilot', 'Cursor', 'DeepSeek'] },
    { category: '数据与语言', items: ['SQL', 'Tableau', 'SPSS', '普通话一级乙等（母语）', '英语 IELTS 6.5（口语7.0）'] },
  ],
  skillsMedia: [
    { category: '内容生产', items: ['Premiere Pro', 'Audition', 'Adobe PS', '剪映', 'Figma'] },
    { category: '内容策略', items: ['品牌文案撰写', '微信公众号运营', '小红书/Instagram', '活动策划执行', '脚本撰写'] },
    { category: 'AI 与数字工具', items: ['ChatGPT', 'Claude', 'Gemini', 'Copilot'] },
    { category: '语言', items: ['普通话一级乙等（母语）', '英语 IELTS 6.5（口语7.0）', '中英双语工作能力'] },
  ],
  awardsPm: [
    { year: '2025', title: 'Atlassian"Campus as a Marketplace"设计竞赛 — 小组第一名 · 奖金10,000澳元' },
    { year: '2023', title: '广西艺术学院 优秀毕业生' },
    { year: '2022', title: '"朱锦杯"公益广告创作比赛 — 优秀奖' },
    { year: '2021', title: '全国大学生广告创意大赛 — 省级广播类二等奖' },
    { year: '2020', title: '全国大学生广告创意大赛 — 省级广播类二等奖' },
  ],
  awardsMedia: [
    { year: '2022', title: '"朱锦杯"公益广告创作比赛 — 优秀奖' },
    { year: '2021', title: '全国大学生广告创意大赛 — 省级广播类二等奖' },
    { year: '2020', title: '全国大学生广告创意大赛 — 省级广播类二等奖' },
    { year: '2023', title: '广西艺术学院 优秀毕业生' },
    { year: '2022', title: '短片《百色百色》— 校级二等奖 · 抖音/B站全平台播放量破万' },
    { year: '2022', title: '短片《柳体之魂》— 校级一等奖 · 微信阅读量3k+ · 全平台播放量破万' },
  ],
}

// ─── PM / Design Version ──────────────────────────────────────────────────────
const cvPmEn = {
  title: 'UX Designer & Product Manager',
  educationNotes: [
    // Master's — enriched for PM
    [
      'Research focus: UI/UX design practice, interactive software development, interactive installation design, sound system design',
      'Atlassian "Campus as a Marketplace" Design Competition — Group 1st Place · AUD 10,000 (2025)',
    ],
    // Undergrad
    [
      'GPA: 84.69 / 100 (Top 15%)  ·  Outstanding Graduate  ·  2-year Outstanding Class Officer',
    ],
  ],
  sections: [
    {
      label: 'Projects',
      entries: [
        {
          title: 'AI Canvas — AI-Assisted Learning Plugin',
          subtitle: 'UX Design & Research · University of Sydney × Real Client',
          date: 'Aug – Nov 2025',
          accentSubtitle: false,
          items: [
            'Led mixed-methods user research: 51 survey responses + 8 in-depth interviews + extensive online ethnography across international student communities — finding that 86.27% reported language anxiety limits classroom participation, and 52.5% found active participation "difficult"',
            'Designed a high-fidelity Canvas LMS plugin prototype with real-time semantic scaffolding and anonymous Q&A mechanisms, systematically lowering the expressive barrier for non-native-language learners',
            '3 proposed features (AI course search, video transcription, in-video chapter markers) were independently shipped by Canvas in Dec 2025 and Apr 2026 — 1 to 5 months post-completion — validating that our research identified genuine product gaps ahead of the platform\'s own roadmap',
          ],
        },
        {
          title: 'Starbucks Echo — Digital Transformation Strategy',
          subtitle: 'AI Product Strategy & Service Design · Academic Consulting Simulation',
          date: '2025',
          accentSubtitle: false,
          items: [
            'Identified Starbucks\' core strategic tension: Mobile Order & Pay drives ~60% of direct store revenue yet erodes the "third place" emotional experience the brand is built on — the "efficiency paradox"',
            'Proposed "Starbucks Echo," a 3-layer AI ambient intelligence system: (1) Ambient Sensing — computer vision + affective computing captures real-time emotional signals without explicit user input; (2) AR Digital Memory — generative AR labels transform each cup into a personal narrative asset; (3) Blockchain Loyalty — converts in-store dwell time ("Star Time") into verifiable community impact points',
            'Built a full customer journey for a target persona (Eileen, 26, urban professional, 3–4 visits/week), mapping AI system responses across all touchpoints from arrival to social contribution',
            'Grounded in McKinsey research (2022): UX optimisation linked to 2–7% revenue growth and 7–10% increase in shareholder returns; proposed a 3-phase implementation roadmap from flagship pilot (0–12 months) to global standardisation (3+ years)',
          ],
        },
        {
          title: 'HungryHub — Atlassian Design Competition',
          subtitle: 'Multi-Platform UX Design · Competition',
          date: 'Nov – Dec 2025',
          accentSubtitle: false,
          items: [
            'Competed in Atlassian\'s "Campus as a Marketplace" challenge; as part of a 4-person team, delivered 3 fully designed platform outputs — Student App, Admin Web interface, and a Physical Product solution — within a 3-week sprint',
            'Owned the full design process end-to-end: user research, UX design, UI design, visual presentation, and final pitch delivery — ensuring every solution was grounded in real operational pain points of both students and service staff',
            'Group First Place · AUD 10,000 prize',
          ],
        },
        {
          title: 'Mapmima — MAP mima Arts Centre',
          subtitle: 'Cross-Context Experience Design · Real Client · NSW',
          date: 'Mar – May 2025',
          accentSubtitle: false,
          items: [
            'Conducted comprehensive mixed-methods user research targeting mothers of 0–24 month infants in Lake Macquarie, NSW (population 210,000+): 30 participants across interviews, observation, and surveys — 70% were first-time mothers, 83.3% were the primary caregiver, and nearly 30% were parenting in near-complete social isolation',
            'Key pain points surfaced: 56.7% relied on passive distraction (phone scrolling) to cope with childcare stress; 46.7% had never confided in anyone about their struggles — revealing a deep gap between the area\'s 240+ annual cultural events and mothers\' actual ability to access community support',
            'Designed two complementary spatial installations: (1) The Catenary — an outdoor interactive light sculpture translating real-time emotional signals into a visible "emotional spectrum," enabling anonymous collective expression; (2) Flow Within / The Cube — an indoor immersive projection space supporting guided yoga and mindfulness for mental restoration',
            'Executed 5 rounds of design iteration (sketch → wireframe → Hi-fi 1.0 → Hi-fi 2.0 & 3.0 → final) using Wizard of Oz simulation, paper prototyping, Think-Aloud protocol, and expert review; final solution commended by MAP mima Arts Centre for creativity, practicality, and implementation readiness',
          ],
        },
      ],
    },
    {
      label: 'Product Design Study',
      entries: [
        {
          title: 'Xiaohongshu E-Commerce — Feature Design & PRD',
          subtitle: 'Self-directed product research · Mentor-guided project',
          date: '2025',
          accentSubtitle: false,
          items: [
            'Independently researched Xiaohongshu\'s e-commerce ecosystem and identified 3 core pain points: insufficient personalisation in the marketplace, absence of a dedicated review system, and content confusion between shopping and lifestyle posts',
            'Produced a 20+ page Product Requirements Document (PRD) covering the marketplace, store, and review system modules — defining optimisation goals, feature scope, and interaction logic for each',
            'Independently designed the "Help Them Choose" (帮TA选) social gifting feature, from entry point design and page planning to 5 configurable filter dimensions, precisely targeting social purchasing and proxy-shopping use cases',
            'Designed a user review tagging system (interest labels + credibility tiers) to strengthen platform trust and improve purchase decision efficiency',
            'During the product analysis phase, identified a structural page design issue causing significant user confusion and began mapping a redesign solution; within days, Xiaohongshu\'s product team independently removed that page entirely — directly validating the design judgment and confirming the issue was platform-recognised',
          ],
        },
      ],
    },
    {
      label: 'Work Experience',
      entries: [
        {
          title: 'Gansu Art Museum · Lanzhou',
          subtitle: 'Art Exhibition Planning Assistant',
          date: 'Jul – Dec 2023',
          accentSubtitle: true,
          items: [
            'Participated in curation and installation across 13 themed exhibitions (anti-corruption culture, youth art, traditional painting); responsibilities spanned exhibition copywriting, on-site setup coordination, and front-line visitor reception',
            'Co-planned and executed the "Heart to Heart · Boundless Love" charity auction, contributing to both the planning phase and on-site coordination; successfully raised 420,000+ RMB for disaster relief, covered by 8 regional media outlets',
            'Participated in the Gansu Painters\' Beijing Exhibition at the China Art Museum — the team\'s highest-profile project that year — supporting on-site coordination across a 6-day run at a nationally prominent venue',
          ],
        },
      ],
    },
  ],
}

const cvPmZh = {
  title: 'UX 设计师 & 产品经理',
  educationNotes: [
    // 硕士 — 产品版强化
    [
      '研究方向：UI/UX 设计实践、交互软件开发、交互装置设计、声音系统设计',
      'Atlassian"Campus as a Marketplace"设计竞赛 — 小组第一名 · 奖金10,000澳元（2025）',
    ],
    // 本科
    [
      '绩点：84.69/100（排名前15%）· 优秀毕业生 · 连续两年优秀班干部',
    ],
  ],
  sections: [
    {
      label: '项目经历',
      entries: [
        {
          title: 'AI Canvas — AI 辅助学习插件',
          subtitle: 'UX 设计与研究 · 悉尼大学 × 真实客户项目',
          date: '2025年8月 – 11月',
          accentSubtitle: false,
          items: [
            '主导混合方法用户调研：51份问卷 + 8人深度访谈 + 大量网络民族志研究——发现86.27%受访者表示语言焦虑限制了课堂参与，52.5%认为主动参与"困难"',
            '设计与 Canvas LMS 集成的 AI 辅助插件高保真原型，核心功能包括实时语义脚手架与匿名提问机制，系统性降低非母语学习者的表达门槛',
            '项目完成后1-5个月内，Canvas 官方独立发布了我们提出的三个功能（AI 课程搜索、视频转录、视频章节标记），直接验证了我们用研洞察的准确性与前瞻性',
          ],
        },
        {
          title: 'Starbucks Echo — 数字化转型战略提案',
          subtitle: 'AI 产品策略与服务设计 · 学术设计顾问模拟项目',
          date: '2025年',
          accentSubtitle: false,
          items: [
            '识别星巴克核心战略矛盾：移动端点单（MOP）贡献约60%门店收入，却正在侵蚀品牌赖以存在的"第三空间"情感体验——即"效率悖论"',
            '提出"Starbucks Echo"三层 AI 环境感知系统：①环境感知层——计算机视觉+情感计算，在无需用户主动反馈的情况下捕捉实时情绪信号；②AR数字记忆——生成式AR标签将每杯咖啡转化为个人化情感资产；③区块链积分——将顾客在店停留时间（"Star Time"）转化为可验证的社区贡献积分',
            '构建完整顾客旅程（目标人物：26岁城市白领Eileen，每周到访3-4次），逐节点设计 AI 系统的响应逻辑，从到达到社区贡献全链路覆盖',
            '方案有麦肯锡研究支撑（2022）：UX优化可带来2-7%营收增长与7-10%股东回报提升；提出从旗舰店试点（0-12个月）到全球化（3年+）的三阶段落地路径',
          ],
        },
        {
          title: 'HungryHub — Atlassian 设计竞赛',
          subtitle: '多端 UX 设计 · 竞赛项目',
          date: '2025年11月 – 12月',
          accentSubtitle: false,
          items: [
            '参加 Atlassian 主办的"Campus as a Marketplace"设计竞赛；以4人团队在3周内交付学生端 App、管理端 Web、线下实体三套完整方案',
            '全程主导设计流程：用户研究、UX 设计、UI 设计、视觉呈现到最终汇报，确保方案精准回应学生与工作人员的真实运营痛点',
            '小组第一名 · 奖金10,000澳元',
          ],
        },
        {
          title: 'Mapmima — MAP mima 艺术中心',
          subtitle: '跨情景体验设计 · 真实客户项目 · 新南威尔士州',
          date: '2025年3月 – 5月',
          accentSubtitle: false,
          items: [
            '针对新南威尔士州麦考瑞湖地区（人口21万+）0–24个月婴儿的母亲群体开展综合混合方法用研（30名参与者，含访谈、实地观察与问卷）：70%为初次为人母，83.3%为主要照护者，近30%在近乎完全孤立的状态下独立育儿',
            '核心痛点：56.7%依赖刷手机等被动分心行为应对育儿压力；46.7%从不向他人倾诉内心挣扎——揭示了当地240+年度文化活动与母亲群体实际可获得的社会支持之间的深层鸿沟',
            '设计两套互补空间装置：①The Catenary——户外互动光装置，将实时情绪信号转化为可见"情绪光谱"，创造匿名集体表达的公共场域；②Flow Within / The Cube——室内沉浸式投影空间，提供引导式瑜伽与正念冥想体验，帮助母亲恢复心理平静',
            '经历5轮设计迭代（草图→线框图→Hi-fi 1.0→Hi-fi 2.0&3.0→终版），综合运用奥兹向导模拟、纸质原型、出声思维协议与专家评审；最终方案因创新性、实用性与落地价值获得 MAP mima 艺术中心高度认可',
          ],
        },
      ],
    },
    {
      label: '产品设计研习',
      entries: [
        {
          title: '小红书电商 — 功能设计与 PRD 撰写',
          subtitle: '自主产品研究 · 导师指导项目',
          date: '2025年',
          accentSubtitle: false,
          items: [
            '独立深度研究小红书电商生态，识别"个性化不足、评价体系缺失、内容场景混淆"三大核心痛点',
            '独立产出超20页《产品需求文档（PRD）》，涵盖市集、店铺、评价体系三大模块的优化目标、功能范围与交互逻辑',
            '独立设计"帮TA选"社交购物功能，完成从入口设计、页面规划到5个可配置筛选维度的产品定义，精准赋能代购与社交购物场景',
            '设计用户评价标签体系（兴趣标签+可信度等级），强化平台"真实种草"心智，提升用户购买决策效率',
            '在产品分析阶段，发现某页面存在明显用户体验问题并开始构思改进方案；几天后发现小红书官方直接将该页面下线删除——独立验证了该判断的准确性，证明问题已被平台方识别并处理',
          ],
        },
      ],
    },
    {
      label: '工作经历',
      entries: [
        {
          title: '甘肃美术馆 · 兰州',
          subtitle: '艺术展览策划助理',
          date: '2023年7月 – 12月',
          accentSubtitle: true,
          items: [
            '参与13场主题展览（反腐文化、青年艺术、传统书画等）的策展与布展工作，承担展览文案撰写、现场布置协调与观众接待任务',
            '参与"心手相连·大爱无疆"公益义拍的策划与现场执行，成功筹款42万余元用于灾区重建，获8家媒体报道',
            '参与甘肃画家晋京展览项目的现场协助工作，该展在中国美术馆展出六天，是团队当年最高规格的对外展览项目',
          ],
        },
      ],
    },
  ],
}

// ─── Media / Communications Version ──────────────────────────────────────────
const cvMediaEn = {
  title: 'Media Producer · Content Strategist · Brand Communications',
  educationNotes: [
    // Master's — brief for media
    [
      'Research focus: UI/UX design practice, interactive installation design, sound system design',
    ],
    // Undergrad — enriched with coursework for media
    [
      'GPA: 84.69 / 100 (Top 15%)  ·  Outstanding Graduate  ·  2-year Outstanding Class Officer',
      'Core coursework: New Media Studies, Introduction to Journalism, Radio & TV Programme Production, Broadcasting Language Arts, Script Writing, Media Ethics',
    ],
  ],
  sections: [
    {
      label: 'Work Experience',
      entries: [
        {
          title: 'Space 18 (Clickpress Group) · Sydney',
          subtitle: 'Brand Communications Intern',
          date: 'Jan – Mar 2025',
          accentSubtitle: true,
          items: [
            'Worked in a fully English-speaking professional environment, producing brand copy for Instagram, Xiaohongshu, and WeChat Official Accounts across client projects',
            'Gained first-hand exposure to Australian new media operations and cross-cultural content workflows, learning how platform conventions and audience expectations differ between the Australian and Chinese markets',
            'Conducted market research and compiled user feedback into structured reports to support the team\'s content planning decisions',
          ],
        },
        {
          title: 'Gansu Art Museum · Lanzhou',
          subtitle: 'Art Exhibition Planning Assistant',
          date: 'Jul – Dec 2023',
          accentSubtitle: true,
          items: [
            'Coordinated the installation and execution of 13 themed exhibitions, including anti-corruption culture, youth art, and Chinese traditional arts shows — developing end-to-end project management skills across curatorial, logistics, and stakeholder coordination',
            'Planned and executed the "Heart to Heart · Boundless Love" charity auction activity, successfully raising 420,000+ RMB for disaster relief reconstruction — covered by 8 regional media outlets',
            'Participated in the Gansu Painters\' Beijing Exhibition at the China Art Museum, supporting on-site coordination across a 6-day run at a nationally prominent venue',
          ],
        },
        {
          title: 'Gansu Radio, Film and Television Station · Lanzhou',
          subtitle: 'Intern Director & Reporter',
          date: 'Jul – Sep 2020',
          accentSubtitle: true,
          items: [
            'Contributed to all production stages of the legal affairs programme 《法制伴你行》: topic planning, on-location interviews with lawyers and police officers, scriptwriting, and post-production editing',
            'Conducted independent street interviews and wrote news content, developing skills in journalism, real-time reporting, and audience-focused storytelling',
          ],
        },
      ],
    },
    {
      label: 'Content & Media Projects',
      entries: [
        {
          title: 'Guangxi Arts Institute — "Kengqiang" WeChat Official Account',
          subtitle: 'Contributing Editor',
          date: '2019 – 2023',
          accentSubtitle: false,
          items: [
            'Contributed to the department\'s official WeChat account across all four undergraduate years, rotating editorial duties with classmates from multiple cohorts',
            'Produced content covering academic events, departmental announcements, and campus activities — maintaining a consistent publishing rhythm and serving as a reliable information channel for a specialist audience',
          ],
        },
        {
          title: 'Liuzhou Impression Short Film Project · Liuzhou',
          subtitle: 'Project Lead · Script & Video Production',
          date: 'Jun – Oct 2022',
          accentSubtitle: false,
          items: [
            'Conceived and produced the short film series "文兴八桂·遇见柳韵" and documentary 《柳体之魂》, overseeing scripting, shooting coordination, and post-production',
            'Produced accompanying articles and interviews; WeChat reads 3,000+ · Total cross-platform views 10,000+ · School 1st Prize',
          ],
        },
        {
          title: 'Baise Short Film Project · Baise',
          subtitle: 'Project Lead · Script & Video Production',
          date: 'Oct – Nov 2021',
          accentSubtitle: false,
          items: [
            'Scripted, directed, and edited the promotional short film 《百色百色》 — School 2nd Prize · Total views exceeded 10,000 on Douyin and Bilibili',
          ],
        },
        {
          title: 'Class of 2019 Graduation Gala · Guangxi Arts Institute',
          subtitle: 'Director Team Member',
          date: 'Oct 2022 – Mar 2023',
          accentSubtitle: false,
          items: [
            'Served on the director team for the 300+ seat graduation gala: coordinated programme scheduling, managed rehearsals, and resolved real-time issues across performers and technical crews to ensure a seamless show',
          ],
        },
      ],
    },
  ],
}

const cvMediaZh = {
  title: '媒体制作 · 内容策略 · 品牌传播',
  educationNotes: [
    // 硕士 — 传媒版简化
    [
      '研究方向：UI/UX 设计实践、交互装置设计、声音系统设计',
    ],
    // 本科 — 传媒版强化课程信息
    [
      '绩点：84.69/100（排名前15%）· 优秀毕业生 · 连续两年优秀班干部',
      '主修课程：新媒体概论、新闻学概论、广播电视节目制作、播音语言艺术、脚本写作、媒体伦理',
    ],
  ],
  sections: [
    {
      label: '工作经历',
      entries: [
        {
          title: 'Space 18（Clickpress Group）· 悉尼',
          subtitle: '品牌传播实习生',
          date: '2025年1月 – 3月',
          accentSubtitle: true,
          items: [
            '在全英文工作环境中承担客户品牌文案撰写，覆盖 Instagram、小红书、微信公众号等平台',
            '深度接触澳洲本地新媒体运营实务，初步了解中澳两地社交平台在内容规范与受众预期上的差异',
            '参与市场调研，整理用户反馈数据，为团队内容策划提供参考',
          ],
        },
        {
          title: '甘肃美术馆 · 兰州',
          subtitle: '艺术展览策划助理',
          date: '2023年7月 – 12月',
          accentSubtitle: true,
          items: [
            '参与13场主题展览（反腐文化、青年艺术、传统书画等）的布展与落地全流程，积累策展统筹与跨部门协作经验',
            '策划执行"心手相连·大爱无疆"公益义拍活动，成功筹款42万余元用于灾区重建，获8家媒体报道',
            '参与甘肃画家晋京展览项目的现场协助工作，该展在中国美术馆展出六天，是团队当年最高规格的对外展览项目',
          ],
        },
        {
          title: '甘肃广播电影电视总台 · 兰州',
          subtitle: '实习编导、记者',
          date: '2020年7月 – 9月',
          accentSubtitle: true,
          items: [
            '深度参与法制节目《法制伴你行》的全制作流程：选题策划、实地采访（律师、民警）、脚本撰写、后期剪辑',
            '独立进行街头采访与新闻写作，培养了快速反应、面向受众的叙事能力',
          ],
        },
      ],
    },
    {
      label: '内容与媒体项目',
      entries: [
        {
          title: '广西艺术学院语言传播系"铿锵"公众号',
          subtitle: '编辑成员',
          date: '2019年 – 2023年',
          accentSubtitle: false,
          items: [
            '大学四年持续参与系级官方公众号"铿锵"的编辑工作，与各年级同学轮流承担内容策划与发布',
            '内容以学院活动资讯、专业动态为主，注重稳定输出，为垂直受众提供可靠的信息渠道',
          ],
        },
        {
          title: '柳州印象短视频项目 · 柳州',
          subtitle: '项目主创 · 策划与视频剪辑',
          date: '2022年6月 – 10月',
          accentSubtitle: false,
          items: [
            '独立策划并统筹制作短视频系列"文兴八桂·遇见柳韵"及纪录片《柳体之魂》，负责脚本创作、拍摄协调与后期制作',
            '配套推文与专访稿件：微信阅读量3000+ · 全平台播放量破万 · 荣获校级一等奖',
          ],
        },
        {
          title: '百色百色短视频项目 · 百色',
          subtitle: '项目主创 · 策划与视频剪辑',
          date: '2021年10月 – 11月',
          accentSubtitle: false,
          items: [
            '独立策划、拍摄并剪辑宣传短片《百色百色》，荣获校级二等奖，抖音/B站全平台播放量破万',
          ],
        },
        {
          title: '广西艺术学院19级播音班毕业晚会',
          subtitle: '导演组成员',
          date: '2022年10月 – 2023年3月',
          accentSubtitle: false,
          items: [
            '作为导演组核心成员，深度参与晚会的策划、彩排、现场调度与节目呈现，协调演员与技术团队，处理突发问题，保障晚会高质量呈现',
          ],
        },
      ],
    },
  ],
}
