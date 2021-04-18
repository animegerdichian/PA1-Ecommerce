import * as mug_collect from "./mugs.js";

const collect = mug_collect.MUG_COLLECTION;

window.onload = function (){
    for (var i = 1; i<=10; ++i){
        document.getElementById("item-list").innerHTML += 
        "<div class = \"item-block\">"+
        "<table>" +
            "<tbody >" + 
                "<tr>" +
                    "<td><img class = \" enlarge-pic \" onclick=\" openItemPage("+ i + ") \" src=\" " + collect["mug_"+i].img + " \" /></td> " +
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
            "</tbody> " +
        "</table>" +
        "</div>";
    }
}