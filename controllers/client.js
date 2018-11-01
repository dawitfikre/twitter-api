//Router -> Controller -> DAL -> Models
/**
 * Load Module Dependencies
 */
const Client = require("../dal/client");


// Default Controller
exports.notImplemented = async function(req, res, next) {
  res.status(404);

  res.json({
    message: "Not Implemented"
  })
};

/**
 * Create Client
 * 
 * 
 */
exports.createClient = async function(req, res, next) {
  const body = req.body; // New Client data

  let client = await Client.create(body);

  res.status(201);
  res.json(client);

};

/**
 * Get An Client by passed query/param
 * 
 * 
 */
exports.getClient = async function(req, res, next) {
  const clientId = req.params.id; 

  let client = await Client.getOne({ _id: clientId });

  res.json(client);
  
};

/**
 * Update An Client 
 * 
 * 
 */
exports.updateClient = async function(req, res, next) {
  const clientId = req.params.id;
  const body     = req.body; 

  let client = await Client.update({ _id: clientId }, body);

  res.json(client);
  
};



// Get Collection of Clients
exports.getCollection = async function(req, res, next){
  let data = await Client.getCollection({})

  res.json(data);
}