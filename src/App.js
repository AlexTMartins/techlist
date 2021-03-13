import React, { useState } from 'react';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

var videoUrl="https://www.youtube.com/embed/vlDzYIIOYmM";

function AulaItemListComponent(props){

  return props.name;
}

function setVideoLink(){
  return alert("sdvs");
}

function VideoBoxComponent(props){
  return  <div style={{ width: 660, height: 'auto' }}>
            <ResponsiveEmbed aspectRatio="16by9">
              <embed type="" src={props.url} />
            </ResponsiveEmbed>
          </div>
}

function App() {
  return (
    <div className="App">

    <Container>
      <br></br>
      <br></br> 

      <h1>TRILHA DO FUTURO</h1>

      <br></br>
      <br></br>
      <br></br> 
    </Container>   
      <Container>
          <Row className="show-grid">
            <Col xs={12} md={4}>

            <h4>Módulo 1 - Aplicações web com Node.js</h4>
            <ListGroup defaultActiveKey="#link3">
              <ListGroup.Item action href="#link1" disabled>
                   Aula 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" disabled>
                  Aula 2
              </ListGroup.Item>
              <ListGroup.Item action href="#link3" disabled>
                  Aula 3
              </ListGroup.Item>
              <ListGroup.Item action href="#link4" onClick={setVideoLink()}>
                  <AulaItemListComponent url="link.com" name="Auuula 4" />
              </ListGroup.Item>
              <ListGroup.Item action href="#link5" >
                  Aula 5
              </ListGroup.Item>
              <br></br>
              <ListGroup.Item>
                Próximo Módulo - Avançando com APIs REST
              </ListGroup.Item>
            </ListGroup>
            
                  
            </Col>
            <Col xs={12} md={8}>
              <VideoBoxComponent url="https://www.youtube.com/embed/vlDzYIIOYmM"/>
            </Col>
          </Row>        
      </Container>
    </div>



    
  );
}

export default App;