'use client'

import { useLang } from '@/lib/LangContext'

const education = [
  {
    en: { school: 'University of Sydney', degree: 'MArch Interaction Design & Electronic Arts', period: '2024 – 2026' },
    zh: { school: '悉尼大学', degree: '交互设计与电子艺术 硕士', period: '2024 – 2026' },
  },
  {
    en: { school: 'Guangxi Arts Institute', degree: "BA Broadcasting & Hosting Arts", period: '2019 – 2023' },
    zh: { school: '广西艺术学院', degree: '播音与主持艺术 学士', period: '2019 – 2023' },
  },
]

const experience = [
  {
    en: { org: 'Atlassian "Campus as a Marketplace"', role: 'UX Design · Competition · Group 1st Place · AUD 10,000', period: '2025' },
    zh: { org: 'Atlassian 设计竞赛', role: 'UX 设计 · 小组第一名 · 奖金 10,000 澳元', period: '2025' },
    descEn: 'End-to-end UX design across Student App, Admin Web, and Physical Product within a 3-week sprint. Led user research, UX/UI design, and final pitch.',
    descZh: '3周内完成学生端 App、管理端 Web 与线下实体产品三套方案，主导用研、UX/UI 设计与最终汇报。',
  },
  {
    en: { org: 'Xiaohongshu (小红书)', role: 'Product Management · Feature Design & PRD', period: '2025' },
    zh: { org: '小红书', role: '产品管理 · 功能设计与 PRD 撰写', period: '2025' },
    descEn: 'Independently researched the e-commerce ecosystem, identified core pain points, produced a 20+ page PRD, and designed the "Help Them Choose" social gifting feature.',
    descZh: '独立研究电商生态，输出20+页 PRD，设计"帮TA选"社交购物功能，识别并验证平台级产品问题。',
  },
  {
    en: { org: 'Gansu Art Museum', role: 'Exhibition Planning Assistant', period: '2023' },
    zh: { org: '甘肃美术馆', role: '展览策划助理', period: '2023' },
    descEn: 'Coordinated 13 themed exhibitions and co-planned a charity auction raising 420,000+ RMB, covered by 8 regional media outlets.',
    descZh: '参与13场展览的策展与落地执行，联合策划公益义拍成功筹款42万余元，获8家媒体报道。',
  },
]

const skills = {
  en: [
    { label: 'Design', items: ['Figma', 'Prototyping', 'Interaction Design', 'Design Systems', 'Wireframing'] },
    { label: 'Research', items: ['User Research', 'Usability Testing', 'Service Design', 'PRD Writing', 'Data Analysis'] },
    { label: 'Tools', items: ['Adobe PS', 'Premiere Pro', 'SQL', 'Tableau', 'ChatGPT', 'Claude'] },
  ],
  zh: [
    { label: '设计', items: ['Figma', '原型设计', '交互设计', '设计系统', '线框图'] },
    { label: '研究', items: ['用户研究', '可用性测试', '服务设计', 'PRD撰写', '数据分析'] },
    { label: '工具', items: ['Adobe PS', 'Premiere Pro', 'SQL', 'Tableau', 'ChatGPT', 'Claude'] },
  ],
}

export default function About() {
  const { lang } = useLang()
  const skillGroups = lang === 'en' ? skills.en : skills.zh

  return (
    <section id="about" className="bg-white border-t border-black/10">
      <div className="max-w-[1440px] mx-auto px-[40px] lg:px-[70px] pt-[72px] pb-[80px]">

        <p className="lab text-[12px] mb-10 opacity-40">
          {lang === 'en' ? 'About' : '关于我'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">

          {/* ── Left: photo + name ── */}
          <div>
            <div
              style={{
                width: '100%',
                maxWidth: '280px',
                aspectRatio: '3/4',
                border: '2px solid #0a0a0a',
                background: 'repeating-linear-gradient(135deg, #f5f5f5 0 10px, #ebebeb 10px 20px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="lab text-[11px] text-black/25">Photo</span>
            </div>

            <div className="mt-5">
              <h2 className="font-flex ultra-wide" style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', lineHeight: 0.95 }}>
                {lang === 'en' ? 'XINYU ZHANG' : '张馨予'}
              </h2>
              <div className="lab mt-3" style={{ fontSize: '11px', lineHeight: 2, opacity: 0.45 }}>
                {lang === 'en' ? (
                  <>UX Designer · Product Manager<br />Sydney, Australia</>
                ) : (
                  <>UX 设计师 · 产品经理<br />悉尼，澳大利亚</>
                )}
              </div>
            </div>
          </div>

          {/* ── Right: education + experience + skills ── */}
          <div className="flex flex-col gap-10">

            {/* Education */}
            <div>
              <p className="lab mb-5" style={{ fontSize: '11px', opacity: 0.35 }}>
                {lang === 'en' ? 'Education' : '教育背景'}
              </p>
              <div className="flex flex-col gap-4">
                {education.map((e, i) => {
                  const info = lang === 'en' ? e.en : e.zh
                  return (
                    <div key={i} className="flex gap-6">
                      <span className="lab shrink-0" style={{ fontSize: '10px', opacity: 0.3, marginTop: '2px', minWidth: '60px' }}>
                        {info.period}
                      </span>
                      <div>
                        <p className="lab m-0" style={{ fontSize: '11px', lineHeight: 1.5 }}>{info.school}</p>
                        <p className="font-noto m-0 mt-0.5" style={{ fontSize: '13px', color: '#555', lineHeight: 1.5 }}>
                          {info.degree}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="lab mb-5" style={{ fontSize: '11px', opacity: 0.35 }}>
                {lang === 'en' ? 'Experience' : '相关经历'}
              </p>
              <div className="flex flex-col gap-6">
                {experience.map((exp, i) => {
                  const info = lang === 'en' ? exp.en : exp.zh
                  const desc = lang === 'en' ? exp.descEn : exp.descZh
                  return (
                    <div key={i} className="flex gap-6">
                      <span className="lab shrink-0" style={{ fontSize: '10px', opacity: 0.3, marginTop: '2px', minWidth: '60px' }}>
                        {info.period}
                      </span>
                      <div>
                        <p className="lab m-0" style={{ fontSize: '11px', lineHeight: 1.6 }}>
                          {info.org}<br />
                          <span style={{ opacity: 0.5 }}>{info.role}</span>
                        </p>
                        <p className="font-noto m-0 mt-1" style={{ fontSize: '13px', lineHeight: 1.65, color: '#444', maxWidth: '480px' }}>
                          {desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="lab mb-5" style={{ fontSize: '11px', opacity: 0.35 }}>
                {lang === 'en' ? 'Skills & Tools' : '技能 & 工具'}
              </p>
              <div className="flex flex-col gap-4">
                {skillGroups.map((group) => (
                  <div key={group.label} className="flex gap-6 items-start">
                    <span className="lab shrink-0" style={{ fontSize: '10px', opacity: 0.3, marginTop: '7px', minWidth: '60px' }}>
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((s) => (
                        <span
                          key={s}
                          className="lab"
                          style={{ border: '1.5px solid #0a0a0a', padding: '5px 11px', fontSize: '10px', whiteSpace: 'nowrap' }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
