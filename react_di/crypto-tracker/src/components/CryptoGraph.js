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

    const [date, setDate] = useState([])
    const [price, setPrice] = useState([])
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

    const getCoinDetail = () => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=true&market_data=false&community_data=false&developer_data=false`;
        axios.get(url).then(res => {
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


    const getNews = () => {
        const url = `https://newsapi.org/v2/everything?language=en&pageSize=10&page=5&q=${id}&apiKey=26d1a58437c6469185b8094acc9bbfc0`;
        axios.get(url).then(res => {
            console.log(res.data)
            const data = res.data.articles;
            setArticles(data)

        })
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







    // useEffect(() => {
    //     axios
    //         .get(
    //             `https://api.coingecko.com/api/v3/coins/${match.params.id}/market_chart?vs_currency=usd&days=90&interval=daily`
    //         )
    //         .then(res => {
    //             const data = res.data.prices
    //             console.log(`${match.params.id}`, data);
    //             for (var key in data) {
    //                 const yvalue = data[key][1].toFixed(4)
    //                 const xvalue = new Date(data[key][0]).toLocaleDateString()
    //                 date.push(xvalue)
    //                 price.push(yvalue)
    //             }
    //             setDate(date)
    //             setPrice(price)


    //         })
    //         .catch(error => console.log(error));

    // }, [date, price]);


    const initialState = JSON.parse(localStorage.getItem('coins')) || []

    const [cryptos, setCryptos] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('cryptos', JSON.stringify(cryptos))
    }, [cryptos])

    const addCrypto = crypto => {
        const newCryptos = [...cryptos, crypto];
        setCryptos(newCryptos);
        console.log(...cryptos)
    }





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
                <button onClick={() => addCrypto()} >Add to my List</button>

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
            <Articles>

                {articles.map((item, index) => (
                    <Article key={`article${index}`}>
                        <a href={item.url}>
                            <h1>{item.title}</h1>
                            <h5>{item.publishedAt.slice(0, 10)}</h5>
                            <h4>{item.author}</h4>
                            <img src={item.urlToImage}></img>
                            <div className="content">
                                <p>{item.content}...</p>
                            </div>
                            <b>Click Detail</b>
                        </a>
                    </Article>
                ))}
            </Articles>

        </Container>
    )
}

export default CryptoGraph





// 1. ��ܿ��� ���� ����Ʈ�� ����� �ȴ�.
// 	- ��ܿ��� ������ �޾ƿͼ� ����: axios�� �ҷ��´�.
// 2. ���θ���Ʈ�� Ŭ���ϸ� �ش� ���ο� ���� ��Ʈ�� ��µȴ�.
// 3. ���� ����Ʈ�� Ŭ���� �� url�� �ٲ��.
// 	- Ŭ���� url�� �ٲ�Ƿ� /:id, App���� ���� �̸��� ������ ������ش�.
// 4. url�� """�ٲ� ������""" ��Ʈ�� �ٲ��.
// 	- useEffect����Ѵ�. �ۿ� ���� => url, 
// 	- useEffect�� ������ ������ ���ο� �����͸� �ҷ��� chart�� ����ش�.