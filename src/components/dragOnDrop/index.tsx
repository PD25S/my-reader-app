import { useCallback, useEffect, useMemo, useState } from 'react'

import { Accept, useDropzone } from 'react-dropzone'

import * as S from './styles'

type DragOnDropProps = {
  title?: string
  description?: string
  setFile: React.Dispatch<React.SetStateAction<File>>
}

export const DragOnDrop: React.FC<DragOnDropProps> = ({
  title = 'IMPORTAR',
  description = 'Arraste e solte aqui ou clique para escolher seu arquivo no formato .doc',
  setFile
}) => {
  const accept = useMemo<Accept>(() => ({ doc: ['.doc', '.docx'] }), [])
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept
  })

  const [fileName, setFileName] = useState('')

  const setDragOnDropFile = useCallback(() => {
    const [file] = acceptedFiles
    file && setFile(file)
    setFileName(file?.name || '')
  }, [acceptedFiles, setFile])

  useEffect(() => {
    setDragOnDropFile()
  }, [setDragOnDropFile])

  return (
    <S.Container>
      <S.Dropzone {...getRootProps()}>
        <input {...getInputProps()} />
        <S.Content>
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{fileName}</p>
        </S.Content>
      </S.Dropzone>
    </S.Container>
  )
}
