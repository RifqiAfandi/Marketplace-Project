const { Cities } = require("../models");

async function getAllCities(req, res) {
  try {
    const city = await Cities.findAll();

    if (city.length == 0) {
      return res.status(404).json({
        status: "Failed",
        message: "No data cities found",
        isSuccess: false,
        data: null,
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get cites data",
      isSuccess: true,
      data: {
        city,
      },
    });
  } catch (error) {}
}

module.exports = {
  getAllCities,
};
