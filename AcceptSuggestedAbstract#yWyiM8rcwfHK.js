export class AcceptSuggestedAbstract {
    static id = "yWyiM8rcwfHK";
    static description = "Adds an alternative abstract to the list";

    constructor() {
    }

    async start(documentId, abstract) {
        try {
            let document = system.space.getDocument(documentId);
            await document.addAlternativeAbstract({
                content: system.UI.sanitize(abstract),
                id: system.services.generateId()
            });
            this.return(abstract);
        } catch (e) {
            this.fail(e);
        }
    }
}
