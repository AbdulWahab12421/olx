db = firebase.firestore();
// var storageRef = firebase.storage().ref();
console.log(firebase);
    
function showData() {
    var  category = document.getElementById('category').value;
    var  location = document.getElementById('Location').value;
    var  brand = document.getElementById('Brand').value;
    var  price = document.getElementById('Price').value;
    var  discruption = document.getElementById('Discruption').value;
    var  contact = document.getElementById('Contact').value;
    var  address = document.getElementById('Address').value;
    

console.log('category',category);    
console.log('Location',location);
console.log('Brand',brand);
console.log('Price',price);
console.log('Discruption',discruption);
console.log('Contact',contact);
console.log('Address',address);




var obj={
    category,
    location,
    brand,
    price,
    discruption,
    contact,
    address,
}
var arr = ['category','Location','Brand','Price','Discruption','Contact','Address']

console.log('obj',obj);
console.log('arr', arr);
saveAtFireStore(obj);

}
saveAtFireStore = (data) =>{
    console.log(data)
    db.collection('ads').add(data).then(()=> {
        console.log('data added',)
    }).catch(err=>{
        console.log('error')
    })
}


// function saveDataFirebase(obj){
//     db.collection("ads").add(obj).then((res)=>{

//     }).catch((err)=>{

//     })
// }
 


