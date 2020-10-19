//Function constructor

//var john = {
//    name: 'John',
//    yearOfBirth: 1990,
//    job: 'Teacher'
//};
//
//var Person = function(name,yearOfBirth, job){
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//}
//Person.prototype.calculateAge  = function(){
//    console.log(2020 - this.yearOfBirth);
//};
//
//Person.prototype.lastName = 'Hiwase';
//
//var john = new Person('John',1990,'Teacher');
//var jane = new Person('Jane',1969,'Designer');
//var mark = new Person('Mark',1948,'Developer');
//john.calculateAge();
//jane.calculateAge();
//mark.calculateAge();
//console.log(john.lastName);
//console.log(jane.lastName);
//console.log(mark.lastName);



// Object.create


//var personProto = {
//    calculateAge: function(){
//        console.log(2020-this.yearOfBirth);
//    }
//};
//
//var sarvesh = Object.create(personProto);
//sarvesh.name = 'Sarvesh';
//sarvesh.yearOfBirth = 2000;
//sarvesh.job = 'Student';
//sarvesh.calculateAge();
//
//
//
//var sasuke = Object.create(personProto,{
//    name: {value : 'Sasuke'},
//    yearOfBirth: {value : 2002},
//    job: {value : 'assassin'},
//    
//});
//
//console.log(sasuke);




// Primitives vs Objects

//Primitives hold values in themselves and not point to another memory location, on other hand variables in objects holds reference to memory location

//var a = 45;
//var b = a;
//
//a = 23;
//console.log(a,b);
//
//
//var obj1 = {
//    name: 'John',
//    age: 20,
//}
//var obj2 = obj1;
//
//obj1.name = 'sarvesh';
//
//console.log(obj1.name);
//console.log(obj2.name);


//We are declaring variables one as primitive and other as obj
//var age = 45;
//var obja = {
//    name : 'Jonas',
//    city: 'Yavtmal',
//}
//creating function to change values of primitives and object values
//function change(a,b){
//    a = 27;
//    b.city = 'Busan';
//}

//change(age,obja);

//After executing we see that primitives don't change and object passed to functions are just reference to original object so when we change values in any function for that respective object it gets reflected to original object.
//console.log(age,obja.city);





//First Class functions - functions passed as arguments into another functions

