import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion"; // Importa framer-motion
import './FileUpload.css'; // Importa il file CSS


const FileUpload = () => {
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Stato per gestire l'hover

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    handleFileUpload(file);
  };

  const handleFileUpload = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://helloworld-yvnd.onrender.com/ciao", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();  // Ottieni la risposta come Blob
        const link = document.createElement("a");
        const url = window.URL.createObjectURL(blob);
        link.href = url;
        link.download = "uploaded_file.pdf";  // Nome del file da scaricare
        link.click();
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error("Caricamento fallito");
      }
    } catch (error) {
      console.error("Errore nell'invio del file:", error);
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".jpg,.jpeg,.png,.pdf,.txt,.csv",
    onDrop,
    onDragEnter: () => setIsHovered(true),  // Imposta isHovered su true quando il file entra nell'area
    onDragLeave: () => setIsHovered(false),  // Imposta isHovered su false quando il file lascia l'area
  });

  return (
    <motion.div
      {...getRootProps()}
      className="file-upload"  // Aggiungi la classe CSS
      animate={{
        scale: loading ? 0.95 : 1,  // Effetto di riduzione durante il caricamento
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
    >
      <input {...getInputProps()} />
      <p>Trascina un file qui o clicca per selezionarlo</p>
      {loading && <p>Caricamento in corso...</p>}
    </motion.div>
  );
};

export default FileUpload;