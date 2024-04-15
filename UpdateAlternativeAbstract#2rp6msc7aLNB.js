export class UpdateAlternativeAbstract {
    static id = "2rp6msc7aLNB";
    static description = "Updates an alternative abstract";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            await document.updateAlternativeAbstract(context.abstractId, context.text);
            this.return(context.abstractId);
        } catch (e) {
            this.fail(e);
        }
    }
}