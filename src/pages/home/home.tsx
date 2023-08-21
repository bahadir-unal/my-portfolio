import { Card, Col, Image, Row, Space } from "antd";

import { Link } from "react-router-dom";

const Page404 = (props: any) => {
  return (<Card style={{ textAlign: "center", fontSize: "4.3vh" }} >


    <Row>
      <Col xs={{ span: 20, offset: 2 }} sm={{ span: 16, offset: 4 }} md={{ span: 12, offset: 6 }} lg={{ span: 10, offset: 7 }}>
        <Card
          cover={
            <Image
              preview={false}
              alt="yoda"
              src="https://pro-serv-tp.s3.amazonaws.com/Suits/www.usanetwork.com/sites/usanetwork/files/styles/full_episodes_633x356/public/usa_video_image/170302_3478907_Suits_S6_E16__Harvey_and_Mike_Make_a_Handshaa050.jpg?itok=yG71ALFE"
            />
          }
        >
          Hey&#x1F44B;, It's Bahadır. Currently unemployed.
          Here you can learn more about me.</Card>
      </Col>
    </Row>
  </Card>
  );
};

export default Page404;
