let resultObj = {};
function flatTheObj(obj, parent) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      flatTheObj(obj[key], `${parent}_${key}`);
    } else {
      resultObj[`${parent}_${key}`] = obj[key]
    }
  }
  return resultObj;
}