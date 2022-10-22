import { css, globalCss } from '@stitches/react';

const ulLista = css({
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
})

const liLista  = css({

})

function Menu() {
    return (
        <div className=''>
            <ul className={ulLista()}>
                <li><a><p>Home</p></a></li>
                <li><a><p>Quem Somos</p></a></li>
                <li><a><p>Ofertas</p></a></li>
                <li><a><p>Lojas</p></a></li>
                <li><a><p>Fornecedores</p></a></li>
                <li><a><p>Mais Links</p></a></li>
                <li><a><p>Contato</p></a></li>
            </ul>
        </div>
    )
}

export default Menu