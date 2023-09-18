import React, { useRef } from 'react';
import Report from './report';
import { PDFExport } from '@progress/kendo-react-pdf';

const MyCustomComponent = () => {
  const pdfExportComponent = useRef(null);

  const exportPDF = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  // Configure as opções de codificação para UTF-8
  const pdfOptions = {
    // paperSize: 'A4',
    margin: '1cm',
    fileName: 'seu_arquivo.pdf',
    creator: 'Seu Nome',
    producer: 'Sua Aplicação',
    encoding: 'utf-8', // Configura a codificação UTF-8
  };

  return (
    <div>
      <button onClick={exportPDF}>Gerar PDF</button>
      <div
        // style={{ position: 'relative', width: 0, height: 0, overflow: 'hidden' }}
      >
        <PDFExport ref={pdfExportComponent} {...pdfOptions}>
          <div style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
            <Report />
          </div>
        </PDFExport>
      </div>
    </div>
  );
};

export default MyCustomComponent;
