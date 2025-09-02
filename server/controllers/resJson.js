export default function resJson({ statusCode, success, body }) {
  return {
    statusCode: statusCode,
    success: success,
    body: body
  }
}