var arr;

$.getJSON('https://jsonkeeper.com/b/WZGQ', function(data) {

        var text = `Date: ${data.blurb}<br>
                    Time: ${data.currency}<br>`


        $("body").html(text);
    });

 buildTable(arr);

 //https://jsonkeeper.com/b/WZGQ

 function buildTable(data){
  
   for (var i = 0; i < data.length; i++){
       var row = `<tr>
                       <td>${data[i]['s.no']}</td>
                       <td>${data[i]['percentage.funded']}</td>
                       <td>${data[i]['amt.pledged']}</td>
                 </tr>`;
       document.getElementById('myTable').innerHTML += row;


   }
}
