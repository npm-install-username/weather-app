function changeBackground(data){
    let iconCode = data.icon
    let imageCode = iconCode.slice(0,-1)
    
    let contentClassIndex = 'content-' + imageCode;
    document.getElementById('content').className= contentClassIndex ;
}

export default changeBackground