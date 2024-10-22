const age_between = (req, res) => {
  try {
    //initialize user_counter value
    let user_counter = 0;
    const { results } = req.body;

    // iterate user  inputs
    results.forEach((element) => {
      if (element.dob.age > 50 && element.dob.age < 70) {
        user_counter++;
      }
    });

    // send response as json
    res.status(200).send({ "Users between 50 and 70": user_counter });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports = age_between;
