
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
                    <p>{}</p>
                </div>
            </div>
        ))}
        </>
    )
}

export default Rooms