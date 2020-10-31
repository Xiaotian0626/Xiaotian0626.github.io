function displayPicture(blob){
    let objectURL=URL.createObjectURL(blob);
    let image=document.createElement('img');
    image.src=objectURL;
    document.body.appendChild(image);
}

function loadAssets(url, type, callback){
    let xhr=new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType=type;

    xhr.onload=function(){
        callback(xhr.response);
    };

    xhr.send();
}

const myBtn=document.querySelector('button');

myBtn.addEventListener('click', 
    loadAssets('BingWallpaper.jpg',
     'blob', displayPicture));
