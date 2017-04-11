export default class backgroundScript {
    private menuItems: Array<chrome.contextMenus.CreateProperties> = new Array<chrome.contextMenus.CreateProperties>();
    constructor() {
        this.CreateMenus();
        this.menuItems.forEach(element => {
            let id = chrome.contextMenus.create(element);
        });
    }
    
    private CreateMenus() {
        this.menuItems.push({
            'contexts': ["selection"],
            'title': "Add selection to journey",
            onclick: this.onclick
        });
    }
    private onclick(info: any, tab: any) {
        console.log("item " + info.menuItemId + " was clicked");
        console.log("info: " + JSON.stringify(info));
        console.log("tab: " + JSON.stringify(tab));
    }
}

