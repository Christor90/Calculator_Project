
 
        function getAllValues (value) {
            document.getElementById('showTotal').value += value;
        }

        function computeValues () {  
        let calculation = document.getElementById('showTotal').value;

        document.getElementById('showTotal').value = eval(calculation);
        }


        function clearValues () {
            document.getElementById('showTotal').value = '';
        }