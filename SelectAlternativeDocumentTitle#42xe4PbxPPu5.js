export class SelectAlternativeDocumentTitle {
    static id = "42xe4PbxPPu5";

    constructor() {
        this.name = "SelectAlternativeDocumentTitle";
        this.description = "Swaps an alternative document title with the current one";
    }

    async start(documentId, alternativeTitleId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            await document.selectAlternativeTitle(alternativeTitleId);
            return alternativeTitleId;
        } catch (e) {
            this.fail(e);
        }
    }
}