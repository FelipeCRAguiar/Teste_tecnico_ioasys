export function branchNotFoundError() {
  return {
    name: 'NotFoundError',
    message: 'This branch does not exist'
  }
}

export function productNotFoundError() {
  return {
    name: 'NotFoundError',
    message: 'This product does not exist'
  }
}