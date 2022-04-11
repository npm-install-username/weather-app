function changeBackground(data){
    let iconCode = data.icon
    let imageCode = iconCode.slice(0,-1)
    console.log(imageCode)
    document.getElementById('content').style.backgroundImage = "url(../images/04.jpg)"
}

export default changeBackground