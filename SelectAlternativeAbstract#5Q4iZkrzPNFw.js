export class SelectAlternativeAbstract {
    static id = "5Q4iZkrzPNFw";
    static description = "Swaps an alternative abstract with the current one";

    constructor() {
    }

    async start(documentId, alternativeAbstractId) {
        try {
            let document = system.space.getDocument(documentId);
            await document.selectAlternativeAbstract(alternativeAbstractId);
            this.return(alternativeAbstractId);
        } catch (e) {
            this.fail(e);
        }
    }
}