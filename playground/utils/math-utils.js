export const mathOperation = (n1, n2, F, resultCallback) => {
  setTimeout(() => {
    const result = F(n1, n2);
    resultCallback(result);
  }, 2000);
};
