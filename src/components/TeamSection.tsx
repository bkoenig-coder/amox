import React from 'react';
import { TEAM_GROUPS } from '../data/teamData';

interface TeamSectionProps {
  /** embedded = no own section background/padding (used inside another section) */
  embedded?: boolean;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ embedded = false }) => {
  return (
    <section id="board" className={embedded ? 'team-sec team-embedded' : 'team-sec'}>
      <div className={embedded ? undefined : 'container'}>
        <div className="team-head">
          <span className="section-subtitle">Манай баг</span>
          <h2>Удирдах зөвлөл &amp; гишүүд</h2>
          <p>AMOX-ийг хамтдаа авч явдаг баг хамт олонтойгоо танилцаарай.</p>
        </div>

        {TEAM_GROUPS.map((group) => (
          <div key={group.id} className="team-group">
            <h3 className="team-group-title">{group.title}</h3>
            <div className={'team-grid team-grid-' + group.id}>
              {group.members.map((m) => (
                <figure key={m.id} className="team-person">
                  <div className="team-photo">
                    <img src={m.photo} alt={m.name} loading="lazy" style={{ objectPosition: m.focus || 'center 25%' }} />
                  </div>
                  <figcaption>
                    <strong>{m.name}</strong>
                    <span>{m.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .team-sec { padding: 100px 0; background: #fff; }
        .team-embedded { padding: 72px 0 0; background: transparent; }
        .team-head { max-width: 560px; margin-bottom: 48px; }
        .team-head h2 { font-size: clamp(1.8rem, 3.6vw, 2.6rem); margin: 4px 0 12px; }
        .team-head p { font-size: 1.05rem; }
        .team-group { margin-bottom: 52px; }
        .team-group:last-child { margin-bottom: 0; }
        .team-group-title { font-size: 1.15rem; padding-bottom: 14px; margin-bottom: 24px; border-bottom: 1px solid var(--border-strong); }
        .team-grid { display: grid; gap: 22px; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); }
        .team-grid-leaders { grid-template-columns: repeat(2, minmax(0, 300px)); }
        .team-person { margin: 0; }
        .team-photo { aspect-ratio: 4 / 5; border-radius: 22px; overflow: hidden; background: #ECECE8; }
        .team-photo img { width: 100%; height: 100%; object-fit: cover; transition: transform .6s ease; }
        .team-person:hover .team-photo img { transform: scale(1.05); }
        .team-person figcaption { padding: 14px 4px 0; display: flex; flex-direction: column; gap: 2px; }
        .team-person strong { font-size: 1.05rem; letter-spacing: -0.01em; }
        .team-person figcaption span { font-size: .86rem; color: var(--accent); font-weight: 600; }
        .team-grid-leaders .team-person strong { font-size: 1.25rem; }
        @media (max-width: 640px) {
          .team-sec { padding: 64px 0; }
          .team-embedded { padding: 48px 0 0; }
          .team-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
          .team-grid-leaders { grid-template-columns: repeat(2, 1fr); }
          .team-photo { border-radius: 16px; }
        }
      `}</style>
    </section>
  );
};
