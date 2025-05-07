
      
      document.getElementById('btn-login').addEventListener('click', function(event){

        const mobileNumberInput = document.getElementById('mobile-number-input').value;
        const pinNumberInput = document.getElementById('pin-number-input').value;

        console.log(mobileNumberInput, pinNumberInput);

        if(pinNumberInput === '555') {
          console.log('money added to balance');
          window.location.href = 'home.html';
          
        }
        else {
          alert ('plz type pin again');
        }

      })

      
      
 