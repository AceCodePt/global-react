async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("waited");
      resolve("waited" + ms);
    }, ms);
  });
}

async function main() {
  console.log("start");
  sleep(0);

  console.log("promise 2");
}

main();
