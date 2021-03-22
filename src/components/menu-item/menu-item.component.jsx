import React from 'react';
import './menu-item.styles.scss'

// destructing the props
const MenuItem = ({title, subtitle, img, size}) => (
    <div style={{backgroundImage: `url(${img})`}} className={`${size} menu-item`}>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>{subtitle}</span>
      </div>
    </div>
)

export default MenuItem;