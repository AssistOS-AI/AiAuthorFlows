export class DeleteAlternativeAbstract {
    static id = "5MML33FYWBM8";

    constructor() {
        this.name = "DeleteAlternativeAbstract";
        this.description = "Deletes an alternative abstract";
        this.tags = ["presenters", "agents", "documents"];
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
