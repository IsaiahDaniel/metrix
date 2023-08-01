import React from 'react'

type IconBadgeProps = {
    classNames?: string;
    Icon: any;
}

const IconBadge = ({ classNames, Icon }: IconBadgeProps) => {
  return (
    <div className={`${classNames && classNames} p-3 w-10 h-10 rounded-md flex flex-col items-center justify-center`}>
        { Icon && <Icon size={22} color="white" /> }
    </div>
  )
}

export default IconBadge;