import pdfFile from "../assets/ARTIST_CV.pdf";

const PDFViewer = () => {

  return (
  <div>
    {/* Using <iframe> */}
    {/* <iframe src={pdfFile} width="100%" height="500px" title="PDF Viewer" /> */}

    {/* Using <object> */}

    <object data={pdfFile} type="application/pdf" width="100%" height="500px">
      <p>PDF Viewer requires a PDF plugin.</p>
    </object>
  </div>
  );
};

export default PDFViewer;