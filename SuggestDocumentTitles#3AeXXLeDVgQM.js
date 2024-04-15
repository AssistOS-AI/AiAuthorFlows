export class SuggestDocumentTitles {
    static id = "3AeXXLeDVgQM";
    static description = "Generates n document titles";

    constructor() {
    }

    async start(context) {
        try {
            let document = assistOS.space.getDocument(context.documentId);
            let prompt = `${context.prompt || "Please suggest a title for a document, take into consideration these aspects of the document"}: "${JSON.stringify(document.simplifyDocument())}". Return only the title without quotation marks.`;
            let llm = assistOS.space.getLLM();
            let alternativeTitles = await llm.brainstorm(prompt, context.titlesNr, context.maxTokens);
            try {
                this.return(JSON.parse(alternativeTitles));
            } catch (e) {
                this.fail(e);
            }
        } catch (e) {
            this.fail(e);
        }
    }
}