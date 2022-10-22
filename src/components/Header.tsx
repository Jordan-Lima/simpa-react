import { css, globalCss } from '@stitches/react';
import Menu from './Menu';

const globalStyles = globalCss({

    '*': {
        margin: 0, 
        padding: 0,
        fontFamily: 'Roboto, sans-serif;',
        color: 'white', 
    },
    'li': {
        display: 'flex',
        flexDirection: 'row',
        textDecoration: 'none',
        padding: '5vh 0 0 5vw',
        
    },
});
     
globalStyles()

const NavBar = css({
    backgroundColor: '#ff6600',
    height: '14vh',
    display: 'flex',
})

const logo = css({
    height: '9vh',
    padding: '2vh 0 0 4vw ',
    display: 'flex',
    flexDirection: 'row',
})

function Header() {
    return (
        <>
            <div className={NavBar()}>
                <img src="../public/logo.png" alt="" 
                className={logo()}/>
                <Menu />
            </div>

        </>

    )
}
export default Header
