import { MouseEventHandler } from 'react'
import { variant } from '../enums/variant'

interface buttonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
  className?: string
  buttonVariant?: variant
}

export const Button = ({
  onClick,
  className,
  children,
  buttonVariant = variant.primary,
}: buttonProps) => {
  let variantCss = ''

  switch (buttonVariant) {
    case variant.primary:
      variantCss =
        'bg-gray-600 hover:bg-gray-700 focus:ring-gray-300 border border-gray-500'
      break
    case variant.secondary:
      variantCss =
        'bg-teal-600 hover:bg-teal-500 focus:ring-teal-300 border border-teal-300'
      break
    case variant.warning:
      variantCss =
        'bg-yellow-500 hover:bg-yellow-400 focus:ring-yellow-300 text-yellow-800 border border-yellow-200'
      break
    case variant.error:
      variantCss =
        'bg-red-600 hover:bg-red-500 focus:ring-red-300 text-red-200 border border-red-300'
      break
    default:
      break
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${variantCss} focus:ring-4 font-medium rounded-lg text-md px-5 py-2.5 focus:outline-none ${className}`}
    >
      {children}
    </button>
  )
}
