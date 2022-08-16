export default function to(promise) {
  return promise.then(data => {
    return [null, data];
  }).catch(err => {
    console.error("Error occurred : %s", err)
    return [err]
  });
}