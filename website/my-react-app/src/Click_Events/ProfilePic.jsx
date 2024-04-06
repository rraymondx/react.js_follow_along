

function ProfilePic() {

    const imgUrl = './src/assets/corgi.png';
    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick={(e) => handleClick(e)} src={imgUrl} alt="profile" />
    );

}

export default ProfilePic