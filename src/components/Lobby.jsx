/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const GetLobby = ({ tableInfo }) => {
  const DisplayRoom = tableInfo.map((x) => {
    return (
      <>
        <Row>
          <Col className="col-2">
            <a>{x.tableId}</a>
          </Col>
          <Col>
            <a>{x.tableName}</a>
          </Col>
        </Row>
        <Row>
          <Col className="col-2">
            <a>
              {x.playerNow}/{x.playerMax}
            </a>
          </Col>
          <Col>
            <a>
              {x.blinds}/{x.blinds * 2}
            </a>
          </Col>
        </Row>
      </>
    );
  });

  return <>{DisplayRoom}</>;
};

export default function Lobby() {
  const info = [
    {
      tableName: 'kai room',
      playerMax: 8,
      playerNow: 2,
      tableId: 1,
      blinds: 1,
      time: 10,
    },
    {
      tableName: 'paul room',
      playerMax: 8,
      playerNow: 2,
      tableId: 2,
      blinds: 2,
      time: 15,
    },
  ];

  const [tableInfo, setTableInfo] = useState(info);

  // useEffect(() => {
  //     axios.get("/getTableInfo").then((res) => {
  //       const { data } = res;
  //       setTableInfo(data);
  //     }, []);

  return (
    <Container>
      <GetLobby tableInfo={tableInfo} />
    </Container>
  );
}
