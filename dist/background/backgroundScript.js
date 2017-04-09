"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var backgroundScript = (function () {
    function backgroundScript() {
        this.menuItems = new Array();
        this.CreateMenus();
        console.log(this.menuItems);
        this.menuItems.forEach(function (element) {
            chrome.contextMenus.create(element);
        });
    }
    backgroundScript.prototype.CreateMenus = function () {
        this.menuItems.push({
            'contexts': ["selection"],
            'title': "Add selection to journey"
        });
    };
    return backgroundScript;
}());
exports.default = backgroundScript;
//# sourceMappingURL=backgroundScript.js.map