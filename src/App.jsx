import { useCallback, useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import DrumPad from './components/DrumPad';
import Control from './components/Control';
import bankA from "./bankA.json";
import bankB from './bankB.json';
import {Container} from 'react-bootstrap'


export default function App() {
  
  const [soundName, setSoundName] = useState('Heater Kit');
  
  const handleState = useCallback((newValue)=>{
    setSoundName(newValue);
  }, []);


  const [buttonPressed, setButtonPressed] = useState("a");

  const [drumPads, setDrumPads] = useState(bankA.map(data =>{
    return <DrumPad name={data.name} letter={data.letter} sound={data.sound} code={data.code} key={data.id} onChange={handleState}/>
  }));

  const switchBank = (newValue)=>{
    setButtonPressed(newValue);
  }

  useEffect(()=>{  
    if (buttonPressed==='a'){
      setDrumPads(bankA.map(data=>{
        return <DrumPad name={data.name} letter={data.letter} sound={data.sound} code={data.code} key={data.id} onChange={handleState}/>
      }));
      setSoundName('Heater Kit')
    } else if (buttonPressed==='b'){
      setDrumPads(bankB.map(data =>{
        return <DrumPad name={data.name} letter={data.letter} sound={data.sound} code={data.code} key={data.id} onChange={handleState}/>
      }));
      setSoundName('Piano Kit')
    }
  },[buttonPressed])


  
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

        <Control name={soundName} onChange={switchBank}/>
        
      </Row>
    </Container>

  )
}


