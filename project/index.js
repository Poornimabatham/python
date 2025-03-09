document.addEventListener("DOMContentLoaded",function(){
    let searchButton = document.getElementById("Search-button")

    let usernameINput = document.getElementById("user-input")

    let statscontainer = document.querySelector("stats-container")

    let easyProgressCircle = document.querySelector("easy-progress")
    let mediumprogress = document.querySelector("medium-progress")

    let hardprogress = document.querySelector("hard-progress")

    let easylevel = document.getElementById("easy-level")

    let mediumlevel = document.getElementById("medium-level")

    let hardlevel = document.getElementById("hard-level")

    let statscard = document.querySelector("stats-card")



    async function fetchUserDetails(username) {

        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            //statsContainer.classList.add("hidden");

            // const response = await fetch(url);
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
            const targetUrl = 'https://leetcode.com/graphql/';
            
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
            })
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };

            const response = await fetch(proxyUrl+targetUrl, requestOptions);
            if(!response.ok) {
                throw new Error("Unable to fetch the User details");
            }
            const parsedData = await response.json();
            console.log("Logging data: ", parsedData) ;
            displaydata(parsedData)

        }
        catch(error) {
            statscontainer.innerHTML = `<p>${error.message}</p>`
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }



     function updateProgress (solved,total,label,circle){
        

     }
    function displaydata(data){
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedTotalEasyQues,totalEasyQues,easylevel,easyProgressCircle)
        updateProgress(solvedTotalMediumQues,totalMediumQues,mediumlevel,mediumprogress)

        updateProgress(solvedTotalHardQues,totalHardQues,hardlevel,hardprogress)

    }
function validateUsername(userName){
    if(userName.trim() === ""){
        alert("username should not be  empty")
        return false
    }

    const regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const  mathcing = regex.test(userName)
    console.log(mathcing,"matching")
    if(!mathcing){
        alert("Invalid username")
    }
    return mathcing
}

    searchButton.addEventListener('click',function(){
        const userName = usernameINput.value
        console.log(userName)
        if(validateUsername(userName)){

            fetchUserDetails(userName)
        }
    })

})