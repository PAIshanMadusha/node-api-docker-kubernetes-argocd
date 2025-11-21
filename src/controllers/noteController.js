import Note from "../models/Note.js";
import User from "../models/User.js";

// Get all notes
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json({ message: "Notes fetched successfully!", notes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get note by ID
export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).json({ message: "Note fetched successfully!", note });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new note
export const createNote = async (req, res) => {
  try {
    const { title, subject, content, userId } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title field is required!" });
    }
    const existUserId = await User.findById(userId);
    if (!existUserId) {
      return res.status(400).json({ message: "User does not exist!" });
    }

    const newNote = new Note({ title, subject, content, userId });
    await newNote.save();

    res
      .status(201)
      .json({ message: "Note created successfully!", note: newNote });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update note
export const updateNote = async (req, res) => {
  try {
    const { title, subject, content, userId } = req.body;

    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note not found!" });
    }
    if (!title && !subject && !content && !userId) {
      return res
        .status(400)
        .json({ message: "At least one field is required to update!" });
    }
    if (userId) {
      const userExists = await User.findById(userId);
      if (!userExists) {
        return res.status(400).json({ message: "User does not exist!" });
      }
      note.userId = userId;
    }

    note.title = title || note.title;
    note.subject = subject || note.subject;
    note.content = content || note.content;

    await note.save();
    res.status(200).json({ message: "Note updated successfully!", note });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete note
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note does not exist!" });
    }
    await note.deleteOne();
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
