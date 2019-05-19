
const getClue = async () => {
    // choosenWord;
    console.log(choosenWord._word);
    //let ttt = choosenWord._word.split(' ').join('+')

    let movie = choosenWord._word.toLowerCase().replace(/ /g, "+")
    console.log(movie);

    let clue = document.getElementById('clue-ppl');
    const urlToFetch = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";
    //console.log(urlToFetch)
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            //console.log(response);
            //code to excute with json response 
            const jsonResponse = await response.json();
            // var results = jsonResponse.Plot;
            resultsClue = jsonResponse.Actors;
            console.log(jsonResponse)
            console.log(resultsClue)

            clue.innerHTML = resultsClue
            sendRequest();
            return resultsClue
        } else {
            throw new Error("Request Failed!");
        } //end of else 
    } // end of try
    catch (error) {
        console.log(error.message)
    } //end of catch


}; //end of getClue 



//this is the onclick function is tie to the rest button 
const reset = async () => {
    choosenWord;
    //stop clock
    clearInterval(theClock);
    //clear the divs 
    clearDivs();
    const domUpdateDiv = document.querySelector("#dom-update");
    domUpdateDiv.innerHTML = ""
    //invoke play game again 
    play();
}; //end of reset 
