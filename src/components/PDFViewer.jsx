import pdfFile from "../assets/ARTIST_CV.pdf";

const PDFViewer = () => {

  return (
  <div>
    <object className="pdf-viewer" data={pdfFile} type="application/pdf" width="100%">
      <p>PDF Viewer requires a PDF plugin.</p>
      <p>If the PDF does not load, you can download it above.</p>
    </object>
  </div>
  );
};

export default PDFViewer;
