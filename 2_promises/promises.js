function prom(flag) {
  return new Promise(function (resolve, reject) {
    console.log("Fetching data");
    setTimeout(() => {
      if (flag) {
        resolve("Success");
      } else {
        reject("Failed");
      }
    }, 1000);
  });
}

const Resolved = (res) => {
  console.log(res);
  return res;
};

const error = (res) => {
  console.log(res);
  return res;
};

let flag = true;
prom(flag).then(Resolved).catch(error);
