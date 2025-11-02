//^This function generates the random message Number

function randomNumber () {
    let number = Math.floor(Math.random() * 17)
    return (number)
}


//^This is the function that will print the message
function message (func) {
    let returnMessage = ''
    switch (func) {
        case 0: 
           returnMessage = "There is a thinking stuff from which all things are made.";
           break
        case 1:
           returnMessage = "We are all made of the same stuff.";
           break
        case 2:
           returnMessage = "The stuff is seeking expression through you.";
           break
        case 3:
           returnMessage = "The stuff responds to thoughts.";
           break
        case 4:
           returnMessage = "The stuff obey the consistent mental image of what you want.";
           break
        case 5:
           returnMessage = "You are a thinking person within this stuff.";
           break
        case 6:
           returnMessage = "The stuff do not care about anything, but your thoughts.";
           break
        case 7:
           returnMessage = "The stuff is creative, and not competitive.";
           break
        case 8:
           returnMessage = "The stuff manifest your thoughts step by step, in a rate of natual growth.";
           break
        case 9:
           returnMessage = "The stuff orchestrate meetings, connections, ideas, oportunites and great decisions.";
           break
        case 10:
           returnMessage = "The stuff see all paths to bring your thoughts to realization.";
           break
        case 11:
           returnMessage = "The stuff responds to Gratitute before the realization.";
           break
        case 12:
           returnMessage = "It is a divine capacity to think what no one else is thinking.";
           break
        case 13:
           returnMessage = "No force, no proof & no observation. Just mantain calm and trust the process.";
           break
        case 14:
           returnMessage = "Impatience comes from misunderstanding the law of the thinking stuff.";
           break
        case 15:
           returnMessage = "The stuff is unlimited, operates in abundance, there is not need for competition."
           break
    }
    console.log(returnMessage)

};

message(randomNumber())