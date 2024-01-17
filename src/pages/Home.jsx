import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
const Home = () => {
  return (
    <>
        <Main />
        <Row rowId='1' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowId='2' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowId='3' title='Up Coming' fetchURL={requests.requestTrending} />
        <Row rowId='4' title='Top Rated' fetchURL={requests.requestPopular} />
    </>
  )
}

export default Home