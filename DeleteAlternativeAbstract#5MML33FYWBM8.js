export class DeleteAlternativeAbstract {
    static id = "5MML33FYWBM8";
    static description = "Deletes an alternative abstract";

    constructor() {
    }

    async start(documentId, alternativeAbstractId) {
        try {
            let document = webSkel.currentUser.space.getDocument(documentId);
            document.deleteAlternativeAbstract(alternativeAbstractId);
            await documentFactory.updateDocument(
                webSkel.currentUser.space.id,
                document
            );
            this.return(alternativeAbstractId);
        } catch (e) {
            this.fail(e);
        }
    }
}
