var ele_pere = document.querySelector("div.password");
function show_pwd()
{
   
    if( ele_pere.children[0].getAttribute('type')=="password")
    {
        ele_pere.children[0].setAttribute('type',"text");
        ele_pere.children[1].remove();
        var img = document.createElement("img");
        img.setAttribute("src","hide.png");
        img.setAttribute("onclick","hide_pwd()");
        ele_pere.children[0].after(img);
    }

   

}

function hide_pwd()
{
    
    if( ele_pere.children[0].getAttribute('type')=="text")
    {
        ele_pere.children[0].setAttribute('type',"password");
        ele_pere.children[1].remove();
        var img = document.createElement("img");
        img.setAttribute("src","show.png");
        img.setAttribute("onclick","show_pwd()");
        ele_pere.children[0].after(img);
    }
}