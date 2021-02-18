import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Keyboard } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


import axios from 'axios';
import Coin from './Coin';

import {
    Container,
    Search,
    Coins
} from './DashboardElements';

SwiperCore.use([Navigation, Keyboard]);

const Dashboard = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {

        axios
            .get(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true'
            )
            .then(res => {
                const data = res.data
                console.log(data)
                setCoins(data);

            })
            .catch(error => console.log(error));

    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );



    return (
        <Container>
            <Search>
                <form>
                    <input
                        className='coin-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search'
                    />
                </form>
            </Search>
            <Coins>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    keyboard={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {filteredCoins.map(coin => {
                        return (<SwiperSlide>
                            <Coin
                                key={coin.id}
                                graph={`/coin/${coin.id}`}
                                name={coin.name}
                                price={coin.current_price}
                                symbol={coin.symbol}
                                volume={coin.total_volume}
                                marketcap={coin.market_cap}
                                image={coin.image}
                                priceChange={coin.price_change_percentage_24h}
                            />
                        </SwiperSlide>
                        )
                    })}

                </Swiper>

            </Coins>




        </Container>
    )
}

export default Dashboard
