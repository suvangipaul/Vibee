
import './rooms.styles.css'
function Rooms () {
    return (
        <>
        {[...Array(21)].map((room, key) => (
            <div className="room-container">
                {key}
            </div>
        ))}
        </>
    )
}

export default Rooms