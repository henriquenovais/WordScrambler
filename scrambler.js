//This is the input sentence:
let sentence = "Te desejo uma fé enorme, em qualquer coisa, não importa o quê, como aquela fé que a gente teve um dia, me deseja também uma coisa bem bonita, uma coisa qualquer maravilhosa, que me faça acreditar em tudo de novo, que nos faça acreditar em tudo outra vez.";
//Comma counter:
let commas = 0;
//Dot counter:
let dots = 0;
//Loop for comma and dott detection in order to leave the words ready for comparison:
for(i = 0;i < sentence.length;i++){
 
    if(sentence[i] === ","){

        commas = commas + 1;
        console.log(commas);

    } else if(sentence[i] === "."){

       dots = dots + 1;
       console.log(dots);

    }
}

//Removing commas according to the variable comma's value:
for(i = 0;i < commas;i++){

    sentence = sentence.replace(",","");
    
}

//Removing dotts according to the variable dott's value:
for(i = 0;i < dots;i++){

    sentence = sentence.replace(".","");

}
//Now the sentence should be parsed accordingly(no commas and dots),
//Splitting the parsed sentence using a space(" ") as the splitting factor.
/*
For example:
    "I love cats" -> "I","love","cats"
*/ 
let sentence_words = sentence.split(" ");


console.log(sentence_words);

