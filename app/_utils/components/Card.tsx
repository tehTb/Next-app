type cardType = {
  className?: string
  children?: React.ReactNode
}

export function Card({ className, children }: cardType) {
  return <div className={`bg-gray-800 p-3 border ${className}`}>{children}</div>
}
