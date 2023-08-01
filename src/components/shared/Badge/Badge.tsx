import React from 'react'

type BadgeProps = {
    badgeNumber: any;
    classNames?: string;
}

const Badge = ({ badgeNumber, classNames }: BadgeProps) => {
  return (
    <div className={`bg-[#FFCC91] px-3 py-2 rounded-full ${classNames && classNames}`}>
      { badgeNumber }
    </div>
  )
}

export default Badge;