export function LogoMark() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <rect width="120" height="120" rx="30" fill="#1F7A6D" />
      <path
        d="M26 92V36l34 36 34-36v56"
        fill="none"
        stroke="#F6F1E8"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="55" y="17" width="10" height="30" rx="3" fill="#E0634C" />
      <rect x="45" y="27" width="30" height="10" rx="3" fill="#E0634C" />
    </svg>
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
