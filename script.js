function insert_Row() {
    //Write your code here
  
   const table = document.getElementById("sampleTable");

    // Insert new row at top (index 0)
    const newRow = table.insertRow(0);

    // Insert two new cells in that row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Add required text
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
