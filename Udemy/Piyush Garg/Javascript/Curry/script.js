function add(a,b,c){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add(2)(3)(5))
//________________________________________

function sendAutoEmail(to){
    return function(subject){
        return function(body){
            console.log(`Sending email to ${to} with subject ${subject}: ${body}`)
        };
    };
};

let step1 = sendAutoEmail("shashank@gmail.com");
let step2 = step1('New Order Confirmation')
step2('Hey shashank, Here is something for you')
