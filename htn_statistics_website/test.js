function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                // alert(allText);
                var html = '<table class="table table-bordened">';
                var rows = data.split("\n");
                rows.forEach( function getValues(ourrow) {
                    html += "<tr>";
                    var columns = ourrow.split(",");
                    html += "<td>" + columns[0] + "</td>";
                    html += "<td>" + columns[1] + "</td>";
                })
                html += "</table>";
                $('#container').append(html);
                return(html);
            }
        }
    }
    rawFile.send(null);
}