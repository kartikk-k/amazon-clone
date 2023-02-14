import React from 'react'
import '../../App.css'
import BannerImg from '../../assets/images/banner2.png'
import Product from '../Product/Product'
import ProductsList from '../Product/ProductsList'
import EchodotImg from '../../assets/images/products/product2.png'
import EchodotImg2 from '../../assets/images/products/product1.png'
import LoadingBar from '../LoadingBar/LoadingBar'

function Home() {
    return (
        <div>
            <LoadingBar />

            {/* banner image */}
            <div>
                <img src={BannerImg} alt="Join Prime" className='object-cover object-top cursor-pointer select-none banner-img' />
            </div>

            <div className='mt-4'>

                {/* list of 3 products */}
                <ProductsList>
                    <Product
                        id={1001}
                        title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
                        price={4499}
                        imgUrl={EchodotImg}
                    />
                    <Product
                        id={1002}
                        title="Echo Dot (4th Gen, 2021 release)| Smart speaker with Alexa (Black)"
                        price={8499}
                        imgUrl={EchodotImg2}
                    />
                    <Product
                        id={1004}
                        title="Echo Dot (4th Gen, 2022 release)| Smart speaker with Alexa (Black)"
                        price={4499}
                        imgUrl={EchodotImg}
                    />
                </ProductsList>

                {/*  single product */}
                <ProductsList>
                    <Product
                        title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
                        price={8499}
                        imgUrl={EchodotImg2}
                    />
                </ProductsList>
                {/* list of 2 products */}
                <ProductsList>
                    <Product
                        title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
                        price="₹4,499"
                        imgUrl={EchodotImg2}
                    />
                    <Product
                        title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
                        price="₹4,499"
                        imgUrl={EchodotImg}
                    />
                </ProductsList>

            </div>

        </div>
    )
}

export default Home