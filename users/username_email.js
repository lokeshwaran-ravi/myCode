
const username_email = (req, res) => {

    let username_and_email = "";
    try {
        //initialize user json value
        const {results} = req.body;

            // iterate user  inputs
        results.forEach((element) => {
            username_and_email += element.login.username + " | " + element.email+"\n" ;
    });
            // send response as json
        res.status(200).send(username_and_email);

    } catch (err) {
        console.log(err);
        res.send(err);
    }

}

module.exports = username_email;