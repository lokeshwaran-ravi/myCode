const gender = (req, res) => {
  const { results } = req.body;
  try {
    //initialize count value
    let male_counter = 0;
    let female_counter = 0;

    // iterate user  inputs
    results.forEach((element, index) => {
      switch (element.gender) {
        case "male":
          male_counter++;
          break;
        case "female":
          female_counter++;
          break;
      }
    });
    // send response as json
    res
      .status(200)
      .send({ "Total Male": male_counter, "Total Female": female_counter });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports = gender;
