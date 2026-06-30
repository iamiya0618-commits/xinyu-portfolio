'use client'

import CaseStudyPage, { type CaseStudy } from '@/components/CaseStudyPage'
import { useLang } from '@/lib/LangContext'

const ACCENT = '#00704A'

export default function StarbucksEchoPage() {
  const { lang } = useLang()
  const d = lang === 'en' ? dataEn : dataZh

  const caseStudy: CaseStudy = {
    ...d,
    accent: ACCENT,
    heroVisuals: [
      {
        alt: lang === 'en'
          ? 'Add Starbucks Echo hero image here later'
          : '稍后在这里添加 Starbucks Echo 首图',
        caption: lang === 'en' ? 'Image placeholder' : '图片占位',
        wide: true,
      },
    ],
    next: { href: '/projects/ai-canvas', label: lang === 'en' ? 'Next: AI Canvas' : '下一个：AI Canvas' },
  }

  return <CaseStudyPage caseStudy={caseStudy} lang={lang} />
}

const dataEn: Omit<CaseStudy, 'accent' | 'next'> = {
  title: 'Starbucks Echo',
  subtitle: 'Reimagining Starbucks as an AI-enhanced third place.',
  label: 'AI Product Strategy · Service Design',
  intro: 'Starbucks Echo is a strategic proposal for restoring humanity to a digitally efficient retail experience. It explores how ambient AI, AR memory, and community-oriented loyalty could make customers feel seen, remembered, and valued inside the store.',
  meta: {
    type: 'Digital Transformation Strategy Proposal',
    date: '2025',
    context: 'Academic Consulting Simulation · DESN9002',
    role: 'Strategy · UX Research · Service Design · Visual Presentation',
    tools: 'Figma · Service Design Methods · Academic Research',
  },
  stats: [
    { number: '38K+', label: 'Stores across 80+ countries' },
    { number: '~60%', label: 'Revenue from Mobile Order & Pay' },
    { number: '3', label: 'Core pain points identified' },
    { number: '3', label: 'Phase implementation roadmap' },
  ],
  sections: [
    {
      kicker: 'Problem Space',
      title: 'The efficiency paradox is eroding the third place.',
      body: 'Mobile Order & Pay has transformed Starbucks operations, but it also overloads baristas, disrupts store atmosphere, and turns emotional brand relationships into purely transactional ones. The existing digital system knows what customers order, but not how they feel inside the store.',
      quote: 'The design question: what if AI could restore humanity to efficiency?',
      items: [
        { title: 'Loss of human recognition', body: 'Customers are reduced to order numbers and no longer feel seen or remembered.' },
        { title: 'Operational and atmospheric overload', body: 'Digital order surges reduce the time and space for interpersonal service.' },
        { title: 'Undervalued physical presence', body: 'Long-term in-store presence creates community value, but receives little recognition.' },
      ],
    },
    {
      kicker: 'The Echo System',
      title: 'A three-layer ambient intelligence system.',
      body: 'Echo transforms the physical store from a passive retail location into an emotionally responsive environment.',
      items: [
        {
          title: 'Ambient Sensing Layer',
          meta: 'Computer Vision · Affective Computing',
          body: 'Captures behavioral and emotional signals through existing store infrastructure with opt-in privacy controls.',
          items: ['Micro-expression detection', 'Voice sentiment analysis', 'Edge processing without retaining raw footage'],
        },
        {
          title: 'AR Digital Memory',
          meta: 'Generative AR · Storytelling',
          body: 'Turns each cup into a personalised memory object through scan-triggered AR and a digital diary.',
          items: ['Generative AR cup labels', 'Personal visit archive', 'AI-suggested next orders'],
        },
        {
          title: 'Blockchain Loyalty Points',
          meta: 'Community Impact',
          body: 'Converts in-store dwell time into transparent community contribution points.',
          items: ['Star Time points', 'Verified community projects', 'Shareable impact certificates'],
        },
      ],
    },
    {
      kicker: 'Customer Journey',
      title: 'A day with Echo: from arrival to lasting memory.',
      items: [
        { title: 'Arrival', body: 'Eileen enters the store and chooses to track Star Time through the app.' },
        { title: 'Ambient detection', body: 'The system understands dissatisfaction signals from expression and voice cues.' },
        { title: 'Personalised nudge', body: 'After focused work, Echo recommends a snack based on context and history.' },
        { title: 'AR memory', body: 'A cup scan reveals a personalised AR animation and saves the visit as a story.' },
        { title: 'Community choice', body: 'Star Time points are directed to a local environmental project.' },
        { title: 'Verified legacy', body: 'A blockchain certificate turns ordinary presence into shareable contribution.' },
      ],
    },
    {
      kicker: 'Value Proposition',
      title: 'The business case connects care, loyalty, and spatial intelligence.',
      items: [
        { title: 'Ambient intelligence drives revenue', body: 'Real-time responsive design can improve space utilisation, satisfaction, and operating efficiency.' },
        { title: 'AR creates emotional stickiness', body: 'Immersive product memories turn standardised drinks into personal and social media moments.' },
        { title: 'Community gamification builds loyalty', body: 'The loyalty model gives social value to time customers already spend in-store.' },
      ],
    },
    {
      kicker: 'Implementation',
      title: 'A phased roadmap keeps the proposal testable.',
      items: [
        { title: '0-12 months · Flagship pilot', body: 'Validate sensing accuracy, consent flow, and AR engagement in 2-3 urban flagship stores.' },
        { title: '1-3 years · Expand and launch', body: 'Scale to core districts, launch community partners, and refine the recommendation engine.' },
        { title: '3+ years · Global standardisation', body: 'Roll out with localised partners and establish a benchmark for AI-enhanced hospitality.' },
      ],
    },
    {
      kicker: 'Ethics & Reflection',
      title: 'Technology should serve the human experience it once displaced.',
      body: 'Echo is designed to enhance rather than replace baristas. Its value depends on opt-in privacy, transparent data use, and a clear boundary between assistance and surveillance.',
      quote: 'Starbucks Echo is not only a technological upgrade. It is a return to what the third place was meant to be.',
    },
  ],
}

