export class SelectAlternativeAbstract {
    static id = "5Q4iZkrzPNFw";

    constructor() {
        this.name = "SelectAlternativeAbstract";
        this.description = "Swaps an alternative abstract with the current one";
    }

    async start(documentId, alternativeAbstractId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            await document.selectAlternativeAbstract(alternativeAbstractId);
            this.return(alternativeAbstractId);
        } catch (e) {
            this.fail(e);
        }
    }
}