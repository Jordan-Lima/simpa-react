import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import { css } from '@stitches/react';

const carouselSimpa = css({
  font: '',
  height: '10vh',
})


export default function Carrossel() {
  return (
    <div style={{
      width: '937px',
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <Carousel fade>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="../../public/copo-hexa.bmp"
            alt="Copos do Hexa"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="../../public/rumo-hexa.bmp"
            alt="Campanha Rumo ao Hexa"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="../../public/seara.bmp"
            alt="Produtos Seara"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="../../public/club-vip.bmp"
            alt="Campanha Club Vip"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="../../public/caca-ofertas.bmp"
            alt="Ofertas do Club Vip"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="../../public/compra-online.bmp"
            alt="Compras online"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="../../public/banner-compra.bmp"
            alt="Compras online pelo celular"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="../../public/dm-card.bmp"
            alt="Adquira seu DM Card"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="../../public/hortfruit.bmp"
            alt="Dia de HortFruit"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
