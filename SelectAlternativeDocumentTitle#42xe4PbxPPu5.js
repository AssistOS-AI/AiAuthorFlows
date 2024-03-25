export class SelectAlternativeDocumentTitle {
    static id = "42xe4PbxPPu5";
    static description = "Swaps an alternative document title with the current one";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            await document.selectAlternativeTitle(context.alternativeTitleId);
            this.return(context.alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}