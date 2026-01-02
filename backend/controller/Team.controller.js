import Team from "../model/Team.model.js";

/**
 * ADD TEAM MEMBER
 */
export const addTeam = async (req, res) => {
  try {
    const { name, email, status, customerAssign } = req.body;

    if (!name || !email || !status) {
      return res.status(400).json({
        message: "Name, Email and Status are required",
      });
    }

    const teamMember = new Team({
      name,
      email,
      status,
      customerAssign,
    });

    await teamMember.save();

    res.status(201).json({
      message: "Team member added successfully",
      team: teamMember,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error adding team member",
    });
  }
};

/**
 * READ ALL TEAM MEMBERS
 */
export const readTeam = async (req, res) => {
  try {
    const teams = await Team.find();

    res.status(200).json({
      message: "All team members fetched successfully",
      teams,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error fetching team members",
    });
  }
};

/**
 * READ SINGLE TEAM MEMBER
 */
export const readOneTeam = async (req, res) => {
  try {
    const { id } = req.params;

    const team = await Team.findById(id);

    if (!team) {
      return res.status(404).json({
        message: "No team member found with this ID",
      });
    }

    res.status(200).json({
      message: "Team member fetched successfully",
      team,
    });
  } catch (error) {
    console.error(error);

    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid Team Member ID format",
      });
    }

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

/**
 * UPDATE TEAM MEMBER
 */
export const updateTeam = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedTeam = await Team.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    if (!updatedTeam) {
      return res.status(404).json({
        message: "No team member found for the provided ID",
      });
    }

    res.status(200).json({
      message: "Team member updated successfully",
      team: updatedTeam,
    });
  } catch (error) {
    console.error(error);

    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid Team Member ID format",
      });
    }

    res.status(500).json({
      message: "Error updating team member",
    });
  }
};

/**
 * DELETE TEAM MEMBER
 */
export const deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTeam = await Team.findByIdAndDelete(id);

    if (!deletedTeam) {
      return res.status(404).json({
        message: "No team member found for the provided ID",
      });
    }

    res.status(200).json({
      message: "Team member deleted successfully",
    });
  } catch (error) {
    console.error(error);

    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid Team Member ID format",
      });
    }

    res.status(500).json({
      message: "Error deleting team member",
    });
  }
};
