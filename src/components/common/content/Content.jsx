import {Suspense, useEffect, useState} from "react";
import React from "react";
import { Canvas } from "react-three-fiber";
import './Content.module.css'
import Kaireke from "./Kaireke";
import SongService from "../../../API/SongService";
const Content = () => {
    const [action, setAction] = useState("Idle");
    const [songs, setSongs] = useState([])
    const [currentSong, setCurrentSong] = useState(songs[0])
    const fetchSongs = () => {
        setSongs(await SongService.getSongs().data)
    }
    useEffect()
    const changeSong = () => {
        
    }
    return (
        <>
            <div className="controls">
                <button onClick={() => setAction("Idle")}>Idle</button>
                <button onClick={() => setAction("headhit")}>Headhit</button>
                <button onClick={() => setAction("snakedance")}>Snakedance</button>
                <button onClick={() => setAction("twerkingdance")}>twerkingdance</button>
                <button onClick={() => setAction("zombiehit")}>zombiehit</button>
                <button onClick={changeSong}>zombiehit</button>
            </div>
            <Canvas camera={{ position: [0, 0.2, 2] }}>
                <pointLight intensity={2} position={[-1, 15, 10]} color="green" />
                <pointLight intensity={2} position={[10, 15, -1]} color="orange" />
                <Suspense fallback={null}>
                    <Kaireke className='canvasContainer' scale={100} action={action} position={[0.025, -0.9, 0]} />
                </Suspense>
                {/*<OrbitControls />*/}
            </Canvas>
        </>
    )
}
export default Content