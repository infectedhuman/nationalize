async function foo() {
    var input = document.getElementById("name");
    var name = input.value;
    console.log(name);
    try {
        let resp = await fetch("https://api.nationalize.io?name=" + name);
        let data = await resp.json();
        console.log(data);
        console.log(data.country[0].country_id);
        console.log(data.country[0].probability);
        console.log(data.country[1].country_id);
        console.log(data.country[1].probability);
        createTable(data,name);
    } catch (e) {
        console.log(e);
        alert("Invalid Name");
    }
    input.value="";
}

function createTable(data,name){
    let tBody = document.getElementById("tbody")
    let row=document.createElement('tr');
    let td0=document.createElement('td');
    let td1=document.createElement('td')
    let td2=document.createElement('td')
    let row2=document.createElement('tr');
    let td5=document.createElement('td')
    let td3=document.createElement('td')
    let td4=document.createElement('td')

    td0.innerHTML=name;
    td0.rowSpan=2;
    td1.innerHTML=data.country[0].country_id;
    td2.innerHTML=data.country[0].probability.toFixed(2);
    
    td3.innerHTML=data.country[1].country_id;
    td4.innerHTML=data.country[1].probability.toFixed(2);

    
    row.append(td0,td1,td2)
    row2.append(td3,td4)
    tBody.append(row,row2);
}
