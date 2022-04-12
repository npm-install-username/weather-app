function changeBackground(data){
    let iconCode = data.icon
    let imageCode = iconCode.slice(0,-1)
    console.log(imageCode);
    let imgURL = "url('../images/02.jpg')"
    document.getElementById('content').style.backgroundImage = imgURL;
}

export default changeBackground