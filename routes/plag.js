const router = require("express").Router();
const axios = require("axios");

router.post("/check-plag", async (req, res) => {
  try {
    const textToCheck = req.body.text;
    const options = {
      method: "POST",
      url: "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "cdb7cd2431msh49964f8c54d1c63p178461jsn782994cfb890",
        "X-RapidAPI-Host":
          "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com",
      },
      data: {
        text: textToCheck,
        language: "en",
        includeCitations: false,
        scrapeSources: false,
      },
    };

    try {
      const response = await axios.request(options);
      res.status(200).send(response.data);
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while checking for plagiarism");
  }
});

module.exports = router;
