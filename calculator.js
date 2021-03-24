/*var name = "aprendendo a escrever na tela com Djei És"
document.write(name)

var valueFirst = parseInt(prompt("Digite o primeiro valor:"))
var valueSecond = parseInt(prompt("Digite o segundo valor:"))
var operation = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração:")

if (operation == 1) {
    var resulted = valueFirst / valueSecond
    document.write(valueFirst + " / " + valueSecond + " = " + resulted)
}
else if (operation == 2) {
    var resulted = valueFirst * valueSecond
    document.write(valueFirst + " x " + valueSecond + " = " + resulted)

}
else if (operation == 3) {
    var resulted = valueFirst + valueSecond
    document.write(valueFirst + " + " + valueSecond + " = " + resulted)

}
else if (operation == 4) {
    var resulted = valueFirst - valueSecond
    document.write(valueFirst + " - " + valueSecond + " = " + resulted)

}*/

function insert(num)
{
   var number = document.getElementById('resulted').innerHTML;
   document.getElementById('resulted').innerHTML = number + num;
}

function clean()
{
    document.getElementById('resulted').innerHTML = "";
}

function back()
{
    var resulted = document.getElementById('resulted').innerHTML;
    document.getElementById('resulted').innerHTML = resulted.substring(0, resulted.length -1)
}

function calcular()
{
    var resulted = document.getElementById('resulted').innerHTML;
    if(resulted)
    {
        document.getElementById('resulted').innerHTML = eval(resulted);
    }
    else {
        document.getElementById('resulted').innerHTML = "NaN"
    }
}