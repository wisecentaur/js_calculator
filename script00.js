function sum2(){
    const xx = document.querySelector('#xx');
    const x = document.querySelector('#x');
    const x0 = document.querySelector('#x0');
    
    const result = +xx.value + +x.value + +x0.value;
    console.log('result: ', result);
    }