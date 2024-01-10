export class SuggestAbstract {
    static id = "5pPdhqLZsx62";
    static description = "Suggests an abstract based on the current document";

    constructor() {
    }

    start(documentId, prompt, maxTokens) {
        let document = webSkel.currentUser.space.getDocument(documentId);
        this.prompt = `${prompt || "Please suggest an abstract for this document "}: ${JSON.stringify(
            document.simplifyDocument()
        )}. Return only the abstract text`;
        this.setDefaultValues();
        this.setIntelligenceLevel(3);
        this.execute(document, maxTokens);
    }

    async execute(document, maxTokens) {
        let altAbstract = await this.request(this.prompt, maxTokens);
        this.return(altAbstract);
    }
}