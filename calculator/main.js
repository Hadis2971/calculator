var screen = document.getElementById("inputX");
var buttons = document.getElementsByClassName("btn_style");
screen.disabled = "true";

var calculator = {
    first_num: "",
    second_num: "",
    operator: "",
    result: "",
    
    clear_all: function(){
        this.first_num = "";
        this.second_num = "";
        this.operator = "";
        this.result = "";
        screen.value = "";
    },
    
    erase: function(){
        if(this.second_num){
            this.second_num = this.second_num.slice(0,this.second_num.length-1);
            screen.value = this.second_num;
        }else{
            this.first_num = this.first_num.slice(0,this.first_num.length-1);
            screen.value = this.first_num;
        }
    },
    
    decimal: function(){
        if(this.second_num){
            this.second_num += "."
            screen.value = this.second_num;
        }else{
            this.first_num += "."
            screen.value = this.first_num;
        }
    },
    
    get_values: function(x){
        this.result = "";
        if(/\d/.test(x) && !this.operator){
            if((this.first_num.length === 3 && !/\./.test(this.first_num)) 
               || (this.first_num.length === 7 && !/\./.test(this.first_num))
               || (this.first_num.length === 11 && !/\./.test(this.first_num)) || (this.first_num.length === 15 && !/\./.test(this.first_num))){this.first_num += ",";}
            this.first_num += x;
            screen.value = this.first_num;
        }else if(/\d/.test(x) && this.operator){
            if((this.second_num.length === 3 && !/\./.test(this.second_num)) 
                || (this.second_num.length === 7 && !/\./.test(this.second_num))
                || (this.second_num.length === 11 && !/\./.test(this.second_num)) || (this.second_num.length === 15 && !/\./.test(this.second_num))){this.second_num += ",";}
            this.second_num += x;
            screen.value = this.second_num;
        }
    },
    
    
    successive_calucalutaion: function(num1,num2,op){
        var i;
        if(/\,/.test(num1) || /\./.test(num1)){
                var arr = num1.split("");
                for(i = 0; i < num1.length; i++){
                    if(arr[i] === ","){
                        arr.splice(i,1);
                    }
                }
                num1 = arr.join("");
            }
            
            if(/\,/.test(num2) || /\./.test(num2)){
                var arr2 = num2.split("");
                for(i = 0; i < num2.length; i++){
                    if(arr2[i] === ","){
                        arr2.splice(i,1);
                    }
                }
                num2 = arr2.join("");
            }
        
            num1 = num1 - 0;
            num2 = num2 - 0;
        
        switch(op){
                    case("+"): this.result = num1 + num2;break;
                    case("-"): this.result = num1 - num2;break;
                    case("*"): this.result = num1 * num2;break;
                    case("/"): this.result = num1 / num2;break;
            }
            
            this.first_num = this.result;
            screen.value = this.first_num;
            this.second_num = "";
            //this.operator = "";
            this.result = "";
            
    },
    
    get_operator: function(op){
        if(this.first_num && this.operator && this.second_num){
           //screen.value = this.second_num;
           this.successive_calucalutaion(this.first_num,this.second_num,
                                         this.operator);
            this.operator = op;
            
        }else if(this.result){
            this.operator = op;
            screen.value = this.operator;
            this.first_num = this.result;
            
            
        }else{
            this.operator = op;
            if(this.second_num){
                screen.value = this.second_num;
            }else{
                screen.value = this.operator;
            }
            
        }
                
        
    },
    
    get_result: function(){
        if(this.first_num && this.second_num && this.operator){
            if(/\,/.test(this.first_num) || /\./.test(this.first_num)){
                var i = 0;
                var arr = this.first_num.split("");
                for(i = 0; i < this.first_num.length; i++){
                    if(arr[i] === ","){
                        arr.splice(i,1);
                    }
                }
                this.first_num = arr.join("");
            }
            
            if(/\,/.test(this.second_num) || /\./.test(this.second_num)){
                var i = 0;
                var arr2 = this.second_num.split("");
                for(i = 0; i < this.second_num.length; i++){
                    if(arr2[i] === ","){
                        arr2.splice(i,1);
                    }
                }
                this.second_num = arr2.join("");
            }
            
            
            var num1 = this.first_num - 0,
                num2 = this.second_num - 0;
            
            switch(this.operator){
                    case("+"): this.result = num1 + num2;break;
                    case("-"): this.result = num1 - num2;break;
                    case("*"): this.result = num1 * num2;break;
                    case("/"): this.result = num1 / num2;break;
            }
            
            screen.value = this.result;
            this.first_num = "";
            this.second_num = "";
            this.operator = "";
        }
    }
    
}


buttons[0].addEventListener("click",function(){
    calculator.clear_all();
});

buttons[1].addEventListener("click",function(){
    calculator.clear_all();
});

buttons[2].addEventListener("click",function(){
    calculator.erase();
});

buttons[3].addEventListener("click",function(){
    calculator.get_operator("/")
});

buttons[4].addEventListener("click", function(){
    calculator.get_values(7);
});

buttons[5].addEventListener("click", function(){
    calculator.get_values(8);
});

buttons[6].addEventListener("click", function(){
    calculator.get_values(9);
});

buttons[7].addEventListener("click",function(){
    calculator.get_operator("*")
});

buttons[8].addEventListener("click", function(){
    calculator.get_values(4);
});

buttons[9].addEventListener("click", function(){
    calculator.get_values(5);
});

buttons[10].addEventListener("click", function(){
    calculator.get_values(6);
});

buttons[11].addEventListener("click",function(){
    calculator.get_operator("-")
});

buttons[12].addEventListener("click", function(){
    calculator.get_values(1);
});

buttons[13].addEventListener("click", function(){
    calculator.get_values(2);
});

buttons[14].addEventListener("click", function(){
    calculator.get_values(3);
});

buttons[15].addEventListener("click",function(){
    calculator.get_operator("+")
});

buttons[17].addEventListener("click", function(){
    calculator.get_values(0);
});

buttons[18].addEventListener("click",function(){
    calculator.decimal();
});

buttons[19].addEventListener("click",function(){
    calculator.get_result();
});
