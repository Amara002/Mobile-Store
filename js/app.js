'use strict';

let Mobile = function (user, type, price, condition) {
    this.user = user;
    this.type = type;
    this.price = price;
    this.condition = condition;
    Mobile.allmobiles.push(this)


}
Mobile.allmobiles = [];


let parent = document.getElementById('parent');

let tableElement = document.createElement('table');
parent.appendChild(tableElement);


function mkHeadRow() {

    let trElement1 = document.createElement('tr');
    tableElement.appendChild(trElement1);

    let headRow = ['User', 'Type', 'Price', 'Condition'];
    for (let i = 0; i < headRow.length; i++) {
        let thElement = document.createElement('th');
        trElement1.appendChild(thElement);
        thElement.textContent = headRow[i];
        
    }


}
mkHeadRow() 


Mobile.prototype.AddNewRow = function () {

    let trElement = document.createElement('tr');
    tableElement.appendChild(trElement);

    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = this.user;

    let tdElement1 = document.createElement('td');
    trElement.appendChild(tdElement1);
    tdElement1.textContent = this.type;

    let tdElement2 = document.createElement('td');
    trElement.appendChild(tdElement2);
    tdElement2.textContent = this.price;

    let tdElement3 = document.createElement('td');
    trElement.appendChild(tdElement3);
    tdElement3.textContent = this.condition;

    let btn = document.getElementById('btn');
    tableElement.appendChild(btn);
    btn.innerHTML = ` <input type="button" value="Delete" onclick="deleteRow()">`;
}
    

// function deleteRow(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     tableElement.deleteRow(i);
//     localStorage.removeItem('new mobile')
//   }

function deleteRow() {
    
    for(var i = tableElement.rows.length; i > 1;i--)
    {
        tableElement.deleteRow(i -1);
    }
    localStorage.removeItem('new mobile');
}


// var Parent = document.getElementById(tableID);

// while(Parent.hasChildNodes())
// {
//    Parent.removeChild(Parent.firstChild);
// }
// Mobile.prototype.condition = function () {
//     if(this.price<200){

//         this.condition = 'used'
//     }else if(this.price > 200){
//         this.condition = 'new'

//     }

    
// }


let form = document.getElementById('form');
form.addEventListener('submit', submitter);

function submitter(event) {
    event.preventDefault();

    let user = event.target.user.value;
    let type = event.target.type.value;
    let price = Math.floor(Math.random() * (500 - 100 + 1) + 100);
    let condition;
    if(price<200){

        condition = 'used'
    }else if(price > 200){
        condition = 'new'

    }else{

        let condition = condition ; 
    }
    let newMobile = new Mobile (user, type, price, condition);
    newMobile.AddNewRow();
    updateStorage();
    
}

function updateStorage() {
    let mobileString = JSON.stringify(Mobile.allmobiles);
    localStorage.setItem('new mobile', mobileString);
    
}

function render() {
    let data = localStorage.getItem('new mobile');
    let dataStore = JSON.parse(data);
    if(data){
        for (let i = 0; i < dataStore.length; i++) {
            let newMobile = new Mobile (dataStore[i].user, dataStore[i].type, dataStore[i].price);

            newMobile.AddNewRow();
            
        }


    }
    
}
render();


