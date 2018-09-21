var x = 0;
var fans = 0;
var cpc = 1;
var footballs = 0;
var missionaries = 0;
var cpcCost = 25;
var fBCost = 50;
var mishCost = 300;

function test(event)
{
    x += cpc;
    document.getElementById("numclicks").innerHTML = x + (x ==1 ? " Provo point" : " Provo points");
    event.preventDefault();
}

function darken(event)
{
    document.getElementById("btn").src = "./Yclick2.png";
}

function lighten(event)
{
    document.getElementById("btn").src = "./Yclick1.png";
}

function addTC(event)
{
    if ((x >= cpcCost))
    {
        x -= cpcCost;
        cpcCost = Math.ceil(cpcCost*1.4);
        cpc += 1;
    }
    document.getElementById("costcoug").innerHTML = "Buy one cougar for " + cpcCost + " Provo points  (+1Pppc)";
    document.getElementById("numclicks").innerHTML = x + (x ==1 ? " click" : " Provo points");
}

function addFB(event)
{
    if ((x >= fBCost))
    {
        x -= fBCost;
        fBCost = Math.ceil(fBCost *= 1.5);
        footballs += 1;
    }
    document.getElementById("costFB").innerHTML = "Buy one football for " + fBCost + " Provo points (+1Ppps)";
    document.getElementById("numclicks").innerHTML = x + (x ==1 ? " click" : " Provo points");
}

function addMish(event)
{
    if ((x >= mishCost))
    {
        x -= mishCost;
        mishCost = Math.ceil(mishCost *= 1.4);
        missionaries += 1;
    }
    document.getElementById("costMish").innerHTML = "Buy one missionary for " + mishCost + " Provo points (+5Ppps)";
    document.getElementById("numclicks").innerHTML = x + (x ==1 ? " click" : " Provo points");

}
function winGame(event)
{
    if ((x >= 400))
    {
        x -= 400;
        fans += 1;
        document.getElementById("fans").innerHTML = fans + (fans ==1 ? " Fan" : " fans");
    }
    
}

function addPS()
{
    x += Math.ceil(footballs + footballs*.2*fans);
    x += missionaries * 5;
    document.getElementById("numclicks").innerHTML = x + (x ==1 ? " Provo point" : " Provo points");
}

function getStatus()
{
    if (x < 200)
    {
        document.getElementById("statuss").innerHTML = "You're an incoming freshman at UVU";
    }
    else if (x < 500)
    {
        document.getElementById("statuss").innerHTML = "You downloaded mutual";
    }
    else if (x < 1000)
    {
        document.getElementById("statuss").innerHTML = "You've successfuly transfered to BYU";   
    }
    else if (x < 5000)
    {
        document.getElementById("statuss").innerHTML = "People have started calling you a \"Provo all-star\"";
    }
    else if (x < 10000)
    {
        document.getElementById("statuss").innerHTML = "You got into your program of choice";   
    }
    else if (x < 15000)
    {
        document.getElementById("statuss").innerHTML = "You've met your soulmate";   
    }
    else if (x < 25000)
    {
        document.getElementById("statuss").innerHTML = "You've gratuated, Congratulations!";   
    }    
    else
    {
        document.getElementById("statuss").innerHTML = "Your kids have been accepted into BYU";   
    }
    event.preventDefault();
}

function constant()
{
    setInterval('addPS(); getStatus();', 1000);
}
