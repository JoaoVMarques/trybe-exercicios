const validateDescription = (req, res, next) => {
  const { description } = req.body;
  const requiredProperties = ['createdAt', 'rating', 'difficulty'];

  if(!description) {
    res.status(400).json({ message: "O campo description é obrigatório" });
  }
  const notInDescription = requiredProperties.filter((property) => !(property in description))
  console.log(notInDescription);
  if (notInDescription.length > 0) {
    let errorMessage = `O campo ${notInDescription[0]} é obrigatório`;
    if(notInDescription.length > 1) {
      errorMessage = `Os campos ${notInDescription} são obrigatórios`
    }

    res.status(400).json({ message: errorMessage });
  }

  next();
}

module.exports = validateDescription;