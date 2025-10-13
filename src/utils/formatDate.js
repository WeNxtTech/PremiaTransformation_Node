const dayjs = require("dayjs");
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

function formatDateMiddleware(req, res, next) {
  const dateFormats = ["DD-MM-YYYY", "DD/MM/YYYY"];
  const dateTimeFormats = [
    "DD-MM-YYYY HH:mm",
    "DD/MM/YYYY HH:mm",
    "DD-MM-YYYY HH:mm:ss",
    "DD/MM/YYYY HH:mm:ss",
  ];
  const timeFormats = ["HH:mm", "HH:mm:ss"];

  function normalize(value) {
    if (typeof value !== "string") return value;

    let parsed;

    parsed = dayjs(value, dateFormats, true);
    if (parsed.isValid()) return parsed.format("YYYY-MM-DD");

    parsed = dayjs(value, dateTimeFormats, true);
    if (parsed.isValid()) return parsed.format("YYYY-MM-DD HH:mm:ss");

    parsed = dayjs(value, timeFormats, true);
    if (parsed.isValid()) return parsed.format("HH:mm:ss");

    return value;
  }

  for (const key in req.body) {
    if (req.body[key]) req.body[key] = normalize(req.body[key]);
  }

  for (const key in req.query) {
    if (req.query[key]) req.query[key] = normalize(req.query[key]);
  }

  next();
}

module.exports = formatDateMiddleware;
