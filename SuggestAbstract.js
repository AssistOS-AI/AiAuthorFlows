export class SuggestAbstract {
    static description = "Suggests an abstract based on the current document";

    constructor() {
    }

    async start(context) {
        let document = assistOS.space.getDocument(context.documentId);
        let prompt = `${context.prompt || "Please suggest an abstract for this document "}: ${JSON.stringify(
            document.simplifyDocument()
        )}. Return only the abstract text`;
        let llm = assistOS.space.getLLM();
        let altAbstract = await llm.request(prompt, maxTokens);
        this.return(altAbstract);
    }
}