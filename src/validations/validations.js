function isValidString(string) {
  if (typeof string !== "string" || string.length === 0) {
    return false;
  }
  return true;
}

function isValidUrl(data) {
  let urlRegex =
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)$/;
  return urlRegex.test(data);
}

module.exports = { isValidString, isValidUrl };
