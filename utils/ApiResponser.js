import { NextResponse } from 'next/server'

const successReponse = (data, code) => NextResponse.status(code).json(data)

export const errorResponse = (message, code) =>
  NextResponse.json({ error: message }, { status: code })
export const showAll = (collection, code = 200) =>
  successReponse({ data: collection }, code)
export const showOne = (model, code = 200) => successReponse({ data: model }, code)
export const showMessage = (message, code = 200) =>
  successReponse({ data: message }, code)
