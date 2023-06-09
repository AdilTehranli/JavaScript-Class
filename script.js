class Company {
  constructor(companyName, locationName) {
    (this.companyName = companyName), (this.locationName = locationName);
  }
  employee = [
    [],
     [],
      []
];

  table() {
    let body = document.getElementById("tbody");
    let tr = "";
    const employeeArr = this.employee;
    for (let i = 0; i < employeeArr[0].length; i++) {
      tr += `
            <tr>
            <th scope="row">${i + 1}</th>
            <td>${employeeArr[0][i]}</td>
            <td>${employeeArr[1][i]}</td>
            <td>${employeeArr[2][i]}</td>
            </tr>           
            `;
    }
    body.innerHTML = tr;
  }
  addData() {
    let name = document.getElementById("name").value;
    let position = document.getElementById("position").value;
    let salary = document.getElementById("salary").value;
    
    if(name===''||position===''||salary===''){
        alert('You can not write empty words')
        return;
    }

    const employeeArr = this.employee;
    employeeArr[0].push(name);
    employeeArr[1].push(position);
    employeeArr[2].push(salary);
    console.log(employeeArr);

    document.getElementById('name').value = '';
    document.getElementById('position').value = '';
    document.getElementById('salary').value = '';

    this.table();
  }
}
function Add() {
    let loc = document.getElementById("loc");
  if (loc.value == "1") {
    ca.addData();
  } else {
    lo.addData();
  }
  let modal = document.getElementById('exampleModal');
  let bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
}
function change() {
  console.log(loc);
}

const ca = new Company("Code Academy", "28 may");
const lo = new Company("Code Academy", "Nizami");

document.getElementById("company").innerHTML = ca.companyName;
document.getElementById("location").innerHTML = lo.locationName;
