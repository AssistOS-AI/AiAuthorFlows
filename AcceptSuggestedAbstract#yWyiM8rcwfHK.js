export class AcceptSuggestedAbstract {
    static id = "yWyiM8rcwfHK";
    static description = "Adds an alternative abstract to the list";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            await document.addAlternativeAbstract({
                content: system.UI.sanitize(context.abstract),
                id: system.services.generateId()
            });
            this.return(context.abstract);
        } catch (e) {
            this.fail(e);
        }
    }
}
