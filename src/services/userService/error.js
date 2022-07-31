export function duplicatedEmailError(){
  return {
    name: 'DuplicatedEmailError',
    message: 'There is already an user with given email',
  };
}

export function invalidCredentialsError(){
  return {
    name: 'InvalidCredentialsError',
    message: 'email or password are incorrect',
  };
}

export function notFoundError() {
  return {
    name: 'NotFoundError',
    message: 'This user does not exist'
  }
}