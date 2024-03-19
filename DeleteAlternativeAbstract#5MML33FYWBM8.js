export class DeleteAlternativeAbstract {
    static id = "5MML33FYWBM8";
    static description = "Deletes an alternative abstract";

    constructor() {
    }

    async start(documentId, alternativeAbstractId) {
        try {
            let document = system.space.getDocument(documentId);
            document.deleteAlternativeAbstract(alternativeAbstractId);
            await system.factories.updateDocument(
                system.space.id,
                document
            );
            this.return(alternativeAbstractId);
        } catch (e) {
            this.fail(e);
        }
    }
}
