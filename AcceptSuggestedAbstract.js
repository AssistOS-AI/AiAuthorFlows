export class AcceptSuggestedAbstract {
    static description = "Adds an alternative abstract to the list";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            await document.addAlternativeAbstract({
                content: assistOS.UI.sanitize(context.abstract),
                id: assistOS.services.generateId()
            });
            this.return(context.abstract);
        } catch (e) {
            this.fail(e);
        }
    }
}