// Best practice and more clean and modular code 
// Have one generic function and write another function on task for which you need it.
//var birthYears = [1963,1969,1996,2000];
//
//function arrCalc(arr,func){
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++){
//        arrRes.push(func(arr[i]));
//    }
//    return arrRes;
//}
//function ageCalc(elem){
//    return 2020 - elem;  
//}
//
//function fullage(elem){
//    return elem >= 18;  
//}
//function heartrate(elem){
//    return Math.round(206.9 - (0.67 * elem));
//}
//var ages = arrCalc(birthYears,ageCalc);
//
//console.log(arrCalc(ages,fullage));
//console.log(arrCalc(ages,heartrate));







// Functions returning functions
// Best practice and more clean and modular code 
// Have one generic function and write return functions on task for which you need it.

//USing closures
//function interviewQuestion(job){
//    return function(name){
//        if(job == "asssassin"){
//        console.log(name + "You are sasuke" + job);
//        } else if(job == "protector"){
//        console.log(name + "You are naruto" + job);
//        } else {
//            console.log(name+ "You are beast" + job);
//        }
//    }
//    
//}


//var assassinQuestion = interviewQuestion('assassin');
//assassinQuestion('Sarvesh');
//var protectorQuestion = interviewQuestion('protector');
//protectorQuestion('Sarvesh');
//var elseQuestion = interviewQuestion('Beast');
//elseQuestion('Might Guy');
//
//interviewQuestion('BeastYT')('Sorenanoni');





//IIFE - Immediately invoked function expressions
//Creating private variables for data privacy
// Inside paranthesis there's always a expression and cannot be statement
//So we trick the JS parser to think it is an expression

//(function(){
//    var randomScore = Math.floor(Math.random()*9);
//    if( randomScore >= 5) {
//        console.log('YOu won the game');
//    } else {
//         console.log('YOu lost the game');
//    }
//})();


//Closures
// An inner function always has access to variable and parameter of outer functions.
//function retirementAge(age){
//    var a = ' You been lost but you founded a new road';
//    return function (yearofbirth){
//        console.log(age-(2020-yearofbirth) + a);
//    }
//}
//
//var retindia = retirementAge(58);
//retindia(2000);
//retirementAge(65)(2000);


//function interviewQuestion(job){
//    return function(name){
//        if(job == "asssassin"){
//        console.log(name + " You are sasuke " + job);
//        } else if(job == "protector"){
//        console.log(name + " You are naruto " + job);
//        } else {
//            console.log(name+ " You are beast " + job);
//        }
//    }
//}

//var protectorquestion = interviewQuestion('protector');
//protectorquestion('sarvesh');
//var assassinquestion = interviewQuestion('assassin');
//assassinquestion('mayur');
//var elsequestion = interviewQuestion('BEAst');
//elsequestion('swadesh');



//Bind , call , Apply


//Call is method borrorwing and asks for this keyword
//var john = {
//    name: 'John',
//    age: 25,
//    job: 'Teacher',
//    presentation: function(style,timeofday){
//        if(style === 'formal'){
//            console.log("Good "+ timeofday + " ladies and gentleman " + "I'm " + this.name + " I'm " + this.age + " years old and I'm a " + this.job);
//        } else if (style === 'informal'){
//             console.log(" Hello boys and girls " + "I'm " + this.name + " I'm " + this.age + " years old and I'm a " + this.job + " Have a nice " + timeofday);
//        } else {
//            
//            console.log(" HI bitches " + " I'm "  + this.name + " I'm "+ this.age + " years old and I'm a " + this.job + " Have a bad " + timeofday );
//      
//           
//        }
//        
//        
//        
//    }
//}

//john.presentation('formal','morning');
//john.presentation('formal','afternoon');
//john.presentation('formal','evening');
//
//john.presentation('informal','morning');
//john.presentation('informal','afternoon');
//john.presentation('informal','evening');
//
//var sasuke = {
//    name: 'sasuke',
//    age: 18,
//    job: 'assassin'
//}
//sasuke.presentation = john.presentation;
//sasuke.presentation('informal','morning');
//john.presentation.call(sasuke,'formal','morning');
//call uses this keyword for assigning the function to another object which borrowed the method from this object


//Apply 
//it uses same as call just a difference is that second parameter must be an array.
//john.presentation.apply(sasuke,['formal','morning']);


//Bind 

//Bind creates a copy of function and sets predefined paramters if you want it for that purpose

//var sasukebitch = john.presentation.bind(sasuke,'bitch');
//sasukebitch('morning');
//
//var birthYears = [1963,1969,1996,2000];
//
//function arrCalc(arr,func){
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++){
//        arrRes.push(func(arr[i]));
//    }
//    return arrRes;
//}
//function ageCalc(elem){
//    return 2020 - elem;  
//}
//
//function fullage(limit,elem){
//    return elem >= limit;  
//}
//var ages = arrCalc(birthYears,ageCalc);
//var fulljapanage = arrCalc(ages,fullage.bind(this,20));
//console.log(ages);
//console.log(fulljapanage);


//Toughest coding challenge for now


//var rounscore = 0;
//var Question = function(question,answers,correctanswer){
//    this.question = question;
//    this.answers =  answers;
//    this.correctanswer = correctanswer;
//}
//
//Question.prototype.displayQuestionandAnswers = function(){
//    answers_array = this.answers;
//    console.log(this.question + "\n");
//    for (var i = 0 ; i < answers_array.length ; i++){
//        console.log( i + ": " +  answers_array[i]);
//    }
//}
//Question.prototype.correctanswerq = function (ans){
//        if(this.answers[ans] === this.correctanswer){
//            console.log('Answer is correct');
//            rounscore += 1;
//            console.log('Your current score is ' + rounscore);
//        } else {
//            console.log('Answer is wrong');
//            console.log('Your current score is ' + rounscore);
//        }
//    }
//var jspopularquestion = new Question('Is javascript most popular language in the world?',['Yes','No'],'Yes');
//var codingquestion = new Question('How is coding really?',['Hard','fun','tedious','boring'],'fun');
//var teacherquestion = new Question('The course teacher\'s name?',['John','Rob','Jonas'],'Jonas');
//
//while(true){
//    var questions = [jspopularquestion,codingquestion,teacherquestion];
//var randomselect = Math.floor(Math.random() * questions.length);
//questions[randomselect].displayQuestionandAnswers();
//var uservalue = prompt('Enter the correct answer');
//    if(uservalue === "exit"){
//        console.log('Your final score is ' + rounscore);
//        rounscore = 0;
//        break;
//    }
//questions[randomselect].correctanswerq(uservalue);
//}



//Sir's Method

(function(){
    function Question(question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}
var q1 = new Question('Is javascript most popular language in the world?',['Yes','No'],0);
var q2 = new Question('How is coding really?',['Hard','fun','tedious','boring'],1);
var q3 = new Question('The course teacher\'s name?',['John','Rob','Jonas'],2);

Question.prototype.displayquestion = function(){
    console.log(this.question);
    for(var i = 0 ; i < this.answers.length ; i++){
        console.log( i + ": " + this.answers[i]);
    }
}

Question.prototype.displayScore = function(scores){
        console.log('Your score is ' + scores );
        console.log('----------------------------------');
}

Question.prototype.checkanswer = function(ans,callback){
    var sco;
    if( this.correct === ans ){
        console.log('Correct answer!');
        sco = callback(true);
        this.displayScore(sco);
    } else {
         console.log('Wrong answer!');
        sco = callback(false);
        this.displayScore(sco);
    }
    
}
                
var questions = [q1,q2,q3];

function score(){
    var sc = 0;
    return function(correct){
        if(correct){
            sc++;
        }
        return sc;
    }
}

var keepScore = score();
    
function nextQuestion(){
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayquestion();
        var answer = prompt('Enter correct answer');    
        if(answer !== 'exit'){
            questions[n].checkanswer(parseInt(answer),keepScore);
            nextQuestion();
        }     
} 
nextQuestion();
})();












