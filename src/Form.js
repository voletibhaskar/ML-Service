import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Frm extends React.Component {
  
    state={
        firstclass:'',
        secondclass:'',
        thirdclass:'',
        fourthclass:'',
        linkdir:'',
        batchsize:'',
        epochs:'',
        inception:'',
        vgg:'',
        resoNet:'',
        
    }
    onSubmit=e=> {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }
  
  
    render() {
    return (
      <Form>
          <br></br>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="Class-1">Class 1</Label>
              <Input 
              value={this.state.firstclass}
               onChange={e => this.setState({firstclass: e.target.value})}
                type="text" 
                name="class-1" 
                id="class-1" 
                placeholder="Enter your class" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
            <Label for="Class-2">Class 2</Label>
              <Input 
              value={this.state.secondclass}
               onChange={e => this.setState({secondclass: e.target.value})}
                type="text" 
                name="class-2" 
                id="class-2" 
                placeholder="Enter your second class" />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
        <Col md={6}>
        <FormGroup>
        <Label for="Class-3">Class 3</Label>
              <Input 
              value={this.state.thirdclass}
               onChange={e => this.setState({thirdclass: e.target.value})}
                type="text" 
                name="class-3" 
                id="class-3" 
                placeholder="Enter your third class" />
        </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup>
        <Label for="Class-4">Class 4</Label>
              <Input 
              value={this.state.fourthclass}
               onChange={e => this.setState({fourthclass: e.target.value})}
                type="text" 
                name="class-4" 
                id="class-4" 
                placeholder="Enter your fourth class" />
        </FormGroup>
        </Col>
        </Row>

        <Row form>
          <Col md={6}>
          <FormGroup>
            <Label for="Link-Adr">Link Directory</Label>
              <Input 
                value={this.state.linkdir}
                onChange={e => this.setState({linkdir: e.target.value})}
                type="text" 
                name="dirctry" 
                id="dirctry" 
                placeholder="Enter the path to your directory" />
        </FormGroup>
            </Col>
          <Col md={4}>
          <FormGroup>
            <Label for="Batches">Batch Size</Label>
              <Input 
                value={this.state.batchsize}
                onChange={e => this.setState({batchsize: e.target.value})}
                type="text" 
                name="batch_size" 
                id="batch_size" 
                placeholder="" />
        </FormGroup>
          </Col>
          <Col md={2}>
          <FormGroup>
            <Label for="Epochs">Epochs</Label>
              <Input 
                value={this.state.epochs}
                onChange={e => this.setState({epochs: e.target.value})}
                type="text" 
                name="epoch" 
                id="epoch" 
                placeholder="" />
        </FormGroup>  
          </Col>
        </Row>
        <Row>
            <Col xs="6" sm="4">
        <FormGroup check>
          <Label check>
            <Input 
            value={this.state.inception}
            onChange={e=> this.setState({inception: e.target.checked})}
            type="checkbox" />{' '}
            Inception-V3
          </Label>
        </FormGroup>
        </Col>
        <Col xs="6" sm="4">
        <FormGroup check>
          <Label check>
            <Input 
            value={this.state.vgg}
            onChange={e=> this.setState({vgg: e.target.checked})}
            type="checkbox" />{' '}
            VGG-16
          </Label>
        </FormGroup>
        </Col>
        <Col xs="6" sm="4">
        <FormGroup check>
          <Label check>
            <Input 
            value={this.state.resoNet}
            onChange={e=> this.setState({resoNet: e.target.checked})}
            type="checkbox" />{' '}
            ResoNet
          </Label>
        </FormGroup>
        </Col>
        </Row>
        <br></br>
        <Button
        onClick={(e)=> this.onSubmit(e)}>
        Submit
        </Button>
      </Form>
    );
  }
}