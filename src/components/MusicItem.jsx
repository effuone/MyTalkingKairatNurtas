const MusicItem = (props) => {
    return (
        <>
        <h1>{props.song.name}</h1>
        <audio>
            <source src={props.song.url} type="audio/mpeg"/>
        </audio>
        </>
    )
}
export default MusicItem