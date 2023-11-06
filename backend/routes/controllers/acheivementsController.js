const fs = require('fs')

const getAchivementsData = async (req, res) => {
    fs.readFile('config/AchievementsData.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    });
};

module.exports = { getAchivementsData }