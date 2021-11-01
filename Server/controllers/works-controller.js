const express = require("express");
const worksLogic = require("../business-logic-layer/works-logic");
const Work = require("../models/work");
const router = express.Router();

// GET http://localhost:3000/api/works
router.get("/", async (request, response) => {
  try {
    const works = await worksLogic.getAllWorksAsync();
    response.json(works);
  } catch (err) {
    console.log(err);
    response.status(500).send(err.message);
  }
});

// GET http://localhost:3000/api/works/7
router.get("/:_id", async (request, response) => {
  try {
    const _id = request.params._id;
    const work = await worksLogic.getOneWorkAsync(_id);

    if (!work) {
      response.sendStatus(404);
      return;
    }

    response.json(work);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// POST http://localhost:3000/api/works
router.post("/", async (request, response) => {
  const body = request.body;
  try {
    const work = new Work(body);
    const addedWork = await worksLogic.addWorkAsync(work);
    response.status(201).json(addedWork);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// PUT http://localhost:3000/api/works/7
router.put("/:_id", async (request, response) => {
  try {
    const _id = request.params._id;
    const work = new Work(request.body);
    work._id = _id;
    const updatedWork = await worksLogic.updateWorkAsync(work);

    if (updatedWork === null) {
      response.sendStatus(404);
      return;
    }

    response.json(updatedWork);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// PATCH http://localhost:3000/api/works/7
router.patch("/:_id", async (request, response) => {
  try {
    const _id = request.params._id;
    const work = new Work(request.body);
    work._id = _id;
    const updatedWork = await worksLogic.updateWorkAsync(work);

    if (updatedWork === null) {
      response.sendStatus(404);
      return;
    }

    response.json(updatedWork);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// DELETE http://localhost:3000/api/works/7
router.delete("/:_id", async (request, response) => {
  try {
    const _id = request.params._id;
    await worksLogic.deleteWorkAsync(_id);
    response.sendStatus(204);
  } catch (err) {
    response.status(500).send(err.message);
  }
});



// http://localhost:3000/api/works/cat/id
router.get("/cat/:_id", async (request, response) => {
  const id = request.params._id;
  try {
    const works = await worksLogic.getWorksFromCategoryAsync(id);
    response.json(works);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// http://localhost:3000/api/works/tag/id
router.get("/tag/:_id", async (request, response) => {

  const id = request.params._id;

  const tag = request.body.tag;
  console.log(tag);

  try {
    // @ts-ignore
    const works = await worksLogic.getWorksFromTagAsync(tag, id);
    response.json(works);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

// http://localhost:3000/api/works/join/works-with-category
router.get("/join/works-with-category", async (request, response) => {
  try {
    const works = await worksLogic.getWorksWithCategoryAsync();
    response.json(works);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

router.get("/join/categories-with-works", async (request, response) => {
  try {
    const categories = await worksLogic.getCategoriesWithWorksAsync();
    response.json(categories);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

module.exports = router;
