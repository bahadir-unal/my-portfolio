import { Card, Col, Rate, Row } from 'antd';

import React from 'react';

const Portfolio: React.FC = () => {

    const skills = [
        
        { name: "JavaScript", rate: 3},
        { name: "React.js", rate: 2},
        { name: "REST APIs", rate: 3 },
        { name: "HTML5", rate: 3 },
        { name: "CSS", rate: 3 },
        { name: "User Interface Design", rate: 3 },
        { name: "Object-Oriented Programming", rate: 3 },
        { name: "Bootstrap", rate: 3 },
    ]

    return (<Card style={{ textAlign: "center" }} >
        <Row>
            {skills.map((obj, index) => {
                return (
                    <Col key={index} xs={24} md={12} lg={8} xl={6} xxl={4} >
                        <h4>{obj.name}</h4>
                        <Rate disabled allowHalf value={obj.rate} />
                    </Col>
                )
            })}
        </Row>
    </Card>
    )
};

export default Portfolio;