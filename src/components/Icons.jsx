export function LogoMark() {
  return (
    <img src="/assets/img/logo.png" alt="M International Health" className="logo-img" />
  )
}

export function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="9" y="3" width="6" height="18" rx="2" fill="currentColor" />
      <rect x="3" y="9" width="18" height="6" rx="2" fill="currentColor" />
    </svg>
  )
}

// Rounded icon tile. variant: "" (jade), "red" or "gold"
export function Icon({ variant = '' }) {
  return (
    <div className={`icon ${variant}`}>
      <PlusIcon />
    </div>
  )
}
