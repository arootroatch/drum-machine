import { useCallback, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import DrumPad from './components/DrumPad';
import Control from './components/Control';
import buttons from "./buttons.json"
import {Container} from 'react-bootstrap'


export default function App() {
  
  const [soundName, setSoundName] = useState('Heater Kit');
  
  
  
  const handleState = useCallback((newValue)=>{
    setSoundName(newValue);
  }, []);
  
  const [drumPads, setDrumPads] = useState(buttons.map(data => {
    return <DrumPad name={data.name[0]} letter={data.letter} sound={data.sound[0]} code={data.code} key={data.id} onChange={handleState}/>
  }))

  // const bankChange = useCallback(setDrumPads(buttons.map(data => {
  //   return <DrumPad name={data.name[1]} letter={data.letter} sound={data.sound[1]} code={data.code} key={data.id} onChange={handleState}/>
  // })))
  
  const appStyle ={
    "minWidth": "700px",
    "maxWidth": "700px"
  }

  return (
    <Container style={appStyle} className='d-flex align-items-center justify-content-center h-100'>
      <Row id="drum-machine" className='bg-light p-4 border border-primary'>
        <Col xs={7}>
          {drumPads}
        </Col>

        <Control name={soundName} />
        
      </Row>
    </Container>

  )
}


