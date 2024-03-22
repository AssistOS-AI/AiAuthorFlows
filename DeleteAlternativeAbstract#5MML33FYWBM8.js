export class DeleteAlternativeAbstract {
    static id = "5MML33FYWBM8";
    static description = "Deletes an alternative abstract";

    constructor() {
    }

    async start(context) {
        try {
            let document = system.space.getDocument(context.documentId);
            document.deleteAlternativeAbstract(context.alternativeAbstractId);
            await system.factories.updateDocument(
                system.space.id,
                document
            );
            this.return(context.alternativeAbstractId);
        } catch (e) {
            this.fail(e);
        }
    }
}
