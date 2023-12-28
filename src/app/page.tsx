"use client";
import { InputFile } from "@/components/Input-file";

export default function Home() {
  const handleOnUpload = (file: File[]) => {
    console.log("File", file);
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="flex pt-4">
        <InputFile text="Arraste os arquivos aqui" onUpload={handleOnUpload} />
      </div>
    </main>
  );
}
