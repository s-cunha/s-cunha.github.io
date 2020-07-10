function Post(host, controllerName, value)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if(this.readyState==4&&this.status==200)
        {
            alert("Added");
        }
    };

    request.open("POST", host+"/api/"+controllerName);
    request.setRequestHeader("Content-type", "text/json");
    request.send(JSON.stringify(value));
}

function Get(host, controllerName, value)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        //alert(this.status);
        if(this.readyState==4&&this.status==200)
        {
            var result = JSON.parse(this.response)
            alert(result.name);
        }
    };

    request.open("Get", host+"/api/"+controllerName+"/"+value);
    request.send();
}

function Put(host, controllerName, value)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if(this.readyState==4&&this.status==200)
        {
            alert("Changed");
        }
    };

    request.open("PUT", host+"/api/"+controllerName);
    request.setRequestHeader("Content-type", "text/json");
    request.send(JSON.stringify(value));
}
function Delete(host, controllerName, value)
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if(this.readyState==4&&this.status==200)
        {
            alert("Deleted");
        }
    };

    request.open("DELETE", host+"/api/"+controllerName+value);
    request.send();
}


var btn = document.getElementById("btn");
var inputName=document.getElementById("name-input");
var nameSpan=document.getElementById("name-error-span");

btn.addEventListener("click", ()=>
{
    var nameValue=inputName.value;
    if(nameValue=="")
    {
        nameSpan.style.setProperty("display", "block");
    }
    else
    {
        nameSpan.style.setProperty("display", "none");
        // var value={"name":nameValue}
        var value = "6342AEA8-82AC-4C98-1091-08D823FEAD21";
        Get("https://localhost:44353", "DietaryRestriction", value);
        // nameSpan.style.setProperty("display", "none");
        // alert("Hello "+nameValue);
    }
});


