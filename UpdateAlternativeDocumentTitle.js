export class UpdateAlternativeDocumentTitle {
    static description = "Updates the alternative title of a document";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);

            // Update the alternative title in the document
            await document.updateAlternativeTitle(context.alternativeTitleId, context.text);

            // Update the document after updating the alternative title
            await assistOS.factories.updateDocument(assistOS.space.id, document);

            this.return(context.alternativeTitleId);
        } catch (e) {
            this.fail(e);
        }
    }
}