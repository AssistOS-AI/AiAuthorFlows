export class UpdateAlternativeDocumentTitle {
    static id = "4qdF2yemHRch";
    static description = "Updates the alternative title of a document";

    constructor() {
    }

    async start(documentId, alternativeTitleId, text) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);

            // Update the alternative title in the document
            await document.updateAlternativeTitle(alternativeTitleId, text);

            // Update the document after updating the alternative title
            await documentFactory.updateDocument(webSkel.currentUser.space.id, document);

            this.return(alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}