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












