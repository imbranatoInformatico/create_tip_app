
//I recover the values

let billInput = document.getElementById('billInput');
let tips = document.querySelectorAll('.btn_tip');
let numberPeople = document.getElementById('inputPeople');
let numberBill;


billInput.addEventListener('input', function(e){
    numberBill = e.target.value;
    console.log(numberBill);

    numberPeople.addEventListener('input', function(e){
        let peopleNumber = e.target.value;
        console.log(peopleNumber);
   

    tips.forEach(function(tip){
       tip.addEventListener('click', function(){
            console.log(tip.value);
            let tipAmount = (numberBill * tip.value * peopleNumber) / 100;
            console.log(tipAmount);
            document.getElementById('textTipAmount').innerHTML = tipAmount;
        })

        
    })
});
 
});



/*  function tipBill (tips){
    tips.forEach(function(tip){
        tip.addEventListener('click', function (e) {
          //console.log(tip.value);
          let tipSelect = e.target.value;
          console.log(tipSelect);      

        });
    });  
    
}  */
