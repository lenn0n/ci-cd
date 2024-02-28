import React from 'react'

type Props = {
  label: string,
  className?: string,
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

function Button({ label, className, onClick }: Props) {
  return (
    <div
      role='button'
      onClick={onClick}
      className={`rounded-[10px] px-2 sm:px-4 py-2 bg-cyan-600 inline-block border-cyan-500 border-[3px]
      text-center sm:text-[20px] hover:bg-white hover:text-cyan-900 hover:scale-[1.1] transition-all drop-shadow-xl ${className}`}>
          {label}
      </div>
  )
}

export default Button