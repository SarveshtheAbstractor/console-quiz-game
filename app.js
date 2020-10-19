(function(){
    function Question(question,answers,correct){
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}
var q1 = new Question('Is javascript most popular language in the world?',['Yes','No'],0);
var q2 = new Question('How is coding really?',['Hard','Fun','tedious','boring'],1);
var q3 = new Question('India\'s capital?',['New-Delhi','Delhi','Bombay','Chandigarh'],1);
var q4 = new Question('BTS Main dancer ?',['Jin','Jungkook','Jimin','Suga','J-Hope'],4);
var q5 = new Question('Aamir khan\'s best movie?',['Taalash','Pk','3-Idiots'],2);
var q6 = new Question('In One Direction who is most handsome?',['Louis','Harry','Niall','Liam','Zayn'],4);
var q7 = new Question('Which WebFrame Work is Best?',['Laravel','MEAN','MERN'],1);
var q8 = new Question('Which is best Game of All time?',['GTA-5','The-Witcher','Red-dead Redemption','God Of War'],0);
var q9 = new Question('Best Series of all time?',['Stranger Things','Friends','How I met Your mother','Sacred Games','Mirzapur'],3);
var q10 = new Question('Best Hollywood Film?',['Mad-Max','The Revenant','Forest Gumpp','The Pursuit of Happiness'],2);

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
                
var questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

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
        var answer = prompt('Enter correct answer and if you want to exit, Please type exit in this prompt');    
        if(answer !== 'exit'){
            questions[n].checkanswer(parseInt(answer),keepScore);
            nextQuestion();
        }     
} 
nextQuestion();
})();












