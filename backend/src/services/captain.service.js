import Captain from "../models/captain.model.js";

async function createCaptain({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) {
  try {
    if (
      [
        firstname,
        lastname,
        email,
        password,
        color,
        plate,
        capacity,
        vehicleType,
      ].some((field) => !field)
    ) {
      throw new Error("All fields required");
    }

    const captain = await Captain.create({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password,
      vehicle: {
        color,
        plate,
        capacity,
        vehicleType,
      },
    });
    return captain;
  } catch (error) {
    throw error;
  }
}

export { createCaptain };
