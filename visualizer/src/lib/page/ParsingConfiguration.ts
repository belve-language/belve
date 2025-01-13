export type ParsingConfiguration = Readonly<{
	sourceCode: string;
	mode: "none" | "animated" | "instant" | "abstract-syntax-tree";
}>;
