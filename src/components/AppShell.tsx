import { useEffect, useState } from 'react'

export function AppShell() {
  const [mounted, setMounted] = useState(true)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const hide = () => {
      setVisible(false)
      window.setTimeout(() => setMounted(false), 400)
    }
    if (document.readyState === 'complete') {
      const t = window.setTimeout(hide, 400)
      return () => window.clearTimeout(t)
    }
    window.addEventListener('load', hide)
    const fallback = window.setTimeout(hide, 2500)
    return () => {
      window.removeEventListener('load', hide)
      window.clearTimeout(fallback)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      className="app-shell"
      role="presentation"
      aria-hidden={!visible}
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
    >
      <img src="/anwi-mark.png" alt="" width={72} height={72} className="app-shell-logo" />
      <div className="app-shell-spinner" />
    </div>
  )
}
