export class CloneDocument {
    static id = "2xMkntPX8k3k";

    constructor() {
        this.name = "CloneDocument";
        this.description = "The second iteration of the clone document script";
    }

    async start(documentId, personalityId, newTitle, proofread) {
        let document = webSkel.currentUser.space.getDocument(documentId);
        let simplifiedDocumentJson = JSON.stringify(document.simplifyDocument());

        if (proofread) {
            if (personalityId === "copy") {
                this.prompt = `Please review this document in its JSON format: ${simplifiedDocumentJson}. Your task is to replicate the document as it is, maintaining its original context and format. Additionally, conduct a thorough proofreading to correct any grammatical errors, ambiguities, or inconsistencies, thereby refining the document to ensure clarity and accuracy.`;
            } else {
                let personality = webSkel.currentUser.space.getPersonality(personalityId);
                this.prompt = `Please carefully examine and comprehend this document, presented in JSON format: ${simplifiedDocumentJson}. Your challenge is to replicate this document from the perspective of an individual characterized by certain distinct personality traits: ${personality.description}. In doing so, preserve the original context, yet adapt the language to reflect the unique linguistic style of this personality. Additionally, attentively identify and rectify any grammatical errors, ambiguities, or inconsistencies in the text, enhancing it with improved, clearer expressions.`;
            }
        } else {
            if (personalityId === "copy") {
                this.prompt = `Your objective is to duplicate this document exactly as it is, presented in JSON format: ${simplifiedDocumentJson}. Please ensure that the copy you create is an exact replica of the original, maintaining the same context and structure, without making any modifications or corrections.`;
            } else {
                let personality = webSkel.currentUser.space.getPersonality(personalityId);
                this.prompt = `Please analyze and replicate this document, presented in JSON format: ${simplifiedDocumentJson}, from the perspective of an individual with specific personality traits: ${personality.description}. While preserving the original context, adapt the language to mirror the linguistic style associated with these personality traits. Note that no proofreading for grammatical accuracy or consistency is required in this task.`;
            }
        }

        this.setDefaultValues();
        this.setIntelligenceLevel(3);
        this.execute(newTitle);
    }

    async execute(newTitle) {
        let text = await this.request(this.prompt);

        try {
            let docObj = JSON.parse(text);
            docObj.title = newTitle;
            await documentFactory.addDocument(webSkel.currentUser.space.id, new DocumentModel(docObj));
            this.return(JSON.stringify(docObj));
        } catch (e) {
            this.fail(e);
        }
    }
}