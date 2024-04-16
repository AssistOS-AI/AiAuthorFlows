export class DeleteAlternativeAbstract {
    static description = "Deletes an alternative abstract";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            document.deleteAlternativeAbstract(context.alternativeAbstractId);
            await assistOS.factories.updateDocument(
                assistOS.space.id,
                document
            );
            this.return(context.alternativeAbstractId);
        } catch (e) {
            this.fail(e);
        }
    }
}
