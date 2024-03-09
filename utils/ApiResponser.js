const successReponse = (data, code) => Response.status(code).json(data)

export const errorResponse = (message, code) =>
  Response.status(code).json({ error: message, code })
export const showAll = (collection, code = 200) =>
  successReponse({ data: collection }, code)
export const showOne = (model, code = 200) => successReponse({ data: model }, code)
export const showMessage = (message, code = 200) =>
  successReponse({ data: message }, code)
