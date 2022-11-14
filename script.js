
//I recover the values

let billInput = document.getElementById('billInput');
let tips = document.querySelectorAll('.btn_tip');
let numberPeople = document.getElementById('inputPeople');
let resetBtn = document.querySelector('.btn_reset');
let numberBill;


billInput.addEventListener('input', function(e){
    numberBill = e.target.value;

    numberPeople.addEventListener('input', function(e){
        let peopleNumber = e.target.value;   

        tips.forEach(function(tip){
        tip.addEventListener('click', function(){

                

                let tipAmount = (numberBill * tip.value / 100) / peopleNumber;
                console.log('person tip :' + tipAmount);

                let singleAmount = numberBill / peopleNumber;
                console.log('single amount :'+ singleAmount);

                document.getElementById('textTipAmount').innerHTML = tipAmount.toFixed(2);
                document.getElementById('singleAmount').innerHTML = singleAmount.toFixed(2);
              
            })

            
        })
    });
 
});

resetBtn.addEventListener('click', function(){

    document.getElementById('textTipAmount').innerHTML = '$0.00';
    document.getElementById('singleAmount').innerHTML = '$0.00';

});



