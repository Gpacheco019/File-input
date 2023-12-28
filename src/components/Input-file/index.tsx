"use client";

import { SpinnerLoading } from "../Spinner-loading";
import * as S from "./styles";
import { useInputFile } from "./useInputFile";

export type InputFileProps = {
  text: string;
  isLoading?: boolean;
  nameFile?: string;
  onUpload: (file: File[]) => void;
};

export const InputFile = ({
  text,
  nameFile,
  isLoading = false,
  onUpload,
}: InputFileProps) => {
  const { drop } = useInputFile({ onUpload });

  return (
    <S.Wrapper ref={drop}>
      {isLoading && <SpinnerLoading />}
      {nameFile}
      <S.TextInput>{text}</S.TextInput>
    </S.Wrapper>
  );
};
