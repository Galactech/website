import { TemplateEngine } from "https://raw.githubusercontent.com/TKDKid1000/espresso/master/mod.ts";

export const htmlEngine: TemplateEngine = (path, options) => {
  return new Promise((res, rej) => {
    (async () => {
      try {
        let file = await Deno.readTextFile(path);
        for (const [key, value] of Object.entries(options)) {
          file = file.replaceAll(`{${key}}`, value as string);
        }
        res(file);
      } catch (err) {
        rej(err);
      }
    })();
  });
};
