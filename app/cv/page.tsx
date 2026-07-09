'use client'

import Link from 'next/link'

const canvasItems = [
  '以 51 份问卷、8 次深访及网络民族志分析学习者行为，发现 86.27% 受访者受语言焦虑影响课堂参与，52.5% 认为主动参与困难；据此拆解提问、检索与视频学习场景。',
  '完成 Canvas LMS 内嵌插件高保真原型，围绕实时语义脚手架、匿名提问与学习内容获取设计交互方案，降低非母语学习者的表达和信息查找门槛。',
  '将调研结论转化为用户旅程、功能优先级与交互流程，并通过原型评审持续调整信息层级和任务路径，完成从场景分析到方案交付的闭环。',
  '项目于 2025 年结束；2026 年实际使用 Canvas 时发现，官方上线了与项目构想一致的 3 项能力：视频文字转录、视频时间戳备注、系统文件智能 AI 搜索，验证了需求洞察与产品判断的前瞻性。',
]

const skiItems = [
  '洞察传统滑雪姿态分析依赖昂贵外设、真人教练费用高且难以长期跟随同一教练学习的问题，提出由 AI 分析滑雪视频并提供动作反馈的产品方案；独立完成产品设计，正在进行 vibe coding 原型开发。',
  '以手机／运动相机视频为核心，可选融合手机陀螺仪、Apple Watch 等大众设备的 IMU 数据，降低专业动作分析门槛。',
  '设计拍前跳跃／挥手同步机制，通过视频画面与传感器失重波峰自动对齐；以 3D 骨架覆盖对比识别重心后坐、膝盖锁死等问题，输出直观纠错反馈。',
  '规划面向内容发布的 AI 剪辑工具：识别换刃、起跳等高光，自动追踪人物并将横屏素材重构为 9:16 竖屏视频，叠加立刃角度、G 力等数据水印，降低创作者剪辑与发布成本。',
  '设计“AI 诊断－教程／真人教练推荐－教练入驻”的内容与服务闭环，并延展 3D 雪道众包及安全预警；后续发现深圳比特天空团队探索同类方向，验证了对市场需求的前瞻判断。',
]

const xhsItems = [
  '拆解内容浏览、种草、讨论、购买与评价链路，识别个性化不足、评价信任缺失和内容场景混淆等问题，独立输出 20+ 页 PRD。',
  '设计“帮 TA 选”社交购物玩法及 5 项筛选维度，并构建兴趣标签＋可信度等级的评价体系，强化真实内容供给与用户决策效率。',
  '梳理功能入口、页面结构、关键状态与交互逻辑，围绕用户发起邀请、好友参与和结果沉淀设计完整任务流，兼顾内容互动与购买决策。',
  '研究中判断某页面存在明显体验问题，数日后该页面被官方下线，验证了对社区内容场景和产品问题的判断。',
]

const mapItems = [
  '面向 0–24 个月婴儿母亲开展 30 人混合方法调研，结合访谈、实地观察与问卷发现：83.3% 为主要照护者，近 30% 处于近乎完全孤立的育儿状态。',
  '进一步识别 56.7% 受访者依赖刷手机等被动分心方式缓解压力、46.7% 从不向他人倾诉，揭示当地文化活动供给与母亲群体实际社会支持之间的断层。',
  '将洞察转化为两套互补方案：户外互动情绪光装置把实时情绪信号转化为匿名“情绪光谱”；室内沉浸式空间通过投影、引导式瑜伽与正念内容支持情绪恢复。',
  '经历草图、线框、高保真与终版共 5 轮迭代，结合奥兹向导、纸质原型、出声思维和专家评审验证方案，最终获得客户认可。',
]

const spaceItems = [
  '在全英文团队中运营 Instagram、小红书及微信公众号内容，参与选题、双语文案和发布执行，理解不同平台的内容规范、用户预期与传播路径。',
  '对比中澳社交平台的内容形态与受众反馈，提炼跨文化用户场景差异，为内容定位、发布节奏和运营策略提供依据。',
  '参与市场调研并整理用户反馈，将分散信息归纳为结构化报告，支持团队识别内容问题、判断用户需求并调整策划方向。',
  '在选题策划、内容制作与发布复盘中主动对齐团队需求，积累与设计、运营等角色协作推进内容交付的经验。',
]

const museumItems = [
  '参与 13 场主题展览的策划、文案撰写、布展协调与观众接待，积累内容组织、现场执行和多方沟通经验。',
  '参与“心手相连·大爱无疆”公益义拍策划与执行，筹款 42 万余元用于灾区重建，获 8 家媒体报道。',
  '协助甘肃画家晋京展览落地，该项目在中国美术馆展出 6 天，积累高规格项目的现场协同与交付经验。',
]

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="resume-section-title">{children}</h2>
}

