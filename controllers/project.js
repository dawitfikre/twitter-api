//Router -> Controller -> DAL -> Models
/**
 * Load Module Dependencies
 */
const Project = require("../dal/project");


// Default Controller
exports.notImplemented = async function(req, res, next) {
  res.status(404);

  res.json({
    message: "Not Implemented"
  })
};

/**
 * Create Project
 * 
 * 
 */
exports.createProject = async function(req, res, next) {
  const body = req.body; // New Project data

  let project = await Project.create(body);

  res.status(201);
  res.json(project);

};

/**
 * Get An Project by passed query/param
 * 
 * 
 */
exports.getProject = async function(req, res, next) {
  const projectId = req.params.id; 

  let project = await Project.getOne({ _id: projectId });

  res.json(project);
  
};

/**
 * Update An Project 
 * 
 * 
 */
exports.updateProject = async function(req, res, next) {
  const projectId = req.params.id;
  const body     = req.body; 

  let project = await Project.update({ _id: projectId }, body);

  res.json(project);
  
};



// Get Collection of Projects
exports.getCollection = async function(req, res, next){
  let data = await Project.getCollection({})

  res.json(data);
}