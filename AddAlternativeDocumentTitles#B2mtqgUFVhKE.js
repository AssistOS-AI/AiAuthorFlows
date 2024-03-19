export class AddAlternativeDocumentTitles {
    static id = "B2mtqgUFVhKE";
    static description = "Adds document titles to the alternatives list";

    constructor() {
    }

    async start(documentId, selectedTitles) {
        try {
            let document = system.space.getDocument(documentId);
            await document.addAlternativeTitles(selectedTitles);
            this.return(selectedTitles);
        } catch (e) {
            this.fail(e);
        }
    }
}