function Entry({
  title,
  meta,
  date,
  items,
}: {
  title: string
  meta: string
  date: string
  items: string[]
}) {
  return (
    <article className="resume-entry">
      <header className="resume-entry-head">
        <div><strong>{title}</strong><span>{meta}</span></div>
        <time>{date}</time>
      </header>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </article>
  )
}

export default function CVPage() {
  return (
    <main className="resume-site">
      <nav className="resume-nav">
        <Link href="/">← 返回作品集</Link>
        <span>张馨予 · 产品简历</span>
        <button type="button" onClick={() => window.print()}>打印 / 保存 PDF</button>
      </nav>

      <div className="resume-pages">
        <section className="resume-sheet resume-sheet-one">
          <header className="resume-hero">
            <div>
              <p className="resume-kicker">PRODUCT · RESEARCH · DESIGN</p>
              <h1>张馨予</h1>
              <p className="resume-contact">18919078733　·　<a href="mailto:iamiya0187@163.com">iamiya0187@163.com</a></p>
              <p className="resume-availability">可连续实习 3 个月以上，每周 4 天以上；预计 2026 年 12 月取得毕业证，届时可全职到岗</p>
            </div>
            <div className="resume-photo-frame">
              {/* object-position keeps the face centred while cropping excess jacket/background */}
              <img src="/profile-photo.jpg" alt="张馨予证件照" />
            </div>
          </header>

          <SectionTitle>个人概况</SectionTitle>
          <p className="resume-summary">悉尼大学交互设计硕士在读，长期使用小红书等内容社区与创作工具。擅长从用户场景、内容行为与竞品变化中识别需求，将洞察拆解为产品方案、PRD 与高保真原型；具备用户研究、内容分析、迭代验证及跨角色协作经验，关注作者发布引导、创作工具与新发布玩法。</p>

          <SectionTitle>教育背景</SectionTitle>
          <Entry title="悉尼大学 The University of Sydney（QS Top 50）" meta="交互设计与电子艺术硕士" date="2024.07 – 2026.12" items={['方向：UI/UX 设计、交互软件开发与服务设计；课程项目覆盖真实客户合作、用户研究、产品原型与迭代验证。']} />
          <Entry title="广西艺术学院" meta="播音与主持艺术学士" date="2019.09 – 2023.06" items={['GPA 84.69/100（前 15%）；校级优秀毕业生；连续两年获评优秀班干部。', '连续两届大广赛获省级广播类二等奖。']} />

          <SectionTitle>项目经历</SectionTitle>
          <Entry title="AI Canvas - AI 辅助学习插件" meta="真实客户项目 / 用户研究 / AI 产品设计" date="2025.08 – 2025.11" items={canvasItems} />
          <Entry title="AI 滑雪教练" meta="个人项目 / 产品设计 / Vibe Coding" date="2026" items={skiItems} />
        </section>

        <section className="resume-sheet">
          <SectionTitle>项目经历（续）</SectionTitle>
          <Entry title="小红书电商体验优化" meta="自主研究 / 内容社区 / PRD" date="2025" items={xhsItems} />
          <Entry title="Mapmima - 母婴文化空间体验" meta="MAP mima 艺术中心 / 真实客户项目" date="2025.03 – 2025.05" items={mapItems} />

          <SectionTitle>工作经历</SectionTitle>
          <Entry title="Space 18（Clickpress Group）" meta="内容运营实习生 / 悉尼" date="2024.01 – 2024.03" items={spaceItems} />
          <Entry title="甘肃美术馆" meta="艺术展览策划助理 / 兰州" date="2023.07 – 2023.12" items={museumItems} />

          <SectionTitle>能力与工具</SectionTitle>
          <div className="resume-skills">
            <p><b>产品</b>用户场景分析 / 需求拆解 / 竞品分析 / 内容分析 / PRD / 用户旅程 / 原型设计 / 可用性测试 / 效果验证</p>
            <p><b>设计与创作</b>Figma / Adobe Photoshop / Premiere Pro / Audition / 剪映 / XMind</p>
            <p><b>AI 与开发</b>ChatGPT / Claude / Gemini / Copilot / Cursor / DeepSeek / Vibe Coding</p>
            <p><b>数据与语言</b>SQL / 问卷与访谈分析 / 普通话一级乙等 / IELTS 6.5（口语 7.0）</p>
          </div>

          <SectionTitle>获奖经历</SectionTitle>
          <div className="resume-awards">
            <p><time>2025</time>Atlassian “Campus as a Marketplace”设计竞赛 - 小组第一名</p>
            <p><time>2023</time>广西艺术学院优秀毕业生</p>
            <p><time>2020–2022</time>全国大学生广告创意大赛省级广播类二等奖（2 次）；“朱锦杯”公益广告创作比赛优秀奖</p>
          </div>
        </section>
      </div>

      <style jsx global>{`
        :root { --resume-ink:#1c2630; --resume-muted:#5b6975; --resume-accent:#15696c; --resume-tint:#eaf4f3; }
        .resume-site { min-height:100vh; background:#edf1f1; color:var(--resume-ink); font-family:"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif; }
        .resume-nav { position:sticky; top:0; z-index:30; height:54px; padding:0 28px; display:flex; align-items:center; justify-content:space-between; gap:20px; background:rgba(255,255,255,.94); border-bottom:1px solid #d7dfdf; backdrop-filter:blur(12px); font:600 12px/1 "Space Mono",monospace; letter-spacing:.04em; }
        .resume-nav a,.resume-nav button { transition:opacity .2s; }
        .resume-nav a:hover,.resume-nav button:hover { opacity:.55; }
        .resume-nav button { border:1px solid #9aabab; padding:8px 12px; background:white; cursor:pointer; }
        .resume-pages { width:min(100%, 920px); margin:34px auto 80px; display:grid; gap:28px; }
        .resume-sheet { width:100%; min-height:1301px; padding:44px 48px 40px; background:white; box-shadow:0 18px 50px rgba(29,47,49,.12); }
        .resume-hero { min-height:166px; display:grid; grid-template-columns:1fr 112px; gap:36px; align-items:center; border-bottom:1px solid #c9dada; padding:0 8px 20px; }
        .resume-kicker { color:var(--resume-accent); font:700 12px/1 "Space Mono",monospace; letter-spacing:.06em; margin-bottom:18px; }
        .resume-hero h1 { font-size:42px; line-height:1; font-weight:800; letter-spacing:-.04em; margin:0 0 22px; }
        .resume-contact,.resume-availability { color:var(--resume-muted); font-size:13px; line-height:1.5; margin:0 0 6px; }
        .resume-contact a:hover { color:var(--resume-accent); }
        .resume-photo-frame { width:112px; height:148px; border:1px solid #b8c7c8; overflow:hidden; background:#f5f7f7; }
        .resume-photo-frame img { width:100%; height:100%; object-fit:cover; object-position:50% 18%; display:block; transform:scale(1.04); }
        .resume-section-title { margin:18px 0 13px -4px; padding:5px 10px 6px 12px; color:var(--resume-accent); background:var(--resume-tint); border-left:4px solid var(--resume-accent); font-size:17px; line-height:1; font-weight:800; }
        .resume-summary { font-size:13px; line-height:1.72; margin:0 4px; }
        .resume-entry { margin:0 4px 13px; }
        .resume-entry-head { display:flex; align-items:baseline; justify-content:space-between; gap:16px; margin-bottom:6px; }
        .resume-entry-head div { min-width:0; }
        .resume-entry-head strong { font-size:14px; line-height:1.3; font-weight:800; }
        .resume-entry-head span { margin-left:10px; color:var(--resume-muted); font-size:12px; }
        .resume-entry-head time { flex:none; color:var(--resume-muted); font-size:12px; }
        .resume-entry ul { margin:0; padding-left:17px; }
        .resume-entry li { padding-left:1px; margin:0 0 4px; font-size:12.5px; line-height:1.58; }
        .resume-skills,.resume-awards { margin:0 4px; }
        .resume-skills p,.resume-awards p { margin:0 0 7px; font-size:12.5px; line-height:1.5; }
        .resume-skills b { display:inline-block; min-width:88px; color:var(--resume-accent); }
        .resume-awards time { display:inline-block; width:72px; color:var(--resume-muted); }
        @media (max-width:720px) {
          .resume-nav span { display:none; }
          .resume-nav { padding:0 16px; }
          .resume-pages { margin:0; gap:0; }
          .resume-sheet { min-height:0; padding:30px 20px; box-shadow:none; border-bottom:12px solid #edf1f1; }
          .resume-hero { grid-template-columns:1fr 88px; gap:16px; min-height:132px; padding-left:0; padding-right:0; }
          .resume-photo-frame { width:88px; height:116px; }
          .resume-kicker { font-size:9px; margin-bottom:12px; }
          .resume-hero h1 { font-size:34px; margin-bottom:14px; }
          .resume-contact,.resume-availability { font-size:11px; }
          .resume-entry-head { align-items:flex-start; }
          .resume-entry-head span { display:block; margin:3px 0 0; }
          .resume-entry li,.resume-summary,.resume-skills p,.resume-awards p { font-size:12px; }
        }
        @media print {
          .resume-site { background:white; }
          .resume-nav { display:none; }
          .resume-pages { width:auto; margin:0; gap:0; display:block; }
          .resume-sheet { width:210mm; height:297mm; min-height:0; padding:11mm 12mm 10mm; box-shadow:none; page-break-after:always; overflow:hidden; }
          .resume-sheet:last-child { page-break-after:auto; }
        }
      `}</style>
    </main>
  )
}
