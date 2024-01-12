/** @module Exports.TabularData */ /** */
import * as ARJS from './ar-js-pagereport';
import { PageDocument } from './ar-js-pagereport';
declare type RenderOptions = NonNullable<Parameters<PageDocument['runRenderer']>[0]>;
/** Tabular Data export settings. */
declare type TabularDataSettings = {
    /** @hidden */
    renderOptions?: RenderOptions;
    /** CSV export settings */
    csvSettings?: CsvSettings;
    /** Export format */
    format?: 'csv';
};
/** Csv export settings. */
declare type CsvSettings = {
    /** Columns separator character */
    colSeparator?: string;
    /** Rows separator character */
    rowSeparator?: string;
    /** Quotation symbol */
    quotationSymbol?: string;
    /** Tables separator character */
    tableSeparator?: string;
    /** Export each table as separate file ('zip') or combine it to single CSV */
    outputType?: 'zip' | 'plain';
};
/** Export result */
declare type TabularDataExportResult = {
    /** Result content. */
    data: Blob | string;
    /** Triggers browser download of file with export result. */
    download: (filename?: string) => void;
};
/** The type of callback that gets called after each sheet is rendered. */
declare type OnProgressCallback = (pageNumber: number) => void;
/** The type of callback that gets called before sheet rendering, the render process will be canceled if the function returns _true_. */
declare type CheckCancelCallback = () => boolean;
/**
 * Exports a provided PageDocument to the Tabular Data format and returns it as Blob or string.
 * @param source The document to export.
 * @param settings Export settings.
 * @param onProgress The callback that gets called after each sheet is rendered.
 * @param checkCancel The callback that gets called before sheet rendering, the render process will be canceled if the function returns _true_.
 */
declare function exportDocument(source: ARJS.PageDocument | ARJS.VDomRenderer, settings?: TabularDataSettings, onProgress?: OnProgressCallback, checkCancel?: CheckCancelCallback): Promise<TabularDataExportResult>;
export { CheckCancelCallback, CsvSettings, OnProgressCallback, TabularDataExportResult, TabularDataSettings, exportDocument };
