import React, { useState } from 'react';
import { ExternalLink, Check, Copy, Sparkles } from 'lucide-react';
import { OFFICIAL_CHANNELS } from '../data/associationData';
import { 
  FacebookIcon, 
  InstagramIcon, 
  YoutubeIcon, 
  SoundcloudIcon, 
  GoogleDocIcon 
} from './ChannelIcons';

export const OfficialChannelsSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getChannelIcon = (id: string) => {
    switch (id) {
      case 'facebook-group':
        return <FacebookIcon size={24} color="#1877F2" />;
      case 'instagram':
        return <InstagramIcon size={24} color="#E1306C" />;
      case 'youtube':
        return <YoutubeIcon size={24} color="#FF0000" />;
      case 'podcast':
        return <SoundcloudIcon size={24} color="#FF5500" />;
      case 'study-video':
        return <YoutubeIcon size={24} color="#037EF3" />;
      case 'study-article':
        return <GoogleDocIcon size={24} color="#00878A" />;
      default:
        return <ExternalLink size={24} color="var(--aiesec-blue)" />;
    }
  };

  const getAccentBg = (id: string) => {
    switch (id) {
      case 'facebook-group':
        return '#EFF6FF';
      case 'instagram':
        return '#FDF2F8';
      case 'youtube':
        return '#FEF2F2';
      case 'podcast':
        return '#FFF7ED';
      case 'study-video':
        return '#F0F9FF';
      case 'study-article':
        return '#ECFDF5';
      default:
        return '#F8FAFC';
    }
  };

  return (
    <section id="official-channels" style={{ padding: '90px 0', backgroundColor: '#FFFFFF' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 54 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '4px 14px',
              borderRadius: 'var(--radius-pill)',
              background: '#EFF6FF',
              color: 'var(--aiesec-blue)',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 12
            }}
          >
            <Sparkles size={14} />
            <span>Албан Ёсны Эх Сурвалжууд &bull; Official Platforms</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 4.2vw, 2.9rem)',
              fontWeight: 800,
              color: 'var(--text-main)',
              letterSpacing: '-0.02em',
              marginBottom: 14
            }}
          >
            Бидний Хөтлөн Явуулдаг Албан Ёсны Хаягууд
          </h2>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-sub)',
              maxWidth: 680,
              margin: '0 auto',
              lineHeight: 1.7
            }}
          >
            Австри дахь Монгол оюутнуудын хамтын нэгдэл, мэдээлэл, подкаст, видео болон цогц нийтлэлүүдтэй албан ёсоор холбогдоорой.
          </p>
        </div>

        {/* 6-Grid Official Channels Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24
          }}
        >
          {OFFICIAL_CHANNELS.map((channel) => {
            const isCopied = copiedId === channel.id;
            return (
              <div
                key={channel.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 20,
                  border: '1.5px solid var(--border)',
                  padding: '24px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 20px rgba(0, 45, 98, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative'
                }}
                className="official-channel-card"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 16
                    }}
                  >
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 14,
                        backgroundColor: getAccentBg(channel.id),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                      }}
                    >
                      {getChannelIcon(channel.id)}
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-pill)',
                        background: 'var(--bg-subtle)',
                        color: 'var(--text-sub)',
                        border: '1px solid var(--border)'
                      }}
                    >
                      {channel.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: 'var(--text-main)',
                      marginBottom: 6,
                      lineHeight: 1.35
                    }}
                  >
                    {channel.title}
                  </h3>

                  {channel.handle && (
                    <div
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: 'var(--aiesec-blue)',
                        marginBottom: 10
                      }}
                    >
                      {channel.handle}
                    </div>
                  )}

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-sub)',
                      lineHeight: 1.6,
                      marginBottom: 20
                    }}
                  >
                    {channel.description}
                  </p>
                </div>

                {/* Actions: Direct Link + Copy Link */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    borderTop: '1px solid var(--border)',
                    paddingTop: 16
                  }}
                >
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="aiesec-btn-primary"
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      padding: '10px 16px',
                      fontSize: '0.86rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>{channel.actionText}</span>
                    <ExternalLink size={14} />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(channel.id, channel.url)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-pill)',
                      border: '1px solid var(--border)',
                      background: isCopied ? '#ECFDF5' : 'var(--bg-subtle)',
                      color: isCopied ? '#059669' : 'var(--text-sub)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      transition: 'all 0.2s ease'
                    }}
                    title="Линк хуулах"
                    aria-label="Линк хуулах"
                  >
                    {isCopied ? <Check size={14} color="#059669" /> : <Copy size={14} />}
                    <span>{isCopied ? 'Хуулагдлаа' : 'Хуулах'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
