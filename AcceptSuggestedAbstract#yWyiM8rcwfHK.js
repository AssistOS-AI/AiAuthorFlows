export class AcceptSuggestedAbstract {
    static id = "yWyiM8rcwfHK";

    constructor() {
        this.name = "AcceptSuggestedAbstract";
        this.description = "Adds an alternative abstract to the list";
    }

    async start(documentId, abstract) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            await document.addAlternativeAbstract({
                content: sanitize(abstract),
                id: webSkel.getService("UtilsService").generateId()
            });
            this.return(abstract);
        } catch (e) {
            this.fail(e);
        }
    }
}