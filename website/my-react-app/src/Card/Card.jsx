import profilePic from './assets/corgi.png'

function Card() {

    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">ray</h2>
            <p className="card-text">I am currently studying CST at BCIT and love playing badminton</p>
        </div>
    );

}

export default Card