import { Col } from 'react-bootstrap';
import {Badge} from 'react-bootstrap';
import { Button } from 'react-bootstrap';


export default function Control(props){
    function displayVolume(){
        const volume = document.getElementById("volume");
        const display = document.getElementById('display');
        display.innerHTML=`Volume: ${volume.value}`;
        setTimeout(()=>display.innerHTML=props.name, 1500);
        Array.from(document.getElementsByClassName('clip')).forEach((e)=>{
            e.volume = volume.value/100 
        })
    }
    
    return (
        <Col xs={5}>
            <h1><Badge bg='dark' className='mt-2'>DrummyDrumz</Badge></h1>
            <p id='display' style={{"fontWeight": "bold"}} className='w-75 bg-light border border-primary d-flex align-items-center justify-content-center' dangerouslySetInnerHTML={{__html: props.name}}>
            </p>
            <input id="volume" type='range' className="w-100" max={100} min={0} step={1} onChange={displayVolume}></input>
            <Button className='bank mx-2'>A</Button>
            <Button className='bank mx-2'>B</Button>
        </Col>
    )
}