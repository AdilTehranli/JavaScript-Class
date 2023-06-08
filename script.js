// class User{
//     constructor(name,surname,age){
//         this.name=name,
//         this.surname=surname,
//         this.age=age
//     }
    
// }
// const adil=new User('adil','tehranli',19)

// class Person extends User{
//      constructor(name,surname,age,works){
//         super(name,surname,age),
//         this.works=works
//      }
// }
// const kenan=new Person('kenan','qehramanov',19,'frontend-developer');
// console.log(kenan);

class Company{
    constructor(companyName,locationName){
        this.companyName=companyName,
        this.locationName=locationName
    }
    employee(){
        [],
        [],
        []
        
    }
    table(){
        let name=document.getElementById('name');
        let position=document.getElementById('position');
        let salary=document.getElementById('salary');
    
        let body=document.getElementById('tbody');
        let tr='';
        for(let i =0;i<this.employee.length;i++){
            tr+=`
            <tr>
            <th scope="row">${i}</th>
            <td>${name}</td>
            <td>${position}</td>
            <td>${salary}</td>
            </tr>           
            `
            
        }
        body.innerHTML=tr;
    }
    Add(){
        
    }
}
const ca=new Company('Code Academy','28 may')
const lo=new Company('Code Academy','Nizami')

document.getElementById('company').innerHTML=ca.companyName;
document.getElementById('location').innerHTML=lo.locationName;

