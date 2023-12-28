import { DragEvent, LegacyRef, useCallback, useEffect, useRef } from "react";
import { InputFileProps } from ".";

type useInputFileProps = Pick<InputFileProps, "onUpload">;

export const useInputFile = ({ onUpload }: useInputFileProps) => {
  const drop: LegacyRef<HTMLDivElement> = useRef(null);

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      const files = [...event.dataTransfer.files];

      if (files && files.length) {
        onUpload(files);
      }
    },
    [onUpload]
  );

  useEffect(() => {
    const dropElement = drop?.current;

    if (dropElement instanceof HTMLDivElement) {
      dropElement.addEventListener(
        "dragover",
        handleDragOver as unknown as (event: Event) => void
      );
      dropElement.addEventListener(
        "drop",
        handleDrop as unknown as (event: Event) => void
      );

      return () => {
        dropElement.removeEventListener(
          "dragover",
          handleDragOver as unknown as (event: Event) => void
        );
        dropElement.removeEventListener(
          "drop",
          handleDrop as unknown as (event: Event) => void
        );
      };
    }
  }, [handleDrop]);

  return {
    drop,
  };
};
