import song from "@assets/music/lofi.mp3"


const MusicPlayer = ()=> {
    
    return(
        <>
        <audio controls>
        <source src={song} type="audio/mpeg" /> 
        </audio>
        </>
    )
}

export default MusicPlayer;