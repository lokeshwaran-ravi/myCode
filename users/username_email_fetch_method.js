const fetch =require("node-fetch");

const username_email_fetch_method = (req, res) => {

    let username_and_email = "";
    try {
        //fetch method used to display name | email 
        fetch('https://randomuser.me/api/?results=10')
    .then(res => res.json())
    .then(json => {
        const data_info=json.results;
        data_info.forEach((element) => {
            username_and_email += element.login.username + " | " + element.email + "\n";
    });
        res.status(200).send(username_and_email);
        
})

    } catch (err) {
        console.log(err);
        res.send(err);
    }

}

module.exports = username_email_fetch_method;