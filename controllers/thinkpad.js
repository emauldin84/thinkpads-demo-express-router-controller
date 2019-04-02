// Create (POST)
function create(req, res) {
    res.json({ message: "You created" });
}

// Retrieve (GET)
function retrieveAll(req, res) {
    res.json({ message: "You retrieved all" })
}

// Update (PUT)
function update(req, res) {
    res.json({ message: "You updated" })
}

// Delete (DELETE)
function deleteOne(req, res) {
    res.json({ message: "You deleted" })
}

module.exports = {
    create,
    retrieveAll,
    update,
    deleteOne,
}