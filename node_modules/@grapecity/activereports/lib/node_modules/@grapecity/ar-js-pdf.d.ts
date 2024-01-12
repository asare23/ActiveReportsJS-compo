/** @module Exports.PDF */ /** */
import * as ARJS from './ar-js-pagereport';
import { PageDocument } from './ar-js-pagereport';
declare type RenderOptions = NonNullable<Parameters<PageDocument['runRenderer']>[0]>;
/** Defines descriptor of font. */
declare type PdfFontDescriptor = {
    /** Font name. */
    name: string;
    /** The source of the font. */
    source: string | string[];
    /** The font weight. */
    weight?: string;
    /** The font style. */
    style?: string;
    /** The font postscript name. */
    postscriptName?: string;
    /** True - to use the font as default font. */
    useAsDefault?: boolean;
};
/** The version of PDF specification. */
declare type PdfVersion = '1.3' | '1.4' | '1.5' | '1.6' | '1.7' | '1.7ext3' | 'PDF/A-2b' | 'PDF/A-3b';
/** Defines PDF permissions. */
declare type Permissions = {
    /** Allows printing. */
    printing?: 'lowResolution' | 'highResolution' | 'none';
    /** Allows modifying. */
    modifying?: boolean;
    /** Allows copying. */
    copying?: boolean;
    /** Allows annotating. */
    annotating?: boolean;
    /** Enables content accessibility. */
    contentAccessibility?: boolean;
    /** Allows document assembly. */
    documentAssembly?: boolean;
};
/** Defines document security settings. */
declare type DocumentSecurity = {
    /** Encrypts a document with a password. */
    userPassword?: string;
    /** Protects a document from printing or modifying, see [[Permissions]]. */
    ownerPassword?: string;
    /** The document permissions. */
    permissions?: Permissions;
};
/** Defines PDF metadata. */
declare type PdfSettingsInfo = {
    /** Title */
    title?: string;
    /** Author */
    author?: string;
    /** keywords */
    keywords?: string;
    /** Subject */
    subject?: string;
};
/** Defines PDF export settings. */
declare type PdfSettings = {
    /** Document metadata. */
    info?: PdfSettingsInfo;
    /** Document security settings. */
    security?: DocumentSecurity;
    /** PDF Version. */
    pdfVersion?: PdfVersion;
    /** Prints a document on opening the file. */
    autoPrint?: boolean;
    /** Available *.ttf font files. */
    fonts?: PdfFontDescriptor[];
    /** @hidden */
    renderOptions?: RenderOptions;
};
/** Export result. */
declare type PdfExportResult = {
    /** Result content. */
    data: Blob;
    /** Triggers browser download of file with export result. */
    download: (filename?: string) => void;
};
/** Defines a type of callback that gets called after each page is rendered. */
declare type OnProgressCallback = (pageNumber: number) => void;
/** Defines a type of callback that gets called to check if cancellation was requested. */
declare type CheckCancelCallback = () => boolean;
/**
 * @deprecated Use FontStore.registerFonts instead.
 *
 * Registers .*ttf fonts to be used in PDF.
 * @param fontDescriptor
 */
declare function registerPdfFont(fontDescriptor: PdfFontDescriptor): void;
/**
 * Exports a provided PageDocument to the PDF format and returns it as Data URI or Blob.
 * @param source PageDocument to export.
 * @param settings Export settings.
 * @param onProgress The callback that gets called after each sheet is rendered.
 * @param checkCancel The callback that gets called before sheet rendering, the rendering process will be canceled if the function returns _true_.
 */
declare function exportDocument(source: ARJS.PageDocument | ARJS.VDomRenderer, settings?: PdfSettings, onProgress?: OnProgressCallback, checkCancel?: CheckCancelCallback): Promise<PdfExportResult>;
export { CheckCancelCallback, DocumentSecurity, OnProgressCallback, PdfExportResult, PdfFontDescriptor, PdfSettings, PdfSettingsInfo, PdfVersion, Permissions, exportDocument, registerPdfFont };
