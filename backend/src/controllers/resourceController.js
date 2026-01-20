const Resource = require("../models/Resource");

const createResource = async (req, res) => {
  const resource = await Resource.create(req.body);
  res.json(resource);
};

const getResources = async (req, res) => {
  const resources = await Resource.find();
  res.json(resources);
};

module.exports = { createResource, getResources };
