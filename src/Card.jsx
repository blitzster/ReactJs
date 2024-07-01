import profilePic from './assets/Mountain.jpg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            {/* <img src="https://via.placeholder.com/150" alt="Profile Picture" /> */}
            <h2 className='card-title'>Akshay</h2>
            <p className='card-text'>I like to play video games.</p>
        </div>
    );
}
export default Card