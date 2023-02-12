import React from 'react'
import '../../App.css'
import BannerImg from '../../assets/images/banner2.png'
import Product from '../Product/Product'
import ProductsList from '../Product/ProductsList'
import EchodotImg from '../../assets/images/products/product2.png'
import EchodotImg2 from '../../assets/images/products/product1.png'

function Home() {
    return (
        <div className='bg-gray-200'>
            {/* banner image */}
            <div>
                <img src={BannerImg} alt="Join Prime" className='banner-img select-none cursor-pointer object-cover object-top' />
            </div>

            <div className='mt-4'>

                {/* list of 3 products */}
                <ProductsList>
                    <Product
                        title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
                        price="₹4,499"
                        imgUrl={EchodotImg}
                    />
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

                {/*  single product */}
                <ProductsList>
                    <Product
                        title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
                        price="₹4,499"
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