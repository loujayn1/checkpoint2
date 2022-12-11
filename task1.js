 const v1=[1,2,4,7];
 const  v2=[1,0,1,5];
 var ps= 0;
 
function dot_product(v1,v2){
    for(let i=0; i< v1.length ; i++){
        ps = ps + v1[i]*v2[i]
    }
    console.log(`${ps === 0 ? " les deux vecteurs sont orogonaux" : "les deux vecteurs ne sont pas orthogonaux" }`)   
}

dot_product(v1,v2)