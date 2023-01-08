const setOfWords = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
     "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
]

const msg = document.getElementById('msg');
const typedWords = document.getElementById(
    "mywords"
);
const btn = document.getElementById('btn');
let startime , endtime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setOfWords.length);
    // console.log(randomNumber);
    msg.innerText = setOfWords[randomNumber];
    let date = new Date();
    startime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () =>{
    let date = new Date();
    endtime = date.getTime();
    let totalTime = ((endtime - startime)/1000);
    // console.log(totalTime);

    let totalString = typedWords.value;
    let wordCount = wordCounter(totalString);
    let speed = Math.round((wordCount/totalTime)*60);

    let finalMsg = `You typed at ${speed} words per minute`;
    finalMsg += compareWords(msg.innerText,totalString);
    msg.innerText = finalMsg;
}

const wordCounter = (string) =>{
    let response = string.split(" ").length;
    // console.log(response);
    return response;
}

const compareWords = (string1,string2) =>{
    let words1 = string1.split(" ");
    let words2 = string2.split(" ");
    let count = 0;

    words1.forEach(function(item,index){
        if(item == words2[index])
        {
            count++;
        }
    });

    let errorwords = (words1.length - count);
    return(` ${count} correct out of ${words1.length} words and the total number of error are ${errorwords} `);
}

btn.addEventListener('click',function(){
   if(this.innerText == 'Start')
   {
    typedWords.disabled = false;
    // console.log(this)
    playGame();
   }
   else if(this.innerText == "Done")
   {
    btn.innerText = "Start";
    endPlay();
   }
})
