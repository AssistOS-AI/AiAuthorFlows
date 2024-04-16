export class SelectAlternativeAbstract {
    static description = "Swaps an alternative abstract with the current one";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            await document.selectAlternativeAbstract(context.alternativeAbstractId);
            this.return(context.alternativeAbstractId);
        } catch (e) {
            this.fail(e);
        }
    }
}