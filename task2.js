var v1=[1,4,0,8,7];
const x=5;
v1.sort();

function update(number){
    v1 = [...v1, number];
     v1.sort();
     return v1
}

update(5)
console.log(v1)