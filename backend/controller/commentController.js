const Comment = require("../model/commentModel");

//add comments
const addComments = async (req, res) => {
  const { content, user } = req.body;

  if (!content) {
    res.status(400).json({ message: "please write the comment" });
  }

  try {
    const comment = new Comment({
      user: req.user,
      content: req.body.content,
    });
    const savedComment = await comment.save();
    res.status(201).json(savedComment);
  
} catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { addComments };
