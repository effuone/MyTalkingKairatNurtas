import {Suspense, useEffect, useState} from "react";
import React from "react";
import { Canvas } from "react-three-fiber";
import Kaireke from "./Kaireke";
import Newkaireke from './Newkaireke'
import useAudio from "../../../hooks/useAudio";
import SongService from "../../../API/SongService";
import { Howl } from "howler";
import Otmorokoz from "../../../assets/sounds/otmorozok.mp3";
import Karaysin from "../../../assets/sounds/ne_karayasin.mp3";
import Saslygimay from "../../../assets/sounds/saslygymai.mp3";

import './Content.module.css';
const Content = () => {
    let howIdle = 0;
    const [action, setAction] = useState("Idle");
    const [songs, setSongs] = useState([])
    const [playing, setPlaying, toggle, setAudio] = useAudio('https://muzmir.kz/uploads/files/2022-02/music_10954.mp3');
    const fetchSongs = async () => {
        const response = await SongService.getSongs()
        setSongs(response.data)
    }
    useEffect(()=>{
        fetchSongs()
        if(playing === true) setAction('twerkingdance')
    }, [])

    const switchAudio = () => {
        toggle()
        setAudio(new Audio(songs[Math.floor(Math.random() * songs.length)].url))
    }

    useEffect(() => {
        if(playing) setAction('twerkingdance')
        else setAction('Idle')
        const timer = window.setInterval(() => {
            howIdle++;
            if(howIdle > 10 && action === "Idle" && playing !== false) {
                console.log('10 seconds passed');
                const sound = new Howl({
                    src: [Karaysin],
                });
                sound.play();
                howIdle = 0;
            }
        }, 1000);
        return () => {
            window.clearInterval(timer);
        };
    }, []);

    function headHit() {
        setAction("headhit");
        soundPlay(Otmorokoz);
        setTimeout(() => {
            setAction('Idle');
        }, 200);
    }

    const soundPlay = (src) => {
        const sound = new Howl({
                src
        });
        sound.play();
    }

    function bodyHit() {
        setAction("zombiehit");
        soundPlay(Saslygimay);
        setTimeout(() => {
            setAction('Idle');
        }, 600);
    }

    return (
        <>
            <div className="controls">
                <button onClick={() => setAction("snakedance")}>Snakedance</button>
                <button onClick={() => setAction("twerkingdance")}>twerkingdance</button>
                <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
                <button onClick={switchAudio}>Switch Music</button>
            </div>
            <div className="head" style={{position: "absolute", background: "transparent", width: '90px', height: '90px',
                top: '26%', left: '47%', zIndex: '5'
            }} onClick={headHit}></div>
            <div className="head" style={{position: "absolute", background: "transparent", width: '130px', height: '170px',
                top: '38%', left: '45%', zIndex: '5'
            }} onClick={bodyHit}></div>
            <Canvas camera={{ position: [0, 0.2, 2] }} style={{zIndex: '0'}}>
                <pointLight intensity={2} position={[-1, 15, 10]} color="blue"/>
                <pointLight intensity={2} position={[10, 15, -1]} />
                <Suspense fallback={null}>
                    <Kaireke scale={100} action={action} position={[0.025, -0.9, 0]} />
                </Suspense>
            </Canvas>
        </>
    )
}
export default Content