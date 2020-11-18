export class PageConfig {
    public opened: boolean;
    public over: string;
    public expandHeight: string;
    public collapseHeight: string;
    public displayMode: string;
    

    constructor(opened: boolean, over: string, expandHeight: string
        , collapseHeight: string, displayMode: string) {
        
        this.collapseHeight = collapseHeight;
        this.displayMode = displayMode;
        this.expandHeight = expandHeight;
        this.opened = opened;
        this.over = over;
    }
}