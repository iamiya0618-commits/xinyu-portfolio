export type ProjectLang = 'en' | 'zh'

// ─── AI Canvas ────────────────────────────────────────────────────────────────

export const aiCanvasData = {
  en: {
    label: 'UX Design · Service Design',
    title: 'AI Canvas',
    subtitle: 'Bridging Language Barriers in Higher Education',
    intro:
      'An AI-assisted learning system partnered with the University of Sydney, designed to solve international student anxiety and low participation. The delivered AI plugin prototype utilizes real-time semantic scaffolding to lower the barrier to expression and foster an inclusive learning environment.',
    meta: {
      type: 'UX Design, Service Design',
      date: 'Aug – Nov 2024  ·  12 Weeks',
      team: 'Xinyu Zhang, Yiting Huang, Jiaming Zhu, Shona Liu',
      role: 'User Research & Testing · Design Support · Communications',
      partner: 'University of Sydney',
    },
    stats: [
      { number: '27.6%', label: 'International students at Australian universities' },
      { number: '86.27%', label: 'Say language anxiety limits class participation' },
      { number: '65%', label: 'International students feel marginalized' },
      { number: '84.1%', label: 'Cultural differences weaken willingness to speak' },
    ],
    background: {
      label: 'Background',
      title: 'The "Silent Participation" Problem',
      body: 'This study focuses on international students in the Learning Design program at the University of Sydney, aiming to explore ways to improve their learning experience. Despite wanting to engage, students face a critical psychological barrier: an absence of safety leads them to hesitate between wanting to speak and being afraid to.',
      question: 'How can we strengthen and enrich the learning experience of international students in a non-native language environment?',
      barriers: [
        { icon: '①', text: 'Language anxiety' },
        { icon: '②', text: 'Expressive barriers' },
        { icon: '③', text: 'Cultural differences' },
      ],
    },
    research: {
      label: 'Research',
      title: 'Mixed-methods investigation into student experience',
      methods: [
        { name: 'Questionnaire', desc: 'Surveyed international students via LinkedIn to quantify classroom participation patterns and emotional barriers.' },
        { name: 'User Journey', desc: 'Mapped end-to-end academic experiences to identify moments of disengagement and missed opportunity.' },
        { name: 'Empathy Mapping', desc: 'Synthesised emotional journeys across "says, thinks, feels, does" to surface hidden anxieties.' },
        { name: 'Online Ethnography', desc: 'Observed international student communities to understand workarounds and informal coping strategies.' },
        { name: 'Interview', desc: 'In-depth conversations with students revealed the lived experience behind silence in the classroom.' },
        { name: 'Competitor Analysis', desc: 'Benchmarked Gather, 王道辅导, and gamified platforms to identify unmet needs in the learning tool landscape.' },
      ],
      personas: [
        {
          name: 'Yung Park',
          age: '27',
          program: 'Master of Design, USYD',
          duration: 'Overseas 4 years',
          goals: ['Elevate design innovation', 'Enhance team synergy', 'Drive career growth'],
          pain: ['Language pressure', 'Group work burden', 'Career uncertainty'],
          needs: ['Inclusive classroom participation', 'Group collaboration support', 'Career services'],
        },
        {
          name: 'Tao Zhao',
          age: '24',
          program: 'Master of Interaction Design, USYD',
          duration: 'Overseas 1 semester',
          goals: ['Master design foundations', 'Build cultural friendships', 'Map career pathways'],
          pain: ['Language pressure', 'Classroom participation anxiety', 'Assessment clarity'],
          needs: ['Clearer academic guidance', 'Social integration support', 'Transparent assessment standards'],
        },
      ],
    },
    opportunity: {
      label: 'Opportunity Identification',
      intro: 'Preliminary research reveals that international students face two critical hurdles: language-induced "silent participation" and inefficient group collaboration due to cultural gaps. Our team designed AI-assisted interaction mechanisms aimed at fostering a psychologically safe learning environment.',
      goals: [
        {
          title: 'Enhancing Classroom Participation',
          body: 'Foster an inclusive environment by reducing social pressure and enhancing real-time feedback.',
          items: ['AI Language Support — real-time semantic cues and sentence refinement', 'Inclusive Participation — anonymous questioning and AI-mediated responses', 'Knowledge Scaffolding — automated summaries and terminology cards', 'Fair Engagement — smart turn-taking for equitable contribution'],
        },
        {
          title: 'Improving Group Collaboration',
          body: 'Addressing the "secondary participant" status of international students through structural and tool-based interventions.',
          items: ['Optimized Group Formation — match by personality and skills', 'Reduced Initial Silence — structured icebreakers and role assignments', 'Dynamic Engagement — gamification to boost motivation and belonging', 'Visualized Contribution — real-time tracking of every member\'s effort'],
        },
      ],
    },
    features: {
      label: 'Core Solutions',
      title: 'Five AI-powered interventions',
      items: [
        {
          n: '01',
          title: 'Bilingual Real-Time Transcription & Translation',
          desc: 'Transcribes classroom speech into bilingual subtitles to help students follow complex lectures in real time, lowering the comprehension barrier instantly.',
        },
        {
          n: '02',
          title: 'AI-Powered Class Summarization',
          desc: 'Generates key points and structured notes during sessions to support effective review and knowledge retention.',
        },
        {
          n: '03',
          title: 'Expression Enhancement Feedback',
          desc: 'Provides real-time linguistic suggestions to improve students\' clarity and confidence during discussions — supporting their voice without replacing it.',
        },
        {
          n: '04',
          title: 'Campus Knowledge Access Network',
          desc: 'Integrates course materials and technical terminology into a searchable model to streamline information retrieval.',
        },
        {
          n: '05',
          title: 'Anonymous Questioning & Knowledge Archiving',
          desc: 'Allows for low-risk, AI-refined inquiries that are saved into a searchable database for future reference.',
        },
      ],
    },
    strategy: {
      label: 'Design Strategy',
      rootCause: 'Our research identified classroom expression anxiety as the root cause of disengagement. If students lack the confidence to speak up in class, their motivation for subsequent group collaboration naturally declines.',
      phases: [
        { phase: 'Current Focus', title: 'AI-Powered Expression Support', desc: 'Prioritised creating a "safe-to-speak" environment to lower entry barriers and provide immediate support during live lectures.' },
        { phase: 'Next Phase', title: 'Collaborative & Institutional Expansion', desc: 'Group Collaboration modules for equitable teamwork and a Teacher Terminal for curriculum-driven AI customisation.' },
      ],
      refinement: 'The final solution shifted from "voice reading" to active expression support to preserve the student\'s own voice. Information hierarchy was optimised for high-frequency classroom operations, with strengthened error prevention mechanisms based on expert feedback.',
    },
    storyboard: {
      label: 'Storyboard',
      title: 'Five student scenarios across the learning journey',
      scenarios: [
        { name: 'Boa', situation: 'Forgets username, struggles to find it in a cluttered inbox.', resolution: 'AI assistant clarifies: "Username = Email prefix." — logs in successfully.' },
        { name: 'Lily', situation: 'First semester at USYD; fast-paced English leaves her overwhelmed.', resolution: 'Switches to Chinese transcripts; regains clarity and structure instantly.' },
        { name: 'Dia', situation: 'Recalls a reading from a specific website mentioned in class but cannot locate the link.', resolution: 'AI instantly retrieves the relevant links; the top result is exactly what she needed.' },
        { name: 'Lily (again)', situation: 'Encounters "wicked problems" and struggles to understand its meaning.', resolution: 'AI refines phrasing, tags it as "Concept Confusion," and submits anonymously to the tutor.' },
        { name: 'Lee', situation: 'Wants to organise class notes for revision at home.', resolution: 'Opens the session log and refines personal notes using AI-assisted summaries as reference.' },
      ],
    },
    reflection: {
      label: 'Reflection',
      title: 'AI supports, not replaces, the student\'s voice',
      body: 'The core design principle was consistent throughout: AI should reduce barriers, not create dependency. By shifting from passive translation to active expression coaching, the system helps students find their voice — increasing both confidence and genuine participation in academic discourse.',
    },
  },

  zh: {
    label: 'UX 设计 · 服务设计',
    title: 'AI Canvas',
    subtitle: '消弭高等教育中的语言壁垒',
    intro:
      '这是一个与悉尼大学合作的 AI 辅助学习系统，旨在解决国际学生的课堂焦虑与参与度不足的问题。项目交付了一款 AI 插件原型，通过实时语义支架技术降低表达门槛，致力于打造包容公平的学习环境。',
    meta: {
      type: 'UX 设计，服务设计',
      date: '2024 年 8 月 – 11 月  ·  12 周',
      team: '张馨予、黄一婷、朱嘉明、Shona Liu',
      role: '用户研究与测试 · 设计支持 · 传播协调',
      partner: '悉尼大学',
    },
    stats: [
      { number: '27.6%', label: '澳洲高校中的国际学生比例' },
      { number: '86.27%', label: '认为语言焦虑影响课堂参与的国际学生' },
      { number: '65%', label: '感到被边缘化的国际学生' },
      { number: '84.1%', label: '认为文化差异削弱了发言意愿' },
    ],
    background: {
      label: '研究背景',
      title: '"沉默参与"困境',
      body: '本研究聚焦悉尼大学学习设计专业的国际学生，探索改善其学习体验的方式。尽管学生们渴望参与课堂，却面临一道关键的心理屏障——缺乏心理安全感让他们在"想开口"与"怕开口"之间反复徘徊。',
      question: '如何在非母语环境中，强化并丰富国际学生的课堂学习体验？',
      barriers: [
        { icon: '①', text: '语言焦虑' },
        { icon: '②', text: '表达障碍' },
        { icon: '③', text: '文化差异' },
      ],
    },
    research: {
      label: '研究方法',
      title: '多方法深入洞察学生体验',
      methods: [
        { name: '问卷调查', desc: '通过 LinkedIn 向国际学生发放问卷，量化课堂参与模式及情感障碍。' },
        { name: '用户旅程', desc: '梳理完整的学术体验流程，识别脱离参与的关键节点与错失机会。' },
        { name: '同理心地图', desc: '围绕"说、想、感受、做"四维度综合情感旅程，挖掘隐性焦虑。' },
        { name: '线上民族志', desc: '观察国际学生社群，了解其非正式的应对策略与学习变通方式。' },
        { name: '深度访谈', desc: '与学生深入对话，还原课堂沉默背后的真实生活体验。' },
        { name: '竞品分析', desc: '对标 Gather、王道辅导等平台，识别现有学习工具的未满足需求。' },
      ],
      personas: [
        {
          name: 'Yung Park',
          age: '27',
          program: '悉尼大学设计学硕士',
          duration: '海外学习 4 年',
          goals: ['提升设计创新能力', '增强团队协作', '推进职业发展'],
          pain: ['语言压力', '小组作业负担', '职业发展不确定性'],
          needs: ['包容性课堂参与机制', '小组协作支持工具', '职业发展资源'],
        },
        {
          name: 'Tao Zhao',
          age: '24',
          program: '悉尼大学交互设计硕士',
          duration: '海外学习 1 学期',
          goals: ['掌握设计基础', '建立跨文化友谊', '规划职业路径'],
          pain: ['语言压力', '课堂参与焦虑', '评分标准不透明'],
          needs: ['更清晰的学业指导', '社会融合支持', '透明的评估标准'],
        },
      ],
    },
    opportunity: {
      label: '机会识别',
      intro: '初步研究揭示，国际学生面临两大核心障碍：语言驱动的"沉默参与"与文化差异造成的低效小组协作。我们设计了 AI 辅助交互机制，致力于构建心理安全的学习环境，让学生真正有信心、有能力参与其中。',
      goals: [
        {
          title: '提升课堂参与',
          body: '通过降低社会压力、增强实时反馈，营造包容的课堂参与环境。',
          items: ['AI 语言支持 — 实时语义提示与句式优化', '包容性参与 — 匿名提问与 AI 中介回应', '知识支架 — 自动摘要与术语卡片', '公平参与 — 智能发言轮次管理'],
        },
        {
          title: '改善小组协作',
          body: '通过结构性与工具性干预，解决国际学生的"次要参与者"困境。',
          items: ['优化小组组合 — 基于性格与技能匹配', '打破初始沉默 — 结构化破冰与角色分配', '动态参与 — 游戏化机制激活归属感', '可视化贡献 — 实时记录每位成员的付出'],
        },
      ],
    },
    features: {
      label: '核心方案',
      title: '五大 AI 驱动干预措施',
      items: [
        {
          n: '01',
          title: '双语实时转录与翻译',
          desc: '将课堂语音实时转录为双语字幕，帮助学生流畅理解复杂讲授内容，即时消除理解门槛。',
        },
        {
          n: '02',
          title: 'AI 课堂摘要生成',
          desc: '在每次课程中自动生成要点和结构化笔记，支持课后有效复习与知识留存。',
        },
        {
          n: '03',
          title: '表达增强反馈',
          desc: '实时提供语言建议，提升学生在讨论中的清晰度与自信心——辅助表达，而非替代声音。',
        },
        {
          n: '04',
          title: '校园知识获取网络',
          desc: '将课程资料与专业术语整合为可检索模型，简化信息获取流程。',
        },
        {
          n: '05',
          title: '匿名提问与知识归档',
          desc: '支持低风险的 AI 优化提问，并将问答内容保存为可检索数据库，方便后续查阅。',
        },
      ],
    },
    strategy: {
      label: '设计策略',
      rootCause: '研究发现，课堂表达焦虑是学生脱离参与的根本原因。一旦学生在课堂上缺乏发言信心，其后续小组协作的积极性也会随之大幅下滑。',
      phases: [
        { phase: '当前阶段', title: 'AI 表达支持', desc: '优先构建"敢于开口"的安全环境，降低参与门槛，在实时课堂中提供即时支持。' },
        { phase: '下一阶段', title: '协作与机构扩展', desc: '引入小组协作模块，实现公平团队协作；并为教师端提供课程驱动的 AI 定制化功能。' },
      ],
      refinement: '最终方案从"语音朗读"转向"主动表达支持"，始终保护学生在学习过程中的自主发声。信息层级针对课堂高频操作场景进行了优化，并依据专家反馈强化了错误预防机制。',
    },
    storyboard: {
      label: '故事板',
      title: '五个跨越学习旅程的真实场景',
      scenarios: [
        { name: 'Boa', situation: '忘记用户名，在杂乱的收件箱里无处查找。', resolution: 'AI 助手提示："用户名 = 邮箱前缀"——成功登录。' },
        { name: 'Lily', situation: '悉尼大学第一学期，快节奏的英文课让她感到不知所措。', resolution: '切换到中文转录，立刻重获清晰与条理。' },
        { name: 'Dia', situation: '记得课堂上提到过某个网站的文献，却找不到链接。', resolution: 'AI 即时检索出相关链接，首条结果正是她所需要的。' },
        { name: 'Lily（再次）', situation: '遇到"wicked problems"这个术语，不理解其含义。', resolution: 'AI 优化表达措辞，标记为"概念困惑"，并以匿名方式提交给导师。' },
        { name: 'Lee', situation: '想整理课堂笔记以便回家复习。', resolution: '打开课程记录，以 AI 生成摘要为参考，完善个人笔记。' },
      ],
    },
    reflection: {
      label: '项目反思',
      title: 'AI 是辅助，而非替代',
      body: '贯穿整个设计过程的核心原则始终如一：AI 应降低障碍，而非制造依赖。通过从被动翻译转向主动表达辅导，系统帮助学生找到自己的声音，切实提升了他们在学术讨论中的自信与参与质量。',
    },
  },
}

