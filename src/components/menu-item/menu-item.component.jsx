import React from 'react';
import './menu-item.styles.scss'

// destructing the props
const MenuItem = ({title, img, size, history}) => (
    <div className={`${size} menu-item`}>
      <div className='background-image'
           style={{backgroundImage: `url(${img})`}}/>
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
)

export default MenuItem;