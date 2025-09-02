import { useContext, useEffect, useState } from 'react'
import { cl } from '@/utils/logger'
import contentJson from '@/json/responce.json'
import { SetState } from '@/Contexto/SetState'

export function useDinamicPage ({ name }) {
  const { icon, content, sidebar } = contentJson[name]

  return { icon, content, sidebar }
}