// ─── Mapmima ──────────────────────────────────────────────────────────────────

export const mapmimaData = {
  en: {
    label: 'UX Design · Service Design · Spatial Experience',
    title: 'MAP mima\nMother\'s Club',
    subtitle: 'An Integrated Care Infrastructure',
    intro:
      'Collaborating with MAP mima Arts Centre, this project introduces a cross-media experience system for the Mothers\' Club. By integrating the emotional sanctuary of The Cube (indoor) with the social vibrancy of The Catenary (outdoor), a companion app bridges physical and digital realms — offering a closed-loop journey from immediate psychological relief to long-term community belonging.',
    meta: {
      type: 'UX Design, Service Design',
      date: 'Aug – Nov 2024  ·  12 Weeks',
      team: 'Xinyu Zhang, Yiting Huang, Jiaming Zhu, Junlin Guo',
      role: 'User Research & Testing · Design Support · Communications',
      partner: 'MAP mima Arts Centre, Lake Macquarie NSW',
    },
    stats: [
      { number: '70%', label: 'Mothers prioritize relaxation over high-stimulation spaces' },
      { number: '66.7%', label: 'Frequently feel emotionally unstable' },
      { number: '63%', label: 'Handle childcare entirely alone' },
      { number: '94.4%', label: 'Experienced severe sleep deprivation' },
    ],
    background: {
      label: 'Background',
      title: 'Invisible isolation in modern motherhood',
      body: 'The project is set in Lake Macquarie, the second-largest Local Government Area in New South Wales, with a population exceeding 210,000. Aligned with the city\'s vision of creating a "Connected Community," the region fosters inclusive cultural experiences through more than 260 public events annually.',
      context: 'In contemporary Australia, mothers navigate a complex tension between career and caregiving — with 30% of working mothers reporting significant role conflicts. One in five new mothers experience anxiety or depression, with social isolation identified as a primary catalyst.',
      insight: 'While digital communities offer immediate access, they cannot replace the deep emotional resonance of face-to-face peer support. 70% of mothers prioritize relaxation, yet only 1/3 participate in online parenting communities.',
    },
    research: {
      label: 'User Research',
      title: 'Evidence-based insights into maternal well-being',
      method: 'We conducted a structured quantitative study deploying cross-channel recruitment — leveraging Xiaohongshu, Facebook, and on-site intercepts in public plazas — gathering 30 valid responses across four dimensions: daily challenges, emotional well-being, mobility, and social support.',
      finding: '"These weren\'t occasional issues — they were everyday realities."',
    },
    personas: {
      label: 'Target Users',
      title: 'Three women, one shared need for belonging',
      items: [
        {
          name: 'Lena',
          age: '29',
          role: 'Housewife · 2 children',
          tag: 'Identity & Belonging',
          conflict: 'Maintains an "organised life" on the surface but struggles with the loss of personal identity and the monotony of repetitive caregiving.',
          goals: ['Identity Retention — maintain a spiritual life while fulfilling parental duties', 'Routine Disruption — inject freshness into daily life', 'Balanced Respite — spaces where children play safely, allowing a momentary mental break'],
          expectation: 'A sanctuary with adult-centric aesthetics, passive safety, and low-pressure organic social interaction — nourishment for her, not just stimulation for the child.',
        },
        {
          name: 'Sally',
          age: '27',
          role: 'Salesperson · 1 child',
          tag: 'Working Mother Guilt',
          conflict: 'Struggling with "working mother guilt" — longing to compensate for missed growth milestones while fearing the loss of self-achievement.',
          goals: ['Quality Accompaniment — transform limited weekend time into meaningful togetherness', 'Social Growth — foster daughter\'s confidence through peer interaction', 'Identity Equilibrium — balance professional achievement and maternal duty'],
          expectation: 'A restorative social hub with community resonance, developmental nature play, and a relaxed atmosphere that minimises parenting friction.',
        },
        {
          name: 'Jolyne',
          age: '19',
          role: 'Student · 1 child',
          tag: 'Generational Isolation',
          conflict: 'Navigating an unplanned transition into motherhood with generational clashes over parenting styles. Isolated from non-parent peers who lack understanding of her unique struggle.',
          goals: ['Personal Sanctuary — reclaim moments of "breathing space"', 'Nature Exposure — provide fresh air and natural stimulation for her baby', 'Identity Reconciliation — bridge her role as young student and gentle-parenting mother'],
          expectation: 'A non-judgmental, quiet, natural space where she can exist comfortably without pressure to socialise or fear of feeling out of place.',
        },
      ],
    },
    concept: {
      label: 'The Concept',
      title: 'A three-part integrated care ecosystem',
      intro: 'The project integrates two physical spaces with a digital app — each layer addressing different emotional and social needs of mothers at different moments.',
      spaces: [
        {
          icon: '◎',
          name: 'The Catenary',
          sub: 'Outdoor Interactive Light Installation',
          body: 'An interactive light canopy that breaks the "silent isolation" of motherhood. By visualising maternal anxiety levels through collective light art, it transforms private emotional fluctuations into visible, acknowledged signals of solidarity. Individual data shifts from Private Mode to Collective Mode — creating a "growing together" public experience.',
          features: ['Default: steady green glow — peaceful, dormant atmosphere', 'Personal Mode: colors shift based on individual anxiety level', 'Collective Mode: displays average anxiety of all active participants'],
        },
        {
          icon: '◈',
          name: 'The Cube',
          sub: 'Indoor Immersive Restoration Space',
          body: 'An immersive restoration environment designed to shift technology from "spectacle" to a medium of care. Built for the fragile postpartum stage, it provides a gentle, stable space for mothers to reconnect with their physical and emotional selves through light, sound, and movement.',
          features: ['Evidence-Based Restoration — yoga, breathwork, and slow-rhythm soundscapes', 'Adaptive Safety Zones — Activity Zone, Mother-Infant Co-presence Zone, Observation Area', 'Listening Mailbox — anonymous or named message exchange to build support networks'],
        },
        {
          icon: '◇',
          name: 'The Catenary App',
          sub: 'Mobile Companion',
          body: 'The "nervous system" of the ecosystem — translating individual emotional data into spatial aesthetics and extending the care experience into the home. A psychology-informed questionnaire generates a "Personalized Emotional Color" representing the user\'s current state.',
          features: ['Mood Architecture — personalized emotional color assessment', 'Lighting Control — drives The Catenary canopy and Cube interior in real time', 'Home Practice — gentle movement tutorials to maintain restorative rhythm at home'],
        },
      ],
    },
    appFeatures: {
      label: 'App Features',
      sections: [
        {
          title: 'Emotional Bridge',
          items: [
            { name: 'The Mailbox', desc: 'A digital space for anonymous or named emotional exchange, enabling "pressure-free" support through message listening and replying.' },
            { name: 'Ambient Expression', desc: 'Users share reflections that are softly projected onto the Cube\'s "Emotional Reflection Wall," creating an unspoken collective presence.' },
          ],
        },
        {
          title: 'Adaptive Movement',
          items: [
            { name: 'Home Practice', desc: 'Access the same gentle movement and breathing tutorials anytime — maintaining the restorative rhythm outside the physical site.' },
            { name: 'Cube Sync', desc: 'Guides immersive sensor-driven yoga in The Cube, providing real-time feedback based on the user\'s postpartum stage.' },
          ],
        },
      ],
    },
    iteration: {
      label: 'Design Evolution',
      title: 'From concept to care — four rounds of iteration',
      versions: [
        {
          v: 'V 1.0',
          elements: 'Structured Journey · Visual Assessment · Interactive Bridge (Emotional Color Upload)',
          insights: 'Device usability issues, cognitive overload on questionnaires, navigation gaps',
          improvements: 'Linear task focus, Information Control, Formalised "Emotion Upload" module, Social prototype with message boards',
        },
        {
          v: 'V 2.0',
          elements: 'Identity Recognition · Narrative Clarity · Privacy-First Social',
          insights: 'Needed clearer emotional result explanations, anonymity for sharing',
          improvements: 'Light launch animation for uploads, Anonymity Option on message boards, Unified mobile interaction (removed physical consoles)',
        },
        {
          v: 'V 3.0',
          elements: 'Enhanced Visual Hierarchy · Diversified Data Export · Synchronized Engagement',
          insights: 'Mothers needed co-presence features, easier navigation for frequent users',
          improvements: 'Co-presence redesign for mother-infant joint participation, Empathetic navigation emphasising "shared participation," Cross-media "Emotional Treehole Wall"',
        },
        {
          v: 'Final',
          elements: 'Accessibility & Inclusive Design · UX & Interface Control · Aesthetic Unity',
          insights: 'Full comprehensive mobile launch with live sessions, class replays, and history',
          improvements: 'Multilingual support, Reading Mode & Font Scaling, Advanced Navigation, Muscle Memory Optimization, Full App Launch with Live Sessions',
        },
      ],
    },
    principles: {
      label: 'Design Principles',
      title: 'Four commitments to safe, caring design',
      items: [
        { title: 'Accessible yet Private', desc: 'Installations are visually inviting but avoid personal disclosure. Walk-up friendly without requiring sensitive information.' },
        { title: 'Resonance without Exposure', desc: 'Anonymous mood-sharing and the Listening Mailbox allow mothers to be "seen" and supported without being publicly named.' },
        { title: 'Ambient over Attention-Grabbing', desc: 'Calm, rhythmic light and sound interactions reinforce emotional pacing and psychological safety.' },
        { title: 'Communal Accumulation', desc: 'Collective presence through accumulated light contributions and shared message walls — not individual profiles or metrics.' },
      ],
    },
    reflection: {
      label: 'Ethics & Reflection',
      title: 'Designing with care, not just for it',
      body: 'Given the vulnerability of postpartum mothers, ethical implications were prioritized from the outset. Using an Ethics Canvas, we mapped potential risks, value conflicts, and social impacts — ensuring the system provides safe, responsible support beyond the digital interface. Our evaluation shifted from "Does it work?" to "Does it communicate care?"',
    },
  },

  zh: {
    label: 'UX 设计 · 服务设计 · 空间体验',
    title: 'MAP mima\n母亲俱乐部',
    subtitle: '一体化关怀基础设施',
    intro:
      '本项目与 MAP mima 艺术中心合作，为母亲俱乐部打造一套跨媒介体验系统。通过将室内"沉浸方舱"（The Cube）的情感疗愈与室外"悬索装置"（The Catenary）的社交活力相整合，配套 App 连接物理与数字空间，构建一条从即时心理纾解到长期社群归属的完整关怀闭环。',
    meta: {
      type: 'UX 设计，服务设计',
      date: '2024 年 8 月 – 11 月  ·  12 周',
      team: '张馨予、黄一婷、朱嘉明、郭俊林',
      role: '用户研究与测试 · 设计支持 · 传播协调',
      partner: 'MAP mima 艺术中心，新南威尔士州麦觉理湖',
    },
    stats: [
      { number: '70%', label: '母亲优先选择放松休闲而非高刺激场所' },
      { number: '66.7%', label: '经常感到情绪不稳定' },
      { number: '63%', label: '独自承担全部育儿任务' },
      { number: '94.4%', label: '经历严重睡眠剥夺' },
    ],
    background: {
      label: '研究背景',
      title: '现代母职中的隐形孤独',
      body: '本项目设于新南威尔士州第二大地方政府辖区——麦觉理湖，人口超过 21 万。该地区致力于实现"互联社区"的城市愿景，每年通过逾 260 场公共活动推动多元包容的文化体验。',
      context: '在当代澳大利亚，母亲们在职业与养育之间艰难周旋——30% 的职场妈妈反映严重的角色冲突。五分之一的新手妈妈经历焦虑或抑郁，社会孤立是其主要诱因。',
      insight: '尽管数字社区触手可及，却无法替代面对面同伴支持带来的深层情感共鸣。70% 的母亲优先选择放松休息，但仅有三分之一参与线上育儿社群。',
    },
    research: {
      label: '用户研究',
      title: '基于实证的产后母亲幸福感洞察',
      method: '我们开展了跨渠道定量研究——综合利用小红书、Facebook 及公共场所拦截访谈，收集 30 份有效问卷，围绕日常挑战、情绪状态、出行能力与社会支持四个维度展开深度分析。',
      finding: '"这些不是偶发事件，而是每日都在上演的现实。"',
    },
    personas: {
      label: '目标用户',
      title: '三位女性，同一份对归属感的渴望',
      items: [
        {
          name: 'Lena',
          age: '29',
          role: '全职妈妈 · 两个孩子',
          tag: '身份认同与归属',
          conflict: '表面维持着"有条不紊的生活"，内心却挣扎于个人身份的消解与重复育儿的单调感。',
          goals: ['保留自我 — 在履行育儿责任的同时守护精神生活', '打破日常 — 为生活注入新鲜感', '平衡喘息 — 让孩子安全玩耍，自己获片刻心灵休憩'],
          expectation: '一个以成人审美为核心、布局安全无压力、支持低门槛有机社交的庇护空间——不只为孩子提供刺激，更为自己提供滋养。',
        },
        {
          name: 'Sally',
          age: '27',
          role: '销售员 · 一个孩子',
          tag: '职场妈妈的愧疚',
          conflict: '深陷"职场妈妈愧疚感"——既渴望弥补缺席的成长时光，又害怕成为全职妈妈后失去自我价值。',
          goals: ['有质量的陪伴 — 将有限的周末时光转化为真正的亲密同行', '社交成长 — 在安全环境中培养女儿的自信与社交能力', '身份平衡 — 在职业成就与母职责任之间找到可持续的平衡点'],
          expectation: '一个有社群共鸣、提供自然发展型游戏区、氛围轻松的疗愈社交空间，减少育儿摩擦，专注亲子当下。',
        },
        {
          name: 'Jolyne',
          age: '19',
          role: '在读学生 · 一个孩子',
          tag: '代际隔阂与孤立',
          conflict: '意外步入母职，既要应对育儿观念上的代际冲突，又与非父母同龄圈渐行渐远，孤立无援。',
          goals: ['个人庇护所 — 在双重压力之外夺回属于自己的"喘息时刻"', '自然体验 — 为孩子提供新鲜空气与自然刺激', '身份和解 — 架桥连接"年轻学生"与"温柔育儿妈妈"这两种身份'],
          expectation: '一个无评判、安静自然的空间，让她能舒适地存在，无需强迫社交，无需担心格格不入。',
        },
      ],
    },
    concept: {
      label: '概念方案',
      title: '三位一体的整合关怀生态',
      intro: '本项目将两处实体空间与一款数字 App 整合为一体，每个层次针对母亲在不同时刻的情感与社交需求。',
      spaces: [
        {
          icon: '◎',
          name: '悬索装置（The Catenary）',
          sub: '户外互动灯光装置',
          body: '一道打破母职"沉默孤立"的互动光帘。通过将产后焦虑水平以集体灯光艺术可视化，将私密的情绪波动转化为可见的、被认可的团结信号。个人数据从"私密模式"流向"集体模式"——共同生长，彼此照见。',
          features: ['默认状态：稳定的绿色光芒——宁静的待机氛围', '个人模式：颜色随个人焦虑水平动态变化', '集体模式：展示所有在场参与者的平均情绪状态'],
        },
        {
          icon: '◈',
          name: '沉浸方舱（The Cube）',
          sub: '室内沉浸式疗愈空间',
          body: '一个沉浸式疗愈环境，旨在将科技从"奇观"转变为关怀的媒介。专为产后脆弱阶段设计，通过光、声、动的融合，为母亲们提供一个重新与身体和情感自我连接的温柔、稳定空间。',
          features: ['循证疗愈 — 瑜伽、呼吸练习与慢节奏音景', '自适应安全区域 — 活动区、母婴共融区、观察区', '倾听信箱 — 匿名或实名留言，构建持久支持网络'],
        },
        {
          icon: '◇',
          name: '配套 App',
          sub: '移动端伴侣',
          body: '整个生态系统的"神经中枢"——将个人情绪数据转化为空间美学，并将关怀体验延伸至家庭日常。心理学驱动的问卷生成代表用户当前状态的"个性化情绪色彩"。',
          features: ['心情建筑 — 个性化情绪色彩评估', '灯光控制 — 实时驱动悬索装置与方舱内部灯光', '居家练习 — 随时随地访问温和运动教程，延续疗愈节律'],
        },
      ],
    },
    appFeatures: {
      label: 'App 功能',
      sections: [
        {
          title: '情感桥梁',
          items: [
            { name: '倾听信箱', desc: '提供匿名或实名情感交流的数字空间，通过收听与回复留言实现"无压力"的相互支持。' },
            { name: '氛围表达', desc: '用户分享的心声将柔和投影至方舱的"情绪倾诉墙"，在无声中共同构建集体在场感。' },
          ],
        },
        {
          title: '适应性运动',
          items: [
            { name: '居家练习', desc: '随时随地访问同款温和运动与呼吸教程，在实体场所之外延续疗愈节律。' },
            { name: '方舱同步', desc: '在方舱内引导沉浸式传感器驱动的瑜伽练习，根据用户的产后阶段提供实时反馈。' },
          ],
        },
      ],
    },
    iteration: {
      label: '设计迭代',
      title: '从概念到关怀——四轮严苛迭代',
      versions: [
        {
          v: 'V 1.0',
          elements: '结构化旅程 · 视觉评估 · 情绪色彩上传交互桥梁',
          insights: '设备可用性问题、问卷认知负荷过重、导航缺口',
          improvements: '线性任务聚焦、信息管控、正式化"情绪上传"模块、留言板社交原型',
        },
        {
          v: 'V 2.0',
          elements: '身份识别 · 叙事清晰度 · 隐私优先社交',
          insights: '需要更清晰的情绪结果解释；分享需要匿名选项',
          improvements: '上传时的"灯光启动"动效确认、留言板匿名选项、统一移动端交互（移除实体控制台）',
        },
        {
          v: 'V 3.0',
          elements: '视觉层级强化 · 多元数据导出 · 同步参与',
          insights: '母亲需要共同在场功能；高频用户需更便捷的导航',
          improvements: '重设母婴联合参与运动流程、以"共同参与"为核心的导航设计、跨媒介"情绪树洞墙"',
        },
        {
          v: '最终版',
          elements: '无障碍与包容性设计 · 界面管控 · 视觉统一',
          insights: '全面移动端正式上线，含直播课、回放与历史记录',
          improvements: '多语言支持、阅读模式与字体缩放、高级导航、肌肉记忆优化、直播课全面上线',
        },
      ],
    },
    principles: {
      label: '设计原则',
      title: '四项对安全关怀设计的承诺',
      items: [
        { title: '可达而隐私', desc: '装置在视觉上具有吸引力，但避免要求个人信息披露。无需提供敏感信息，走近即可参与。' },
        { title: '共鸣而不曝光', desc: '匿名情绪分享与倾听信箱让母亲们在被"看见"和被支持的同时，无需公开身份。' },
        { title: '氛围优先于吸引眼球', desc: '平静、有节律的光与声音交互强化情绪调节节奏，营造心理安全感。' },
        { title: '集体积累', desc: '通过累积的光贡献与共享留言墙构建集体在场感——而非个人档案或量化指标。' },
      ],
    },
    reflection: {
      label: '伦理与反思',
      title: '不只是为关怀而设计，更是带着关怀去设计',
      body: '鉴于产后母亲群体的脆弱性，伦理考量从项目伊始便被置于首位。借助伦理画布，我们系统梳理了潜在风险、价值冲突与社会影响，确保系统在数字界面之外提供安全、负责任的支持。我们的评估标准从"它能用吗？"转变为"它传递关怀了吗？"',
    },
  },
}
