import jwt from "jsonwebtoken";

export const generateJWT = (_id: string) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { _id },
      process.env.SECRET as string,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      },
    );
  });
};
