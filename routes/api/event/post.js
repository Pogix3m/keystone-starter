const keystone = require('keystone');
const Event = keystone.list('Event');

module.exports = (req, res) => {
  if (!req.body.name || !req.body.startTime || !req.body.endTime) {
    return res.send('incomplete data set');
  }

  const newEvent = new Event.model();
  Event.updateItem(newEvent, req.body, (error) => {
    if(error) res.locals.saveError = true;

    res.render('addEvent');
  });
};
