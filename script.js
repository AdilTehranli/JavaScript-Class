
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

    
        let body=document.getElementById('tbody');
        let tr='';
        const employeeArr=this.employee
        for(let i =0;i<this.employee.length;i++){
            tr+=`
            <tr>
            <th scope="row">${i+1}</th>
            <td>${employeeArr[0][i]}</td>
            <td>${employeeArr[1][i]}</td>
            <td>${employeeArr[2][i]}</td>
            </tr>           
            `
            
        }
        body.innerHTML=tr;
    }
   addData(){

       let name=document.getElementById('name').value;
       let position=document.getElementById('position').value;
       let salary=document.getElementById('salary').value;
       const employeeArr=this.employee;
        employeeArr[0].push(name);
        employeeArr[1].push(position);
        employeeArr[2].push(salary);
        console.log(name.value);
    }
}

function Add(){
  
    ca.addData();
}

const ca=new Company('Code Academy','28 may')
const lo=new Company('Code Academy','Nizami')

document.getElementById('company').innerHTML=ca.companyName;
document.getElementById('location').innerHTML=lo.locationName;

