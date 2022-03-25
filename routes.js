const express = require('express');
const router = require('express').Router()

// generic route handler
const createProfile = (req, res, next) => {
  res.json({
    status: 'success',
    data: req.body
  });
};
const readProfile = (req, res, next) => {
  res.json({
    status: 'success',
    data: req.body
  });
};
const updateProfile = (req, res, next) => {
  res.json({
    status: 'success',
    data: req.body
  });
};
const deleteProfile = (req, res, next) => {
  res.json({
    status: 'success',
    data: req.body
  });
};
const allProfile = (req, res, next) => {
  res.json({
    status: 'success',
    data: req.body
  });
};
const search = (req, res, next) => {
  res.json({
    status: 'success',
    data: req.body
  });
};
 router.post('/', createProfile)
 router.get('/:id', readProfile)
 router.patch('/:id', updateProfile)
 router.post('/:id', deleteProfile)
router.get('/', allProfile)
router.get('/', search)

module.exports = router;
