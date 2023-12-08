import { useState } from 'react';
import { ButtonGroup, Col } from 'react-bootstrap';
import {Badge} from 'react-bootstrap';
import { Button } from 'react-bootstrap';



export default function Control(props){

    const [level, setLevel] = useState('100')

    function displayVolume(){
        const volume = document.getElementById("volume");
        const display = document.getElementById('display');
        setLevel(volume.value);
        display.innerHTML=`Volume: ${level}`;
        setTimeout(()=>display.innerHTML=props.name, 1500);
        Array.from(document.getElementsByClassName('clip')).forEach((e)=>{
            e.volume = level/100 
        })
    }
  

    const a = document.getElementById('a'); 
    const b = document.getElementById('b'); 

    function buttonA(e){
       props.onChange(a.id);
        a.style.backgroundColor = "#0045ab";
        b.style.backgroundColor = '#0d6efd';
    }

    function buttonB(e){
        props.onChange(b.id);
        b.style.backgroundColor = "#0045ab";
        a.style.backgroundColor = '#0d6efd';
    }
    
    


    return (
        <Col xs={5}>
            <h1><Badge bg='dark' className='mt-2'>DrummyDrumz</Badge></h1>
            <p id='display' style={{"fontWeight": "bold"}} className='w-75 bg-light border border-primary d-flex align-items-center justify-content-center' dangerouslySetInnerHTML={{__html: props.name}}>
            </p>
            <input id="volume" value={level} type='range' className="w-100" onChange={displayVolume}></input>
            <ButtonGroup>
                <Button onClick={buttonA} className='bank' id='a'>A</Button>
                <Button onClick={buttonB} className='bank' id="b">B</Button>
            </ButtonGroup>
        </Col>
    )
}