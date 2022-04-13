function changeBackground(data){
    let iconCode = data.icon
    let imageCode = iconCode.slice(0,-1)
    console.log(imageCode);
    let contentClassIndex = 'content-' + imageCode;
    document.getElementById('content').className= contentClassIndex ;
}

export default changeBackground