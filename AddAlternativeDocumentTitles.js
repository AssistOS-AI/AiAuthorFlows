export class AddAlternativeDocumentTitles {
    static description = "Adds document titles to the alternatives list";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            await document.addAlternativeTitles(context.selectedTitles);
            this.return(context.selectedTitles);
        } catch (e) {
            this.fail(e);
        }
    }
}