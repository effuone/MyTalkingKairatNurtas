const MusicItem = (props) => {
    return (
        <div className="musicItem">
        <h1>{props.song.name}</h1>
        <audio>
            <source src={props.song.url} type="audio/mpeg"/>
        </audio>
        </div>
    )
}
export default MusicItem