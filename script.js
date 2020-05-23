var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["FullName"] = document.getElementById("FullName").value;
    formData["ID"] = document.getElementById("ID").value;
    formData["Height"] = document.getElementById("Height").value;
    formData["Weight"] = document.getElementById("Weight").value;
    formData["Program"] = document.getElementById("Program").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.FullName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.ID;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Height;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Weight;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.Program;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('FullName').value = '';
    document.getElementById('ID').value = '';
    document.getElementById('Height').value = '';
    document.getElementById('Weight').value = '';
    document.getElementById('Program').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('FullName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('ID').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Height').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Weight').value = selectedRow.cells[3].innerHTML;
    document.getElementById('Program').value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.FullName;
    selectedRow.cells[1].innerHTML = formData.ID;
    selectedRow.cells[2].innerHTML = formData.Height;
    selectedRow.cells[3].innerHTML = formData.Weight;
    selectedRow.cells[4].innerHTML = formData.Program;
}
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('employeeList').deleteRow(row.rowIndex);
        resetForm();
    }    
}