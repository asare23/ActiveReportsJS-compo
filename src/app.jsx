import React, { Fragment, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Designer, Viewer as ReportViewer } from "@grapecity/activereports-react";
import { PageReport } from "@grapecity/activereports/core";
import { exportDocument as pdfExport } from "@grapecity/activereports/pdfexport";

const CPLReport = {
  Name: "Report",
  Body: {
    Width: "8.5in",
    Height: "11in",
  },
};

function App() {
  const designer = useRef();
  const viewer = useRef();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(null);
  const [reportPromise, setReportPromise] = useState(null);
  const counter = useRef(0);
  const [reportStorage, setReportStorage] = useState(new Map());
  const [designerVisible, setDesignerVisible] = useState(true);

  function onLoadBlank(fpl) {
    designer.current.setReport({
      definition: fpl ? FPLReport : CPLReport,
    });
  }

  function onSelectReport(reportId) {
    setSelectedReport(reportId);
    setModalOpen(false);
  }

  function onCreateReport() {
    const newReport = {
      Name: "Report",
      Body: {
        Width: "8.5in",
        Height: "11in",
      },
    };
    const reportId = `NewReport${++counter.current}`;
    return Promise.resolve({
      definition: newReport,
      id: reportId,
      displayName: reportId,
    });
  }

  function onCloseDialog() {
    setModalOpen(false);
    if (reportPromise) {
      reportPromise.resolve(null);
      setReportPromise(null);
    }
  }

  function onOpenReport() {
    setModalOpen(true);
    return new Promise((resolve, reject) => {
      setReportPromise({ resolve, reject });
    });
  }

  function onSaveReport(info) {
    const reportId = info.id || `NewReport${++counter.current}`;
    setReportStorage(new Map(reportStorage.set(reportId, info.definition)));
    return Promise.resolve({ displayName: reportId });
  }

  function onSaveAsReport(info) {
    const reportId = `NewReport${++counter.current}`;
    setReportStorage(new Map(reportStorage.set(reportId, info.definition)));
    return Promise.resolve({ id: reportId, displayName: reportId });
  }

  useEffect(() => {
    if (selectedReport && reportPromise) {
      reportPromise.resolve({
        definition: reportStorage.get(selectedReport),
        id: selectedReport,
        displayName: selectedReport,
      });
      setReportPromise(null);
      setSelectedReport(null);
    }
  }, [selectedReport, reportPromise]);

  function onDesignerOpen() {
    setDesignerVisible(true);
  }

  async function onPdfPreview() {
    const reportInfo = await designer.current.getReport();
    const report = new PageReport();
    await report.load(reportInfo.definition);
    const doc = await report.run();
    const result = await pdfExport(doc);
    result.download("exportedreport");
  }

  function onReportPreview(report) {
    setDesignerVisible(false);
    viewer.current.open(report.definition);
    return Promise.resolve();
  }

  return (
    <Fragment>
      <div id="designer-toolbar" className="container-fluid">
        <div className="row mt-3 mb-3">
          {designerVisible && (
            <button
              type="button"
              className="btn btn-outline-primary btn-sm col-sm-2 ml-1"
              onClick={() => onPdfPreview()}
            >
              PDF Preview
            </button>
          )}
          {!designerVisible && (
            <button
              type="button"
              className="btn btn-outline-primary btn-sm col-sm-2 ml-1"
              onClick={() => onDesignerOpen()}
            >
              Open Designer
            </button>
          )}
          <button
            type="button"
            className="btn btn-outline-primary btn-sm col-sm-2 ml-1"
            onClick={() => onLoadBlank(false)}
          >
            Load Blank Report
          </button>
        </div>
      </div>

      <div
        id="designer-host"
        style={{ display: designerVisible ? "block" : "none" }}
      >
        <Designer
          ref={designer}
          report={{ id: "reports/company-template.rdlx-json" }}
          onCreate={onCreateReport}
          onSave={onSaveReport}
          onSaveAs={onSaveAsReport}
          onOpen={onOpenReport}
          onRender={onReportPreview}
        />
      </div>

      {!designerVisible && (
        <div id="viewer-host">
          <ReportViewer ref={viewer} />
        </div>
      )}

      {modalOpen && (
        <div>
          <div id="dlgOpen" tabIndex="-1" aria-hidden="true">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Open Report
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => onCloseDialog()}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <strong>Select Report:</strong>
                <div className="list-group">
                  {[...reportStorage.keys()].map((reportId) => (
                    <button
                      type="button"
                      className="list-group-item list-group-item-action"
                      onClick={() => onSelectReport(reportId)}
                    >
                      {reportId}
                    </button>
                  ))}
                
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => onCloseDialog()}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));
