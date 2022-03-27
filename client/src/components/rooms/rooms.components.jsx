
import './rooms.styles.css'
import { CSGO, AMONGUS, BADMINTON, CHESS, CRICKET, KHOKHO } from '../../assets'

const ROOMS = [
    {
        roomName: "CS GO",
        imgsrc: CSGO,
        location: "Online"  
    },
    {
        roomName: "Among Us",
        imgsrc: AMONGUS,
        location: "Online"  
    },
    {
        roomName: "Badminton",
        imgsrc: BADMINTON,
        location: "Online"  
    },
    {
        roomName: "Chess",
        imgsrc: CHESS,
        location: "Online"  
    },
    {
        roomName: "Cricket",
        imgsrc: CRICKET,
        location: "Online"  
    },
    {
        roomName: "Kho Kho",
        imgsrc: KHOKHO,
        location: "Online"  
    }
]

function Rooms () {
    return (
        <>
        {ROOMS.map((room, key) => (
            <div className='rooms'>
                <img className="room-container" src={room.imgsrc} alt="" />
                <div className="contents">
                    <p>{room.roomName}</p>
                    <p><img className='lc-icon' src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABJElEQVRIieXUPUoDQRjG8R8qaKcgBsHKGPAAFoK2HkE9Qu5grXcQWysjaBsrrVIavYFFWkGNFpoiWuwGlt3ZuJtNIz7wws687/yf+dgZ/oNqOMEDPuLo4jjOVdIB+vjOiT72q8CHY+CjGE5iUvtl5ul4w0oINJtjcIS9VN8rznGPBhYSuXl84q7oCh5TM3zBeiJfjw2TNd2icHhPDT4N1JzJHnhGMzkGXwXq0n2DHFZQHdktqifyG7Jb1AmB5nIMbrGTaC+J9vgybh9iMTCmsBqK3YFkbJYxgHYJeLssHLZKrGJ7EgNoFYC3JoXDqugPGvdErFUxgOYYg2ZV+EgXAfjVtOBE9+ApAe9heZoGsCt6DgbxdyHlPdch9fCMG1yXmtqf1g/2CJPvQAzABQAAAABJRU5ErkJggg==`} alt=''/>{room.location}</p>
                </div>
            </div>
        ))}
        </>
    )
}

export default Rooms