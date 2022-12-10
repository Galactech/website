import { Application } from "https://raw.githubusercontent.com/TKDKid1000/espresso/master/mod.ts";
import Webhook from "https://deno.land/x/discordwebhook@v1.5.1/mod.ts";
import { htmlEngine } from "./htmlEngine.ts";

const app = new Application({
  log: true,
  port: 9182,
});

const webhook = new Webhook(
  "https://discord.com/api/webhooks/1001384872939634698/6NomR5MdkHHB9ABkQdXBI8lWU-d1msSF2rvPtEqWr_K9vCHTbfwE4yERkrhWjQz0q2CR",
);

app.engine("html", htmlEngine);
app.set("views", "./views");
app.set("view engine", "html");

app.static("/public", "./public/");

app.get("/", async (c) => {
  await c.render("index.html", {});
});

app.get("/join", async (c) => {
  await c.render("join.html", {});
});

app.get("/contact", async (c) => {
  await c.render("contact.html", {});
});

app.get("/details", async (c) => {
  await c.render("details.html", {});
});

app.get("/maincontact", async (c) => {
  await c.render("maincontact.html", {});
});

app.get("/members", async (c) => {
  await c.render("memberscontact.html", {});
});

app.get("/mentors", async (c) => {
  await c.render("mentorscontact.html", {});
});

app.get("/sponsor", async (c) => {
  await c.render("sponsor.html", {});
});

app.post("/api/sponsor", async (c) => {
  const body = (await c.request.json());
  const {
    "first-name": firstname,
    "last-name": lastname,
    email,
    phone,
  } = body;

  await webhook.createMessage("<@&1001397109070766161>", {
    avatar_url:
      "https://github.com/JohaanMannanal/futureraiders/blob/main/galactechlogo.png?raw=true",
    username: "Robotics Notification",
    embeds: [{
      author: {
        name: "Robotics Notification",
        url:
          "https://github.com/JohaanMannanal/futureraiders/blob/main/galactechlogo.png?raw=true",
      },
      color: 11342935,
      description: `**Sponsor**
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}`,
    }],
  });
  c.json({
    success: true,
  });
});

app.post("/api/join", async (c) => {
  const body = (await c.request.json());
  const {
    "first-name": firstname,
    "last-name": lastname,
    email,
    phone,
  } = body;

  await webhook.createMessage("<@&1001397109070766161>", {
    avatar_url:
      "https://github.com/JohaanMannanal/futureraiders/blob/main/galactechlogo.png?raw=true",
    username: "Robotics Notification",
    embeds: [{
      author: {
        name: "Robotics Notification",
        url:
          "https://github.com/JohaanMannanal/futureraiders/blob/main/galactechlogo.png?raw=true",
      },
      color: 11342935,
      description: `**Member**
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}`,
    }],
  });
  c.json({
    success: true,
  });
});

app.post("/api/question", async (c) => {
  const body = (await c.request.json());
  const {
    "fullname": fullname,
    email,
    suggestion,
  } = body;

  await webhook.createMessage("<@&1001397109070766161>", {
    avatar_url:
      "https://github.com/JohaanMannanal/futureraiders/blob/main/galactechlogo.png?raw=true",
    username: "Robotics Notification",
    embeds: [{
      author: {
        name: "Robotics Notification",
        url:
          "https://github.com/JohaanMannanal/futureraiders/blob/main/galactechlogo.png?raw=true",
      },
      color: 11342935,
      description: `**Member**
        Name: ${fullname}
        Email: ${email}
        Suggestion/Question: ${suggestion}`,
    }],
  });
  c.json({
    success: true,
  });
});

/*app.post("/api/question", async (c) => {
  const body = (await c.request.json());

  const { question } = body;

  await webhook.createMessage("<@&1001397109070766161>", {
    avatar_url:
      "https://github.com/JohaanMannanal/futureraiders/blob/main/galactechlogo.png?raw=true",
    username: "Robotics Notification",
    embeds: [{
      author: {
        name: "Robotics Notification",
        url:
          "https://github.com/JohaanMannanal/futureraiders/blob/main/galactechlogo.png?raw=true",
      },
      color: 11342935,
      description: `**Question/Suggestion**
        ${question}`,
    }],
  });
  c.json({
    success: true,
  });
});*/

app.post("/api/email", async (c) => {
  const body = (await c.request.json());

  const { email } = body;

  await webhook.createMessage("<@&1001397109070766161>", {
    avatar_url:
      "https://github.com/JohaanMannanal/futureraiders/blob/main/galactechlogo.png?raw=true",
    username: "Robotics Notification",
    embeds: [{
      author: {
        name: "Robotics Notification",
        url:
          "https://github.com/JohaanMannanal/futureraiders/blob/main/galactechlogo.png?raw=true",
      },
      color: 11342935,
      description: `**Email**
        ${email}`,
    }],
  });
  c.json({
    success: true,
  });
});

app.start();
