export class AddAlternativeDocumentTitles {
    static id = "B2mtqgUFVhKE";

    constructor() {
        this.name = "AddAlternativeDocumentTitles";
        this.description = "Adds document titles to the alternatives list";
    }

    async start(documentId, selectedTitles) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            await document.addAlternativeTitles(selectedTitles);
            this.return(selectedTitles);
        } catch (e) {
            this.fail(e);
        }
    }
}