
//generating cv
function generatecv(){
    
      let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
  
    nameT1.innerHTML=nameField;
  
    document.getElementById('nameT2').innerHTML=nameField;
    document.getElementById('contact').innerHTML=document.getElementById("contactField").value;
    document.getElementById('addressT').innerHTML=document.getElementById("addressField").value;
     document.getElementById('emT').innerHTML=document.getElementById("emailField").value;
     document.getElementById('dob').innerHTML=document.getElementById("dobField").value;
     document.getElementById('nat').innerHTML=document.getElementById("nationField").value;

     var a=document.getElementById("skill").value;
    document.getElementById("Sk").innerHTML=a;

    var a=document.getElementById("hobby").value;
    document.getElementById("hobee").innerHTML=a;
    document.getElementById('instaT').innerHTML=document.getElementById("fbField").value;
     document.getElementById('Github').innerHTML=document.getElementById("linkdinField").value;
    document.getElementById('Linkdin').innerHTML=document.getElementById("instaField").value;
    //var x=document.getElementById("ob").value;
    //document.getElementById("obnew").innerHTML=x;

    //objective
    var inputText = document.getElementById('ob').value;
            var lines = inputText.split('\n'); // Split text by newline
            var outputList = document.getElementById('obnew');
            outputList.innerHTML = ''; // Clear previous content

            // Display each line as a list item with bullet points
            lines.forEach(function(line) {
                var li = document.createElement('li');
                li.textContent = line;
                outputList.appendChild(li);
            });
    //work experience
    var inputText = document.getElementById('weField').value;
            var lines = inputText.split('\n'); // Split text by newline
            var outputList = document.getElementById('weT');
            outputList.innerHTML = ''; // Clear previous content

            // Display each line as a list item with bullet points
            lines.forEach(function(line) {
                var li = document.createElement('li');
                li.textContent = line;
                outputList.appendChild(li);
            });
     //academic qualification
    var inputText = document.getElementById('academic').value;
            var lines = inputText.split('\n'); // Split text by newline
            var outputList = document.getElementById('acQ');
            outputList.innerHTML = ''; // Clear previous content

            // Display each line as a list item with bullet points
            lines.forEach(function(line) {
                var li = document.createElement('li');
                li.textContent = line;
                outputList.appendChild(li);
            });
    //personal projects
    var inputText = document.getElementById('projects').value;
            var lines = inputText.split('\n'); // Split text by newline
            var outputList = document.getElementById('Pr');
            outputList.innerHTML = ''; // Clear previous content

            // Display each line as a list item with bullet points
            lines.forEach(function(line) {
                var li = document.createElement('li');
                li.textContent = line;
                outputList.appendChild(li);
            });
            //certificates
    var inputText = document.getElementById('certificate').value;
            var lines = inputText.split('\n'); // Split text by newline
            var outputList = document.getElementById('CerT');
            outputList.innerHTML = ''; // Clear previous content

            // Display each line as a list item with bullet points
            lines.forEach(function(line) {
                var li = document.createElement('li');
                li.textContent = line;
                outputList.appendChild(li);
            });
            //work experience
    var inputText = document.getElementById('achievements').value;
            var lines = inputText.split('\n'); // Split text by newline
            var outputList = document.getElementById('AchV');
            outputList.innerHTML = ''; // Clear previous content

            // Display each line as a list item with bullet points
            lines.forEach(function(line) {
                var li = document.createElement('li');
                li.textContent = line;
                outputList.appendChild(li);
            });

        document.getElementById("cv-form").style.display="none";
        document.getElementById("cv-template").style.display="block";
  }
  function printCV()
{
    var cvContent = document.getElementById('cv-template').innerHTML;
    var printWindow = window.open('', '_blank');
            printWindow.document.open();
            printWindow.document.open();
            printWindow.document.write('<!DOCTYPE html>');
            printWindow.document.write('<html><head><title>CV</title></head><body>');
            printWindow.document.write('<h1>Resume</h1>');
    printWindow.document.write(cvContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
            printWindow.print();
}