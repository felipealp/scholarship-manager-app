import PropTypes from 'prop-types';
import { useRef } from 'react';

// react-pdf
import { PDFExport } from '@progress/kendo-react-pdf';

// material-ui
import { Button } from '@mui/material';
import { IconClipboardList } from '@tabler/icons';

// project imports
import Template from './style/template';

const Report = ({ data }) => {
  const pdfExportComponent = useRef(null);
  const pdfOptions = {
    margin: '1cm',
    fileName: 'frequência.pdf',
    creator: 'UFERSA',
    producer: 'UFERSA',
    encoding: 'utf-8'
  };

  const exportPDF = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: '#1e88e5', color: 'white', height: '50px' }}
        onClick={exportPDF}
        startIcon={<IconClipboardList />}
      >
        Gerar PDF
      </Button>

      <div style={{ position: 'relative', width: 0, height: 0, overflow: 'hidden' }}>
        <PDFExport ref={pdfExportComponent} {...pdfOptions}>
          <div style={{ fontFamily: 'Roboto, Arial, sans-serif' }}>
            <Template data={data} />
          </div>
        </PDFExport>
      </div>
    </div>
  );
};

Report.propTypes = {
  data: PropTypes.object
};

export default Report;
