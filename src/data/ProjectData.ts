export default class ProjectData {
    id: string;
    name: string;
    htmlDescription: string;
    iconUrl: string; // used as thumnail
    styleClass: string | undefined;
    accentColor: string; // color of title bar 

    constructor(id: string, name: string, iconUrl: string, html: string, accentColor = "#000000", styleClass = "" ){
        this.id = id;
        this.name = name;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.styleClass = styleClass;
        this.accentColor = accentColor;
    }
}
