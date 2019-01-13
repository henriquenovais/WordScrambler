// const sent = "Te desejo uma fé enorme, em qualquer coisa, não importa o quê, como aquela fé que a gente teve um dia, me deseja também uma coisa bem bonita, uma coisa qualquer maravilhosa, que me faça acreditar em tudo de novo, que nos faça acreditar em tudo outra vez.";
let sent = "teste ,,,,teste,,,, teste";
let commas = 0;
let dots = 0;

for(i = 0;i < sent.length;i++){
 
    if(sent[i] === ","){

        commas = commas + 1;
        console.log(commas);
    } else if(sent[i] === "."){

       dots = dots + 1;
       console.log(dots);

    }
}

for(i = 0;i < commas;i++){

    sent = sent.replace(",","");
    
}

for(i = 0;i < dots;i++){

    sent = sent.replace(".","");

}


let sent_words = sent.split(" ");
console.log(sent_words);

