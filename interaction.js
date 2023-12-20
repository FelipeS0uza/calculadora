function insert(num){
    document.getElementById("result").innerHTML += num
};

function clean(){
    document.getElementById("result").innerHTML = " "
};

function backspace(){
    var num = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = num.substring(0, num.length - 1)
}

function calculate(){
    var result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result)
    }
}