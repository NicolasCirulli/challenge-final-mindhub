const Purchase = require("../models/purchase");
const nodemailer = require("nodemailer");

const sendVoiceover = async (mail, total, articles, user) => {
  console.log(total);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "useremailverifyMindHub@gmail.com",
      pass: "mindhub2021",
    },
    tls: { rejectUnauthorized: false },
  });
  let sender = "useremailverifyMindHub@gmail.com";
  //let contentHTML =

  let mailOptions = {
    from: sender,
    to: mail,
    subject: "Xtreme purchase details",
    html: `<h2>Thank you for your purchase</h2>
    <table>
    <tr>
    <th>Game</th>
    <th>Price</th>
    </tr>
    ${articles.map(
      (game) => `
    <tr>
    <td><h3>${game.name}</h3></td>
    <td><h3>${game.price}</h3></td>
    </tr> `
    )}</table>
        <h3>Total: ${total}</h3>
        <img src="https://i.imgur.com/TJfgLFHt.png" alt="Xtreme"/>
        `,
    //template: "index",
  };
  await transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("Mensaje enviado");
    }
  });
};
const purchaseControllers = {
  newPurchase: async (req, res) => {
    const { total, articles, userId, mail, user } = req.body;

    try {
      const newPurchase = new Purchase({
        total,
        articles,
        userId,
        mail,
        user,
      });
      const addedPurchase = await newPurchase.save();

      await sendVoiceover(mail, total, articles, user);

      res.status(200).json(addedPurchase);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
module.exports = purchaseControllers;
