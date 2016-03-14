// ag-grid-enterprise v4.0.5
import { IClipboardService } from "ag-grid/main";
export declare class ClipboardService implements IClipboardService {
    private csvCreator;
    private loggerFactory;
    private selectionController;
    private rangeController;
    private rowModel;
    private floatingRowModel;
    private valueService;
    private focusedCellController;
    private rowRenderer;
    private columnController;
    private eventService;
    private cellNavigationService;
    private gridOptionsWrapper;
    private logger;
    private init();
    pasteFromClipboard(): void;
    private finishPasteFromClipboard(data);
    copyToClipboard(): void;
    copySelectedRangeToClipboard(): void;
    private processRangeCell(rowNode, column, value);
    private getRowNode(gridRow);
    copySelectedRowsToClipboard(): void;
    private copyDataToClipboard(data);
    private executeOnTempElement(callbackNow, callbackAfter?);
    private dataToArray(strData);
}