import React, { useState } from "react"
import { Document, Page } from "react-pdf"

import item from '../images/menu.png'

export default function Menu() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
  return (
    <div>
        <Document file={item} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
        </Document>
    </div>
  )
}
