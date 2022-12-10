
const apikey='1erLjUaermHkrSNAb7vsHg3RuyyZikU9mp3IFaNR0z0';
const count=500;
const imagearea=document.getElementById('imagearea');
let picsarray=[];


const apiurl=`https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;

 function displaypics(){
    picsarray.forEach((photo)=>{
        const item=document.createElement('a');
        item.setAttribute("href",photo.links.html);
        item.setAttribute('target','_blank');
        const img=document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_decription);

        item.appendChild(img);
        imagearea.appendChild(item)
    })
 }
async function getphotos(){
    try {
        const response=await fetch(apiurl);
        picsarray=await response.json();
        console.log(picsarray);
        displaypics();
    } catch (error) {
        
    }
}
getphotos();