document.addEventListener('DOMContentLoaded',function (){
    document.querySelector('form').onsubmit = function (){      
        const sensor_type = document.querySelector('#data').value;

        if( sensor_type == "flow" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
            .then(response => response.json())
            .then(data => {
                const sensor_ID = document.querySelector('#ID').value;
                console.log(data);

                if( sensor_ID == "0" ) {
                    const name = data[0].name;   
                    const plant = data[[0]]["plant-site"];
                    const range = data[[0]].range;
                    const type = data[[0]].type;
                    const unit = data[[0]].unit;
                    const valune = data[[0]].value;    
                    document.querySelector('#A1').innerHTML = `name = ${name}`;
                    document.querySelector('#A2').innerHTML = `plan   = ${plant}`;
                    document.querySelector('#A3').innerHTML = `range = ${range}`;
                    document.querySelector('#A4').innerHTML = `type = ${type}`;
                    document.querySelector('#A5').innerHTML = `unit = ${unit}`;
                    document.querySelector('#A6').innerHTML = `valune = ${valune}`;
                } 
                else {
                    document.querySelector('#A1').innerHTML = "NO SENSER DATA";
                    document.querySelector('#A2').innerHTML = "";
                    document.querySelector('#A3').innerHTML = "";
                    document.querySelector('#A4').innerHTML = "";
                    document.querySelector('#A5').innerHTML = "";
                    document.querySelector('#A6').innerHTML = "";
                }

                if( sensor_ID == "1" ) {
                    const name = data[[1]].name;   
                    const plant = data[[1]]["plant-site"];
                    const range = data[[1]].range;
                    const type = data[[1]].type;
                    const unit = data[[1]].unit;
                    const valune = data[[1]].value;    
                    document.querySelector('#A1').innerHTML = `name = ${name}`;
                    document.querySelector('#A2').innerHTML = `plan   = ${plant}`;
                    document.querySelector('#A3').innerHTML = `range = ${range}`;
                    document.querySelector('#A4').innerHTML = `type = ${type}`;
                    document.querySelector('#A5').innerHTML = `unit = ${unit}`;
                    document.querySelector('#A6').innerHTML = `value = ${valune}`;
                } 

                if( sensor_ID == "2" ) {
                    const name = data[[2]].name;   
                    const plant = data[[2]]["plant-site"];
                    const range = data[[2]].range;
                    const type = data[[2]].type;
                    const unit = data[[2]].unit;
                    const valune = data[[2]].value;    
                    document.querySelector('#A1').innerHTML = `name = ${name}`;
                    document.querySelector('#A2').innerHTML = `plan   = ${plant}`;
                    document.querySelector('#A3').innerHTML = `range = ${range}`;
                    document.querySelector('#A4').innerHTML = `type = ${type}`;
                    document.querySelector('#A5').innerHTML = `unit = ${unit}`;
                    document.querySelector('#A6').innerHTML = `valune = ${valune}`;
                }
            })
            .catch(error => {
                console.log('Error:',error );
            });                                    
               return false;
        }

        if( sensor_type == "level" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
            .then(response => response.json())
            .then(data => {
                const sensor_ID = document.querySelector('#ID').value;
                console.log(data);

                if( sensor_ID == "0" ) {
                    const name = data[[0]].name;   
                    const plant = data[[0]]["plant-site"];
                    const range = data[[0]].range;
                    const type = data[[0]].type;
                    const unit = data[[0]].unit;
                    const valune = data[[0]].value;    
                    document.querySelector('#A1').innerHTML = `name = ${name}`;
                    document.querySelector('#A2').innerHTML = `plan   = ${plant}`;
                    document.querySelector('#A3').innerHTML = `range = ${range}`;
                    document.querySelector('#A4').innerHTML = `type = ${type}`;
                    document.querySelector('#A5').innerHTML = `unit = ${unit}`;
                    document.querySelector('#A6').innerHTML = `valune = ${valune}`;
                }
                else {
                    document.querySelector('#A1').innerHTML = "NO SENSER DATA";
                    document.querySelector('#A2').innerHTML = "";
                    document.querySelector('#A3').innerHTML = "";
                    document.querySelector('#A4').innerHTML = "";
                    document.querySelector('#A5').innerHTML = "";
                    document.querySelector('#A6').innerHTML = "";
                }

                if( sensor_ID == "1" ) {
                    const name = data[[1]].name;   
                    const plant = data[[1]]["plant-site"];
                    const range = data[[1]].range;
                    const type = data[[1]].type;
                    const unit = data[[1]].unit;
                    const valune = data[[1]].value;    
                    document.querySelector('#A1').innerHTML = `name = ${name}`;
                    document.querySelector('#A2').innerHTML = `plan   = ${plant}`;
                    document.querySelector('#A3').innerHTML = `range = ${range}`;
                    document.querySelector('#A4').innerHTML = `type = ${type}`;
                    document.querySelector('#A5').innerHTML = `unit = ${unit}`;
                    document.querySelector('#A6').innerHTML = `value = ${valune}`;
                } 
                    
                

                if( sensor_ID == "2" ) {
                    const name = data[[2]].name;   
                    const plant = data[[2]]["plant-site"];
                    const range = data[[2]].range;
                    const type = data[[2]].type;
                    const unit = data[[2]].unit;
                    const valune = data[[2]].value;    
                    document.querySelector('#A1').innerHTML = `name = ${name}`;
                    document.querySelector('#A2').innerHTML = `plan   = ${plant}`;
                    document.querySelector('#A3').innerHTML = `range = ${range}`;
                    document.querySelector('#A4').innerHTML = `type = ${type}`;
                    document.querySelector('#A5').innerHTML = `unit = ${unit}`;
                    document.querySelector('#A6').innerHTML = `valune = ${valune}`;
                }
                
            })
            .catch(error => {
                console.log('Error:',error );
            });                                    
               return false;
        }

        if( sensor_type == "temperature" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
            .then(response => response.json())
            .then(data => {
                const sensor_ID = document.querySelector('#ID').value;
                console.log(data);

                if( sensor_ID == "0" ) {
                    const name = data[[0]].name;   
                    const plant = data[[0]]["plant-site"];
                    const range = data[[0]].range;
                    const type = data[[0]].type;
                    const unit = data[[0]].unit;
                    const valune = data[[0]].value;    
                    document.querySelector('#A1').innerHTML = `name = ${name}`;
                    document.querySelector('#A2').innerHTML = `plan   = ${plant}`;
                    document.querySelector('#A3').innerHTML = `range = ${range}`;
                    document.querySelector('#A4').innerHTML = `type = ${type}`;
                    document.querySelector('#A5').innerHTML = `unit = ${unit}`;
                    document.querySelector('#A6').innerHTML = `valune = ${valune}`;
                }
                else {
                    document.querySelector('#A1').innerHTML = "NO SENSER DATA";
                    document.querySelector('#A2').innerHTML = "";
                    document.querySelector('#A3').innerHTML = "";
                    document.querySelector('#A4').innerHTML = "";
                    document.querySelector('#A5').innerHTML = "";
                    document.querySelector('#A6').innerHTML = "";
                }    
                
                if( sensor_ID == "1" ) {
                    const name = data[[1]].name;   
                    const plant = data[[1]]["plant-site"];
                    const range = data[[1]].range;
                    const type = data[[1]].type;
                    const unit = data[[1]].unit;
                    const valune = data[[1]].value;    
                    document.querySelector('#A1').innerHTML = `name = ${name}`;
                    document.querySelector('#A2').innerHTML = `plan   = ${plant}`;
                    document.querySelector('#A3').innerHTML = `range = ${range}`;
                    document.querySelector('#A4').innerHTML = `type = ${type}`;
                    document.querySelector('#A5').innerHTML = `unit = ${unit}`;
                    document.querySelector('#A6').innerHTML = `value = ${valune}`;
                }
                    
                if( sensor_ID == "2" ) {
                    const name = data[[2]].name;   
                    const plant = data[[2]]["plant-site"];
                    const range = data[[2]].range;
                    const type = data[[2]].type;
                    const unit = data[[2]].unit;
                    const valune = data[[2]].value;    
                    document.querySelector('#A1').innerHTML = `name = ${name}`;
                    document.querySelector('#A2').innerHTML = `plan   = ${plant}`;
                    document.querySelector('#A3').innerHTML = `range = ${range}`;
                    document.querySelector('#A4').innerHTML = `type = ${type}`;
                    document.querySelector('#A5').innerHTML = `unit = ${unit}`;
                    document.querySelector('#A6').innerHTML = `valune = ${valune}`;
                }
               
            })
            .catch(error => {
                console.log('Error:',error );
            });                                    
               return false;
        }

        if( sensor_type == "pressure" ){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
            .then(response => response.json())
            .then(data => {
                const sensor_ID = document.querySelector('#ID').value;
                console.log(data);

                if( sensor_ID == "0" ) {
                    const name = data[[0]].name;   
                    const plant = data[[0]]["plant-site"];
                    const range = data[[0]].range;
                    const type = data[[0]].type;
                    const unit = data[[0]].unit;
                    const valune = data[[0]].value;    
                    document.querySelector('#A1').innerHTML = `name = ${name}`;
                    document.querySelector('#A2').innerHTML = `plan   = ${plant}`;
                    document.querySelector('#A3').innerHTML = `range = ${range}`;
                    document.querySelector('#A4').innerHTML = `type = ${type}`;
                    document.querySelector('#A5').innerHTML = `unit = ${unit}`;
                    document.querySelector('#A6').innerHTML = `valune = ${valune}`;
                } else {
                    document.querySelector('#A1').innerHTML = "NO SENSER DATA";
                    document.querySelector('#A2').innerHTML = "";
                    document.querySelector('#A3').innerHTML = "";
                    document.querySelector('#A4').innerHTML = "";
                    document.querySelector('#A5').innerHTML = "";
                    document.querySelector('#A6').innerHTML = "";
                }
                
                if( sensor_ID == "1" ) {
                    const name = data[[1]].name;   
                    const plant = data[[1]]["plant-site"];
                    const range = data[[1]].range;
                    const type = data[[1]].type;
                    const unit = data[[1]].unit;
                    const valune = data[[1]].value;    
                    document.querySelector('#A1').innerHTML = `name = ${name}`;
                    document.querySelector('#A2').innerHTML = `plan   = ${plant}`;
                    document.querySelector('#A3').innerHTML = `range = ${range}`;
                    document.querySelector('#A4').innerHTML = `type = ${type}`;
                    document.querySelector('#A5').innerHTML = `unit = ${unit}`;
                    document.querySelector('#A6').innerHTML = `value = ${valune}`;
                } 
                

                if( sensor_ID == "2" ) {
                    const name = data[[2]].name;   
                    const plant = data[[2]]["plant-site"];
                    const range = data[[2]].range;
                    const type = data[[2]].type;
                    const unit = data[[2]].unit;
                    const valune = data[[2]].value;    
                    document.querySelector('#A1').innerHTML = `name = ${name}`;
                    document.querySelector('#A2').innerHTML = `plan   = ${plant}`;
                    document.querySelector('#A3').innerHTML = `range = ${range}`;
                    document.querySelector('#A4').innerHTML = `type = ${type}`;
                    document.querySelector('#A5').innerHTML = `unit = ${unit}`;
                    document.querySelector('#A6').innerHTML = `valune = ${valune}`;
                }
               
            })
            .catch(error => {
                console.log('Error:',error );
            });                                    
               return false;
        }
    }
})
