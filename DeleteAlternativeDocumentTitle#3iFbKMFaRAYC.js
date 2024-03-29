export class DeleteAlternativeDocumentTitle {
    static id = "3iFbKMFaRAYC";
    static description = "Deletes an alternative title";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            await document.deleteAlternativeTitle(context.alternativeTitleId);
            this.return(context.alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}