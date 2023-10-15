import React from 'react';
import millify from 'millify';
import { Row, Col, Typography, Avatar, Space } from 'antd';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
   if (isFetching) return <Loader />;
  console.log(exchangesList)

  return (
    <>
      <Row className='table-heading'>
        <Col span={10}>Exchanges</Col>
        <Col span={6}>Markets</Col>
        <Col span={8}>Bitcoin Price($)</Col>
      </Row>
      <Row>
     {exchangesList.map((exchange) => (
          <Col span={24} className='table-data'>
                  <Row key={exchange.uuid}>
                    <Col span={10}><Space>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text></Space>
                    </Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={8}>{exchange.btcPrice}</Col>
                  </Row>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;