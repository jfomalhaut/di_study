import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouteMatch } from 'react-router-dom'
import { Line, defaults } from 'react-chartjs-2'

import {
    Container,
    ContainerBox,
    Chart,
    Article,
    Articles
} from '../styles/CryptoGraphElements';
import moment from 'moment';


defaults.global.tooltips.enabled = true
defaults.global.legend.position = 'top'

const _dataInfo = {
    labels: [],
    datasets: [
        {
            label: '',
            data: []
        }
    ]
};

const CryptoGraph = ({ match: { params: { id } } }) => {

    const match = useRouteMatch();


    const [logo, setLogo] = useState('');
    const [title, setTitle] = useState('');
    const [updatedDate, setUpdatedDate] = useState('');
    const [lastPrice, setLastPrice] = useState(0);
    const [articles, setArticles] = useState([])
    const [chartData, setChartData] = useState(_dataInfo);



    const getCoinInfo = () => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=90&interval=daily`;
        axios.get(url).then(res => {
            const { data: { prices } } = res;
            const newPrices = prices.map(item => ({ date: item[0], price: item[1] }));
            const _info = {
                ...chartData,
                labels: newPrices.map(item => moment(item.date).format('YY/MM/DD')),
                datasets: [
                    {
                        label: 'price',
                        data: newPrices.map((item) => item.price),
                    }
                ]
            };
            setChartData(_info);
        }).catch(error => {
            console.log(error);
        });
    };



    const getCoinDetail = async () => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=false&community_data=false&developer_data=false`;
        await axios.get(url).then(res => {
            const data = res.data

            console.log(data)
            setCryptos(data)
            setLogo(data.image.small)
            setTitle(data)
            setLastPrice(data.tickers[0].last)
        })
            .catch(error => {
                console.log(error)
            });
    }


    const getNews = async () => {
        const url = `https://newsapi.org/v2/everything?language=en&pageSize=10&page=5&q=${id}&apiKey=26d1a58437c6469185b8094acc9bbfc0`;
        await axios.get(url).then(res => {
            console.log(res.data)
            const data = res.data.articles;
            setArticles(data)

        }).catch(error => {
            console.log(error)
        });
    }

    useEffect(() => {
        getCoinInfo();
    }, [id]);

    useEffect(() => {
        getCoinDetail();
    }, [id]);

    useEffect(() => {
        getNews();
    }, [id]);




    const initialState = JSON.parse(localStorage.getItem('coins')) || []

    const [cryptos, setCryptos] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('cryptos', JSON.stringify(cryptos))
    }, [cryptos])





    const options = {
        maintainAspectRatio: true,
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                }
            }],
            yAxes: [
                {
                    position: 'right',
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        beginAtZero: false,
                    },
                },
            ],
        },
        legend: {
            display: false,
            labels: {
                fontSize: 10,
            },
        },
    }

    return (
        <Container>
            <ContainerBox>
                <img src={logo} />

                <h1>{title.name}</h1>
                <p>{updatedDate.last_updated}</p>
                <p>{lastPrice}</p>

                <label>Save to My Cryptos</label>


                <Chart>
                    <Line
                        data={chartData}
                        height={100}
                        width={370}
                        options={options}
                    />
                </Chart>

            </ContainerBox>
            <h1>Related news</h1>
            <p>Click articles to see detail...</p>

            <Articles>
                {articles.map((item, index) => (
                    <Article key={`article${index}`}>
                        <a href={item.url}>
                            <h3>{item.title}</h3>
                            <p>{item.publishedAt.slice(0, 10)}</p>
                            <p>{item.author}</p>
                            <img src={item.urlToImage}></img>
                            <div className="content">
                                <p style={{ fontSize: "0.7rem" }}>{item.content}...</p>
                            </div>

                        </a>
                    </Article>
                ))}
            </Articles>

        </Container>
    )
}

export default CryptoGraph





