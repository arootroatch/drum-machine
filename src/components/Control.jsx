import { Col } from 'react-bootstrap';



export default function Control(props){

    
    return (
        <Col>
            <p id='display' className='w-75 bg-secondary text-light d-flex align-items-center justify-content-center' dangerouslySetInnerHTML={{__html: props.name}}>
            </p>
            <input id="volume" type='range' className="w-100" max={100} min={0} step={1}></input>

        </Col>
    )
}