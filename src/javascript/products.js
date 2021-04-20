import * as mug_collect from "./mugs.js";

const collect = mug_collect.MUG_COLLECTION;

window.onload = function (){
    for (var i = 1; i<=10; ++i){
        document.getElementById("item-list").innerHTML += 
        "<div class = \"item-block\">"+
        "<table>" +
            "<tbody >" + 
                "<tr>" +
                    "<td><img width='250'height='250'class = \" enlarge-pic \" onclick=\" getItem("+ i + ") \" src=\" " + collect["mug_"+i].img + " \" /></td> " +
                "</tr>" +
                "<tr>" +
                    "<td><p> "+ collect["mug_"+i].name +  "</p> </td> " +
                "</tr>" +
                "<tr>" +
                    "<td><p> "+ collect["mug_"+i].artist +  "</p> </td> " +
                "</tr>" +
                "<tr>" +
                    "<td><p> $"+ collect["mug_"+i].price +  "</p> </td>" +
                "</tr>" +
                "<tr>" +
                    "<td>"+ "<div class = 'rate'> <p>"+"<img src='"+collect["mug_"+i].star1+"' align='left' height='20px'>"
                    +"<img src='"+collect["mug_"+i].star2+"' align='left' height='20px'>"
                    +"<img src='"+collect["mug_"+i].star3+"' align='left' height='20px'>"
                    +"<img src='"+collect["mug_"+i].star4+"' align='left' height='20px'>"
                    +"<img src='"+collect["mug_"+i].star5+"' align='left' height='20px'>"
                    +"</p></div>" + "<h4>" +collect["mug_"+i].review_num + " reviews</h4>"  + " </td>" +
                    
                "</tr>" +
                
            "</tbody> " +
        "</table>" +
        "</div>";
    }
}