export class SelectAlternativeAbstract {
    static id = "5Q4iZkrzPNFw";
    static description = "Swaps an alternative abstract with the current one";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            await document.selectAlternativeAbstract(context.alternativeAbstractId);
            this.return(context.alternativeAbstractId);
        } catch (e) {
            this.fail(e);
        }
    }
}