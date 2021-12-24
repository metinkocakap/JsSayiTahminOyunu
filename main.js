var msg1 =document.getElementById("message1");
var msg2 =document.getElementById("message2");
var msg3 =document.getElementById("message3");

var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums=[];
function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess<1 || user_guess >100){
        alert("Lütfen 1 ile 100 aralığında bir değer giriniz!");
    }
    else{
        guessed_nums.push(user_guess);
        no_of_guesses+=1;
        if(user_guess < answer){
msg1.textContent="Girdiğiniz sayı küçük.";
msg2.textContent="Yapılan tahmin sayısı : "+no_of_guesses;
msg3.textContent="Tahmin Edilen Sayılar : "+guessed_nums;
        }
        else if(user_guess >answer){
            msg1.textContent="Girdiğiniz sayı büyük.";
            msg2.textContent="Yapılan tahmin sayısı : "+no_of_guesses;
            msg3.textContent="Tahmin Edilen Sayılar : "+guessed_nums;

        }
        else if(user_guess == answer){
            msg1.textContent=" Yaşasın Doğru Tahmin!";
            msg2.textContent="Üretilen Sayı : "+answer;
            msg3.textContent="Tahmin edilen sayı miktarı :  "+no_of_guesses + " Sayı";
            document.getElementById("my_btn").disabled=true;
        }
    }
}