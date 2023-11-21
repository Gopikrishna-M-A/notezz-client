import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function SimplePDFViewer({ pdf }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    // You can add any additional setup logic here
  }, []);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  function goToNextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  function goToPreviousPage() {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }

  return (
    <div>
      <div className="page-cotrols row  AI-C">
        <Button onClick={goToPreviousPage} disabled={pageNumber <= 1} shape="circle" icon={<LeftOutlined />} />
        <div className="page-number">{pageNumber}/ {numPages}</div>
        <Button onClick={goToNextPage} disabled={pageNumber >= numPages} shape="circle" icon={<RightOutlined />} />
      </div>

      <div>
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            onLoadSuccess={() => console.log("Page loaded")}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            // width={500} 
            height={400}
          />
        </Document>
      </div>
    </div>
  );
}
