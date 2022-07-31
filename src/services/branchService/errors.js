export function unauthorizedError() {
  return {
    name: 'UnauthorizedError',
    message: "You must be working in the branch's company to access that information",
  };
}