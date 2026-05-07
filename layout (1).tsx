export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const nav = [
    { href: '/dashboard', icon: '📊', label: 'לוח בקרה' },
    { href: '/patients', icon: '👥', label: 'מטופלים' },
    { href: '/calendar', icon: '📅', label: 'יומן' },
    { href: '/records', icon: '📋', label: 'SOAP' },
    { href: '/billing', icon: '💰', label: 'חיוב' },
    { href: '/reports', icon: '📈', label: 'דוחות' },
    { href: '/settings', icon: '⚙️', label: 'הגדרות' },
  ]

  return (
    <div style={{ display: 'flex', minHeight: '100vh', direction: 'rtl' }}>
      <div style={{
        width: '200px', flexShrink: 0, background: '#1a3a5c',
        display: 'flex', flexDirection: 'column'
      }}>
        <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontSize: '18px', fontWeight: '800', color: '#fff' }}>
            <span style={{ color: '#3eb8e5' }}>YOAV</span>AVNI
          </div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', marginTop: '2px' }}>
            קליניקת יואב אבני
          </div>
        </div>
        <nav style={{ flex: 1, padding: '8px 0' }}>
          {nav.map(item => (
            <a key={item.href} href={item.href} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '9px 16px', color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none', fontSize: '13px',
              borderRight: '3px solid transparent'
            }}>
              <span style={{ fontSize: '15px' }}>{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
            יואב אבני PT
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'auto' }}>
        {children}
      </div>
    </div>
  )
}
