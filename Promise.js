const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("A"), Math.floor(Math.random() * 1000));
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("B"), Math.floor(Math.random() * 1000));
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("C"), Math.floor(Math.random() * 1000));
  });