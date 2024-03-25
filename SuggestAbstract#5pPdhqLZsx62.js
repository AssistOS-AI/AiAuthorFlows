export class SuggestAbstract {
    static id = "5pPdhqLZsx62";
    static description = "Suggests an abstract based on the current document";

    constructor() {
    }

    start(context) {
        let document = system.space.getDocument(context.documentId);
        this.prompt = `${context.prompt || "Please suggest an abstract for this document "}: ${JSON.stringify(
            document.simplifyDocument()
        )}. Return only the abstract text`;
        this.execute(document, context.maxTokens);
    }

    async execute(document, maxTokens) {
        let altAbstract = await this.request(this.prompt, maxTokens);
        this.return(altAbstract);
    }
}