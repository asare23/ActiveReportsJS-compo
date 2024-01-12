/** @module Exports.Xlsx */ /** */
import * as ARJS from './ar-js-pagereport';
import { PageDocument } from './ar-js-pagereport';
declare type RenderOptions = NonNullable<Parameters<PageDocument['runRenderer']>[0]>;
/** Page size */
declare type PageSize = 'Letter' | 'Legal' | 'Executive' | 'A4' | 'A5' | 'B5' | 'Envelope_10' | 'Envelope_DL' | 'Envelope_C5' | 'Envelope_B5' | 'Envelope_Monarch' | 'Double_Japan_Postcard_Rotated' | 'K16_197x273_mm';
/** Xlsx info */
declare type XlsxSettingsInfo = {
    /** Creator */
    creator?: string;
};
/** Page settings. */
declare type PageSettings = {
    /** Page orientation. */
    orientation?: 'portrait' | 'landscape';
    /** Page size. */
    size?: PageSize;
};
/** Xlsx export settings. */
declare type XlsxSettings = {
    /** Document metadata. */
    info?: XlsxSettingsInfo;
    /** The sheet name prefix, e.g. "Sheet_". */
    sheetName?: string;
    /** Page settings. */
    pageSettings?: PageSettings;
    /** Encrypts a document with a password. */
    password?: string;
    /** @hidden */
    renderOptions?: RenderOptions;
};
/** Export result */
declare type XlsxExportResult = {
    /** Result content. */
    data: Blob;
    /** Triggers browser download of file with export result. */
    download: (filename?: string) => void;
};
/** The type of callback that gets called after each sheet is rendered. */
declare type OnProgressCallback = (pageNumber: number) => void;
/** The type of callback that gets called before sheet rendering, the render process will be canceled if the function returns _true_. */
declare type CheckCancelCallback = () => boolean;
/**
 * Exports a provided PageDocument to the XLSX format and returns it as Blob.
 * @param source The document to export.
 * @param settings Export settings.
 * @param onProgress The callback that gets called after each sheet is rendered.
 * @param checkCancel The callback that gets called before sheet rendering, the render process will be canceled if the function returns _true_.
 */
declare function exportDocument(source: ARJS.PageDocument | ARJS.VDomRenderer, settings?: XlsxSettings, onProgress?: OnProgressCallback, checkCancel?: CheckCancelCallback): Promise<XlsxExportResult>;
export { CheckCancelCallback, OnProgressCallback, PageSettings, PageSize, XlsxExportResult, XlsxSettings, XlsxSettingsInfo, exportDocument };
