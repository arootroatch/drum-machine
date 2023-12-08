import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


export default function DrumPad(props){
   

    const [buttonStyles, setButtonStyles] = useState({
        "margin": "5px",
        "height": "100px",
        "width": "100px",
        "boxShadow": "5px 3px 3px grey"
    });

    function onKeydown(e) {
        if (e.code === props.code) {
            document.getElementById(props.name).click();
            setButtonStyles({
                "margin": "5px",
                "height": "100px",
                "width": "100px",
                "boxShadow": "none",
                "transform": "translate(5px, 3px)"
            })
        }
    }
    
    function onKeyup(e) {
        if (e.code === props.code) {
            setButtonStyles({
                "margin": "5px",
                "height": "100px",
                "width": "100px",
                "boxShadow": "5px 3px 3px grey"  
            })
        }
    }

    useEffect((e)=> {
        document.addEventListener("keydown", onKeydown);
        document.addEventListener("keyup", onKeyup);
        return()=>{
            document.removeEventListener("keydown", onKeydown);
            document.removeEventListener('keyup',onKeyup);
        }
    }, [props.name]);

    function grabNamePlaySound(e){
        props.onChange(e.target.id);
        const sound = document.getElementById(props.letter);
        sound.currentTime = 0;
        sound.play();
    }
  
    
    return(
        <Button onClick={grabNamePlaySound} className="drum-pad" id={props.name} style={buttonStyles}>
            {props.letter}
            <audio id={props.letter} className="clip" src={props.sound}></audio>
        </Button>

    )


}