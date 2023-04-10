interface cardProps {
  className?: string
  children?: React.ReactNode
}

export const Card = ({ className, children }: cardProps) => {
  return <div className={`bg-gray-800 p-3 border ${className}`}>{children}</div>
}
