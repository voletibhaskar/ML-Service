import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Frm from './Form';
export default class MainArea extends React.Component {
    constructor() {
      super();
    }
    onSubmit=(fields)=>{
        console.log("App comp:",fields);

    };
    render()
    {
        return(

            <Container >
            <Row>
                <Col>
            <Frm onSubmit={fields=>this.onSubmit(fields)}/>
                </Col>
            </Row>
            <Row>
                <Col>
                
                </Col>
            </Row>
            </Container>
        )
    }
}