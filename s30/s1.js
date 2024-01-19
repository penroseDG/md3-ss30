let mang =[ a,b,c,d,c,b,a];
    function doi(arr) {
        let doi = 0 ;
        for (let i = 0; i < Math.floor(arr.length/2); i++) {
            if(arr[i]=== arr[arr.length-i-1]){
                doi++;
             }
            }
            if ( doi === Math.floor(arr.length/2)){
                console.log(" True");
            }
            else{
                console.log(" False");
            }
        }
        doi(arr); 
        
