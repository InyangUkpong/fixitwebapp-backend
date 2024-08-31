import Artisan from "../models/Artisan.js";

export async function createArtisan(req, res) {
  try {
    const initialArtisan = await Artisan.findOne({ user: req.user.id });

    if (initialArtisan)
      return res
        .status(400)
        .json({ message: "Handy man profile already created" });

    const artisan = await Artisan.create({ ...req.body, user: req.user.id });

    res.status(200).json({ handy_man: artisan });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

export async function getAllArtisans(req, res) {
  try {
    const artisans = await Artisan.find().populate({
      path: "user",
      select: "name profile_image location",
    });

    res.status(200).json({ artisans });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}
