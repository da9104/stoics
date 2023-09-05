const getStoic = async () => {
    try {
        const res = await axios.get("https://api.themotivate365.com/stoic-quote")
        return res.data.quote;
       }
    catch (e) {
        return "NO STOIC AVAILABLE! SORRY!"
    }
 }

 const getStoicAuthor = async () => {
    try {
        const res = await axios.get("https://api.themotivate365.com/stoic-quote")
        return res.data.author;
       }
    catch (e) {
        return "NO STOIC AVAILABLE! SORRY!"
    }
 }
 

const getQuotes = async () => {
    const stoicText = await getStoic();
    setTimeout(() => {
    document.querySelector('#stoics').innerHTML = stoicText 
    },3)
}

const getAuthor = async () => {
    const authorText = await getStoicAuthor();
    setTimeout(() => {
    document.querySelector('#author').innerHTML = authorText 
    },3)
}


getQuotes();
getAuthor();


// const getStoic = async () => {
//     fetch("https://stoicquotesapi.com/v1/api/quotes/random")
//     .then((response) => response.json())
//     .then((data) => {
//      return data.body;
//     }).catch((e) => e.message);
//     return getStoic;
// }

// console.log(getStoic())

// const RandomQuote = async () => {
//     const stoicText = await getStoic();
//     console.log(stoicText);
//     const newLI = document.createElement('LI');
//    // newLI.append(stoicText);
//     document.querySelector('#stoics').innerHTML = stoicText;

// }   



// RandomQuote();
