import { css } from "@stitches/react"

const footerBG = css({
    backgroundColor: 'rgb(247, 169, 106)',
})

function Footer() {
    return (
        <div className={footerBG()}>
            <h1>Fim</h1>
        </div>
    )
}

export default Footer
