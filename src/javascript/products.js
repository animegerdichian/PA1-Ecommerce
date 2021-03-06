import * as mug_collect from "./mugs.js";

const collect = mug_collect.MUG_COLLECTION;

/* display each item, its image, and descriptors including the star rating */
window.onload = function (){
    for (var i = 1; i<=10; ++i){
        document.getElementById("itemList").innerHTML += 
        "<div class = \"itemBlock\">"+
        "<table>" +
            "<tbody >" + 
                "<tr>" +
                    "<td><img width='250'height='250'class = \" enlarge-pic \" onclick=\" getItem("+ i + ") \" src=\" " + collect["mug_"+i].img + " \" /></td> " +
                "</tr>" +
                "<tr>" +
                    "<td><h3> "+ collect["mug_"+i].name +  "</h3> </td> " +
                "</tr>" +
                "<tr>" +
                    "<td><p> "+ collect["mug_"+i].artist +  "</p> </td> " +
                "</tr>" +
                "<tr>" +
                    "<td><h4> $"+ collect["mug_"+i].price +  "</h4> </td>" +
                "</tr>" +
                "<tr>" +
                    "<td>"+ "<div class = 'rate'> <p>"+"<img src='"+collect["mug_"+i].star1+"' align='left' height='20px'>"
                    +"<img src='"+collect["mug_"+i].star2+"' align='left' height='20px'>"
                    +"<img src='"+collect["mug_"+i].star3+"' align='left' height='20px'>"
                    +"<img src='"+collect["mug_"+i].star4+"' align='left' height='20px'>"
                    +"<img src='"+collect["mug_"+i].star5+"' align='left' height='20px'>"
                    +"</p></div>" + "<h5>" +collect["mug_"+i].review_num + " reviews</h5>"  + " </td>" +
                    
                "</tr>" +
                
            "</tbody> " +
        "</table>" +
        "</div>";
    }
}