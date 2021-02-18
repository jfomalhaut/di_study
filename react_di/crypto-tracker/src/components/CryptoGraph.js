import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouteMatch } from 'react-router-dom'
import { Line, defaults } from 'react-chartjs-2'
import {
    Container,
    ContainerBox,
    Chart
} from './CryptoGraphElements'

defaults.global.tooltips.enabled = true
defaults.global.legend.position = 'top'

const CryptoGraph = () => {

    const match = useRouteMatch();

    const [date, setDate] = useState([])
    const [price, setPrice] = useState([])
    const [logo, setLogo] = useState('');
    const [title, setTitle] = useState('');
    const [updatedDate, setUpdatedDate] = useState('');
    const [lastPrice, setLastPrice] = useState(0);




    useEffect(() => {

        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/${match.params.id}?localization=false&tickers=true&market_data=false&community_data=false&developer_data=false`
            )
            .then(res => {
                const data = res.data
                console.log(data)
                // console.log(data.market_cap_rank)
                setLogo(data.image.small)
                setTitle(data)
                setUpdatedDate(data)
                setLastPrice(data.tickers[0].last)

            })
            .catch(error => console.log(error));

    }, []);


    useEffect(() => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/${match.params.id}/market_chart?vs_currency=usd&days=90&interval=daily`
            )
            .then(res => {
                const data = res.data.prices
                console.log(`${match.params.id}`, data);
                for (var key in data) {
                    const yvalue = data[key][1].toFixed(4)
                    const xvalue = new Date(data[key][0]).toLocaleDateString()
                    date.push(xvalue)
                    price.push(yvalue)
                }
                setDate(date)
                setPrice(price)


            })
            .catch(error => console.log(error));

    }, [date, price]);

    const handleChange = e => {


    };

    return (
        <Container>
            <ContainerBox>
                <img src={logo} />
                <h1>{title.name}</h1>
                <p>{updatedDate.last_updated}</p>
                <p>{lastPrice}</p>

                <label > Save to My Cryptos</label>
                <input
                    onChange={handleChange}
                    type="checkbox"
                    name=""
                    value={match.params.id}

                />


                <Chart>
                    <Line
                        data={{
                            labels: date,
                            datasets: [
                                {

                                    data: price,
                                    backgroundColor: [
                                        'transparent'


                                    ],
                                    borderColor: [
                                        'gray',

                                    ],
                                    borderWidth: 3,
                                }
                            ],
                        }}
                        height={100}
                        width={370}
                        options={{
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
                                labels: {
                                    fontSize: 10,
                                },
                            },


                        }}
                    />
                </Chart>

            </ContainerBox>

        </Container >
    )
}

export default CryptoGraph
