import pdfFile from "../assets/ARTIST_CV.pdf";

const PDFViewer = () => {

  return (
  <div>
    <object data={pdfFile} type="application/pdf" width="100%" height="600px">
      <p>PDF Viewer requires a PDF plugin.</p>
      <p>If the PDF does not load, you can download it above.</p>
    </object>
  </div>
  );
};

export default PDFViewer;
