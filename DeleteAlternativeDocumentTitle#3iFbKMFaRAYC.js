export class DeleteAlternativeDocumentTitle {
    static id = "3iFbKMFaRAYC";

    constructor() {
        this.name = "DeleteAlternativeDocumentTitle";
        this.description = "Deletes an alternative title";
    }

    async start(documentId, alternativeTitleId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            await document.deleteAlternativeTitle(alternativeTitleId);
            this.return(alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}