const router = require("express").Router();
var ProWritingAidApi = require("pro_writing_aid_api");

router.post("/check-grammar", async (req, res) => {
  const textToCheck = req.body.text;
  console.log(textToCheck);
  try {
    var api = new ProWritingAidApi.TextApi();
    api.apiClient.basePath = "https://api.prowritingaid.com";
    api.apiClient.defaultHeaders = {
      licenseCode: "173737F4-1AC4-48BF-8BFD-EDDCC35D6D61",
    };
    var request = new ProWritingAidApi.TextAnalysisRequest(
      textToCheck,
      ["grammar"],
      "General",
      "En"
    );
    api.post(request).then(
      function (data) {
        console.log("API called successfully. Returned data: ", data);
        res.status(200).send(data);
      },
      function (error) {
        console.log(error);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while checking for plagiarism");
  }
});

module.exports = router;
