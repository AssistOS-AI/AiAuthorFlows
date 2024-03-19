export class DeleteAlternativeDocumentTitle {
    static id = "3iFbKMFaRAYC";
    static description = "Deletes an alternative title";

    constructor() {
    }

    async start(documentId, alternativeTitleId) {
        try {
            let document = system.space.getDocument(documentId);
            await document.deleteAlternativeTitle(alternativeTitleId);
            this.return(alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}