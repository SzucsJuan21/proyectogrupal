import React from 'react'
import HeaderIconos from './HeaderIconos'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div style={s.header}>
        <div>
            <a href=""><img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png" style={s.logo} alt="" /></a>
        </div>
        <div style={s.navbarWrapper}>
            <Navbar />
        </div>
        <div style={s.iconsWrapper}>
            <HeaderIconos />
        </div>
    </div>
  )
}

const s = {
    header: {
        display: 'grid',
        gridTemplateColumns: '160px 6fr 1fr',
    },
    
    logo: {
        width: '153px',
        height: '120px',
    },

    navbarWrapper: {
        display: 'flex',
        alignItems: 'center',
    },

    iconsWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '60px'
    },
}

export default Header