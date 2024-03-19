export class SelectAlternativeDocumentTitle {
    static id = "42xe4PbxPPu5";
    static description = "Swaps an alternative document title with the current one";

    constructor() {
    }

    async start(documentId, alternativeTitleId) {
        try {
            let document = system.space.getDocument(documentId);
            await document.selectAlternativeTitle(alternativeTitleId);
            return alternativeTitleId;
        } catch (e) {
            this.fail(e);
        }
    }
}