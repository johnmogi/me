const express = require("express");
const worksLogic = require("../business-logic-layer/works-logic");
const Work = require("../models/work");
const router = express.Router();

// GET http://localhost:3000/api/works
router.get("/", async (request, response) => {
    try {
        const works = await worksLogic.getAllWorksAsync();
        response.json(works);
    }
    catch (err) {
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
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// POST http://localhost:3000/api/works
router.post("/", async (request, response) => {
    try {
        console.log('1');
        const work = new Work(request.body);
        const addedWork = await worksLogic.addWorkAsync(work);
        response.status(201).json(addedWork);
    }
    catch (err) {
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
    }
    catch (err) {
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
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// DELETE http://localhost:3000/api/works/7
router.delete("/:_id", async (request, response) => {
    try {
        const _id = request.params._id;
        await worksLogic.deleteWorkAsync(_id);
        response.sendStatus(204);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

// --------------------------------------------------
// Queries: 
router.get("/by-price-range/:minPrice/:maxPrice",async (request, response) => {
    try {
        const minPrice = +request.params.minPrice;
        const maxPrice = +request.params.maxPrice;
        const works = await worksLogic.getWorksByPriceRangeAsync(minPrice, maxPrice);
        response.json(works);
    }
    catch(err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;