const dataZh: Omit<CaseStudy, 'accent' | 'next'> = {
  title: 'Starbucks Echo',
  subtitle: '将星巴克重塑为具有 AI 感知能力的第三空间。',
  label: 'AI 产品策略 · 服务设计',
  intro: 'Starbucks Echo 是一份数字化体验战略提案，探索如何用环境 AI、AR 记忆和社区型忠诚体系，让高效率的零售体验重新拥有人的温度，让顾客在门店中感到被看见、被记住、被重视。',
  meta: {
    type: '数字化转型战略提案',
    date: '2025年',
    context: '学术设计顾问模拟项目 · DESN9002',
    role: '战略研究 · UX 研究 · 服务设计 · 视觉呈现',
    tools: 'Figma · 服务设计方法 · 学术研究',
  },
  stats: [
    { number: '38K+', label: '全球门店数，覆盖 80+ 国家' },
    { number: '~60%', label: '门店收入来自移动端点单' },
    { number: '3', label: '核心痛点识别' },
    { number: '3', label: '分阶段落地路线图' },
  ],
  sections: [
    {
      kicker: '问题空间',
      title: '效率悖论正在侵蚀第三空间。',
      body: '移动端点单提升了星巴克运营效率，却也让咖啡师被订单淹没、门店氛围被打断，并将情感型品牌关系压缩成交易关系。现有数字系统知道顾客点了什么，却不知道他们在门店里感受如何。',
      quote: '核心问题是：如果 AI 能让效率重归人性，会怎样？',
      items: [
        { title: '人性识别的丧失', body: '顾客被简化为订单号码，不再被看见或记住。' },
        { title: '运营与氛围过载', body: '数字订单高峰压缩了人与人互动的时间和空间。' },
        { title: '在场价值被低估', body: '长期到店停留创造社区价值，却缺少被认可的机制。' },
      ],
    },
    {
      kicker: 'Echo 系统',
      title: '三层 AI 环境感知系统。',
      body: 'Echo 将实体门店从被动零售场所，转化为具有情感响应能力的空间。',
      items: [
        {
          title: '环境感知层',
          meta: '计算机视觉 · 情感计算',
          body: '基于门店现有基础设施识别行为与情绪信号，并以主动选择和隐私保护为前提。',
          items: ['微表情识别', '语音情感分析', '边缘计算，不保留原始画面'],
        },
        {
          title: 'AR 数字记忆',
          meta: '生成式 AR · 数字叙事',
          body: '将每杯咖啡转化为可扫描、可回看的个性化记忆物件。',
          items: ['生成式 AR 杯标', '个人到访日记', '基于历史偏好的 AI 推荐'],
        },
        {
          title: '区块链积分',
          meta: '社区影响',
          body: '将在店停留时间转化为可验证的社区贡献积分。',
          items: ['星光时刻积分', '支持经验证的社区项目', '可分享的影响力证书'],
        },
      ],
    },
    {
      kicker: '顾客旅程',
      title: 'Eileen 的一天：从到店到留下记忆。',
      items: [
        { title: '到店', body: 'Eileen 进入门店，并通过 App 选择记录星光时刻。' },
        { title: '环境识别', body: '系统从表情与语音中理解她对饮品的不满意信号。' },
        { title: '个性化提醒', body: '长时间专注工作后，Echo 根据情境推荐轻食。' },
        { title: 'AR 记忆', body: '扫描杯标触发专属 AR 动画，并将到访保存为故事。' },
        { title: '社区选择', body: '她将星光时刻积分投入本地环保项目。' },
        { title: '可验证贡献', body: '区块链证书将一次普通到店变成可分享的社区贡献。' },
      ],
    },
    {
      kicker: '价值主张',
      title: '商业价值来自关怀、忠诚与空间智能的连接。',
      items: [
        { title: '环境智能提升收益', body: '实时响应式设计可改善空间利用、用户满意度与运营效率。' },
        { title: 'AR 增强情感黏性', body: '沉浸式产品记忆让标准化饮品成为个人与社交内容。' },
        { title: '社区游戏化建立忠诚', body: '将顾客已经花在门店的时间转化为社会价值。' },
      ],
    },
    {
      kicker: '实施路径',
      title: '分阶段路线图让方案可测试、可扩展。',
      items: [
        { title: '0-12 个月 · 旗舰店试点', body: '在 2-3 家城市旗舰店验证识别准确率、授权流程与 AR 参与度。' },
        { title: '1-3 年 · 扩展上线', body: '进入核心商圈，建立社区合作，并优化推荐引擎。' },
        { title: '3 年以上 · 全球标准化', body: '结合本地合作伙伴推广，建立 AI 增强型服务体验标杆。' },
      ],
    },
    {
      kicker: '伦理与反思',
      title: '技术应服务于它曾经削弱的人性体验。',
      body: 'Echo 的目标是增强而非替代咖啡师。它的价值建立在主动授权、透明数据使用，以及辅助和监控之间清晰边界之上。',
      quote: 'Starbucks Echo 不只是技术升级，而是回到第三空间本该拥有的样子。',
    },
  ],
}
