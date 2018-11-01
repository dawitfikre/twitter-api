//Router -> Controller -> DAL -> Models
/**
 * Load Module Dependencies
 */
const Profile = require("../dal/profile");


// Default Controller
exports.notImplemented = async function(req, res, next) {
  res.status(404);

  res.json({
    message: "Not Implemented"
  })
};

/**
 * Create Profile
 * 
 * 
 */
exports.createProfile = async function(req, res, next) {
  const body = req.body; // New Profile data

  let profile = await Profile.create(body);

  res.status(201);
  res.json(profile);

};

/**
 * Get An Profile by passed query/param
 * 
 * 
 */
exports.getProfile = async function(req, res, next) {
  const profileId = req.params.id; 

  let profile = await Profile.getOne({ _id: profileId });

  res.json(profile);
  
};

/**
 * Update An Profile 
 * 
 * 
 */
exports.updateProfile = async function(req, res, next) {
  const profileId = req.params.id;
  const body     = req.body; 

  let profile = await Profile.update({ _id: profileId }, body);

  res.json(profile);
  
};



// Get Collection of Profiles
exports.getCollection = async function(req, res, next){
  let data = await Profile.getCollection({})

  res.json(data);
}