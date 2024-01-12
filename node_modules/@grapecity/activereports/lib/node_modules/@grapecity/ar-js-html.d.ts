/** @module Exports.HTML */ /** */
import * as ARJS from './ar-js-pagereport';
import { PageDocument } from './ar-js-pagereport';
declare type RenderOptions = NonNullable<Parameters<PageDocument['runRenderer']>[0]>;
/** Defines HTML export settings. */
declare type HtmlSettings = {
    /** Export each page as separate HTML file. */
    multiPage?: boolean;
    /** Embed images into HTML. */
    embedImages?: 'none' | 'embed' | 'external';
    /** Export as ZIP archive with HTML files. */
    outputType?: 'html' | 'zip' | 'auto';
    /** Set to _true_ to add script for a printing page when it is loaded. */
    autoPrint?: boolean;
    /** A title for an HTML page. */
    title?: string;
    /** @hidden Galley mode and interactivity settings */
    renderOptions?: RenderOptions;
};
/** Export result. */
declare type HtmlExportResult = {
    /** Result content. The content is 'string' if 'multiPage = true', otherwise content is zip blob. */
    data: Blob | string;
    /** Triggers browser download of file with export result. */
    download: (filename?: string) => void;
};
/** Defines a type of callback that gets called after each page is rendered. */
declare type OnProgressCallback = (pageNumber: number) => void;
/** Defines a type of callback that gets called to check if cancellation was requested. */
declare type CheckCancelCallback = () => boolean;
/**
 * Exports a provided PageDocument to the HTML format and returns it as string or Blob.
 * @param source PageDocument to export.
 * @param settings Export settings.
 * @param onProgress The callback that gets called after each sheet is rendered.
 * @param checkCancel The callback that gets called before sheet rendering, the rendering process will be canceled if the function returns _true_.
 */
declare function exportDocument(source: ARJS.PageDocument | ARJS.VDomRenderer, settings?: HtmlSettings, onProgress?: OnProgressCallback, checkCancel?: CheckCancelCallback): Promise<HtmlExportResult>;
export { CheckCancelCallback, HtmlExportResult, HtmlSettings, OnProgressCallback, exportDocument };
