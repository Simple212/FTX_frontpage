import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Carousel2 = () =>{
    return(
        <div>
            <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://img.freepik.com/premium-vector/huobi-token-ht-crypto-futuristic-technology-decentralized-finance-concept-cryptocurrency-coins_5555-536.jpg?w=2000"}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://static.vecteezy.com/system/resources/previews/003/450/393/original/ftx-token-banner-ftt-coin-cryptocurrency-concept-banner-background-vector.jpg"}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://public.bnbstatic.com/20190905/cabb0a98-d638-4cea-8b05-dbbd319319cd"}
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default Carousel2